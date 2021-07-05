import React from 'react';
import * as L from 'leaflet';
import { TileLayer, ZoomControl } from 'react-leaflet';
import { MapContainerComponent } from './styled';
import Legend from './Entities/Legend/legend';
import './styles.css';

const position = [-15.3333333, -54.2]; //coordenadas do Brasil

function LeafletMap({ data, style, screenW }) {
  const [map, setMap] = React.useState();

  let info = L.control({ position: 'topright' });
  let div = L.DomUtil.create('div', 'custom-info');
  info.onAdd = function () {
    info.update();
    return div;
  };
  info.update = function (props) {
    div.innerHTML =
      '<h4>Porcentagem de testes positivos</h4>' +
      (props
        ? '<b>' + props.name + '</b><br />' + props.confirmed + ' %'
        : 'Coloque o mouse sobre um estado para visualizar seus dados');
  };
  const highlightFeature = (e) => {
    const layer = e.target;

    layer.setStyle({
      weight: 3,
      color: '#9cc2ff',
      opacity: 1,
      dashArray: '3',
      fillOpacity: 1,
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }

    info.update(layer.feature.properties);
  };

  let geojson;

  const resetHighlight = (e) => {
    geojson.resetStyle(e.target);
    info.update();
  };

  const zoomToFeature = (e) => {
    if (map) {
      map.fitBounds(e.target.getBounds());
    }
  };

  const onEachFeature = (feature, layer) => {
    /**
    layer
      .bindTooltip(feature.properties.name, {
        permanent: true,
        direction: 'center',
        className: 'no-background',
      })
      .openTooltip();
       */
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: zoomToFeature,
    });
  };

  React.useEffect(() => {
    if (map) {
      info.addTo(map);

      geojson = L.geoJson(data.features, {
        style: style,
        onEachFeature: onEachFeature,
      }).addTo(map);
    }
  }, [map]);
  return (
    <>
      <MapContainerComponent
        center={position}
        zoom={3}
        whenCreated={setMap}
        zoomControl={false}
      >
        {screenW <= 700 ? <></> : <ZoomControl />}
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          opacity={0.3}
        />

        <Legend map={map} data={data} />
      </MapContainerComponent>
    </>
  );
}

export default LeafletMap;

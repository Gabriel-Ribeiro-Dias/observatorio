import React, { useEffect, useState } from 'react';
import { MapLf, MapD3, MapHc } from '../../components/widgets';
import rd3 from 'react-d3-library';
const RD3Component = rd3.Component;

function TestsPage() {
  const [d3, setD3] = useState();

  useEffect(() => {
    setD3(MapD3);
  }, []);
  return (
    <>
      <h1>Leaflet</h1>
      <MapLf />

      <h1>D3</h1>
      <RD3Component data={d3} />
      <h1>Highcharts</h1>
      <MapHc />
    </>
  );
}

export default TestsPage;

import React from 'react';
//import { Button } from '../../../styles/global';
import {
  BarChartChartJS,
  LineChartChartJS,
  LineChartRechart,
  BarChartRechart,
  LineChartHighcharts,
  BarChartHighcharts,
  //BarChartVegaLite,
} from '../../widgets';
import {
  PainelSec,
  PainelHeading,
  PainelContainer,
  PainelCard,
  PainelCardGraph,
  PainelCardHeading,
  PainelWrapper,
  PainelCardContent,
  GraphLegend,
  GraphLegendWrapper,
  GraphTitle,
  LabelBox,
  LegendLabel,
  LabelText,
  GraphContainer,
} from './styles';

function PanelSession({
  BarChartJSProps,
  LineChartJSProps,
  BarRechartData,
  LineRechartData,
}) {
  return (
    <PainelSec>
      <PainelWrapper>
        <PainelContainer>
          <PainelCard>
            <PainelCardContent>
              <PainelCardHeading>
                ChartJS Número de casos da COVID-19
              </PainelCardHeading>
              <PainelCardGraph legendTop>
                <GraphLegend top>
                  <GraphLegendWrapper>
                    <LegendLabel>
                      <LabelBox boxColor={'#071242'} />
                      <LabelText>Casos entre trabalhadores da saúde</LabelText>
                    </LegendLabel>
                    <LegendLabel>
                      <LabelBox boxColor={'#FBBC56'} />
                      <LabelText>Casos totais no Nordeste</LabelText>
                    </LegendLabel>
                  </GraphLegendWrapper>
                </GraphLegend>
                <GraphContainer>
                  <BarChartChartJS {...BarChartJSProps} height={250} />
                </GraphContainer>
              </PainelCardGraph>
            </PainelCardContent>
          </PainelCard>

          <PainelCard>
            <PainelCardContent>
              <PainelCardHeading>
                ChartJS Número de mortes por COVID-19
              </PainelCardHeading>
              <PainelCardGraph legendTop>
                <GraphLegend top>
                  <GraphTitle>15 Abril - 21 Abril</GraphTitle>
                </GraphLegend>
                <GraphContainer>
                  <LineChartChartJS {...LineChartJSProps} height={250} />
                </GraphContainer>
              </PainelCardGraph>
            </PainelCardContent>
          </PainelCard>

          <PainelCard>
            <PainelCardContent>
              <PainelCardHeading>
                Recharts Número de casos de COVID-19
              </PainelCardHeading>
              <PainelCardGraph legendTop>
                <GraphLegend top>
                  <GraphLegendWrapper>
                    <LegendLabel>
                      <LabelBox boxColor={'#071242'} />
                      <LabelText>Casos entre trabalhadores da saúde</LabelText>
                    </LegendLabel>
                    <LegendLabel>
                      <LabelBox boxColor={'#FBBC56'} />
                      <LabelText>Casos totais no Nordeste</LabelText>
                    </LegendLabel>
                  </GraphLegendWrapper>
                </GraphLegend>
                <GraphContainer>
                  <BarChartRechart data={BarRechartData} />
                </GraphContainer>
              </PainelCardGraph>
            </PainelCardContent>
          </PainelCard>

          <PainelCard>
            <PainelCardContent>
              <PainelCardHeading>
                Recharts Número de mortes por COVID-19
              </PainelCardHeading>
              <PainelCardGraph legendTop>
                <GraphLegend top>
                  <GraphTitle>15 Abril - 21 Abril</GraphTitle>
                </GraphLegend>
                <GraphContainer>
                  <LineChartRechart data={LineRechartData} />
                </GraphContainer>
              </PainelCardGraph>
            </PainelCardContent>
          </PainelCard>

          <PainelCard>
            <PainelCardContent>
              <PainelCardHeading>
                Highcharts Número de casos de COVID-19
              </PainelCardHeading>
              <PainelCardGraph legendTop>
                <GraphLegend top>
                  <GraphLegendWrapper>
                    <LegendLabel>
                      <LabelBox boxColor={'#071242'} />
                      <LabelText>Casos entre trabalhadores da saúde</LabelText>
                    </LegendLabel>
                    <LegendLabel>
                      <LabelBox boxColor={'#FBBC56'} />
                      <LabelText>Casos totais no Nordeste</LabelText>
                    </LegendLabel>
                  </GraphLegendWrapper>
                </GraphLegend>
                <GraphContainer>
                  <BarChartHighcharts />
                </GraphContainer>
              </PainelCardGraph>
            </PainelCardContent>
          </PainelCard>

          <PainelCard>
            <PainelCardContent>
              <PainelCardHeading>
                Highcharts Número de mortes por COVID-19
              </PainelCardHeading>
              <PainelCardGraph legendTop>
                <GraphLegend top>
                  <GraphTitle>15 Abril - 21 Abril</GraphTitle>
                </GraphLegend>
                <GraphContainer>
                  <LineChartHighcharts />
                </GraphContainer>
              </PainelCardGraph>
            </PainelCardContent>
          </PainelCard>

          
        </PainelContainer>
      </PainelWrapper>
    </PainelSec>
  );
}

export default PanelSession;


/**<PainelCard>
            <PainelCardContent>
              <PainelCardHeading>
                Vegalite Número de casos de COVID-19
              </PainelCardHeading>
              <PainelCardGraph legendTop>
                <GraphLegend top>
                  <GraphLegendWrapper>
                    <LegendLabel>
                      <LabelBox boxColor={'#071242'} />
                      <LabelText>Casos entre trabalhadores da saúde</LabelText>
                    </LegendLabel>
                    <LegendLabel>
                      <LabelBox boxColor={'#FBBC56'} />
                      <LabelText>Casos totais no Nordeste</LabelText>
                    </LegendLabel>
                  </GraphLegendWrapper>
                </GraphLegend>
                <GraphContainer>
                  <BarChartVegaLite />
                </GraphContainer>
              </PainelCardGraph>
            </PainelCardContent>
          </PainelCard> */
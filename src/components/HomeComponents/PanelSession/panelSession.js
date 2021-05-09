import React from 'react';
//import { Button } from '../../../styles/global';
import {
  BarChartChartJS,
  LineChartChartJS,
  LineChartRechart,
  BarChartRechart,
} from '../../widgets';

import {
  BarChart,
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
  YAxis,
  XAxis,
  CartesianGrid,
  Bar,
} from 'recharts';
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
                Recharts Número de mortes por COVID-19
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
        </PainelContainer>
      </PainelWrapper>
    </PainelSec>
  );
}

export default PanelSession;

/**
 * BACKUP
 * 
 * 
 * <PainelCard>
            <PainelCardContent>
              <PainelCardHeading>
                Trabalhadores da saúde e saúde mental
              </PainelCardHeading>
              <PainelCardGraph>
                <GraphLegend>
                  <GraphLegendWrapper>
                    <LegendLabel>
                      <LabelBox boxColor={'#147AD6'} />
                      <LabelText>Dado1</LabelText>
                    </LegendLabel>
                    <LegendLabel>
                      <LabelBox boxColor={'red'} />
                      <LabelText>Dado2</LabelText>
                    </LegendLabel>
                    <LegendLabel>
                      <LabelBox boxColor={'green'} />
                      <LabelText>Dado3</LabelText>
                    </LegendLabel>
                  </GraphLegendWrapper>
                </GraphLegend>
                <GraphContainer>
                  <PieChartC {...PieChartProps} />
                </GraphContainer>
              </PainelCardGraph>
            </PainelCardContent>
          </PainelCard>
          <PainelCard>
            <PainelCardContent>
              <PainelCardHeading>Projeção dos casos</PainelCardHeading>

              <PainelCardGraph legendTop>
                <GraphLegend top>
                  <GraphTitle>15 Abril - 21 Abril</GraphTitle>
                </GraphLegend>
                <GraphContainer>
                  <LineChartC {...LineChart2Props} />
                </GraphContainer>
              </PainelCardGraph>
            </PainelCardContent>
          </PainelCard>
 */

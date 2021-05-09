import React from 'react';

import { Button } from '../../../styles/global';
import {
  BarChartComponent,
  LineChartComponent,
  PieChartComponent,
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
  BarChartProps,
  LineChartProps,
  PieChartProps,
  LineChart2Props,
}) {
  return (
    <PainelSec>
      <PainelWrapper>
        <PainelContainer>
          <PainelCard>
            <PainelCardContent>
              <PainelCardHeading>Número de casos da covid-19</PainelCardHeading>
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
                  <BarChartComponent {...BarChartProps} />
                </GraphContainer>
              </PainelCardGraph>
            </PainelCardContent>
          </PainelCard>
          <PainelCard>
            <PainelCardContent>
              <PainelCardHeading>Vacinação no Nordeste</PainelCardHeading>

              <PainelCardGraph legendTop>
                <GraphLegend top>
                  <GraphTitle>15 Abril - 21 Abril</GraphTitle>
                </GraphLegend>
                <GraphContainer>
                  <LineChartComponent {...LineChartProps} />
                </GraphContainer>
              </PainelCardGraph>
            </PainelCardContent>
          </PainelCard>
          <PainelCard>
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
                  <PieChartComponent {...PieChartProps} />
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
                  <LineChartComponent {...LineChart2Props} />
                </GraphContainer>
              </PainelCardGraph>
            </PainelCardContent>
          </PainelCard>
        </PainelContainer>
        <Button>Ver mais dados</Button>
      </PainelWrapper>
    </PainelSec>
  );
}

export default PanelSession;

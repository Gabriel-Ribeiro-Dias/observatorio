import React from 'react';
import { Button } from '../../../styles/global';
import {
  AnalysisSec,
  AnalysisContainer,
  AnalisysHeader,
  Title,
  AnalysisCard,
  Description,
  AnalysisWrapper,
} from './styles';

function AnalysisSession({ AnalysisProps }) {
  const AnalysisDataProps = [...AnalysisProps];
  React.useEffect(() => {
    console.log(AnalysisDataProps[0].description.length);
  }, []);
  return (
    <AnalysisSec>
      <AnalysisContainer>
        <AnalisysHeader>Análises</AnalisysHeader>
        <AnalysisWrapper>
          {AnalysisDataProps.map((prop) => (
            <>
              <AnalysisCard to={`${prop.link}`}>
                <Title>{prop.title}</Title>
                <Description>
                  {prop.description.length > 364
                    ? prop.description.substr(0, 364) + '...'
                    : prop.description}
                </Description>
              </AnalysisCard>
            </>
          ))}
        </AnalysisWrapper>
        <Button primary>Ver todas as análises</Button>
      </AnalysisContainer>
    </AnalysisSec>
  );
}

export default AnalysisSession;

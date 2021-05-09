import React from 'react';
import ufpbLogo from '../../../assets/images/ufpb.png';
import miniEduc from '../../../assets/images/ministério-da-educação.png';
import miniCienc from '../../../assets/images/ministeriodaciencia.png';
import miniSaud from '../../../assets/images/logo-governofederal-footer.png';
import CNPQlogo from '../../../assets/images/cnpq-logo-7.png';

import {
  SupportersSessionContainer,
  SupportersSessionImgsWrapper,
  SupporterSessionHeading,
  SupporterImgUfpb,
  SupporterImgMinis,
  SupporterSessionLink,
  SupporterImgCNPQ,
} from './styles';

function SupportersSession() {
  return (
    <>
      <SupportersSessionContainer>
        <SupporterSessionHeading>Apoiadores</SupporterSessionHeading>
        <SupportersSessionImgsWrapper>
          <SupporterSessionLink
            href='https://ufpb.br/'
            target='_blank'
            aria-label='Ufpb'
          >
            <SupporterImgUfpb src={ufpbLogo} />
          </SupporterSessionLink>
          <SupporterSessionLink
            href='https://www.gov.br/cnpq/pt-br'
            target='_blank'
            aria-label='Ministério'
          >
            <SupporterImgCNPQ src={CNPQlogo} />
          </SupporterSessionLink>
          <SupporterSessionLink
            href='https://www.gov.br/mcti/pt-br'
            target='_blank'
            aria-label='Ministério'
          >
            <SupporterImgMinis src={miniCienc} />
          </SupporterSessionLink>
          <SupporterSessionLink
            href='https://www.gov.br/mec/pt-br'
            target='_blank'
            aria-label='Ministério'
          >
            <SupporterImgMinis src={miniEduc} />
          </SupporterSessionLink>

          <SupporterSessionLink
            href='https://www.gov.br/saude/pt-br'
            target='_blank'
            aria-label='Ministério'
          >
            <SupporterImgMinis src={miniSaud} />
          </SupporterSessionLink>
        </SupportersSessionImgsWrapper>
      </SupportersSessionContainer>
    </>
  );
}

export default SupportersSession;

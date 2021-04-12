import React from 'react';

import {Container} from './styles';

export default function ButtonComponent({url, children}){
  return(
    <>
      <Container action={url} method="get">
        <button type="submit">{children}</button>
      </Container>
    </>
  )

}
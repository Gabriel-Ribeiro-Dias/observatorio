import React from 'react';

import { Container } from './styles';

export default function ButtonComponent({ children }) {
  return (
    <>
      <Container>
        <button type='submit'>{children}</button>
      </Container>
    </>
  );
}

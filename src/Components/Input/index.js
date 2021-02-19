import React from 'react';

import { Container } from './styles';

export default function Input({ label, ...rest }) {
  return (
    <Container>
      <span>{label}</span>
      <input
        {...rest}
      />
    </Container>
  );
}
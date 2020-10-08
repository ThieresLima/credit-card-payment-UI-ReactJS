import React from 'react';
import { Container, HeaderContainer, Text } from './styles';
import { FaDollarSign, FaCreditCard } from 'react-icons/fa';

export default function Header() {
  return (
    <Container>
      <HeaderContainer>
        <FaDollarSign color="#FFF" size={36} />
        <Text>Pagar com cartão de crédito</Text>
        <FaCreditCard color="#FFF" size={36} />
      </HeaderContainer>
    </Container>
  );
};
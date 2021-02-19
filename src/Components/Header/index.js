import React from 'react';
import { Container } from './styles';
import { FaDollarSign, FaCreditCard } from 'react-icons/fa';

export default function Header({ text }) {
  return (
    <Container>
      <div>
        <FaDollarSign color="#FFF" size={36} />
        <p>{text}</p>
        <FaCreditCard color="#FFF" size={36} />
      </div>
    </Container>
  );
};
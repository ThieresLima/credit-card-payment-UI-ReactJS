import React from 'react';
import { 
  Container,
  CardDataContainer,
  CardData,
  Text,
  InputGroup,
  Input,
  InputContainerFlex,
  InputFlex,
  Select,
  PaymentButton,
  PaymentText
} from './styles';

import Header from '../../Components/Header';

export default function CreditCardPage() {
  return (
    <Container>
      <Header />
      <CardDataContainer>

        <CardData>
          <InputGroup>
            <Text>Número do cartão</Text>
            <Input type="text" />
          </InputGroup>

          <InputGroup>
            <Text>Nome impresso no cartão</Text>
            <Input type="text" />
          </InputGroup>

          <InputContainerFlex>
            <InputFlex>
              <Text>Data de validade</Text>
              <Input type="text"/>
            </InputFlex>
            
            <InputFlex>
              <Text>Código de segurança</Text>
              <Input type="number" />
            </InputFlex>          
          </InputContainerFlex>

          <InputGroup>
            <Text>Parcelas</Text>
            <Select>
              <option value="" hidden>
              Escolha a forma de pagamento
              </option>
              <option value="1">À vista R$ 120,00</option>
              <option value="2">2X - R$ 60,00 com juros</option>
              <option value="3">3X - R$ 40,00 com juros</option>
            </Select>
          </InputGroup>

          <PaymentButton>
            <PaymentText>Efetuar pagamento</PaymentText>
          </PaymentButton>

        </CardData>

      </CardDataContainer>
    </Container>
  );
};
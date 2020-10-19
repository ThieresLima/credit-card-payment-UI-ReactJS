import React, { useState } from 'react';

import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

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
  PaymentText,
  CreditCard
} from './styles';

import Header from '../../Components/Header';

export default function CreditCardPage() {
  const [cvc, setCvc] = useState('');
  const [expiry, setExpiry] = useState('');
  const [focus, setFocus] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  return (
    <Container>
      <Header />
      <CardDataContainer>

        <CardData>
          <InputGroup>
            <Text typing={number}>Número do cartão</Text>
            <Input 
              typing={number}
              type="text"
              name="number" 
              onChange={e => setNumber(e.target.value)} 
              onFocus={e => setFocus(e.target.name)}  
            />
          </InputGroup>

          <InputGroup>
            <Text typing={name}>Nome impresso no cartão</Text>
            <Input 
              typing={name}
              type="text" 
              name="name"
              onChange={e => setName(e.target.value)}
              onFocus={e => setFocus(e.target.name)}   
            />
          </InputGroup>

          <InputContainerFlex>
            <InputFlex>
              <Text typing={expiry}>Data de validade</Text>
              <Input 
                typing={expiry}
                type="text" 
                name="expiry"
                onChange={e => setExpiry(e.target.value)}
                onFocus={e => setFocus(e.target.name)} 
              />
            </InputFlex>
            
            <InputFlex>
              <Text typing={cvc}>Código de segurança</Text>
              <Input 
                typing={cvc}
                type="text" 
                name="cvc"
                onChange={e => setCvc(e.target.value)} 
                onFocus={e => setFocus(e.target.name)}  
              />
            </InputFlex>          
          </InputContainerFlex>

          <InputGroup>
            <Text>Parcelas</Text>
            <Select name="name" onFocus={e => setFocus(e.target.name)}>
              <option value="" hidden>
              Escolha a forma de pagamento
              </option>
              <option value="1">À vista R$ 120,00</option>
              <option value="2">2X - R$ 60,00 com juros</option>
              <option value="3">3X - R$ 40,00 com juros</option>
            </Select>
          </InputGroup>

          <PaymentButton onClick={() => alert("Pagamento efetuado com sucesso")}>
            <PaymentText>Efetuar pagamento</PaymentText>
          </PaymentButton>
        </CardData>

        <CreditCard>
          <Cards
            cvc={cvc}
            expiry={expiry}
            focused={focus}
            name={name}
            number={number}
          />
        </CreditCard>

      </CardDataContainer>
    </Container>
  );
};
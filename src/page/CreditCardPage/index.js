import React, { useState, useCallback } from 'react';

import Input from '../../Components/Input';

import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

import { 
  Container,
  ContainerFlex,
  Select,
  PaymentButton,
  CreditCard
} from './styles';

import Header from '../../Components/Header';

export default function CreditCardPage() {
  const [cvc, setCvc] = useState('');
  const [expiry, setExpiry] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [focus, setFocus] = useState('');

  // const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback((e) => {
    // setIsFocused(true);
    setFocus(e.target.name);
  }, []);

  const handleInputBlur = useCallback(() => {
    // setIsFocused(false);
    setFocus('');
  }, []);

  return (
    <>
      <Header text="Pagar com cartão de crédito" />
      <Container>
        <div>
          <form>
              <Input
                label="Número do cartão" 
                type="text"
                name="number" 
                onChange={e => setNumber(e.target.value)} 
                onFocus={e => handleInputFocus(e)} 
                onBlur={handleInputBlur}
              />      

              <Input
                label="Nome impresso no cartão" 
                type="text" 
                name="name"
                onChange={e => setName(e.target.value)}   
                onFocus={e => handleInputFocus(e)}
                onBlur={handleInputBlur}
              />

            <ContainerFlex>
                <Input
                  label="Data de validade" 
                  type="text" 
                  name="expiry"
                  onChange={e => setExpiry(e.target.value)}
                  onFocus={e => handleInputFocus(e)}
                  onBlur={handleInputBlur}
                />
              
                <Input
                  label="Código de segurança"                
                  type="text" 
                  name="cvc"
                  onChange={e => setCvc(e.target.value)}
                  onFocus={e => handleInputFocus(e)} 
                  onBlur={handleInputBlur}
                />       
            </ContainerFlex>

            <div>
              <span>Parcelas</span>
              <Select 
                name="name" 
                onFocus={e => handleInputFocus(e)} 
                onBlur={handleInputBlur}
              >
                <option value="" hidden>
                Escolha a forma de pagamento
                </option>
                <option value="1">À vista R$ 120,00</option>
                <option value="2">2X - R$ 60,00 com juros</option>
                <option value="3">3X - R$ 40,00 com juros</option>
              </Select>
            </div>

            <PaymentButton onClick={() => alert("Pagamento efetuado com sucesso")}>
              <p>Efetuar pagamento</p>
            </PaymentButton>
          </form>

          <CreditCard>
            <Cards
              cvc={cvc}
              expiry={expiry}
              focused={focus}
              name={name}
              number={number}
            />
          </CreditCard>

        </div>
      </Container>
    </>
  );
};
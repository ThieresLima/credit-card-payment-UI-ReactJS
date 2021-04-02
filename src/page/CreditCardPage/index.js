import React, { useState, useCallback } from 'react';

import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

import Header from '../../Components/Header';

import { 
  Container,
  Text,
  Input,
  ContainerFlex,
  Select,
  CreditCard
} from './styles';

export default function CreditCardPage() {
  const [cvc, setCvc] = useState('');
  const [expiry, setExpiry] = useState('');
  const [focus, setFocus] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputFocus = useCallback((value) => {
    setFocus(value);
  }, []);

  const handleInputBlur = useCallback(() => {
    setFocus('');
  }, []);

  return (
    <>
      <Header text="Pagar com cartão de crédito" />
      <Container>
        <form>
          <div>
            <div>
              <Text typing={number}>Número do cartão</Text>
              <Input 
                typing={number}
                type="number"
                name="number" 
                onChange={e => setNumber(e.target.value)} 
                onFocus={e => handleInputFocus(e.target.name)} 
                onBlur={handleInputBlur}
              />
            </div>

            <div>
              <Text typing={name}>Nome impresso no cartão</Text>
              <Input 
                typing={name}
                type="text" 
                name="name"
                onChange={e => setName(e.target.value)}
                onFocus={e => handleInputFocus(e.target.name)} 
                onBlur={handleInputBlur}   
              />
            </div>

            <ContainerFlex>
              <div>
                <Text typing={expiry}>Data de validade</Text>
                <Input 
                  typing={expiry}
                  type="text" 
                  name="expiry"
                  onChange={e => setExpiry(e.target.value)}
                  onFocus={e => handleInputFocus(e.target.name)} 
                  onBlur={handleInputBlur}
                />
              </div>
              
              <div>
                <Text typing={cvc}>Código de segurança</Text>
                <Input 
                  typing={cvc}
                  type="text" 
                  name="cvc"
                  onChange={e => setCvc(e.target.value)} 
                  onFocus={e => handleInputFocus(e.target.name)} 
                  onBlur={handleInputBlur} 
                />
              </div>          
            </ContainerFlex>

            <div>
              <Text>Parcelas</Text>
              <Select 
                name="name"
                onFocus={e => handleInputFocus(e.target.name)} 
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

            <button onClick={() => alert("Pagamento efetuado com sucesso")}>
              <span>Efetuar pagamento</span>
            </button>
          </div>
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
      </Container>
    </>
  );
};
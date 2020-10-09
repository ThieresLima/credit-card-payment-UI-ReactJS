import styled from 'styled-components';


export const Container = styled.div``;

export const CardDataContainer = styled.form`
  display: flex;
  background-color: #dfdaea;
  height: 100vh;
`;

export const CardData = styled.div`
  width: 620px;
  padding: 48px
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  padding: 10px;
`;

export const Text = styled.span`
  font-family: Verdana, sans-serif;
  font-size: 14px;
  color: #514f54;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  background-color: #dfdaea;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: #514f54;
  font-weight: bold;
  text-transform: uppercase;
  padding-bottom: ${({typing}) => typing ? '14px': '8px'};
  border: none;
  outline: none;
  border-bottom: 2px  solid;
  border-color: ${({typing}) => typing ? '#6ed387 ': '#9466FF'};
`;

export const InputContainerFlex = styled.div`
  display: flex;
`;

export const InputFlex = styled.div`
  margin-bottom: 32px;
  padding: 10px;
`;

export const Select = styled.select`
  width: 215px;
  height: 35px;
  background: white;
  color: gray;
  font-size: 14px;
  border: none;
  

  option {
    /*color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;*/
  }
`;

export const PaymentButton = styled.div`
  width: 224px;
  background-color: #9466FF;
  padding: 14px; 
  border-radius: 4px;
  margin-left: 8px;
  cursor: pointer;

  :hover {
    background-color: #6ed387;
  }
`;

export const PaymentText = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: #FFF;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
`;

export const CreditCard = styled.div`
  display: flex;
  width: 600px;
  height: 500px;
  align-items: center;
  justify-content: center;
`;
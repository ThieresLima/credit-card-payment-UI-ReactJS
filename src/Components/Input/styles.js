import styled from 'styled-components';

export const Container = styled.div`
  span {
    font-family: sans-serif;
    font-size: 16px;
    color: ${(props) => props.isFocused ? '#4BA580': '#848181'};
    margin-bottom: 8px;
  }

  input {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #848181;
    font-weight: bold;
    text-transform: uppercase;
    padding-bottom: ${({isFocused}) => isFocused ? '14px': '8px'};
    border: none;
    outline: none;
    border-bottom: 3px  solid;
    border-color: ${({isFocused}) => isFocused ? '#4BA580': '#848181'};
  }
`;

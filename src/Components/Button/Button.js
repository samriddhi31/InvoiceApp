import React from 'react';
import styled from 'styled-components';

const Button = ({ children }) => (
  <ButtonContainer>
    {children}
  </ButtonContainer>
);

export default Button;

const ButtonContainer = styled.button`
  display: block;
  width: 100%;
  padding: 15px;
  background-color: #0057e7;
  color: #fff;
  text-align: center;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0047c8;
  }
`;

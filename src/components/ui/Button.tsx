import styled from 'styled-components';
import React, { MouseEventHandler } from 'react';

interface IButton {
  child: any;
  onClick?: MouseEventHandler;
  color: 'blue' | 'green';
  type?: 'submit' | 'reset' | 'button';
}

const Button: React.FC<IButton> = ({
  child,
  onClick,
  color,
  type,
}) => {
  return (
    <StyledButton type={type} color={color} onClick={onClick}>
      {child}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 95%;
  min-height: 70px;
  color: #fff;
  background-color: ${(props) =>
    props.color === 'blue' ? '#0d6efd' : '#28a745'};
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  margin: 2%;
  font-size: 1rem;
  border-radius: 0.25rem;
`;

export default Button;

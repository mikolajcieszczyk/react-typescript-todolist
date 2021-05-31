import React, { ChangeEventHandler } from 'react';
import Button from './Button';
import styled from 'styled-components';

interface IProps {
  type: string;
  id: string;
  placeholder: string;
  onChange: ChangeEventHandler;
  onClick: any;
}

const Input: React.FC<IProps> = ({
  type,
  id,
  placeholder,
  onChange,
  onClick,
}) => {
  return (
    <>
      <StyledForm>
        <StyledInput
          type='text'
          id={id}
          placeholder={placeholder}
          onChange={onChange}
        />
        <Button icon='check' onClick={onClick} child='submit' />
      </StyledForm>
    </>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-items: center;
`;

const StyledInput = styled.input`
  border: 1px solid lightgray;
  border-radius: 0.5rem;
  margin: 2%;
  padding: 2%;
  line-height: 1.5;

  &::placeholder {
    color: lightgray;
  }
`;

export default Input;

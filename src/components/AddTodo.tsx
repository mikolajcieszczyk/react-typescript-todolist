import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import { StyledFunctionButton } from './TodoDetails';

const AddTodo: React.FC = (): JSX.Element => {
  let history = useHistory();

  const [inputValue, setInputValue] = useState('');

  const handleInputValue = (e: React.SyntheticEvent) => {
    e.preventDefault();
    let target = e.target as HTMLInputElement;
    setInputValue(target.value);
    console.log(target.value);
  };

  const submitTodo = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (inputValue) {
      axios
        .post('https://jsonplaceholder.typicode.com/todos/', {
          title: inputValue,
          completed: 'false',
        })
        .then(function (response) {
          console.log(inputValue);
          console.log(response);

          if (response.status === 200 || response.status === 201) {
            alert('todo added (response logged in console)');
            history.push('/');
          } else {
            alert('something goes wrong');
          }
        })
        .catch(function (error) {
          alert(error.message);
        });
    }
  };

  const cancel = () => {
    history.push('/');
  };

  return (
    <StyledAddTodoBackground>
      <StyledAddTodo>
        <h2>Add new todo</h2>
        <StyledForm>
          <StyledInput
            id='todo-title'
            type='text'
            placeholder='new todo title'
            onChange={handleInputValue}
          />

          <StyledFunctionButton
            type='submit'
            color='green'
            onClick={submitTodo}
          >
            submit
          </StyledFunctionButton>
          <StyledFunctionButton color='red' onClick={cancel}>
            cancel
          </StyledFunctionButton>
        </StyledForm>
      </StyledAddTodo>
    </StyledAddTodoBackground>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  min-height: 70px;
  border-radius: 0.25rem;
  border: none;
  padding: 0.375rem 0.75rem;
  margin: 2% 0;
  text-align: center;
`;

const StyledAddTodoBackground = styled.div`
  position: fixed;
  bottom: 0px;
  right: 0px;

  width: 100vw;
  height: 100vh;
  z-index: 2;

  background-color: #a5e1ad;
`;

const StyledAddTodo = styled.div`
  position: fixed;
  left: 25vw;
  top: 25vh;
  z-index: 3;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 50%;

  border: 1px solid white;
`;

export default AddTodo;

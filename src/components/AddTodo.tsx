import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import Card from './ui/Card';
import Input from './ui/Input';

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
      <Card
        subtitle='add todo'
        addInput={
          <Input
            type='text'
            id='todo-title'
            placeholder='add new todo'
            onChange={handleInputValue}
            onClick={submitTodo}
          />
        }
        showCompleted={false}
        takeMeBack={true}
      />
    </StyledAddTodoBackground>
  );
};

const StyledAddTodoBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 45%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
`;

export default AddTodo;

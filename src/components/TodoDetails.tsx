import React, { useState, useEffect } from 'react';
import {
  Link,
  RouteComponentProps,
  useHistory,
} from 'react-router-dom';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';

import { defaultOneTodo } from '../assets/data';
import styled from 'styled-components';

import Card from './ui/Card';

export const TodoDetails = ({
  match,
}: RouteComponentProps<{ todoId?: string }>) => {
  const {
    params: { todoId },
  } = match;
  let history = useHistory();

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(defaultOneTodo);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos?id=${todoId}`)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
        console.log(
          `https://jsonplaceholder.typicode.com/todos?id=${todoId}`
        );
        console.log(response.data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [todoId]);

  const deleteTodo = () => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then((response) => {
        console.log(response);

        if (response.status === 200 || response.status === 201) {
          alert('todo deleted (response logged in console)');
          history.push('/');
        } else {
          alert('something goes wrong');
        }
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      {isLoading && <Skeleton count={5} />}
      {!isLoading && (
        <StyledTodoDetail>
          {data.map((todo) => {
            return (
              <Card
                key={todo.id}
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
                showCompleted={true}
                deleteMe={deleteTodo}
                takeMeBack={true}
              />
            );
          })}
        </StyledTodoDetail>
      )}
    </>
  );
};

const StyledTodoDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 45%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
`;

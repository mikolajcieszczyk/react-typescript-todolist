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
        <>
          {data.map((todo) => {
            return (
              <StyledTodoDetail key={todo.id}>
                <h3>ID: {todo.id}</h3>
                <p>Title: {todo.title}</p>
                <p>Completed: {todo.completed ? 'true' : 'false'}</p>
                <StyledFunctionButton
                  color='red'
                  onClick={deleteTodo}
                >
                  delete me
                </StyledFunctionButton>
                <StyledFunctionButton>
                  <Link to='/'>Back to homepage</Link>
                </StyledFunctionButton>
              </StyledTodoDetail>
            );
          })}
        </>
      )}
    </>
  );
};

export const StyledFunctionButton = styled.button`
  background-color: ${(props) =>
    props.color === 'red' ? '#dc3545' : '#511281'};
  min-height: 70px;
  color: white;
  display: inline-block;
  min-width: 100%;
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

const StyledTodoDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 30%;
  margin: auto;
`;

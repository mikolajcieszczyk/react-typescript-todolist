import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './ui/Button';

interface SingleTodoProps {
  id: number;
  title: string;
  completed: boolean | string;
  destination: string;
  a?: string;
  b?: string;
}

const SingleTodo: React.FC<SingleTodoProps> = ({
  id,
  title,
  completed,
  destination,
  a,
  b,
}) => {
  return (
    <StyledSingleTodo>
      <h3>
        <b>ID:</b> {id}
      </h3>
      <p>
        <b>Title:</b> {title}
      </p>
      <p>
        <b>Completed:</b> {completed} {completed ? `true` : `false`}
      </p>
      <p>
        <Link to={destination}>
          <Button color='blue' child={`details`} />
        </Link>
      </p>
    </StyledSingleTodo>
  );
};

export default SingleTodo;

const StyledSingleTodo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 250px;
  margin: 2%;

  text-align: center;
`;

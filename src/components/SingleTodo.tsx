import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './ui/Button';

import Card from './ui/Card';

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
    <Card
      id={id}
      title={title}
      completed={completed}
      showCompleted={true}
      destination={destination}
    />
  );
};

export default SingleTodo;

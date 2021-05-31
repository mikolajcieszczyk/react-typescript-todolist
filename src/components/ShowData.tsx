import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { defaultTodos } from '../assets/data';
import SingleTodo from './SingleTodo';
import Button from './ui/Button';

const ShowData: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(defaultTodos);
  const [showAllTodos, setShowAllTodos] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const [showUncompleted, setShowUncompleted] = useState(false);
  const [showAscending, setShowAscending] = useState(false);
  const [showDescending, setShowDescending] = useState(false);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
        setShowAllTodos(true);
      })
      .catch((error) => alert(error.message));
  }, []);

  const listAllTodos = data
    .sort((a, b) => {
      let nameA = a.id;
      let nameB = b.id;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    })
    .map((todo, index) => {
      return (
        <div key={index}>
          <SingleTodo
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            destination={`/todos/${todo.id}`}
          />
        </div>
      );
    });

  const listCompletedTodos = data
    .filter(function (todo) {
      return todo.completed === true;
    })
    .map((todo, index) => {
      return (
        <div key={index}>
          <SingleTodo
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            destination={`/todos/${todo.id}`}
          />
        </div>
      );
    });

  const listUncompletedTodos = data
    .filter(function (todo) {
      return todo.completed === false;
    })
    .map((todo, index) => {
      return (
        <div key={index}>
          <SingleTodo
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            destination={`/todos/${todo.id}`}
          />
        </div>
      );
    });

  const listAscendingTodos = data
    .sort((a, b) => {
      let nameA = a.title.toUpperCase();
      let nameB = b.title.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    })
    .map((todo, index) => (
      <div key={index}>
        <SingleTodo
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          destination={`/todos/${todo.id}`}
        />
      </div>
    ));

  const listDescendingTodos = data
    .sort((a, b) => {
      let nameA = a.title.toUpperCase();
      let nameB = b.title.toUpperCase();
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      return 0;
    })
    .map((todo, index) => (
      <div key={index}>
        <SingleTodo
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          destination={`/todos/${todo.id}`}
        />
      </div>
    ));

  const switchToAll = () => {
    setShowAllTodos(true);
    setShowCompleted(false);
    setShowUncompleted(false);
    setShowAscending(false);
    setShowDescending(false);
  };

  const switchCompleted = () => {
    setShowAllTodos(false);
    setShowCompleted(true);
    setShowUncompleted(false);
    setShowAscending(false);
    setShowDescending(false);
  };

  const switchUncompleted = () => {
    setShowAllTodos(false);
    setShowUncompleted(true);
    setShowCompleted(false);
    setShowAscending(false);
    setShowDescending(false);
  };

  const switchAscending = () => {
    setShowAllTodos(false);
    setShowAscending(true);
    setShowCompleted(false);
    setShowUncompleted(false);
    setShowDescending(false);
  };

  const switchDescending = () => {
    setShowAllTodos(false);
    setShowDescending(true);
    setShowAscending(false);
    setShowCompleted(false);
    setShowUncompleted(false);
  };

  const showTitle = () => {
    if (
      !showCompleted &&
      !showUncompleted &&
      !showAscending &&
      !showDescending
    ) {
      return <h1>All Todos</h1>;
    } else if (showCompleted) {
      return <h1>Completed todos</h1>;
    } else if (showUncompleted) {
      return <h1>Uncompleted todos</h1>;
    } else if (showAscending) {
      return <h1>sorted ascending</h1>;
    } else if (showDescending) {
      return <h1>sorted descending</h1>;
    }
  };

  return (
    <>
      <CenterContainer>
        <Button
          color='primary'
          onClick={switchToAll}
          child='show all todos'
          icon='list-task'
        />
        <Button
          color='primary'
          onClick={switchCompleted}
          child='show completed'
          icon='check-all'
        />
        <Button
          color='primary'
          onClick={switchUncompleted}
          child='show uncompleted'
          icon='dash'
        />
        <Button
          color='primary'
          onClick={switchAscending}
          child='sort ascending'
          icon='arrow-up'
        />
        <Button
          color='primary'
          onClick={switchDescending}
          child='sort descending'
          icon='arrow-down'
        />

        <Button
          color='success'
          child={<Link to='/addtodo'>add todo</Link>}
          icon='plus-circle'
        />
      </CenterContainer>

      <div style={{ textAlign: 'center' }}>{showTitle()}</div>

      <StyledShowData>
        {isLoading && <Skeleton circle={true} count={35} />}

        {showCompleted && <>{listCompletedTodos}</>}

        {showUncompleted && <>{listUncompletedTodos}</>}

        {showAscending && <>{listAscendingTodos}</>}

        {showDescending && <>{listDescendingTodos}</>}

        {!isLoading && showAllTodos && <>{listAllTodos}</>}
      </StyledShowData>
    </>
  );
};

export default ShowData;

const CenterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  min-height: 100px;
  text-align: center;
`;

const StyledShowData = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;

  margin: 2% 5%;
`;

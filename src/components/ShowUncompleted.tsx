import React from 'react';
import SingleTodo from './SingleTodo';

const ShowUncompleted = (someArray: any[]) => {
  return (
    <div>
      {someArray.map(
        (
          todo: {
            id: number;
            title: string;
            completed: string | boolean;
          },
          index: number
        ) => {
          return (
            <div key={index}>
              <SingleTodo
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
                destination={`/todos/${index + 1}`}
              />
            </div>
          );
        }
      )}
    </div>
  );
};

export default ShowUncompleted;

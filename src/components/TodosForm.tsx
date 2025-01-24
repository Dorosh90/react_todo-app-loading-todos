import React from 'react';
import { Todo } from '../types/Todo';

interface Props {
  query: string;
  setQuery: (event: string) => void;
  addPost: (newTodo: Omit<Todo, 'id'>) => void;
}

export const TodosForm: React.FC<Props> = ({ query, setQuery, addPost }) => {
  return (
    <form
      onSubmit={event => {
        const newTodo = {
          title: query.trim(),
          userId: 1,
          completed: false,
        };

        event.preventDefault();
        addPost(newTodo);
        setQuery('');
      }}
    >
      <input
        value={query}
        data-cy="NewTodoField"
        type="text"
        className="todoapp__new-todo"
        placeholder="What needs to be done?"
        onChange={event => setQuery(event.currentTarget.value)}
      />
    </form>
  );
};

import React from 'react';

interface Props {
  query: string;
  setQuery: (event: string) => void;
}

export const TodosForm: React.FC<Props> = ({ query, setQuery }) => {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        // addTodo();
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

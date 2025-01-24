import { TodosForm } from './TodosForm';
import { useState } from 'react';

interface Props {}

export const Header: React.FC<Props> = ({}) => {
  const [query, setQuery] = useState('');

  return (
    <header className="todoapp__header">
      {/* this button should have `active` class only if all todos are completed */}
      <button
        type="button"
        className="todoapp__toggle-all active"
        data-cy="ToggleAllButton"
      />

      {/* Add a todo on form submit */}
      <TodosForm query={query} setQuery={setQuery} />
    </header>
  );
};

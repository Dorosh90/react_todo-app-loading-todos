import React, { useEffect, useState } from 'react';
import { getTodos, deleteTodo } from './api/todos';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import { Footer } from './components/Footer';
import { Todo } from './types/Todo';
import { ErrorMessage } from './components/ErrorMessage';

export const App: React.FC = () => {
  const [todosList, setTodosList] = useState<Todo[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [filter, setFilter] = useState('All');

  const listOfActiveTodos = todosList.length;

  function deletePost(
    postId: number,
    setLoading: (isLoading: boolean) => void,
  ) {
    setLoading(true);

    deleteTodo(postId)
      .then(() =>
        setTodosList(todos => todos.filter(todo => todo.id !== postId)),
      )
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    getTodos()
      .then(setTodosList)
      .catch(() => {
        setErrorMessage('Unable to load todos');
        timeoutId = setTimeout(() => {
          setErrorMessage('');
        }, 3000);
      });

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const filteredList = () => {
    switch (filter) {
      case 'Active':
        return todosList.filter(todo => !todo.completed);
      case 'Completed':
        return todosList.filter(todo => todo.completed);
      default:
        return todosList;
    }
  };

  // if (!USER_ID) {
  //   return <UserWarning />;
  // }

  return (
    <div className="todoapp">
      <h1 className="todoapp__title">todos</h1>

      <div className="todoapp__content">
        <Header />

        <TodoList todos={filteredList()} deletePost={deletePost} />

        {/* Hide the footer if there are no todos */}
        <Footer
          setFilter={setFilter}
          filter={filter}
          listOfActiveTodos={listOfActiveTodos}
          todosList={todosList}
        />
      </div>

      {/* DON'T use conditional rendering to hide the notification */}
      {/* Add the 'hidden' class to hide the message smoothly */}

      <ErrorMessage
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
    </div>
  );
};

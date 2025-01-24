import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const USER_ID = 0;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

export const deleteTodo = (userId: number) => {
  return client.delete(`/todos?userId=${userId}`);
};

// export const addTodo = () => {
//   return client.post<Todo>(`/todos?userId=${USER_ID}`);
// };

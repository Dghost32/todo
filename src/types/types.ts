type Todo = {
  checked: boolean;
  value: string;
};

type MainProps = {
  filter: string | undefined;
  setFilter: Function;
  light: boolean;
  toggleBg: Function;
  todos: Array<Todo>;
  setTodos: Function;
  toggleCheck: Function;
  removeTodo: Function;
  addTodo: Function;
  updateTodo: Function;
  filterTodos: Function;
  clearCompletedTodos: Function;
};

type TitleProps = {
  light: boolean;
  toggleBg: Function;
};

type NewTodoFormProps = {
  addTodo: Function;
};

type TaskListProps = {
  todos: Array<Todo>;
  setTodos: Function;
  toggleCheck: Function;
  removeTodo: Function;
  filterTodos: Function;
  updateTodo: Function;
};

type TaskElementProps = {
  toggleCheck: Function;
  todo: Todo;
  index: number;
  removeTodo: Function;
  updateTodo: Function;
};

type FooterProps = {
  setFilter: Function;
  filter: string | undefined;
  numTodos: number;
  clearCompletedTodos: Function;
};

type PhoneFooterProps = {
  setFilter: Function;
  filter: string | undefined;
};

export type {
  Todo,
  MainProps,
  TitleProps,
  NewTodoFormProps,
  TaskListProps,
  TaskElementProps,
  FooterProps,
  PhoneFooterProps,
};

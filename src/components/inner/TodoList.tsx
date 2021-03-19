import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
/* components */
import TodoElement from "./TodoElement";
/* types */
import { Todo, TaskListProps as Props } from "../../types/types";
/* styles */
import "../../styles/scrollbar.css";
import "../../styles/task-list.css";

const reorder = (list: Array<Todo>, startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

let TodoList = (props: Props) => {
  let renderTodos = props
    .filterTodos()
    .map((todo: Todo, index: number) => (
      <TodoElement
        index={index}
        key={todo.value + `${Math.random() * Math.random()}`}
        toggleCheck={props.toggleCheck}
        todo={todo}
        updateTodo={props.updateTodo}
        removeTodo={props.removeTodo}
      />
    ));

  function onDragEnd(result: any) {
    if (!result.destination) {
      return;
    }
    if (result.destination.index === result.source.index) {
      return;
    }
    props.setTodos(
      reorder(props.todos, result.source.index, result.destination.index)
    );
  }

  return (
    <div className="col-12 list-container">
      {renderTodos.length > 0 ? (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="list">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {renderTodos}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      ) : (
        <h1 className="no-todos">there are no todos.</h1>
      )}
    </div>
  );
};

export default TodoList;

import React from 'react';
import TodosList from './TodosList';

function Todos() {
  return (
    <div>
      <h1>Todos</h1>
      {/* @ts-ignore */}
      <TodosList />
    </div>
  );
}

export default Todos;

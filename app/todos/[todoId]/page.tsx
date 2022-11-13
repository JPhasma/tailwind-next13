import React from 'react';

type PageProps = {
  params: {
    todoId: string;
  };
};

function TodoPage({ params: { todoId } }: PageProps) {
  return <div>TodoPage: {todoId}</div>;
}

export default TodoPage;

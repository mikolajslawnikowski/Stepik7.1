import React from 'react';

const FancyTable = ({ n }) => {
  const generateList = (n) => {
    const list = [];
    for (let i = 1; i <= n; i++) {
      list.push(<li key={i}>fancy</li>);
    }
    return list;
  };

  return (
    <div>
      <ol>{generateList(n)}</ol>
    </div>
  );
};

export default FancyTable;

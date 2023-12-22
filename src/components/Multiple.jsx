import React from 'react';

const Multiple = ({ name, number }) => {
  const generateList = (number) => {
    const list = [];
    for (let i = 1; i <= number; i++) {
      list.push(<li key={i}>siema</li>);
    }
    return list;
  };

  return (
    <div>
      <h2>{name}</h2>
      <ol>{generateList(number)}</ol>
    </div>
  );
};

export default Multiple;

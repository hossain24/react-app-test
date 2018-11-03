import React from "react";

const Hills = props => {
  const { hills } = props;
  const hillList = hills.map(hill => {
    return (
      <div className="hill" key={hill.id}>
        <div>ID: {hill.id}</div>
        <div>Name: {hill.name}</div>
        <div>Color: {hill.color}</div>
      </div>
    );
  });
  return <div className="hill-list">{hillList}</div>;
};

export default Hills;

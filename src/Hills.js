import React, { Component } from "react";

class Hills extends Component {
  render() {
    const { hills } = this.props;
    const hillList = hills.map(hill => {
      return (
        <div className="hill">
          <p>ID: {hill.id}</p>
          <p>Name: {hill.name}</p>
          <p>Color: {hill.color}</p>
        </div>
      );
    });
    return <div className="hill-list">{hillList}</div>;
  }
}

export default Hills;

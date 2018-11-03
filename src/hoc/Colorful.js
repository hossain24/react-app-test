import React from "react";

const Colorful = WrappedComponent => {
  const colors = ["green", "blue", "red", "yellow", "orange", "pink", "black"];
  const randomColor = colors[Math.floor(Math.random() * 6)];
  const className = randomColor + "-text";

  return props => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Colorful;

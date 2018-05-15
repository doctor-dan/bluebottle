import React from 'react';
var Button = function statelessFunctionComponentClass(props) {
  return (
    <button onClick={props.onClick} 
                          className="btn btn-xs btn-default">{props.text}</button>
  );
};

export default Button;
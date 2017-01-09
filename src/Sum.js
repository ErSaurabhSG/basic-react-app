import React from 'react';

export default (props) => {
  let sum = props.a.reduce(function(a, b) {
    return a + b;
    }, 0);
  return (
    <div>
      <h1>Sum</h1>
      <ul>
      {
          props.a.map((value,index) => {
              return <li key={index}> {value} </li>
          })
      }
      </ul>
      <p>
        The Sum of given array {props.a} = {sum}
      </p>
    </div>
  );
};
import React from 'react';

function PlannerList(props) {
  const incrementTime = () => {
    props.incrementTime(props.index);
  };

  const decrementTime = () => {
    props.decrementTime(props.index);
  };

  return (
    <li className="list-item">
      <span className="task-name">{props.item}</span>
      <span className="time-allocated">Time: {props.hours} hrs</span>
      <div className="time-controls">
        <button onClick={incrementTime}>+</button>
        <button onClick={decrementTime} disabled={props.hours <= 1}>-</button>
      </div>
      <span className='icons'>
        <i className="fa-solid fa-trash-can icon-delete" 
          onClick={() => props.deleteItem(props.index)}></i>
      </span>
    </li>
  );
}

export default PlannerList;

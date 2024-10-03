import React, { useState } from 'react';

function PlannerList(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li className="list-item">
      <input 
        type="checkbox" 
        checked={isChecked}
        onChange={handleCheck}
      />
      <span className={`task-name ${isChecked ? 'checked' : ''}`}>
        {props.item}
      </span>
      <span className='icons'>
        <i className="fa-solid fa-trash-can icon-delete" 
          onClick={() => props.deleteItem(props.index)}></i>
      </span>
    </li>
  );
}

export default PlannerList;

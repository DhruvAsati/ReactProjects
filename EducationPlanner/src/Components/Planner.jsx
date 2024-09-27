import React, { useState } from "react";

function Planner(props) {
  const [inputText, setInputText] = useState('');
  const [inputHours, setInputHours] = useState(1);

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      props.addList(inputText, inputHours);
      setInputText("");
      setInputHours(1); 
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your today's planning..."
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        onKeyDown={handleEnterPress}
      />
      <input
        type="number"
        className="input-hours"
        value={inputHours}
        min="1"
        onChange={e => setInputHours(e.target.value)}
      />
      <button className="add-btn" 
        onClick={() => {
          props.addList(inputText, inputHours);
          setInputText("");
          setInputHours(1);
        }}>+</button>
    </div>
  );
}

export default Planner;

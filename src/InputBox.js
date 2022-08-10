import React from 'react';
import ReactDOM from 'react-dom';



function InputBox(props) {
  return (
    <div className="InputBox">
      <div className="InputBox-div">
        <h2 id="English-text">{props.engText}</h2>
        <h4 id="Amharic-text">{props.amhText}</h4>
        <input type="text" id="input-space" name="fname"></input>
      </div>
    </div>
  );
}

export default InputBox;

import React, { useState } from 'react';

const TextInputComponent = () => {
  const [textInput, setTextInput] = useState('');

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  return (
    <div>
      <input type="text" value={textInput} onChange={handleChange} placeholder="Some Text..."/>
      <p>{textInput}</p>
    </div>
  );
};

export default TextInputComponent;

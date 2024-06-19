import { useState } from 'react';

export function TextInputComponent() {
  const [textInput, setTextInput] = useState('');

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  return (
    <div>
      <input type="text" value={textInput} onChange={handleChange} placeholder="Some Text..." />
      <p>{textInput}</p>
    </div>
  );
}

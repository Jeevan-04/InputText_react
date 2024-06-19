import { useEffect, useState } from 'react'
import './Input.css'

export default function Input() {


  const TextInputComponent = () => {
    const [textInput, setTextInput] = useState('');
  
    const handleChange = (e) => {
      setTextInput(e.target.value);
    };
  
    return (
      <div>
        <input
          type="text"
          value={textInput}
          onChange={handleChange}
          placeholder="Type something..."
        />
        <p>{textInput}</p>
      </div>
    );
  };
}

// components/Prompt.tsx
import React from 'react';

const Prompt = () => {
  const [input, setInput] = React.useState('');
  const [output, setOutput] = React.useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleExecuteCommand = (command) => {
    // TO DO: implement command execution logic
  };

  return (
    <div className="prompt">
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={() => handleExecuteCommand(input)}>Execute</button>
      <div className="output">{output}</div>
    </div>
  );
};

export default Prompt;


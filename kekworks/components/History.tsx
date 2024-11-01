// components/History.tsx
import React from 'react';

const History = () => {
  const [commands, setCommands] = React.useState([]);

  const handleCommandAdded = (command) => {
    setCommands((prevCommands) => [...prevCommands, command]);
  };

  return (
    <div className="history">
      {commands.map((command, index) => (
        <div key={index}>{command}</div>
      ))}
    </div>
  );
};

export default History;


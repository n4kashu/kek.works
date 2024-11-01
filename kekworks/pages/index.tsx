// pages/index.tsx
import React from 'react';
import Prompt from '../components/Prompt';
import History from '../components/History';

const IndexPage = () => {
  return (
    <div className="terminal">
      <Prompt />
      <History />
    </div>
  );
};

export default IndexPage;


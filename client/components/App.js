import React from 'react';
import Bird from './Bird/Bird';
import PipeController from './map/PipeController';

const App = props => {
  return (
    <div className="div">
      <Bird />
      <PipeController />
    </div>
  );
};

export default App;

import React from 'react';
import Pixel from './Pixel';

const App = (props) => {
  return (
    <div>
      {Array.from({ length: props.length }, (v, i) => (
        <Pixel key={i} />
      ))}
    </div>
  );
};

export default App;

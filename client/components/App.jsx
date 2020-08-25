import React from 'react';
import Pixel from './Pixel';

const App = () => {
  return <div>{Array.from({ length: 100000 }, (v, i) => <Pixel key ={i}/>)}</div>;
};

export default App;

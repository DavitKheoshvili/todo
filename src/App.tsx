import React from 'react';
import './App.css';
import Content from './components/content/Content';
import Header from './components/header/Header';

function App() {
  return (
    <div className='bg-red-500'>
      <Header />
      <Content />
    </div>
  );
}

export default App;

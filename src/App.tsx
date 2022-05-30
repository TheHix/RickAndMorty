import React from 'react';
import Header from './components/header/header';
import Main from './pages/main';
import './styles/App.scss';

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;

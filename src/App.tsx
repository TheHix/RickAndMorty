import React from 'react';
import Header from './components/header/header';
import Main from './pages/main';
import './styles/App.scss';

function App() {
  return (
    <div className="wrapper">
<<<<<<< master
      <Header/>
      <Main/>
=======
      <Header />
      <Routes>
        <Route path = "/" element={<Home />}/>
        <Route path = "info" element={<Info/>}/>
        <Route path = "info/:id" element={<Info/>}/>
        <Route path = "*" element={<Navigate to={'/'} replace/>}/>
      </Routes>
>>>>>>> local
    </div>
  );
}

export default App;

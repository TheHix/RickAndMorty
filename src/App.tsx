import React from "react";
import { Navigate, Route, Routes } from "react-router";
import Header from "./components/header/Header";
import "./styles/App.scss";
import Home from "./pages/Home";
import CharacterList from "./pages/CharacterList";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="info" element={<CharacterList />} />
        <Route path="info/:id" element={<CharacterList />} />
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </div>
  );
}

export default App;

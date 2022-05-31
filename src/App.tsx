import React from "react";
import { Navigate, Route, Routes } from "react-router";
import Header from "./components/header/header";
import "./styles/App.scss";
import Home from "./pages/home";
import Info from "./pages/Info";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="info" element={<Info />} />
        <Route path="info/:id" element={<Info />} />
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </div>
  );
}

export default App;

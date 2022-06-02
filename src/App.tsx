import React from "react";
import { Navigate, Route, Routes } from "react-router";
import Header from "./components/header/Header";
import "./styles/App.scss";
import Home from "./pages/home/Home";
import CharacterDetails from "./pages/characterDetails/CharacterDetails";
import ScrollToTop from "./components/ScrollToTop";
import EpisodeDetails from "./pages/episodeDetails/EpisodeDetails";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="info" element={<EpisodeDetails/>} />
          <Route path="info/:id" element={<EpisodeDetails />} />
          <Route path="info/:id/detalis" element={<CharacterDetails />} />
          {/* <Route path="info/" element={<CharacterDetails />} /> */}
          <Route path="*" element={<Navigate to={"/"} replace />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;

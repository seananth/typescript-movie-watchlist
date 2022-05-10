import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Search from "./pages/Search";
import Watchlist from "./pages/Watchlist";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

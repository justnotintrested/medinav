import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

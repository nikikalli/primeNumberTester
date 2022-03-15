import "./App.css";
import React, { FC } from "react";
import { Form } from "./components/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
      </Routes>
    </Router>
  );
};

export default App;

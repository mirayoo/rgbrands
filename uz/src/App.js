import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './index.css';

import Main from './pages/Main';
import FirstStep from "./pages/FirstStep";
import SecondStep from "./pages/SecondStep";
import ThirdStep from "./pages/ThirdStep";
import Auth from "./pages/Auth";
import Thanks from "./pages/Thanks";
import Confirm from "./pages/Confirm";
import Share from "./pages/Share";

function App(props) {
  return (
    <Router>
      <Routes>
        <Route index element={<Main />} />
        <Route path="first-step" element={<FirstStep />} />
        <Route path="second-step" element={<SecondStep />} />
        <Route path="third-step" element={<ThirdStep />} />
        <Route path="form" element={<Auth />} />
        <Route path="thanks" element={<Thanks />} />
        <Route path="confirm" element={<Confirm />} />
        <Route path="share" element={<Share />} />
      </Routes>
    </Router>
  )
}

export default App;

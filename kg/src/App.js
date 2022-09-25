import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './index.css';

import MainKg from './pages/Main';
import QuizKg from './pages/Quiz';
import FormKg from './pages/Form';
import ThanksKg from './pages/Thanks';
import ConfirmKg from './pages/Confirm';
import ShareKg from './pages/Share';

function App(props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainKg />} />
        <Route path="/quiz" element={<QuizKg />} />
        <Route path="/form" element={<FormKg />} />
        <Route path="/thanks" element={<ThanksKg />} />
        <Route path="/confirm" element={<ConfirmKg />} />
        <Route path="/share" element={<ShareKg />} />
      </Routes>
    </Router>
  )
}

export default App;

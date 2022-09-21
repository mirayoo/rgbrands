import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './index.css';

import Main from './pages/uz/Main';
import FirstStep from "./pages/uz/FirstStep";
import SecondStep from "./pages/uz/SecondStep";
import ThirdStep from "./pages/uz/ThirdStep";
import Auth from "./pages/uz/Auth";
import Thanks from "./pages/uz/Thanks";
import Confirm from "./pages/uz/Confirm";
import Share from "./pages/uz/Share";

import MainKg from './pages/kg/Main';
import QuizKg from './pages/kg/Quiz';
import FormKg from './pages/kg/Form';
import ThanksKg from './pages/kg/Thanks';
import ConfirmKg from './pages/kg/Confirm';
import ShareKg from './pages/kg/Share';

import MainKz from './pages/kz/Main';
import QuizKz from './pages/kz/Quiz';
import FormKz from './pages/kz/Form';
import ThanksKz from './pages/kz/Thanks';
import ConfirmKz from './pages/kz/Confirm';
import ShareKz from './pages/kz/Share';

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

        <Route path="kg" element={<MainKg />} />
        <Route path="kg/quiz" element={<QuizKg />} />
        <Route path="kg/form" element={<FormKg />} />
        <Route path="kg/thanks" element={<ThanksKg />} />
        <Route path="kg/confirm" element={<ConfirmKg />} />
        <Route path="kg/share" element={<ShareKg />} />

        <Route path="kz" element={<MainKz />} />
        <Route path="kz/quiz" element={<QuizKz />} />
        <Route path="kz/form" element={<FormKz />} />
        <Route path="kz/thanks" element={<ThanksKz />} />
        <Route path="kz/confirm" element={<ConfirmKz />} />
        <Route path="kz/share" element={<ShareKz />} />
      </Routes>
    </Router>
  )
}

export default App;

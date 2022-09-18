import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../../index.css';

import Heading from '../../assets/uz-thanks-ru.png';
import PhoneCall from "../../assets/phone-call.png";
import PhoneNumber from "../../assets/1309.png";
import ScrollToButton from "../../components/ScrollToButton";
import Rules from "../../assets/rules.png";
import Switcher from "../../components/Switcher";
import RU from "../../assets/ru.png";
import Bull from "../../assets/bull.png";
import Bottles from "../../assets/bottles-clear.png";
import Comma1 from "../../assets/light-comma-1.png";
import Comma2 from "../../assets/light-comma-2.png";
import Comma3 from "../../assets/light-comma-3.png";
import Comma4 from "../../assets/light-comma-4.png";
import Comma5 from "../../assets/light-comma-5.png";

function Thanks() {
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('../confirm')
    }, 1500)
  }, [])

  return (
    <div className="hero-secondary hero-thanks-bg">
      <div className="wrapper ">
        <div className="header-nav nav-secondary">
          <a className="button button-phone" href="tel:1309"><img className="phone-icon" src={PhoneCall} alt="" /><img className="phone-number" src={PhoneNumber} alt="" /></a>
          <div className="heading thanks-heading">
            <img src={Heading}/>
            <img className="thanks-comma thanks-comma-1" src={Comma1} alt="" />
            <img className="thanks-comma thanks-comma-2" src={Comma2} alt="" />
            <img className="thanks-comma thanks-comma-3" src={Comma3} alt="" />
            <img className="thanks-comma thanks-comma-4" src={Comma4} alt="" />
            <img className="thanks-comma thanks-comma-5" src={Comma5} alt="" />
          </div>
          <ScrollToButton duration={500} toId="content"><img src={Rules} alt="" /></ScrollToButton>
          <Switcher imageUrl={RU}/>
        </div>

        <div className="hero-images">
          <img className="hero-right thanks-right-img" src={Bull} alt="" />

            <img className="hero-left thanks-left-img" src={Bottles} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Thanks;

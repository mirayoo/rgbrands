import React from "react";
import './index.css';

import ScrollToButton from "./components/ScrollToButton";
import Switcher from './components/Switcher';

import PhoneCall from './assets/phone-call.png';
import PhoneNumber from './assets/1309.png';
import Rules from './assets/rules.png';
import RU from './assets/ru.png';
import Bottles from './assets/bottles.png';
import BottlesMob from './assets/bottles-mob.png';
import Family from './assets/hero-bg.png';

function Hero(props) {

  return (
    <div className="hero-primary">
      <div className="wrapper ">
        <div className="header-nav">
          <a className="button button-phone" href="tel:1309"><img className="phone-icon" src={PhoneCall} alt="" /><img className="phone-number" src={PhoneNumber} alt="" /></a>
          <img className="heading" src={props.imageUrl}/>
          <ScrollToButton duration={500} toId="content"><img src={Rules} alt="" /></ScrollToButton>
          <Switcher imageUrl={RU}/>
        </div>

        <div className="hero-images">
          <img className="hero-right" src={Family} alt="" />

          <picture className="hero-left">
            <source media="(max-width: 767px)" srcSet={BottlesMob}/>
            <img src={Bottles} alt="" />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default Hero;

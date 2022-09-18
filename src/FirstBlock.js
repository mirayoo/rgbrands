import React from "react";
import './index.css';

import ScrollToButton from "./components/ScrollToButton";
import Switcher from './components/Switcher';

import PhoneCall from './assets/phone-call.png';
import PhoneNumber from './assets/1309.png';
import Rules from './assets/rules.png';
import RU from './assets/ru.png';

function FirstBlock(props) {
  return (
    <div className="hero-secondary">
      <div className="wrapper ">
        <div className="header-nav nav-secondary">
          <a className="button button-secondary button-phone" href="tel:1309"><img className="phone-icon" src={PhoneCall} alt="" /><img className="phone-number" src={PhoneNumber} alt="" /></a>
          <img className="heading-secondary" src={props.headingUrl}/>
          <img className="subheading-secondary" src={props.subheadingUrl}/>
          <ScrollToButton duration={500} toId="content"><img src={Rules} alt="" /></ScrollToButton>
          <Switcher imageUrl={RU}/>
        </div>
      </div>
    </div>
  );
}

export default FirstBlock;

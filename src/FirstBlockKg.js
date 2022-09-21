import React from "react";
import './index.css';

import Switcher from './components/SwitcherKg';

import PhoneCall from './assets/phone-call.png';
import PhoneNumber from './assets/1309.png';
import RU from './assets/ru.png';
import { useTranslation } from "react-i18next";

function FirstBlockKg(props) {
  const { t, i18n } = useTranslation();

  return (
    <div className="hero-secondary" id="header">
      <div className="wrapper ">
        <div className="header-nav nav-secondary">
          <a className="button button-secondary button-phone" href="tel:1309"><img className="phone-icon" src={PhoneCall} alt="" /><img className="phone-number" src={PhoneNumber} alt="" /></a>
          <img className="heading-secondary" src={props.headingUrl}/>
          <img className="subheading-secondary" src={props.subheadingUrl}/>
          <a className="button" href="#"><img src={t('header.rules')} alt="" /></a>
          <Switcher imageUrl={RU}/>
        </div>
      </div>
    </div>
  );
}

export default FirstBlockKg;

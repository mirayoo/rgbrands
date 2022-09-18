import React from "react";
import Form from "./components/Form";
import './index.css';

import ScrollToButton from "./components/ScrollToButton";
import Switcher from './components/Switcher';

import PhoneCall from './assets/phone-call.png';
import PhoneNumber from './assets/1309.png';
import Rules from './assets/rules.png';
import RU from './assets/ru.png';
import FormTitle from './assets/uz-form-heading-ru.png';
import Heading from './assets/uz-form-title-ru.png';
import SubHeading from './assets/uz-form-subtitle-ru.png';
import SubHeadingMob from './assets/uz-form-subtitle-mob-ru.png';

function FormBlock(props) {

  return (
    <div className={props.heroBg}>
      <div className="wrapper ">
        <div className="header-nav nav-secondary">
          <a className="button button-secondary button-phone" href="tel:1309"><img className="phone-icon" src={PhoneCall} alt="" /><img className="phone-number" src={PhoneNumber} alt="" /></a>
          <ScrollToButton duration={500} toId="content"><img src={Rules} alt="" /></ScrollToButton>
          <Switcher imageUrl={RU}/>
        </div>
        <div className="form-hero">
          <div className="form-section-left">
            <img className="heading-secondary form-heading" src={Heading}/>
            <img className="form-img" src={props.imageUrl}/>
            <picture>
              <source media="(max-width:767px)" srcSet={SubHeadingMob}/>
              <img className="subheading-secondary form-subheading" src={SubHeading}/>
            </picture>
            <div className="clearfix"></div>
          </div>
          <div className="form-section-right">
            <Form formTitle={FormTitle} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormBlock;

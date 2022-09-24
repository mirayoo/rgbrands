import React from "react";
import './index.css';

import Switcher from './components/Switcher';

import PhoneCall from './assets/phone-call.png';
import PhoneNumber from './assets/1309.png';
import RU from './assets/ru.png';
import { useTranslation } from "react-i18next";
import { default as axios } from "axios";

function SecondBlock(props) {
  const { t, i18n } = useTranslation();
  function getRules() {
    axios.get("https://staging-gateway.vpluse.me/v2/smallpromo/terms/3")
      .then(function(response) {
        if (i18n.language == 'ru') {
          window.open(response.data.data[0].file.ru, '_blank');

        } else if (i18n.language == 'uz') {
          window.open(response.data.data[0].file.uz, '_blank');
        }
      });
  }

  return (
    <div className={props.heroBg}>
      <div className="wrapper ">
        <div className="header-nav nav-secondary" id="header">
          <a className="button button-secondary button-phone" href="tel:1309"><img className="phone-icon" src={PhoneCall} alt="" /><img className="phone-number" src={PhoneNumber} alt="" /></a>
          <img className="heading-secondary" src={props.headingUrl}/>
          <img className="subheading-secondary" src={props.subheadingUrl}/>
          <button onClick={() => getRules()} className="button"><img src={t('header.rules')} alt="" /></button>
          <Switcher imageUrl={RU}/>
        </div>
      </div>
    </div>
  );
}

export default SecondBlock;

import React, {useEffect, useState} from "react";
import { useTranslation } from 'react-i18next';
import './index.css';

import Switcher from './components/Switcher';

import PhoneCall from './assets/phone-call.png';
import PhoneNumber from './assets/1309.png';
import RU from './assets/ru.png';
import Bottles from './assets/bottles.png';
import BottlesMob from './assets/bottles-mob.png';
import Family from './assets/hero-bg.png';
import { useNavigate } from "react-router-dom";

const axios = require('axios').default;


function Hero(props) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

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
    <div className="hero-primary" id="header">
      <div className="wrapper ">
        <div className="header-nav">
          <a className="button button-phone" href="tel:1309"><img className="phone-icon" src={PhoneCall} alt="" /><img className="phone-number" src={PhoneNumber} alt="" /></a>
          <img className="heading" src={props.imageUrl}/>
          <button className="button" onClick={()=>getRules()}><img src={t('header.rules')} alt="" /></button>
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

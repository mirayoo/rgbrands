import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../../index.css';

import PhoneCall from "../../assets/phone-call.png";
import PhoneNumber from "../../assets/1309.png";
import Rules from "../../assets/rules.png";
import Switcher from "../../components/Switcher";
import RU from "../../assets/ru.png";
import tg from "../../assets/telegram.png";
import Bull from "../../assets/bull.png";
import Bottles from "../../assets/bottles-clear.png";
import Comma1 from "../../assets/light-comma-1.png";
import Comma2 from "../../assets/light-comma-2.png";
import Comma3 from "../../assets/light-comma-3.png";
import Comma4 from "../../assets/light-comma-4.png";
import Comma5 from "../../assets/light-comma-5.png";
import { useTranslation } from "react-i18next";
import yt from "../../assets/yt.png";

function Thanks() {
  const { t, i18n } = useTranslation();

  let navigate = useNavigate();

useEffect(() => {
    setTimeout(() => {
    navigate('../confirm')
  }, 5000)
}, [])

  return (
    <>
      <div className="hero-secondary hero-thanks-bg">
        <div className="wrapper ">
          <div className="header-nav nav-secondary">
            <a className="button button-phone" href="tel:1309"><img className="phone-icon" src={PhoneCall} alt="" /><img className="phone-number" src={PhoneNumber} alt="" /></a>
            <div className="heading thanks-heading">
              <img src={t('hero.thanks')}/>
              <img className="thanks-comma thanks-comma-1" src={Comma1} alt="" />
              <img className="thanks-comma thanks-comma-2" src={Comma2} alt="" />
              <img className="thanks-comma thanks-comma-3" src={Comma3} alt="" />
              <img className="thanks-comma thanks-comma-4" src={Comma4} alt="" />
              <img className="thanks-comma thanks-comma-5" src={Comma5} alt="" />
            </div>
            <a className="button" href="#"><img src={t('header.rules')} alt="" /></a>
            <Switcher imageUrl={RU}/>
          </div>

          <div className="hero-images">
            <img className="hero-right thanks-right-img" src={Bull} alt="" />

              <img className="hero-left thanks-left-img" src={Bottles} alt="" />
          </div>
        </div>
      </div>
      <div className="link-kg">
        <picture className="yt">
          <source media="(max-width:767px)" srcSet={t('thanks.uztitlemob')}/>

          <img className="link-text-kg" src={t('thanks.uztitle')} alt="" />
        </picture>
        <div className="yt-block">
          <a href="#">
            <picture className="yt tg">
              <source media="(max-width:767px)" srcSet={tg}/>
              <img src={tg} alt="" />
            </picture>
          </a>
        </div>
      </div>
    </>
  )
}

export default Thanks;

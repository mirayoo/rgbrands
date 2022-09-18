import React from "react";
import '../../index.css';

import Hero from '../../Hero';

import Heading from '../../assets/heading-ru.png';
import { Link } from "react-router-dom";
import ContHeading from "../../assets/uz-share-title-ru.png";
import ContSubHeading from "../../assets/uz-share-subtitle-ru.png";
import ContHeadingMob from "../../assets/uz-share-title-mob-ru.png";
import ContSubHeadingMob from "../../assets/uz-share-subtitle-mob-ru.png";
import WhatsApp from "../../assets/whatsapp.png";
import Telegram from "../../assets/telegram.png";
import WArrow from "../../assets/w-arrow-left.png";
import TArrow from "../../assets/w-arrow-right.png";

function Share(props) {
  return (
    <div>
      <Hero imageUrl={Heading} />
      <div className="choose-block share-block" id="content">
        <div className="wrapper">
          <picture className="choose-block-img share-title">
            <source media="(max-width: 767px)" srcSet={ContHeadingMob}/>
            <img src={ContHeading}/>
          </picture>
          <picture className="choose-block-img share-subtitle">
            <source media="(max-width: 767px)" srcSet={ContSubHeadingMob}/>
            <img src={ContSubHeading}/>
          </picture>
            <div className="socials">
              <a className="social-link whatsapp-link" href="#">
                <img className="whatsapp-img" src={WhatsApp} alt="" />
                <img className="social-arrow-left" src={WArrow} alt="" />
              </a>
              <a className="social-link telegram-link" href="#">
                <img className="telegram-img" src={Telegram} alt="" />
                <img className="social-arrow-right" src={TArrow} alt="" />
              </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Share;

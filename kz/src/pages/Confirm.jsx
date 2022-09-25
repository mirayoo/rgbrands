import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import '../index.css';


import Heading from '../assets/uz-confirm-title-ru.png';
import PhoneCall from "../assets/phone-call.png";
import PhoneNumber from "../assets/3775.png";
import Rules from "../assets/rules.png";
import SwitcherKz from "../components/SwitcherKz";
import RU from "../assets/ru.png";
import SubHeadingMob from "../assets/uz-confirm-subtitle-mob-ru.png";
import SubHeading from "../assets/uz-confirm-subtitle-ru.png";
import FormTitle from "../assets/uz-confirm-heading-ru.png";
import ArrowBlue from "../assets/arrow-blue.png";
import ImageUrl from '../assets/clap.png';
import Label from '../assets/uz-confirm-label-ru.png';
import { default as axios } from "axios";

function Confirm(props) {
  const { t, i18n } = useTranslation();
  const {register, formState:{errors},setError,clearErrors} = useForm();
  function getRules() {
    axios.get("https://staging-gateway.vpluse.me/v2/smallpromo/terms/1")
      .then(function(response) {
        if (i18n.language == 'ru') {
          window.open(response.data.data[0].file.ru, '_blank');

        } else if (i18n.language == 'kz') {
          window.open(response.data.data[0].file.kz, '_blank');
        }
      });
  }
  const navigate = useNavigate();

  return (
    <div className="hero-secondary hero-form-bg hero-form-kz">
      <div className="wrapper ">
        <div className="header-nav nav-secondary">
          <a className="button button-secondary button-phone" href="tel:3775"><img className="phone-icon" src={PhoneCall} alt="" /><img className="phone-number" src={PhoneNumber} alt="" /></a>
          <button onClick={() => getRules()} className="button"><img src={t('header.rules')} alt="" /></button>
          <SwitcherKz imageUrl={RU}/>
        </div>
        <div className="form-hero">
          <div className="form-section-left">
            <img className="heading-secondary form-heading" src={t('hero.confirmHeading')}/>
            <img className="form-img" src={ImageUrl}/>
            <picture>
              <source media="(max-width:767px)" srcSet={t('combo.mobsubtitle')}/>
              <img className="subheading-secondary form-subheading" src={t('combo.subtitle')}/>
            </picture>
            <div className="clearfix"></div>
          </div>
          <div className="form-section-right">
            <div>
              <img className="form-title" src={t('combo.iin')} alt="" />
              <div className="form">

                <div className="confirm-input name-email combo-input">
                  <input className="redinput" type="text" placeholder={t('combo.iinInfo')} {...register("IIN")} />
                  <button className="redbutton"><img src={t('combo.iinConfirm')} alt="" /></button>
                </div>
                <div className="confirm-input name-email combo-input">
                  <input className="redinput" type="email" placeholder={t('combo.emailInfo')} {...register("email")} />
                  <button className="redbutton"><img src={t('combo.email')} alt="" /></button>
                </div>

                <img className="confirm-warning combo-warning" src={t('combo.aware')} alt="" />

                <button className="button form-button button-arrow" type="submit">
                  <img className="button-arrow-text" src={t('form.approve')} alt="" />
                  <img className="button-arrow-icon" src={ArrowBlue} alt="" />
                  <span className="button-bg-comma confirm-comma-1 button-bg-comma-1"></span>
                  <span className="button-bg-comma confirm-comma-2 button-bg-comma-2"></span>
                  <span className="button-bg-comma confirm-comma-3 button-bg-comma-3"></span>
                  <span className="button-bg-comma confirm-comma-4 button-bg-comma-4"></span>
                  <span className="button-bg-comma confirm-comma-5 button-bg-comma-5"></span>
                  <span className="button-bg-comma confirm-comma-6 button-bg-comma-6"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirm;

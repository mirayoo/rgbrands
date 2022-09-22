import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";
import cities from './ru-cities-kg.json';
import citiesKg from './kg-cities-kg.json';
import OTPInput, { ResendOTP } from "otp-input-react";
import { useTranslation } from "react-i18next";
import './index.css';

import SwitcherKg from './components/SwitcherKg';

import PhoneCall from './assets/phone-call.png';
import PhoneNumber from './assets/3775.png';
import RU from './assets/ru.png';
import ArrowBlue from "./assets/arrow-blue.png";

function FormBlockKg(props) {
  const { t, i18n } = useTranslation();

  const {register, formState:{errors},setError,clearErrors} = useForm();
  const onSubmit = (data)=> {

  };
  const [OTP, setOTP] = useState("");
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    navigate('../kg/thanks');
  };


  function OptionsRender() {
    if (i18n.language == 'ru') {
    return (
      <>
        {cities.map((city, index) => (
          <>
            <option key={index.toString()}>{city.name}</option>
          </>
        ))}
      </>
    )} else if (i18n.language == "kg") {
      return (
        <>
          {citiesKg.map((city, index) => (
            <>
              <option key={index.toString()}>{city.name}</option>
            </>
          ))}
        </>
      )}
  }

  return (
    <div className={props.heroBg}>
      <div className="wrapper ">
        <div className="header-nav nav-secondary">
          <a className="button button-secondary button-phone" href="tel:3775"><img className="phone-icon" src={PhoneCall} alt="" /><img className="phone-number" src={PhoneNumber} alt="" /></a>
          <a className="button" href="#"><img src={t('header.rules')} alt="" /></a>
          <SwitcherKg imageUrl={RU}/>
        </div>
        <div className="form-hero">
          <div className="form-section-left">
            <img className="heading-secondary form-heading" src={t('hero.formTitle')}/>
            <img className="form-img" src={props.imageUrl}/>
            <picture>
              <source media="(max-width:767px)" srcSet={t('hero.formSubtitleMob')}/>
              <img className="subheading-secondary form-subheading" src={t('hero.formSubtitle')}/>
            </picture>
            <div className="clearfix"></div>
          </div>
          <div className="form-section-right">
            <div>
              <img className="form-title" src={t('form.formTitle')} alt="" />
              <form className="form"  onSubmit={handleSubmit}>

                <div className="form-city">
                  <img className="input-label" src={t('form.city')} alt="" />
                  <select {...register("city")} >
                    {OptionsRender()}
                  </select>
                </div>
                <div className="form-phone">
                  <img className="input-label" src={t('form.number')} alt="" />
                  <input {...register("phone")} type="tel" placeholder="+996" />
                </div>

                <div className="form-items-left">
                  <div className="form-gender">
                    <img className="input-label" src={t('form.gender')} alt="" />
                    <select className="form-gender" {...register("gender")}>
                      <option>{t('form.male')}</option>
                      <option>{t('form.female')}</option>
                    </select>
                  </div>

                  <div className="form-age">
                    <img className="input-label" src={t('form.age')} alt="" />
                    <select className="form-age" {...register("age")}>
                      <option>18-24</option>
                      <option>25-30</option>
                      <option>31-35</option>
                      <option>{t('form.older')}</option>
                    </select>
                  </div>
                </div>

                <div className="phone-confirm">
                  <picture>
                    <source media="(max-width:767px)" srcSet={t('form.phoneConfirmMob')}/>
                    <img className="phone-confirm-text" src={t('form.phoneConfirm')} alt="" />
                  </picture>
                  <button className="phone-confirm-button button button-red"><img src={t('form.formConfirm')} alt=""/></button>
                </div>

                <div className="confirm-code">
                  <img className="confirm-code-text" src={t('form.otpForm')} alt="" />
                  <>
                    <OTPInput value={OTP} onChange={setOTP} OTPLength={4} otpType="number" disabled={false}/>
                    {/* <ResendOTP onResendClick={() => console.log("Resend clicked")} /> */}
                  </>
                </div>

                <div className="checkboxes-container">
                  <div className="form-checkbox">
                    <input className="checkbox visually-hidden" type="checkbox"/>
                    <span className="checkbox-fake"></span>
                    <img className="checkbox-text" src={t('form.firstCheck')} alt=""/>
                  </div>

                  <div className="form-checkbox">
                    <input className="checkbox visually-hidden" type="checkbox"/>
                    <span className="checkbox-fake"></span>
                    <img className="checkbox-text" src={t('form.secondCheck')} alt=""/>
                  </div>
                </div>

                <button className="button form-button button-arrow" type="submit">
                  <img className="button-arrow-text" src={t('form.approve')} alt="" />
                  <img className="button-arrow-icon" src={ArrowBlue} alt="" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormBlockKg;

import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";
import { IMaskInput } from "react-imask";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useTranslation } from "react-i18next";
import './index.css';
import SwitcherKg from './components/SwitcherKg';

import PhoneCall from './assets/phone-call.png';
import PhoneNumber from './assets/1309.png';
import RU from './assets/ru.png';
import ArrowBlue from "./assets/arrow-blue.png";

const axios = require('axios').default;

function FormBlockKg(props) {
  const { t, i18n } = useTranslation();
  const PhoneMask = "+000000000000";
  const {register, formState:{errors},setError,clearErrors} = useForm();
  const onSubmit = (data)=> {

  };
  const [OTP, setOTP] = useState("");
  const navigate = useNavigate();
  const [cities,setCities]= useState([])
  const [city,setCity ]=useState()
  const [isCodeSented,setCodeSented]=useState(false)
  const [code,setCode]=useState("")
  const [phoneNumber,setPhoneNumber]=useState("")
  function signUp(){
    axios.post("https://staging-gateway.vpluse.me/v2/client/action/vkusnee/phone-sign-up",{phone:phoneNumber,cityId:1114,countryId:2})
      .then(function(response){
        if(response.status===204){
          setCodeSented(true)
        }
      })
  }
  function confirmation(){
    axios.post("https://staging-gateway.vpluse.me/v2/client/action/vkusnee/phone-sign-up-confirm",{phone:phoneNumber,code:OTP})
      .then(function(response){
        if(response.status===204){
          setCodeSented(true);
          navigate('../thanks');
        }
      })
  }
  useEffect(()=>{

    axios.get("https://staging-gateway.vpluse.me/v2/vkusnee/cities/2")
      .then(function(response){
        setCities(response.data.data.items)
      })
  },[])
  function OptionsRender() {
    if (i18n.language == 'ru') {
      return (
        <>
          {cities.map((city) => (
            <>
              <option onClick={()=>setCity(city.id)} key={city.id}>{city.name_ru}</option>
            </>
          ))}
        </>
      )} else if (i18n.language == "kg") {
      return (
        <>
          {cities.map((city) => (
            <>
              <option onClick={()=>setCity(city.id)} key={city.id}>{city.name_ua}</option>
            </>
          ))}
        </>
      )}
  }

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   navigate('../thanks');
  // };

  return (
    <div className={props.heroBg}>
      <div className="wrapper ">
        <div className="header-nav nav-secondary">
          <a className="button button-secondary button-phone" href="tel:1309"><img className="phone-icon" src={PhoneCall} alt="" /><img className="phone-number" src={PhoneNumber} alt="" /></a>
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
              <div className="form">

                <div className="form-city">
                  <img className="input-label" src={t('form.city')} alt="" />
                  <select {...register("city")} >
                    {OptionsRender()}
                  </select>
                </div>
                <div className="form-phone">
                  <img className="input-label" src={t('form.number')} alt="" />

                  <IMaskInput
                    {...register('phone') }
                    className="form-control"
                    mask={PhoneMask}
                    type="tel"
                    value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}
                    placeholder="+996"
                  />
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
                {!isCodeSented &&
                  <div className="phone-confirm">
                    <picture>
                      <source media="(max-width:767px)" srcSet={t('form.phoneConfirmMob')} />
                      <img className="phone-confirm-text" src={t('form.phoneConfirm')} alt="" />
                    </picture>
                    <button onClick={() => signUp()} className="phone-confirm-button button button-red"><img
                      src={t('form.formConfirm')} alt="" /></button>
                  </div>
                }
                <div className="confirm-code">
                  <img className="confirm-code-text" src={t('form.otpForm')} alt="" />
                  <>
                    <OTPInput value={OTP} onChange={setOTP} OTPLength={4} otpType="number" disabled={false}/>
                    {/*<ResendOTP onResendClick={() => console.log("Resend clicked")} /> */}
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

                <button className="button form-button button-arrow"  onClick={()=>confirmation()}>
                  <img className="button-arrow-text" src={t('form.approve')} alt="" />
                  <img className="button-arrow-icon" src={ArrowBlue} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormBlockKg;

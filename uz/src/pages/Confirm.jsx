import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import '../index.css';

import PhoneCall from "../assets/phone-call.png";
import PhoneNumber from "../assets/1309.png";
import Switcher from "../components/Switcher";
import RU from "../assets/ru.png";
import ArrowBlue from "../assets/arrow-blue.png";
import ImageUrl from '../assets/clap.png';
import { default as axios } from "axios";

function Confirm(props) {
  const { t, i18n } = useTranslation();
  const {register, formState:{errors},setError,clearErrors} = useForm();
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
  const navigate = useNavigate();
  const [name,setName]=useState("")
  function signUp(){
    axios.post("https://staging-gateway.vpluse.me/v2/client/action/vkusnee/phone-sign-up",{first_name:name,countryId:1})
      .then(function(response){
        if(response.status===204){

        }
      })
  }

  return (
    <div className="hero-secondary hero-form-bg">
      <div className="wrapper ">
        <div className="header-nav nav-secondary">
          <a className="button button-secondary button-phone" href="tel:1309"><img className="phone-icon" src={PhoneCall} alt="" /><img className="phone-number" src={PhoneNumber} alt="" /></a>
          <button onClick={() => getRules()} className="button"><img src={t('header.rules')} alt="" /></button>
          <Switcher imageUrl={RU}/>
        </div>
        <div className="form-hero">
          <div className="form-section-left">
            <img className="heading-secondary form-heading" src={t('hero.confirmHeading')}/>
            <img className="form-img" src={ImageUrl}/>
            <picture>
              <source media="(max-width:767px)" srcSet={t('hero.confirmSubheadingMob')}/>
              <img className="subheading-secondary form-subheading" src={t('hero.confirmSubheading')}/>
            </picture>
            <div className="clearfix"></div>
          </div>
          <div className="form-section-right">
            <div>
              <img className="form-title" src={t('hero.confirmTitle')} alt="" />
              <div className="form">

                <div className="confirm-input name-email">
                  <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder={t('form.fullName')} />
                  <img className="confirm-label" src={t('form.confirmLabel')} alt="" />
                </div>

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

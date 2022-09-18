import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";
import '../../index.css';


import Heading from '../../assets/uz-confirm-title-ru.png';
import PhoneCall from "../../assets/phone-call.png";
import PhoneNumber from "../../assets/1309.png";
import ScrollToButton from "../../components/ScrollToButton";
import Rules from "../../assets/rules.png";
import Switcher from "../../components/Switcher";
import RU from "../../assets/ru.png";
import SubHeadingMob from "../../assets/uz-confirm-subtitle-mob-ru.png";
import SubHeading from "../../assets/uz-confirm-subtitle-ru.png";
import FormTitle from "../../assets/uz-confirm-heading-ru.png";
import Approve from "../../assets/uz-approve-ru.png";
import ArrowBlue from "../../assets/arrow-blue.png";
import ImageUrl from '../../assets/clap.png';
import Label from '../../assets/uz-confirm-label-ru.png';

function Confirm(props) {
  const {register, formState:{errors},setError,clearErrors} = useForm();
  const onSubmit = (data)=> {

  };
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    navigate('../share');
  };

  return (
    <div className="hero-secondary hero-form-bg">
      <div className="wrapper ">
        <div className="header-nav nav-secondary">
          <a className="button button-secondary button-phone" href="tel:1309"><img className="phone-icon" src={PhoneCall} alt="" /><img className="phone-number" src={PhoneNumber} alt="" /></a>
          <ScrollToButton duration={500} toId="content"><img src={Rules} alt="" /></ScrollToButton>
          <Switcher imageUrl={RU}/>
        </div>
        <div className="form-hero">
          <div className="form-section-left">
            <img className="heading-secondary form-heading" src={Heading}/>
            <img className="form-img" src={ImageUrl}/>
            <picture>
              <source media="(max-width:767px)" srcSet={SubHeadingMob}/>
              <img className="subheading-secondary form-subheading" src={SubHeading}/>
            </picture>
            <div className="clearfix"></div>
          </div>
          <div className="form-section-right">
            <div>
              <img className="form-title" src={FormTitle} alt="" />
              <form className="form"  onSubmit={handleSubmit}>

                <div className="confirm-input">
                  <input type="text" placeholder="Ваша Фамилия и Имя" {...register("fullName")} />
                  <img className="confirm-label" src={Label} alt="" />
                </div>

                <button className="button form-button button-arrow" type="submit">
                  <img className="button-arrow-text" src={Approve} alt="" />
                  <img className="button-arrow-icon" src={ArrowBlue} alt="" />
                  <span className="button-bg-comma confirm-comma-1 button-bg-comma-1"></span>
                  <span className="button-bg-comma confirm-comma-2 button-bg-comma-2"></span>
                  <span className="button-bg-comma confirm-comma-3 button-bg-comma-3"></span>
                  <span className="button-bg-comma confirm-comma-4 button-bg-comma-4"></span>
                  <span className="button-bg-comma confirm-comma-5 button-bg-comma-5"></span>
                  <span className="button-bg-comma confirm-comma-6 button-bg-comma-6"></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirm;

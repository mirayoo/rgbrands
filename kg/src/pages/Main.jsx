import React,{ useState, useEffect } from "react";
import '../index.css';
import { useTranslation } from "react-i18next";
import HeroKg from "../HeroKg";
import ContentKg from "../ContentKg";
import FooterKg from "../FooterKg";

function Main(props) {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <HeroKg imageUrl={t('header.title')} />
      <ContentKg pictureUrl={t('secondBlock.textBlockMob')} imageUrl={t('secondBlock.textBlock')}/>
      <FooterKg imageUrl={t('thirdBlock.coupon')}/>
    </div>
  )
}

export default Main;

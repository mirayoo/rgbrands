import React,{ useState, useEffect } from "react";
import '../../index.css';
import { useTranslation } from "react-i18next";
import HeroKz from "../../HeroKz";
import ContentKz from "../../ContentKg";
import FooterKg from "../../FooterKg";

function Main(props) {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <HeroKz />
      <ContentKz pictureUrl={t('secondBlock.textBlockMob')} imageUrl={t('secondBlock.textBlock')}/>
      <FooterKg imageUrl={t('thirdBlock.dodo')}/>
    </div>
  )
}

export default Main;

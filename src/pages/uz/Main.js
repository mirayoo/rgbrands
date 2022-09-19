import React from "react";
import '../../index.css';

import Hero from '../../Hero';
import Content from '../../Content';
import Footer from '../../Footer';
import { useTranslation } from "react-i18next";

function Main(props) {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Hero imageUrl={t('header.title')} />
      <Content pictureUrl={t('secondBlock.textBlockMob')} imageUrl={t('secondBlock.textBlock')}/>
      <Footer imageUrl={t('thirdBlock.cafe')}/>
    </div>
  )
}

export default Main;

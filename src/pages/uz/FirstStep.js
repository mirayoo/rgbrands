import React from "react";
import '../../index.css';

import FirstBlock from '../../FirstBlock';
import ListItem from "../../components/ListItem";
import ScrollToButton from "../../components/ScrollToButton";

import Image1 from "../../assets/uz-list-img-1-ru.png";
import Image2 from "../../assets/uz-list-img-2-ru.png";
import Image3 from "../../assets/uz-list-img-3-ru.png";
import Image4 from "../../assets/uz-list-img-4-ru.png";
import Image5 from "../../assets/uz-list-img-5-ru.png";
import Image6 from "../../assets/uz-list-img-6-ru.png";
import { useTranslation } from "react-i18next";

function FirstStep(props) {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <FirstBlock headingUrl={t('hero.firstTitle')} subheadingUrl={t('hero.firstSubtitle')} />
      <div className="list-block" id="content">
        <div className="wrapper list-block-inner">

          <ScrollToButton duration="500" toId="header"><ListItem navLink="/second-step" title={t('secondBlock.heading1')} titleMob={t('secondBlock.mobHeading1')} subTitle={t('secondBlock.subheading1')} subTitleMob={t('secondBlock.mobSubheading1')} imageUrl={Image1} /></ScrollToButton>

          <ScrollToButton duration="500" toId="header"><ListItem navLink="/second-step" title={t('secondBlock.heading2')} titleMob={t('secondBlock.mobHeading2')} subTitle={t('secondBlock.subheading2')} subTitleMob={t('secondBlock.mobSubheading2')} imageUrl={Image2} /></ScrollToButton>

          <ScrollToButton duration="500" toId="header"><ListItem navLink="/second-step" title={t('secondBlock.heading3')} titleMob={t('secondBlock.mobHeading3')} subTitle={t('secondBlock.subheading3')} subTitleMob={t('secondBlock.mobSubheading3')} imageUrl={Image3} /></ScrollToButton>

          <ScrollToButton duration="500" toId="header"><ListItem navLink="/second-step" title={t('secondBlock.heading4')} titleMob={t('secondBlock.mobHeading4')} subTitle={t('secondBlock.subheading4')} subTitleMob={t('secondBlock.mobSubheading4')} imageUrl={Image4} /></ScrollToButton>

          <ScrollToButton duration="500" toId="header"><ListItem navLink="/second-step" title={t('secondBlock.heading5')} titleMob={t('secondBlock.mobHeading5')} subTitle={t('secondBlock.subheading5')} subTitleMob={t('secondBlock.mobSubheading5')} imageUrl={Image5} /></ScrollToButton>

          <ScrollToButton duration="500" toId="header"><ListItem navLink="/second-step" title={t('secondBlock.heading6')} titleMob={t('secondBlock.mobHeading6')} subTitle={t('secondBlock.subheading6')} subTitleMob={t('secondBlock.mobSubheading6')} imageUrl={Image6} /></ScrollToButton>

          <ScrollToButton duration="500" toId="header"><ListItem navLink="/second-step" title={t('secondBlock.heading7')} titleMob={t('secondBlock.mobHeading7')} /></ScrollToButton>

          <ScrollToButton duration="500" toId="header"><ListItem navLink="/second-step" title={t('secondBlock.heading8')} titleMob={t('secondBlock.mobHeading8')} /></ScrollToButton>

        </div>
      </div>
    </div>
  )
}

export default FirstStep;

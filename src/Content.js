import React from "react";
import './index.css';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import ArrowBlue from "./assets/arrow-blue.png";

function Content(props) {
  const { t, i18n } = useTranslation();

  return (
    <div className="choose-block" id="content">
      <div className="wrapper">
        <picture className="choose-block-img">
          <source media="(max-width: 767px)" srcSet={props.pictureUrl}/>
          <img src={props.imageUrl}/>
        </picture>
        <Link to="/first-step">
            <div className="button button-arrow">
              <img className="button-arrow-text" src={t('secondBlock.vote')} alt="" />
              <img className="button-arrow-icon" src={ArrowBlue} alt="" />
              <span className="button-bg-comma button-bg-comma-1"></span>
              <span className="button-bg-comma button-bg-comma-2"></span>
              <span className="button-bg-comma button-bg-comma-3"></span>
              <span className="button-bg-comma button-bg-comma-4"></span>
              <span className="button-bg-comma button-bg-comma-5"></span>
              <span className="button-bg-comma button-bg-comma-6"></span>
            </div>
        </Link>
      </div>
    </div>
  );
}

export default Content;

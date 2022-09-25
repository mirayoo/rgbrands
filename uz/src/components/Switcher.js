import React from "react";
import '../index.css';
import { useTranslation } from "react-i18next";

function Switcher(props) {

  const { t, i18n } = useTranslation();
  const changeLanguage = (language)=>{
    i18n.changeLanguage(language);
  };

  return (
    <>
      <button onClick={()=>changeLanguage("ru")} className="button button-switch"><span className="langName">RU</span></button>
      <button onClick={()=>changeLanguage("uz")} className="button button-switch"><span className="langName">UZ</span></button>
    </>
  );
}

export default Switcher;

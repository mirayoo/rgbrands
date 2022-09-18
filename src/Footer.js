import React from "react";
import './index.css';

function Footer(props) {

  return (
    <div className="footer">
      <div className="wrapper">
        <img className="footer-title" src={props.imageUrl} alt="" />
        <div className="footer-list">
          <div className="footer-item footer-item-1"></div>
          <div className="footer-item footer-item-2"></div>
          <div className="footer-item footer-item-3"></div>
          <div className="footer-item footer-item-4 footer-item-dark"></div>
          <div className="footer-item footer-item-5"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

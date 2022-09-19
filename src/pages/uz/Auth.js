import React from "react";
import '../../index.css';

import FormBlock from '../../FormBlock';

import ImageUrl from '../../assets/thumbs-up.png';

function Auth(props) {
  return (
    <div>
      <FormBlock imageUrl={ImageUrl} heroBg="hero-secondary hero-form-bg"/>
    </div>
  )
}

export default Auth;

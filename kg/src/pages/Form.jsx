import React from "react";
import '../index.css';

import FormBlockKg from '../FormBlockKg';

import ImageUrl from '../assets/thumbs-up.png';

function Auth(props) {
  return (
    <div>
      <FormBlockKg imageUrl={ImageUrl} heroBg="hero-secondary hero-form-kz"/>
    </div>
  )
}

export default Auth;

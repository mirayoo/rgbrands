import React from "react";
import '../../index.css';

import FormBlock from '../../FormBlock';

import Heading from '../../assets/uz-form-title-ru.png';
import SubHeading from '../../assets/uz-form-subtitle-ru.png';
import ImageUrl from '../../assets/thumbs-up.png';

function Auth(props) {

  return (
    <div>
      <FormBlock headingUrl={Heading} subheadingUrl={SubHeading} imageUrl={ImageUrl} heroBg="hero-secondary hero-form-bg"/>
    </div>
  )
}

export default Auth;

import React from "react";
import '../../index.css';

import Hero from '../../Hero';
import Content from '../../Content';
import Footer from '../../Footer';

import Heading from '../../assets/heading-ru.png';
import BlueText from '../../assets/blue-text-block.png';
import BlueTextMob from '../../assets/blue-text-block-mob.png';
import BlueTitle from '../../assets/title-blue.png';

function Main(props) {
  return (
    <div>
      <Hero imageUrl={Heading} />
      <Content pictureUrl={BlueTextMob} imageUrl={BlueText}/>
      <Footer imageUrl={BlueTitle}/>
    </div>
  )
}

export default Main;

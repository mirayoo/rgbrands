import React from "react";
import '../../index.css';

import FirstBlock from '../../FirstBlock';
import ListItem from "../../components/ListItem";

import Heading from '../../assets/uz-first-step-heading-ru.png';
import SubHeading from '../../assets/uz-first-step-subheading-ru.png';
import Heading1 from "../../assets/uz-list-title-1-ru.png";
import HeadingMob1 from "../../assets/uz-list-title-mob-1-ru.png";
import Subheading1 from "../../assets/uz-list-subtitle-1-ru.png";
import SubheadingMob1 from "../../assets/uz-list-subtitle-mob-1-ru.png";
import Image1 from "../../assets/uz-list-img-1-ru.png";
import Heading2 from "../../assets/uz-list-title-2-ru.png";
import HeadingMob2 from "../../assets/uz-list-title-mob-2-ru.png";
import Subheading2 from "../../assets/uz-list-subtitle-2-ru.png";
import SubheadingMob2 from "../../assets/uz-list-subtitle-mob-2-ru.png";
import Image2 from "../../assets/uz-list-img-2-ru.png";
import Heading3 from "../../assets/uz-list-title-3-ru.png";
import HeadingMob3 from "../../assets/uz-list-title-mob-3-ru.png";
import Subheading3 from "../../assets/uz-list-subtitle-3-ru.png";
import SubheadingMob3 from "../../assets/uz-list-subtitle-mob-3-ru.png";
import Image3 from "../../assets/uz-list-img-3-ru.png";
import Heading4 from "../../assets/uz-list-title-4-ru.png";
import HeadingMob4 from "../../assets/uz-list-title-mob-4-ru.png";
import Subheading4 from "../../assets/uz-list-subtitle-4-ru.png";
import SubheadingMob4 from "../../assets/uz-list-subtitle-mob-4-ru.png";
import Image4 from "../../assets/uz-list-img-4-ru.png";
import Heading5 from "../../assets/uz-list-title-5-ru.png";
import HeadingMob5 from "../../assets/uz-list-title-mob-5-ru.png";
import Subheading5 from "../../assets/uz-list-subtitle-5-ru.png";
import SubheadingMob5 from "../../assets/uz-list-subtitle-mob-5-ru.png";
import Image5 from "../../assets/uz-list-img-5-ru.png";
import Heading6 from "../../assets/uz-list-title-6-ru.png";
import HeadingMob6 from "../../assets/uz-list-title-mob-6-ru.png";
import Subheading6 from "../../assets/uz-list-subtitle-6-ru.png";
import SubheadingMob6 from "../../assets/uz-list-subtitle-mob-6-ru.png";
import Image6 from "../../assets/uz-list-img-6-ru.png";
import Heading7 from "../../assets/uz-list-title-7-ru.png";
import HeadingMob7 from "../../assets/uz-list-title-mob-7-ru.png";
import Heading8 from "../../assets/uz-list-title-8-ru.png";
import HeadingMob8 from "../../assets/uz-list-title-mob-8-ru.png";

function FirstStep(props) {
  return (
    <div>
      <FirstBlock headingUrl={Heading} subheadingUrl={SubHeading} />
      <div className="list-block" id="content">
        <div className="wrapper list-block-inner">

          <ListItem navLink="/second-step" title={Heading1} titleMob={HeadingMob1} subTitle={Subheading1} subTitleMob={SubheadingMob1} imageUrl={Image1} />

          <ListItem navLink="/second-step" title={Heading2} titleMob={HeadingMob2} subTitle={Subheading2} subTitleMob={SubheadingMob2} imageUrl={Image2} />

          <ListItem navLink="/second-step" title={Heading3} titleMob={HeadingMob3} subTitle={Subheading3} subTitleMob={SubheadingMob3} imageUrl={Image3} />

          <ListItem navLink="/second-step" title={Heading4} titleMob={HeadingMob4} subTitle={Subheading4} subTitleMob={SubheadingMob4} imageUrl={Image4} />

          <ListItem navLink="/second-step" title={Heading5} titleMob={HeadingMob5} subTitle={Subheading5} subTitleMob={SubheadingMob5} imageUrl={Image5} />

          <ListItem navLink="/second-step" title={Heading6} titleMob={HeadingMob6} subTitle={Subheading6} subTitleMob={SubheadingMob6} imageUrl={Image6} />

          <ListItem navLink="/second-step" title={Heading7} titleMob={HeadingMob7} />

          <ListItem navLink="/second-step" title={Heading8} titleMob={HeadingMob8} />

        </div>
      </div>
    </div>
  )
}

export default FirstStep;

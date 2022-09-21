import React, {useState} from "react";
import '../../index.css';

import ListItem from "../../components/ListItem";
import ScrollToButton from "../../components/ScrollToButton3";

import Image1 from "../../assets/uz-list-img-1-ru.png";
import Image2 from "../../assets/uz-list-img-2-ru.png";
import Image3 from "../../assets/uz-list-img-3-ru.png";
import Image4 from "../../assets/uz-list-img-4-ru.png";
import Image5 from "../../assets/uz-list-img-5-ru.png";
import Image6 from "../../assets/uz-list-img-6-ru.png";
import { useTranslation } from "react-i18next";

import Food1 from "../../assets/plov.png";
import Food2 from "../../assets/besh.png";
import Food3 from "../../assets/burger.png";
import Food4 from "../../assets/pizza.png";
import Food5 from "../../assets/sushi.png";
import Food6 from "../../assets/chicken.png";
import Food7 from "../../assets/pasta.png";
import Food8 from "../../assets/cesar.png";
import PhoneCall from "../../assets/phone-call.png";
import PhoneNumber from "../../assets/1309.png";
import SwitcherKg from "../../components/SwitcherKg";
import RU from "../../assets/ru.png";

function QuizKg(props) {
  const { t, i18n } = useTranslation();

  const questions = [
    {
      heroImage: Food1,
      heroTitle: 'quiz.title',
      heroSubtitle: 'quiz.subtitle1',
      options: [
        { option: <ListItem title={t('secondBlock.heading1')} titleMob={t('secondBlock.mobHeading1')} subTitle={t('secondBlock.subheading1')} subTitleMob={t('secondBlock.mobSubheading1')} imageUrl={Image1} /> },
        { option: <ListItem title={t('secondBlock.heading2')} titleMob={t('secondBlock.mobHeading2')} subTitle={t('secondBlock.subheading2')} subTitleMob={t('secondBlock.mobSubheading2')} imageUrl={Image2} /> },
        { option: <ListItem title={t('secondBlock.heading3')} titleMob={t('secondBlock.mobHeading3')} subTitle={t('secondBlock.subheading3')} subTitleMob={t('secondBlock.mobSubheading3')} imageUrl={Image3} /> },
        { option: <ListItem title={t('secondBlock.heading4')} titleMob={t('secondBlock.mobHeading4')} subTitle={t('secondBlock.subheading4')} subTitleMob={t('secondBlock.mobSubheading4')} imageUrl={Image4} /> },
        { option: <ListItem title={t('secondBlock.heading5')} titleMob={t('secondBlock.mobHeading5')} subTitle={t('secondBlock.subheading5')} subTitleMob={t('secondBlock.mobSubheading5')} imageUrl={Image5} /> },
        { option: <ListItem title={t('secondBlock.heading6')} titleMob={t('secondBlock.mobHeading6')} subTitle={t('secondBlock.subheading6')} subTitleMob={t('secondBlock.mobSubheading6')} imageUrl={Image6} /> },
        { option: <ListItem title={t('secondBlock.heading7')} titleMob={t('secondBlock.mobHeading7')} /> },
        { option: <ListItem title={t('secondBlock.heading8')} titleMob={t('secondBlock.mobHeading8')} /> }
      ],
    },
    {
      heroImage: Food2,
      heroTitle: 'quiz.title',
      heroSubtitle: 'quiz.subtitle2',
      options: [
        { option: <ListItem title={t('secondBlock.heading1')} titleMob={t('secondBlock.mobHeading1')} subTitle={t('secondBlock.subheading1')} subTitleMob={t('secondBlock.mobSubheading1')} imageUrl={Image1} /> },
        { option: <ListItem title={t('secondBlock.heading2')} titleMob={t('secondBlock.mobHeading2')} subTitle={t('secondBlock.subheading2')} subTitleMob={t('secondBlock.mobSubheading2')} imageUrl={Image2} /> },
        { option: <ListItem title={t('secondBlock.heading3')} titleMob={t('secondBlock.mobHeading3')} subTitle={t('secondBlock.subheading3')} subTitleMob={t('secondBlock.mobSubheading3')} imageUrl={Image3} /> },
        { option: <ListItem title={t('secondBlock.heading4')} titleMob={t('secondBlock.mobHeading4')} subTitle={t('secondBlock.subheading4')} subTitleMob={t('secondBlock.mobSubheading4')} imageUrl={Image4} /> },
        { option: <ListItem title={t('secondBlock.heading5')} titleMob={t('secondBlock.mobHeading5')} subTitle={t('secondBlock.subheading5')} subTitleMob={t('secondBlock.mobSubheading5')} imageUrl={Image5} /> },
        { option: <ListItem title={t('secondBlock.heading6')} titleMob={t('secondBlock.mobHeading6')} subTitle={t('secondBlock.subheading6')} subTitleMob={t('secondBlock.mobSubheading6')} imageUrl={Image6} /> },
        { option: <ListItem title={t('secondBlock.heading7')} titleMob={t('secondBlock.mobHeading7')} /> },
        { option: <ListItem title={t('secondBlock.heading8')} titleMob={t('secondBlock.mobHeading8')} /> }
      ],
    },
    {
      heroImage: Food3,
      heroTitle: 'quiz.title',
      heroSubtitle: 'quiz.subtitle3',
      options: [
        { option: <ListItem title={t('secondBlock.heading1')} titleMob={t('secondBlock.mobHeading1')} subTitle={t('secondBlock.subheading1')} subTitleMob={t('secondBlock.mobSubheading1')} imageUrl={Image1} /> },
        { option: <ListItem title={t('secondBlock.heading2')} titleMob={t('secondBlock.mobHeading2')} subTitle={t('secondBlock.subheading2')} subTitleMob={t('secondBlock.mobSubheading2')} imageUrl={Image2} /> },
        { option: <ListItem title={t('secondBlock.heading3')} titleMob={t('secondBlock.mobHeading3')} subTitle={t('secondBlock.subheading3')} subTitleMob={t('secondBlock.mobSubheading3')} imageUrl={Image3} /> },
        { option: <ListItem title={t('secondBlock.heading4')} titleMob={t('secondBlock.mobHeading4')} subTitle={t('secondBlock.subheading4')} subTitleMob={t('secondBlock.mobSubheading4')} imageUrl={Image4} /> },
        { option: <ListItem title={t('secondBlock.heading5')} titleMob={t('secondBlock.mobHeading5')} subTitle={t('secondBlock.subheading5')} subTitleMob={t('secondBlock.mobSubheading5')} imageUrl={Image5} /> },
        { option: <ListItem title={t('secondBlock.heading6')} titleMob={t('secondBlock.mobHeading6')} subTitle={t('secondBlock.subheading6')} subTitleMob={t('secondBlock.mobSubheading6')} imageUrl={Image6} /> },
        { option: <ListItem title={t('secondBlock.heading7')} titleMob={t('secondBlock.mobHeading7')} /> },
        { option: <ListItem title={t('secondBlock.heading8')} titleMob={t('secondBlock.mobHeading8')} /> }
      ],
    },
    {
      heroImage: Food4,
      heroTitle: 'quiz.title',
      heroSubtitle: 'quiz.subtitle4',
      options: [
        {
          option: <ListItem title={t('secondBlock.heading1')} titleMob={t('secondBlock.mobHeading1')}
                                subTitle={t('secondBlock.subheading1')} subTitleMob={t('secondBlock.mobSubheading1')}
                                imageUrl={Image1} />
        },
        {
          option: <ListItem title={t('secondBlock.heading2')} titleMob={t('secondBlock.mobHeading2')}
                                subTitle={t('secondBlock.subheading2')} subTitleMob={t('secondBlock.mobSubheading2')}
                                imageUrl={Image2} />
        },
        {
          option: <ListItem title={t('secondBlock.heading3')} titleMob={t('secondBlock.mobHeading3')}
                                subTitle={t('secondBlock.subheading3')} subTitleMob={t('secondBlock.mobSubheading3')}
                                imageUrl={Image3} />
        },
        {
          option: <ListItem title={t('secondBlock.heading4')} titleMob={t('secondBlock.mobHeading4')}
                                subTitle={t('secondBlock.subheading4')} subTitleMob={t('secondBlock.mobSubheading4')}
                                imageUrl={Image4} />
        },
        {
          option: <ListItem title={t('secondBlock.heading5')} titleMob={t('secondBlock.mobHeading5')}
                                subTitle={t('secondBlock.subheading5')} subTitleMob={t('secondBlock.mobSubheading5')}
                                imageUrl={Image5} />
        },
        {
          option: <ListItem title={t('secondBlock.heading6')} titleMob={t('secondBlock.mobHeading6')}
                                subTitle={t('secondBlock.subheading6')} subTitleMob={t('secondBlock.mobSubheading6')}
                                imageUrl={Image6} />
        },
        { option: <ListItem title={t('secondBlock.heading7')} titleMob={t('secondBlock.mobHeading7')} /> },
        { option: <ListItem title={t('secondBlock.heading8')} titleMob={t('secondBlock.mobHeading8')} /> }
      ],
    },
    {
      heroImage: Food5,
      heroTitle: 'quiz.title',
      heroSubtitle: 'quiz.subtitle5',
      options: [
        { option: <ListItem title={t('secondBlock.heading1')} titleMob={t('secondBlock.mobHeading1')} subTitle={t('secondBlock.subheading1')} subTitleMob={t('secondBlock.mobSubheading1')} imageUrl={Image1} /> },
        { option: <ListItem title={t('secondBlock.heading2')} titleMob={t('secondBlock.mobHeading2')} subTitle={t('secondBlock.subheading2')} subTitleMob={t('secondBlock.mobSubheading2')} imageUrl={Image2} /> },
        { option: <ListItem title={t('secondBlock.heading3')} titleMob={t('secondBlock.mobHeading3')} subTitle={t('secondBlock.subheading3')} subTitleMob={t('secondBlock.mobSubheading3')} imageUrl={Image3} /> },
        { option: <ListItem title={t('secondBlock.heading4')} titleMob={t('secondBlock.mobHeading4')} subTitle={t('secondBlock.subheading4')} subTitleMob={t('secondBlock.mobSubheading4')} imageUrl={Image4} /> },
        { option: <ListItem title={t('secondBlock.heading5')} titleMob={t('secondBlock.mobHeading5')} subTitle={t('secondBlock.subheading5')} subTitleMob={t('secondBlock.mobSubheading5')} imageUrl={Image5} /> },
        { option: <ListItem title={t('secondBlock.heading6')} titleMob={t('secondBlock.mobHeading6')} subTitle={t('secondBlock.subheading6')} subTitleMob={t('secondBlock.mobSubheading6')} imageUrl={Image6} /> },
        { option: <ListItem title={t('secondBlock.heading7')} titleMob={t('secondBlock.mobHeading7')} /> },
        { option: <ListItem title={t('secondBlock.heading8')} titleMob={t('secondBlock.mobHeading8')} /> }
      ],
    },
    {
      heroImage: Food6,
      heroTitle: 'quiz.title',
      heroSubtitle: 'quiz.subtitle6',
      options: [
        { option: <ListItem title={t('secondBlock.heading1')} titleMob={t('secondBlock.mobHeading1')} subTitle={t('secondBlock.subheading1')} subTitleMob={t('secondBlock.mobSubheading1')} imageUrl={Image1} /> },
        { option: <ListItem title={t('secondBlock.heading2')} titleMob={t('secondBlock.mobHeading2')} subTitle={t('secondBlock.subheading2')} subTitleMob={t('secondBlock.mobSubheading2')} imageUrl={Image2} /> },
        { option: <ListItem title={t('secondBlock.heading3')} titleMob={t('secondBlock.mobHeading3')} subTitle={t('secondBlock.subheading3')} subTitleMob={t('secondBlock.mobSubheading3')} imageUrl={Image3} /> },
        { option: <ListItem title={t('secondBlock.heading4')} titleMob={t('secondBlock.mobHeading4')} subTitle={t('secondBlock.subheading4')} subTitleMob={t('secondBlock.mobSubheading4')} imageUrl={Image4} /> },
        { option: <ListItem title={t('secondBlock.heading5')} titleMob={t('secondBlock.mobHeading5')} subTitle={t('secondBlock.subheading5')} subTitleMob={t('secondBlock.mobSubheading5')} imageUrl={Image5} /> },
        { option: <ListItem title={t('secondBlock.heading6')} titleMob={t('secondBlock.mobHeading6')} subTitle={t('secondBlock.subheading6')} subTitleMob={t('secondBlock.mobSubheading6')} imageUrl={Image6} /> },
        { option: <ListItem title={t('secondBlock.heading7')} titleMob={t('secondBlock.mobHeading7')} /> },
        { option: <ListItem title={t('secondBlock.heading8')} titleMob={t('secondBlock.mobHeading8')} /> }
      ],
    },
    {
      heroImage: Food7,
      heroTitle: 'quiz.title',
      heroSubtitle: 'quiz.subtitle7',
      options: [
        { option: <ListItem title={t('secondBlock.heading1')} titleMob={t('secondBlock.mobHeading1')} subTitle={t('secondBlock.subheading1')} subTitleMob={t('secondBlock.mobSubheading1')} imageUrl={Image1} /> },
        { option: <ListItem title={t('secondBlock.heading2')} titleMob={t('secondBlock.mobHeading2')} subTitle={t('secondBlock.subheading2')} subTitleMob={t('secondBlock.mobSubheading2')} imageUrl={Image2} /> },
        { option: <ListItem title={t('secondBlock.heading3')} titleMob={t('secondBlock.mobHeading3')} subTitle={t('secondBlock.subheading3')} subTitleMob={t('secondBlock.mobSubheading3')} imageUrl={Image3} /> },
        { option: <ListItem title={t('secondBlock.heading4')} titleMob={t('secondBlock.mobHeading4')} subTitle={t('secondBlock.subheading4')} subTitleMob={t('secondBlock.mobSubheading4')} imageUrl={Image4} /> },
        { option: <ListItem title={t('secondBlock.heading5')} titleMob={t('secondBlock.mobHeading5')} subTitle={t('secondBlock.subheading5')} subTitleMob={t('secondBlock.mobSubheading5')} imageUrl={Image5} /> },
        { option: <ListItem title={t('secondBlock.heading6')} titleMob={t('secondBlock.mobHeading6')} subTitle={t('secondBlock.subheading6')} subTitleMob={t('secondBlock.mobSubheading6')} imageUrl={Image6} /> },
        { option: <ListItem title={t('secondBlock.heading7')} titleMob={t('secondBlock.mobHeading7')} /> },
        { option: <ListItem title={t('secondBlock.heading8')} titleMob={t('secondBlock.mobHeading8')} /> }
      ],
    },
    {
      heroImage: Food8,
      heroTitle: 'quiz.title',
      heroSubtitle: 'quiz.subtitle8',
      options: [
        { option: <ListItem title={t('secondBlock.heading1')} titleMob={t('secondBlock.mobHeading1')} subTitle={t('secondBlock.subheading1')} subTitleMob={t('secondBlock.mobSubheading1')} imageUrl={Image1} /> },
        { option: <ListItem title={t('secondBlock.heading2')} titleMob={t('secondBlock.mobHeading2')} subTitle={t('secondBlock.subheading2')} subTitleMob={t('secondBlock.mobSubheading2')} imageUrl={Image2} /> },
        { option: <ListItem title={t('secondBlock.heading3')} titleMob={t('secondBlock.mobHeading3')} subTitle={t('secondBlock.subheading3')} subTitleMob={t('secondBlock.mobSubheading3')} imageUrl={Image3} /> },
        { option: <ListItem title={t('secondBlock.heading4')} titleMob={t('secondBlock.mobHeading4')} subTitle={t('secondBlock.subheading4')} subTitleMob={t('secondBlock.mobSubheading4')} imageUrl={Image4} /> },
        { option: <ListItem title={t('secondBlock.heading5')} titleMob={t('secondBlock.mobHeading5')} subTitle={t('secondBlock.subheading5')} subTitleMob={t('secondBlock.mobSubheading5')} imageUrl={Image5} /> },
        { option: <ListItem title={t('secondBlock.heading6')} titleMob={t('secondBlock.mobHeading6')} subTitle={t('secondBlock.subheading6')} subTitleMob={t('secondBlock.mobSubheading6')} imageUrl={Image6} /> },
        { option: <ListItem title={t('secondBlock.heading7')} titleMob={t('secondBlock.mobHeading7')} /> },
        { option: <ListItem title={t('secondBlock.heading8')} titleMob={t('secondBlock.mobHeading8')} /> }
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerOptionClick = () => {

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      const url= "/thanks";
      setTimeout(function(){window.location = url;}, 100);
    }
  };

  return (
    <div>
      <div className="hero-secondary hero-secondary-kg" id="header">
        <div className="wrapper ">
          <div className="header-nav nav-secondary">
            <a className="button button-secondary button-phone" href="tel:1309"><img className="phone-icon" src={PhoneCall} alt="" /><img className="phone-number" src={PhoneNumber} alt="" /></a>
            <img className="heading-secondary heading-secondary-quiz" src={t(`${questions[currentQuestion].heroTitle}`)}/>
            <img className="subheading-secondary subheading-secondary-quiz" src={t(`${questions[currentQuestion].heroSubtitle}`)}/>
            <a className="button" href="#"><img src={t('header.rules')} alt="" /></a>
            <SwitcherKg imageUrl={RU}/>
          </div>
          <img className="image-quiz" src={questions[currentQuestion].heroImage} alt="" />
        </div>
      </div>

      <div className="list-block list-block-quiz" id="content">
        <div className="wrapper list-block-inner">

          {questions[currentQuestion].options.map((answerOption) => (
            <div className="list-item" onClick={() => handleAnswerOptionClick(answerOption)}><ScrollToButton duration="300" toId="header" >{answerOption.option}</ScrollToButton></div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default QuizKg;

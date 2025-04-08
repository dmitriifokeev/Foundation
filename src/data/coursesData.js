// обложки карточек курсов

import arrowSalarySection from "../assets/img/arrowSalarySection.svg";
import infiniti from "../assets/img/infinityLable.png";
import vsCodeLogo from "../assets/img/softLogos/vsCodeLogo.png";
import chromeLogo from "../assets/img/softLogos/chromeLogo.png";
import { v4 as uuidv4 } from "uuid";

// Импорт програм курсов

import javaScriptEssentialCourseData from "./courses/javaScriptEssential/javaScriptEssentialData";
import htmlEssentialData from "./courses/htmlEssential/htmlEssentialData";
import reactJsEssentialCourseData from "./courses/reactJsEssential/reactJsEssentialData";
import htmlProCourselData from "./courses/htmlPro/htmlProData";
import tildaEssentialCourselData from "./courses/tildaEssential/tildaEssentialData";
import webflowEssentialCourseData from "./courses/webflowEssential/webflowEssentialCourseData";
import wordpressEssentialData from "./courses/wordpressEssential/wordpressEssentialData";
import webDesignFigmaEssentialData from "./courses/webDesignFigmaEssential/webDesignFigmaEssentialData";
import figmaAnimationsData from "./courses/figmaAnimations/figmaAnimationsData";
import designTheoryData from "./courses/designTheory/designTheoryData";
import illustratorEssentialData from "./courses/illustratorEssential/illustratorEssentialData";
import photoshopEssentialData from "./courses/photoshopEssential/photoshopEssentialData";
import afterEffectsEssentialData from "./courses/afterEffectsEssential/afterEffectsEssentialData";
import photoshopProData from "./courses/photoshopPro/photoshopProData";
import premiereProEssentialData from "./courses/premiereProEssential/premiereProEssentialData";

import programJsHtmlData from "./courses/programJsHtml/programJsHtmlData";
import programJsHtmlHtmlProCourseData from "./courses/programHtmlHtmlPro/programHtmlHtmlProData";
import programAePPData from "./courses/programAePP/programAePPData";
import programFigmaAnimationFigmaDesignData from "./courses/programFigmaAnimationFigmaDesign/programFigmaAnimationFigmaDesignData";
import programPsAiData from "./courses/programPsAi/programPsAiData";

const coursesData = [
  {
    slug: "webDevelopment",
    title: "Веб-разработка",
    description: "Курсы по веб-разработке",
    courses: [
      javaScriptEssentialCourseData,
      htmlEssentialData,
      reactJsEssentialCourseData,
      htmlProCourselData,
    ],
  },
  {
    slug: "CMS",
    title: "CMS и Конструкторы",
    description: "Курсы по CMS и конструкторам",
    courses: [tildaEssentialCourselData, webflowEssentialCourseData, wordpressEssentialData],
  },
  {
    slug: "webDesign",
    title: "Веб-Дизайн",
    description: "Курсы по веб-дизайну",
    courses: [webDesignFigmaEssentialData, figmaAnimationsData, designTheoryData],
  },
  {
    slug: "graphicDesign",
    title: "Графический дизайн",
    description: "Курсы по графическому дизайну",
    courses: [
      illustratorEssentialData,
      photoshopEssentialData,
      afterEffectsEssentialData,
      photoshopProData,
    ],
  },
  {
    slug: "videoMontage",
    title: "Видеомонтаж",
    description: "Курсы по видеомонтажу",
    courses: [premiereProEssentialData, afterEffectsEssentialData],
  },
  //Формируется динамически с помощью filteredCoursesData.js
  {
    slug: "proLevel",
    title: "Продвинутый уровень",
    description: "Курсы для продвинутых",
    courses: [],
  },
  //Формируется динамически с помощью filteredCoursesData.js
  {
    slug: "fromZero",
    title: "С нуля",
    description: "Курсы для начинающих",
    courses: [],
  },

  {
    slug: "programms",
    title: "Программы курсов",
    description: "Программы курсов",
    courses: [
      programJsHtmlData,
      programJsHtmlHtmlProCourseData,
      programAePPData,
      programFigmaAnimationFigmaDesignData,
      programPsAiData,
    ],
  },
];

export default coursesData;

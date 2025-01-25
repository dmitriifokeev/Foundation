import htmlEssential from "../assets/img/htmlEssential.jpg";
import jsEssentialFront from "../assets/img/jsEssentialFront.jpg";
import reactEssential from "../assets/img/reactEssential.jpg";
import htmlPro from "../assets/img/htmlPro.jpg";
import tildaEssential from "../assets/img/tildaEssential.jpg";
import webflowEssential from "../assets/img/webflowEssential.jpg";
import wordPressEssential from "../assets/img/wordPressEssential.jpg";
import figmaEssential from "../assets/img/figmaEssential.jpg";
import figmaAnimation from "../assets/img/figmaAnimations.jpg";
import designTheoryEssential from "../assets/img/designTheoryEssential.jpg";
import photoshopEssential from "../assets/img/photoshopEsssential.jpg";
import photoshopPro from "../assets/img/photoshopPro.jpg";
import illustratorEssential from "../assets/img/illustratorEssential.jpg";
import afterEffectsEssential from "../assets/img/afterEffectsEssential.jpg";
import premiereProEssential from "../assets/img/premiereProEssential.jpg";
import programmWebDev from "../assets/img/programmWebDev.png";

const coursesData = {
  webDevelopment: [
    {
      label: { title: "JavaScript с нуля", tag: "Со знанием HTML", type: "Курс" },
      bgImg: jsEssentialFront,
      levelDifficulties: 2,

      detailsDescription: {
        lessons: "226 уроков",
        hours: "40 часа видео уроков",
        months: "4 месяца время прохождения",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
        oldPrice: "34,990 руб",
        price: "24,990 руб",
      },
    },
    {
      label: { title: "Верстка HTML / CSS", tag: "С нуля", type: "Курс" },
      bgImg: htmlEssential,
      levelDifficulties: 1,

      detailsDescription: {
        lessons: "246 уроков",
        hours: "30 часа видео уроков",
        months: "2 месяца время прохождения",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
        oldPrice: "34,990 руб",
        price: "24,990 руб",
      },
    },
    {
      label: {
        title: "React JS",
        tag: "Со знанием JS и HTML",
        type: "Курс",
      },
      bgImg: reactEssential,
      levelDifficulties: 2,

      detailsDescription: {
        lessons: "226 уроков",
        hours: "40 часа видео уроков",
        months: "4 месяца время прохождения",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
        oldPrice: "34,990 руб",
        price: "24,990 руб",
      },
    },
    {
      label: {
        title: "Верстка HTML/CSS (Pro)",
        tag: "Со знанием HTML / CSS",
        type: "Курс",
      },
      bgImg: htmlPro,
      levelDifficulties: 2,

      detailsDescription: {
        lessons: "226 уроков",
        hours: "40 часа видео уроков",
        months: "4 месяца время прохождения",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
        oldPrice: "34,990 руб",
        price: "24,990 руб",
      },
    },
  ],
  CMS: [
    {
      label: {
        title: "Создание сайтов в Tilda",
        tag: "C нуля",
        type: "Курс",
      },
      bgImg: tildaEssential,
      levelDifficulties: 1,

      detailsDescription: {
        lessons: "226 уроков",
        hours: "40 часа видео уроков",
        months: "4 месяца время прохождения",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
        oldPrice: "34,990 руб",
        price: "24,990 руб",
      },
    },
    {
      label: {
        title: "Верстка в Webflow",
        tag: "C нуля",
        type: "Курс",
      },
      bgImg: webflowEssential,
      levelDifficulties: 1,

      detailsDescription: {
        lessons: "226 уроков",
        hours: "40 часа видео уроков",
        months: "4 месяца время прохождения",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
        oldPrice: "34,990 руб",
        price: "24,990 руб",
      },
    },
    {
      label: {
        title: "WordPress",
        tag: "C нуля",
        type: "Курс",
      },
      bgImg: wordPressEssential,
      levelDifficulties: 1,

      detailsDescription: {
        lessons: "226 уроков",
        hours: "40 часа видео уроков",
        months: "4 месяца время прохождения",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
        oldPrice: "34,990 руб",
        price: "24,990 руб",
      },
    },
  ],
  webDesign: [
    {
      label: {
        title: "Веб дизайн в Figma",
        tag: "C нуля",
        type: "Курс",
      },
      bgImg: figmaEssential,
      levelDifficulties: 1,

      detailsDescription: {
        lessons: "226 уроков",
        hours: "40 часа видео уроков",
        months: "4 месяца время прохождения",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
        oldPrice: "34,990 руб",
        price: "24,990 руб",
      },
    },
    {
      label: {
        title: "Figma Анимации",
        tag: "C знаниями основ Figma",
        type: "Курс",
      },
      bgImg: figmaAnimation,
      levelDifficulties: 2,

      detailsDescription: {
        lessons: "226 уроков",
        hours: "40 часа видео уроков",
        months: "4 месяца время прохождения",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
        oldPrice: "34,990 руб",
        price: "24,990 руб",
      },
    },
    {
      label: {
        title: "Теория дизайна",
        tag: "C нуля",
        type: "Курс",
      },
      bgImg: designTheoryEssential,
      levelDifficulties: 1,

      detailsDescription: {
        lessons: "226 уроков",
        hours: "40 часа видео уроков",
        months: "4 месяца время прохождения",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
        oldPrice: "34,990 руб",
        price: "24,990 руб",
      },
    },
  ],
  graphicDesign: [
    {
      label: {
        title: "Illistrator",
        tag: "C нуля",
        type: "Курс",
      },
      bgImg: illustratorEssential,
      levelDifficulties: 1,

      detailsDescription: {
        lessons: "226 уроков",
        hours: "40 часа видео уроков",
        months: "4 месяца время прохождения",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
        oldPrice: "34,990 руб",
        price: "24,990 руб",
      },
    },
    {
      label: {
        title: "Photoshop",
        tag: "C нуля",
        type: "Курс",
      },
      bgImg: photoshopEssential,
      levelDifficulties: 1,

      detailsDescription: {
        lessons: "226 уроков",
        hours: "40 часа видео уроков",
        months: "4 месяца время прохождения",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
        oldPrice: "34,990 руб",
        price: "24,990 руб",
      },
    },

    {
      label: {
        title: "Adobe After Effects",
        tag: "C нуля",
        type: "Курс",
      },
      bgImg: afterEffectsEssential,
      levelDifficulties: 1,

      detailsDescription: {
        lessons: "226 уроков",
        hours: "40 часа видео уроков",
        months: "4 месяца время прохождения",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
        oldPrice: "34,990 руб",
        price: "24,990 руб",
      },
    },
    {
      label: {
        title: "Photoshop (Pro)",
        tag: "Со знаниями Photoshop",
        type: "Курс",
      },
      bgImg: photoshopPro,
      levelDifficulties: 2,

      detailsDescription: {
        lessons: "226 уроков",
        hours: "40 часа видео уроков",
        months: "4 месяца время прохождения",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
        oldPrice: "34,990 руб",
        price: "24,990 руб",
      },
    },
  ],
  videoMontage: [
    {
      label: {
        title: "Adobe Premiere Pro",
        tag: "C нуля",
        type: "Курс",
      },
      bgImg: premiereProEssential,
      levelDifficulties: 1,

      detailsDescription: {
        lessons: "226 уроков",
        hours: "40 часа видео уроков",
        months: "4 месяца время прохождения",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
        oldPrice: "34,990 руб",
        price: "24,990 руб",
      },
    },
    {
      label: {
        title: "Adobe After Effects",
        tag: "C нуля",
        type: "Курс",
      },
      bgImg: afterEffectsEssential,
      levelDifficulties: 1,

      detailsDescription: {
        lessons: "226 уроков",
        hours: "40 часа видео уроков",
        months: "4 месяца время прохождения",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
        oldPrice: "34,990 руб",
        price: "24,990 руб",
      },
    },
  ],
  programms: [
    {
      label: {
        title: "Front-End Веб разработчик",
        tag: "C нуля",
        type: "Программа",
      },
      group: "webDevelopment",
      bgImg: programmWebDev,
      levelDifficulties: 1,

      courses: [
        {
          title: "JavaScript с нуля",
          lessons: "226 уроков",
          hours: "40 часа видео уроков",
          months: "4 месяца время прохождения",
          practices: "20 самостоятельных практик",
          tests: "10 тестов",
          projects: "5 проектов",
        },
        {
          title: "Верстка HTML / CSS",
          lessons: "226 уроков",
          hours: "40 часа видео уроков",
          months: "4 месяца время прохождения",
          practices: "20 самостоятельных практик",
          tests: "10 тестов",
          projects: "5 проектов",
        },
        {
          title: "React JS",
          lessons: "226 уроков",
          hours: "40 часа видео уроков",
          months: "4 месяца время прохождения",
          practices: "20 самостоятельных практик",
          tests: "10 тестов",
          projects: "5 проектов",
        },
        { price: "24,990 руб", oldPrice: "34,990 руб" },
      ],
    },
    {
      label: {
        title: "Графический дизайнер с нуля",
        tag: "C нуля",
        type: "Программа",
      },
      group: "graphicDesign",
      bgImg: programmWebDev,
      levelDifficulties: 1,

      courses: [
        {
          title: "Photoshop с нуля",
          lessons: "226 уроков",
          hours: "40 часа видео уроков",
          months: "4 месяца время прохождения",
          practices: "20 самостоятельных практик",
          tests: "10 тестов",
          projects: "5 проектов",
        },
        {
          title: "After Effects с нуля",
          lessons: "226 уроков",
          hours: "40 часа видео уроков",
          months: "4 месяца время прохождения",
          practices: "20 самостоятельных практик",
          tests: "10 тестов",
          projects: "5 проектов",
        },
        {
          title: "Illustrator с нуля",
          lessons: "226 уроков",
          hours: "40 часа видео уроков",
          months: "4 месяца время прохождения",
          practices: "20 самостоятельных практик",
          tests: "10 тестов",
          projects: "5 проектов",
        },
        { price: "24,990 руб", oldPrice: "34,990 руб" },
      ],
    },
    {
      label: {
        title: "Веб дизайнер с нуля",
        tag: "C нуля",
        type: "Программа",
      },
      group: "webDesign",
      bgImg: programmWebDev,
      levelDifficulties: 1,

      courses: [
        {
          title: "Figma с нуля",
          lessons: "226 уроков",
          hours: "40 часа видео уроков",
          months: "4 месяца время прохождения",
          practices: "20 самостоятельных практик",
          tests: "10 тестов",
          projects: "5 проектов",
        },
        {
          title: "Figma Анимации",
          lessons: "226 уроков",
          hours: "40 часа видео уроков",
          months: "4 месяца время прохождения",
          practices: "20 самостоятельных практик",
          tests: "10 тестов",
          projects: "5 проектов",
        },
        {
          title: "Теория дизайна",
          lessons: "226 уроков",
          hours: "40 часа видео уроков",
          months: "4 месяца время прохождения",
          practices: "20 самостоятельных практик",
          tests: "10 тестов",
          projects: "5 проектов",
        },
        { price: "24,990 руб", oldPrice: "34,990 руб" },
      ],
    },
  ],
};

export default coursesData;

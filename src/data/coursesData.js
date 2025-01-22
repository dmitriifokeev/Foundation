import htmlEssential from "../assets/img/htmlEssential.jpg";
import jsEssentialFront from "../assets/img/jsEssentialFront.jpg";
import reactEssential from "../assets/img/reactEssential.jpg";
import htmlPro from "../assets/img/htmlPro.jpg";

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
        title: "Создание сайтов Tilda",
        tag: "C нуля",
        type: "Курс",
      },
      bgImg: "./assets/hero.jpg",
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
        title: "Верстка сайтов в Webflow",
        tag: "C нуля",
        type: "Курс",
      },
      bgImg: "./assets/hero.jpg",
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
        title: "Создание сайтов в WordPress",
        tag: "C нуля",
        type: "Курс",
      },
      bgImg: "./assets/hero.jpg",
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
      bgImg: "./assets/hero.jpg",
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
      bgImg: "./assets/hero.jpg",
      levelDifficulties: 2,

      frontDescription: {
        img: "./assets/hero.jpg",

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
    },
    {
      label: {
        title: "Теория цифрового дизайна",
        tag: "C нуля",
        type: "Курс",
      },
      bgImg: "./assets/hero.jpg",
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
      bgImg: "./assets/hero.jpg",
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
      bgImg: "./assets/hero.jpg",
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
        tag: "Со знаниями основ Photoshop",
        type: "Курс",
      },
      bgImg: "./assets/hero.jpg",
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
        title: "Adobe After Effects",
        tag: "C нуля",
        type: "Курс",
      },
      bgImg: "./assets/hero.jpg",
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
  videoMontage: [
    {
      label: {
        title: "Adobe Premiere Pro",
        tag: "C нуля",
        type: "Курс",
      },
      bgImg: "./assets/hero.jpg",
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
      bgImg: "./assets/hero.jpg",
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
  proLevel: [],
  fromZero: [],
  programms: [
    {
      label: {
        title: "Front-End Веб разработчик",
        tag: "C нуля",
        type: "Программа",
      },
      bgImg: "./assets/hero.jpg",
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
          title: "Верста HTML / CSS",
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
  ],
};

export default coursesData;

import arrowSalarySection from "../../../assets/img/arrowSalarySection.svg";
import infiniti from "../../../assets/img/infinityLable.png";
import bgImgJsHtmlShort from "../../../assets/img/bgCourseCards/bgImgJsHtmlShort.jpg";

import { v4 as uuidv4 } from "uuid";

import programmWebDev from "../../../assets/img/bgCourseCards/programmWebDev.jpg";

import htmlEssentialProgram from "../htmlEssential/htmlEssentialProgram";
import jsEssentialProgram from "../javaScriptEssential/jsEssentialProgram";

const programJsHtmlCourselData = {
  slug: "js-html-program",
  group: ["webDevelopment", "fromZero"], // добавлено свойство group
  hero: {
    title: "Программа: Верстка + Js",
    tag: "C нуля",
    type: "Программа",
    heroSubtitle:
      "В этом пакете из 2-х курсов, вы найдете все для старка карьеры в IT в качестве Front-end web разработчика. Быстрый старт в IT! Цена на пакет курсов ниже на 20% чем если бы вы приобретали курсы отдельно",
    bgImgShort: bgImgJsHtmlShort,
  },
  bgImg: programmWebDev,
  difficulty: 1,
  details: {
    lessons: "324 урока",
    hours: "49.5 часов",
    duration: "6 месяцев",
    practices: "15 самостоятельных практик",
    tests: "5 тестов",
    projects: "4 проекта",
    // price: "4,990 руб",
    price: "5 руб",
    oldPrice: "9,990 руб",

    // Эти данные обязательны:
    skillspaceToken: "bdc987e4-6eb8-35e9-8559-ca8530018d22", // API-ключ курса
    skillspaceCourses: [
      { courseId: "14497", groupId: "23496" },
      { courseId: "15551", groupId: "25151" },
    ],

    about: {
      boxImgTitle: "HTML — основа веб-структуры, JavaScript — динамика и интерактивность",
      title:
        "HTML — основа структуры веб-страниц, JavaScript — интерактивность и работа с сервером",
      text: "HTML — это фундамент создания веб-страниц, обеспечивающий структуру и основу для верстки. JavaScript — мощный инструмент для добавления интерактивности и функциональности в веб-приложениях, играх и мобильных приложениях.",
      highlight: "",
    },
    salary: {
      title:
        "HTML — это основа любой веб-страницы и первый шаг в IT. JavaScript — один из самыз востребованных языков программирования",
      text: "Средняя зарплата фронтенд-разработчика более 150 000 руб/мес",
      note: "",
      salaryLevels: [
        {
          level: "junior",
          salary: "70К+",
          experience: "От 9 до 18 месяцев",
          bgColor: "bg-neutral-100",
          height: "190px",
          icon: arrowSalarySection,
          iconSize: "50px",
        },
        {
          level: "middle",
          salary: "150К+",
          experience: "От 1,5 до 5 лет",
          bgColor: "bg-secondary-50",
          height: "220px",
          icon: arrowSalarySection,
          iconSize: "50px",
        },
        {
          level: "senior",
          salary: "250К+",
          experience: "От 5 лет",
          bgColor: "bg-primary-50",
          height: "270px",
          icon: infiniti,
          iconSize: "180px",
          topRight: "-28px",
        },
      ],
    },
    skills: {
      topics: [
        "Вы узнаете, как создавать сайты на языках HTML и CSS",
        "Научитесь размещать свой сайт в сети интернет",
        "Получите необходимые знания для использования библиотеки Bootstrap",
        "Научитесь работать с препроцессором SASS/SCSS",
        "Изучите методологию БЭМ",
        "Научитесь создавать адаптивные сайты, которые будут выглядеть отлично на любом устройстве",
        "Научитесь создавать дизайн сайтов",
        "Изучите базу программы Figma",
        "Научитесь работать в программе VS Code",
        "Поймете все этапы разработки сайтов",
        "Изучите технологию Flexbox",
        "Научитесь манипулировать любыми визуальными элементами на веб страницах",
        "Научитесь создавать полноценные web-приложения",
        "Научитесь работать с типами данных языка",
        "Узнаете множество методов современной разработки",
        "Освоите все самые важные темы и области JavaScript",
        "Научитесь создавать программы на JavaScript",
        "Поймете, как работает язык программирования JavaScript",
        "Узнаете, что такое функциональное программирование",
        "Узнаете основы программирования",
        "Разберетесь, как создаются реальные проекты на JavaScript",
      ],
      tools: [],
    },
    reviews: {
      totalCount: 0,
      ratings: {
        udemy: 0,
        stepik: 0,
      },
      links: {
        udemy: "#",
        stepik: "#",
      },
      list: [
        {
          id: uuidv4(),
          name: "Иван",
          course: "Курс по WordPress с нуля",
          text: "Замечательный курс, уже третий, который прохожу у Дмитрия. Как всегда, очень доступное и понятное изложение, прекрасная логика и удобная подача материала со всеми нужными ссылками, сервисами, презентациями. Объем материла тщательно отфильтрован, ничего лишнего.",
          rating: 5,
        },
        {
          id: uuidv4(),
          name: "Мария",
          course: "Курс по WordPress с нуля",
          text: "Замечательный курс, уже третий, который прохожу у Дмитрия. Как всегда, очень доступное и понятное изложение, прекрасная логика и удобная подача материала со всеми нужными ссылками, сервисами, презентациями. Объем материла тщательно отфильтрован, ничего лишнего.",
          rating: 5,
        },
        {
          id: uuidv4(),
          name: "Иван",
          course: "Курс по WordPress с нуля",
          text: "Замечательный курс, уже третий, который прохожу у Дмитрия. Как всегда, очень доступное и понятное изложение, прекрасная логика и удобная подача материала со всеми нужными ссылками, сервисами, презентациями. Объем материла тщательно отфильтрован, ничего лишнего.",
          rating: 5,
        },
        {
          id: uuidv4(),
          name: "Иван",
          course: "Курс по WordPress с нуля",
          text: "Замечательный курс, уже третий, который прохожу у Дмитрия. Как всегда, очень доступное и понятное изложение, прекрасная логика и удобная подача материала со всеми нужными ссылками, сервисами, презентациями. Объем материла тщательно отфильтрован, ничего лишнего.",
          rating: 5,
        },
      ],
    },
    videoAdLink: "https://rutube.ru/play/embed/ae4b8e3f7636e56216b5a6508d78103c",
    programs: [htmlEssentialProgram, jsEssentialProgram],

    programCourses: [
      {
        title: "JavaScript с нуля",
        lessons: "226 уроков",
        hours: "40 часов видео",
        duration: "4 месяца",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
      },
      {
        title: "Верстка HTML / CSS",
        lessons: "226 уроков",
        hours: "40 часов видео",
        duration: "4 месяца",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
      },
    ],
  },
};

export default programJsHtmlCourselData;

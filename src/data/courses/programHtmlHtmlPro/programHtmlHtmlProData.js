import arrowSalarySection from "../../../assets/img/arrowSalarySection.svg";
import infiniti from "../../../assets/img/infinityLable.png";
import bgImgHtmlHtmlShort from "../../../assets/img/bgCourseCards/bgImgHtmlHtmlShort.jpg";

import { v4 as uuidv4 } from "uuid";

import programmHtmlHtmlPro from "../../../assets/img/bgCourseCards/programmHtmlHtmlPro.jpg";

import htmlEssentialProgram from "../htmlEssential/htmlEssentialProgram";
import htmlProProgram from "../htmlPro/htmlProProgram";

const programJsHtmlHtmlProCourseData = {
  slug: "html-htmlPro-program",
  group: ["webDevelopment", "fromZero"], // добавлено свойство group
  hero: {
    title: "Верстка сайтов Pro Level",
    tag: "C нуля",
    type: "Программа",
    heroSubtitle:
      "В этом пакете из 2-х курсов, вы найдете все о современной верстке сайтов.Быстрый старт в профессию веб разработчик! Цена на пакет курсов ниже на 20% чем если бы вы приобретали курсы отдельно",
    bgImgShort: bgImgHtmlHtmlShort,
  },
  bgImg: programmHtmlHtmlPro,
  difficulty: 1,
  details: {
    lessons: "263 урока",
    hours: "38,5 часов",
    duration: "4 месяца",
    practices: "10 самостоятельных практик",
    // tests: "—",
    projects: "4 проекта",
    price: "4,490 руб",
    oldPrice: "8,990 руб",
    about: {
      boxImgTitle:
        "HTML — основа всех веб-страниц, а HTML Pro — это семантическая верстка и современные стандарты HTML5",
      title:
        "Основы HTML, структура веб-страниц, вёрстка и семантика. Все это Курс по HTML. Углубленное изучение, современные стандарты HTML5 и семантика — все это Курс HTML Pro",
      text: "HTML — это основа всех веб-страниц. В этом курсе вы изучите структуру HTML-документов, основы верстки и научитесь создавать семантически правильные и доступные сайты. HTML Pro — это курс для тех, кто хочет углубить знания в верстке, изучить семантику, современные стандарты HTML5 и научиться создавать сложные и адаптивные структуры веб-страниц",
      highlight: "...",
    },
    salary: {
      title: "HTML — основа любой веб-страницы и первый шаг в IT",
      text: "Средняя зарплата верстальщика начинается от 80 000 руб/мес",
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
          salary: "110К+",
          experience: "От 1,5 до 2 лет",
          bgColor: "bg-secondary-50",
          height: "220px",
          icon: arrowSalarySection,
          iconSize: "50px",
        },
        {
          level: "senior",
          salary: "140К+",
          experience: "От 2 лет",
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
        "Изучите HTML5",
        "Изучите CSS3",
        "Получите необходимые знания для использования библиотеки Bootstrap",
        "Научитесь работать с препроцессором SASS/SCSS",
        "Изучите методологию БЭМ",
        "Научитесь создавать адаптивные сайты, которые будут выглядеть отлично на любом устройстве",
        "Научитесь создавать дизайн сайтов",
        "Изучите базу программы Figma",
        "Научитесь работать в программе VS Code",
        "Поймете все этапы разработки сайтов",
        "Изучите современные стандарты позиционирования элементов сайта",
        "Изучите технологию Flexbox",
        "Изучите систему создания сайтов на CSS GRID",
        "Научитесь использовать CSS анимации на своих сайтах",
        "Узнаете продвинутые способы адаптивного дизайна",
        "Научитесь создавать 'гибкие, резиновые сайты'",
        "Узнаете, как использовать NPM пакеты при разработке сайта",
        "Узнаете приемы, которые ускорят ваш рабочий процесс в несколько раз",
        "Научитесь использовать Gulp в своих проектах",
        "Научитесь использовать систему контроля версий Git",
        "Узнаете, как размещать версии проектов на GitHub",
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
    videoAdLink: "https://rutube.ru/play/embed/069086ef7a5f33205b3cdb9ed432c361",
    programs: [htmlEssentialProgram, htmlProProgram],

    programCourses: [
      {
        title: "Photoshop с нуля",
        lessons: "226 уроков",
        hours: "40 часов видео",
        duration: "4 месяца",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
      },
      {
        title: "After Effects с нуля",
        lessons: "226 уроков",
        hours: "40 часов видео",
        duration: "4 месяца",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
      },
      {
        title: "Illustrator с нуля",
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

export default programJsHtmlHtmlProCourseData;

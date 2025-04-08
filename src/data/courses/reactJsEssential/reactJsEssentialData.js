import arrowSalarySection from "../../../assets/img/arrowSalarySection.svg";
import infiniti from "../../../assets/img/infinityLable.png";

import { v4 as uuidv4 } from "uuid";

import reactEssential from "../../../assets/img/bgCourseCards/reactEssential.jpg";

import reactJsEssentialProgram from "./reactJsEssentialProgram";

const reactJsEssentialCourseData =
  // React JS
  {
    slug: "react-essential",
    hero: {
      title: "Курс React JS",
      tag: "Со знанием JS и HTML",
      heroSubtitle:
        "Ультимативный курс по React JS + Полное изучение библиотек экосистемы React ( Redux / Router ) Бонус - полный курс по Tailwind CSS",
      type: "Курс",
    },
    bgImg: reactEssential,
    difficulty: 2,

    details: {
      raiting: "4,8 рейтинг",
      raitingNubmer: "20+ отзывов (Новый курс)",
      lessons: "214 уроков",
      hours: "31 час видео",
      duration: "4 месяца",
      practices: "13 самостоятельных практик",
      tests: "12 тестов",
      projects: "2 проекта",
      price: "2,990 руб",
      // price: "5 руб",
      oldPrice: "5,990 руб",

      // Эти данные обязательны:
      skillspaceToken: "bdc987e4-6eb8-35e9-8559-ca8530018d22", // API-ключ курса

      skillspaceCourses: [{ courseId: "65374", groupId: "116486" }],

      about: {
        boxImgTitle:
          "React JS — популярная библиотека для создания современных интерактивных веб-приложений.",
        title:
          "Компоненты, хуки, состояние, маршрутизация, а также современная разработка. Все это Курс по React JS",
        text: "React JS — это популярная библиотека для разработки веб-приложений. В этом курсе вы изучите основы работы с компонентами, хуками, состоянием и маршрутизацией для создания современных интерактивных приложений.",
        highlight: "...",
      },

      salary: {
        title: "React JS — один из самых востребованных навыков в веб-разработке.",
        text: "Средняя зарплата React-разработчика более 180 000 руб/мес.",
        note: "...",
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
            salary: "120К+",
            experience: "От 1,5 до 3 лет",
            bgColor: "bg-secondary-50",
            height: "220px",
            icon: arrowSalarySection,
            iconSize: "50px",
          },
          {
            level: "senior",
            salary: "200К+",
            experience: "От 3 лет",
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
          "Изучите все аспекты библиотеки React JS",
          "Изучите библиотеку для управления маршрутами — React Router",
          "Изучите библиотеку для управления состояниями — React Redux",
          "Освойте современный синтаксис Redux Toolkit",
          "Освойте современный синтаксис React Router 6.4+",
          "Узнайте о последних обновлениях библиотеки React и современных методах разработки",
          "Научитесь создавать веб-приложения любой сложности",
          "Изучите фреймворк для стилизации веб-приложений — Tailwind CSS",
          "Создайте несколько приложений, включая планировщик задач и интернет-магазин",
          "Узнаете, как оптимизировать приложение React",
          "Разберитесь с тем, как React работает 'под капотом'",
          "Изучите все необходимые хуки и методы React JS",
          "Изучите современные методы разработки веб-приложений",
          "Научитесь использовать нейросети в разработке веб-приложений на React",
        ],
        tools: [],
      },

      reviews: {
        totalCount: 60,
        ratings: {
          udemy: 4.8,
          stepik: 5,
        },
        links: {
          udemy: "https://www.udemy.com/course/react-js-redux-router-tailwind-css/#reviews",
          stepik: "https://stepik.org/course/221235/reviews",
        },
        list: [
          {
            id: uuidv4(),
            name: "Илья",
            course: "Курс по React Js",
            text: "Дмитрий всегда очень хорошо объясняет, хоть уже и знаю реакт, уверен найду в курсе для себя много полезного, за pdf Workbook отдельное спасибо, часто приходится освежать знания по определенной теме, уверен теперь делать это будеть намного удобнее и приятнее!",
            rating: 5,
          },
        ],
      },

      videoAdLink: "https://rutube.ru/play/embed/8c94cdc5d2056bd3f3d507e6e1ab39ca",
      programs: [reactJsEssentialProgram, reactJsEssentialProgram],
    },
  };

export default reactJsEssentialCourseData;

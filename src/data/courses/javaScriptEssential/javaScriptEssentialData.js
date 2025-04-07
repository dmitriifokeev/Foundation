import arrowSalarySection from "../../../assets/img/arrowSalarySection.svg";
import infiniti from "../../../assets/img/infinityLable.png";

import { v4 as uuidv4 } from "uuid";

import jsEssentialFront from "../../../assets/img/bgCourseCards/jsEssentialFront.jpg";
import jsEssentialProgram from "./jsEssentialProgram";

import vsCodeLogo from "../../../assets/img/softLogos/vsCodeLogo.png";
import chromeLogo from "../../../assets/img/softLogos/chromeLogo.png";

const javaScriptEssentialCourseData = {
  slug: "javascript-essential",
  hero: {
    title: "Курс по JavaScript!",
    heroSubtitle:
      "В этом курсе вы найдете все о современном языке программирования JavaScript. Станьте Front-end разработчиком на JavaScript.",
    tag: "Со знанием HTML",

    type: "Курс",
  },
  bgImg: jsEssentialFront,
  difficulty: 2,

  details: {
    raiting: "4,9 рейтинг",
    raitingNubmer: "300+ отзывов",
    lessons: `191 урок`,
    hours: "31 час видео",
    duration: "4 месяца",
    practices: "10 самостоятельных практик",
    tests: "5 тестов",
    projects: "2 проекта",
    // price: "2,990 руб",
    price: "5 руб",
    oldPrice: "5,990 руб",

    // Эти данные обязательны:
    skillspaceToken: "bdc987e4-6eb8-35e9-8559-ca8530018d22", // API-ключ курса

    skillspaceCourses: [{ courseId: "14497", groupId: "23496" }],

    about: {
      title:
        "Интерактивность, общение с сервером, сложные веб-приложения разработка на разных платформах. Все это JavaScript",
      boxImgTitle: "JavaScript один из самых популярных языков программирования в мире",

      text: "JavaScript — один из самых популярных языков программирования в мире. Он используется для создания интерактивных веб-сайтов, веб-приложений, мобильных приложений, игр и многого другого. ",
    },

    salary: {
      title: "Более 2000 открытых вакансий где требуется JS как один из скилов",
      text: "Средняя зарплата фронтенд-разработчика более 150 000 руб/мес",
      note: "*JavaScript один из самых популярных и востребованных языков программирования согласно рейтингу TIOBE ",
      salaryLevels: [
        {
          level: "junior",
          salary: "70К+",
          experience: "От 9 до 18 месяцев",
          bgColor: "bg-neutral-100",
          height: "190px",
          adaptivHeight: "110px",
          icon: arrowSalarySection,
          iconSize: "50px",
          topRight: "16px",
        },
        {
          level: "middle",
          salary: "150К+",
          experience: "От 1,5 до 5 лет",
          bgColor: "bg-secondary-50",
          height: "220px",
          adaptivHeight: "140px",
          icon: arrowSalarySection,
          iconSize: "50px",
          topRight: "16px",
        },
        {
          level: "senior",
          salary: "250К+",
          experience: "От 5 лет",
          bgColor: "bg-primary-50",
          height: "270px",
          adaptivHeight: "170px",
          icon: infiniti,
          iconSize: "180px",
          topRight: "-28px",
        },
      ],
    },

    skills: {
      topics: [
        "Научитесь основам синтаксиса и логики JavaScript",
        "Научитесь работать с переменными, типами данных и операторами",
        "Узнаете, как взаимодействовать с HTML и CSS через JavaScript",
        "Изучите работу с функциями, замыканиями и областями видимости",
        "Освоите методы работы с DOM и событиями",
        "Поймёте основы асинхронного программирования и работы с API",
        "Изучите современные стандарты JavaScript (ES6+)",
        "Узнаете, что такое объектно-ориентированное и функциональное программирование",
        "Разберётесь с модулями, сборщиками и инструментами разработки",
        "Научитесь разрабатывать реальные веб-приложения с использованием JavaScript",
        "Научитесь работать с событиями и их делегированием",
        "Освоите работу с массивами, объектами и их методами",
        "Научитесь работать с типами данных языка",
        "Узнаете множество методов современной разработки",
        "Освоите все самые важные темы и области JavaScript",
        "Разберетесь, как создаются реальные проекты на JavaScript",
        "Узнаете, как работает управление потоками с Promise и async/await",
      ],
      tools: [vsCodeLogo, chromeLogo],
    },

    reviews: {
      totalCount: 150,
      ratings: {
        udemy: 4.8,
        stepik: 5.0,
      },
      links: {
        udemy: "https://www.udemy.com/course/java-script/#reviews",
        stepik: "https://stepik.org/course/130424/reviews",
      },
      list: [
        {
          id: uuidv4(),
          name: "Иван",
          course: "Курс по JavaScript с нуля",
          text: "Курс понравился Все доходчиво объясняется. Единственный момент, который удивил - это ответ в комментариях Дмитрия в блоке про карты. (про установку VPN). Лучше конечно было бы изначально объяснять принципы работы с картами на Яндекс картах, а не предлагать установить vpn для того, чтобы получить возможность пройти урок. Но это, конечно, не сильно критично. При желании разобраться можно.",
          rating: 5,
        },
        {
          id: uuidv4(),
          name: "Дмитрий",
          course: "Курс по JavaScript с нуля",

          text: "Отличный курс от отличного преподавателя! Все рассказано простыми и понятными словами, что заметно облегчает процесс обучения. Достаточно большое количество практики. Последовательность и подача материла, как по мне, очень хорошо выстроены: ты узнаешь то, что нужно и то, что ты уже можешь понять практически без проблем на данном этапе",
          rating: 5,
        },
        {
          id: uuidv4(),
          name: "Андрей",
          course: "Курс по JavaScript с нуля",

          text: "Отличный курс, особенное если вы уже знаете бэкенд язык(java например) и вам надо подтянуть JS. Для совсем новичка, как мне кажется, маловато задачек для понимание базового материала(переменные, функции, циклы, условие и прочее) А так курс понравился, спасибо! Пойду применять полученные знания на своём сайте 😊",
          rating: 5,
        },
        {
          id: uuidv4(),
          name: "Зарема",
          course: "Курс по JavaScript с нуля",

          text: "Хороший курс с основами JS. Под конец курса появляются довольно серьезные вещи, такие как классы и промисы, а так же работа с API. Подача очень доступная. Кроме того, автор оперативно отвечает на вопросы в комментариях!",
          rating: 5,
        },
        {
          id: uuidv4(),
          name: "Елена",
          course: "Курс по JavaScript с нуля",

          text: "Мне понравился этот курс. Самое интересное - это делать проекты на курсе, применять знания, которые получаешь во время прохождения курса. Автор посвятил несколько модулей различным проектам, при этом они действительно актуальные.Подача материала живая, не хочется спать во время просмотра видео. Отдельное спасибо автору за мотивационные видео в конце каждого модуля.",
          rating: 5,
        },
      ],
    },

    videoAdLink: "https://rutube.ru/play/embed/d91abfe92cd1b3d708f4b5e9c69a06fe",
    programs: [jsEssentialProgram],
  },
};

export default javaScriptEssentialCourseData;

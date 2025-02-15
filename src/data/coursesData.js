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
import { text } from "express";

const coursesData = {
  webDevelopment: [
    {
      slug: "javascript-essential",
      label: { title: "JavaScript - Полный курс!", tag: "Со знанием HTML", type: "Курс" },
      bgImg: jsEssentialFront,
      levelDifficulties: 2,
      detailsDescription: {
        coursePageData: {
          descriptionSubtitle:
            "В этом курсе вы найдете все о современном языке программирования JavaScript. Станьте Front-end разработчиком на JavaScript",
          aboutCourseSection: {
            title:
              "Интерактивность, общение с сервером, сложные веб-приложения разработка на разных платформах. Все это JavaScript",
            text: "JavaScript — это язык программирования, который делает сайты динамичными и интерактивными. Если бы его не было, веб-страницы оставались бы статичными, как бумажные брошюры",
            titleCard: "JavaScript один из самых популярных языков программирования в мире",
          },

          salaryCourseSection: {
            title: "Более 2000 открытых вакансий где требуется JS как один из скилов",
            text: "Средняя зар плата фронт енд веб разработчика более 150 000 руб/мес",
            footnote:
              "*JavaScript один из самых популярных и востребованных языков программирования согласно рейтингу TIOBE ",
            expPrices: [{ junior: "70К+" }, { middle: "150К+" }, { senior: "250К+" }],
            expTime: [
              { junior: "Опыт от 9 месяцев До 1,5 лет" },
              { middle: "Опыт от 1,5 лет до 5 лет" },
              { senior: "От 5 лет" },
            ],
          },
          skillSection: {
            topics: [
              "Научитесь основам синтаксиса и логики JavaScript",
              "Научитесь работать с переменными, типами данных и операторами",
              "Поймёте, как взаимодействовать с HTML и CSS через JavaScript",
              "Освоите принципы работы с массивами, значениями и областями видимости",
              "Изучите методы работы с DOM и событиями",
              "Освоите базовые приёмы работы с API",
              "Научитесь работать с событиями и их делегированием",
              "Освоите работу с массивами, объектами и их методами",
              "Научитесь работать с таймерами и датами",
              "Погрузитесь в основы современной разработки",
              "Узнаете все самые важные темы и аспекты JavaScript",
              "Разберётесь как работать с Promise и async/await",
            ],
            instrumentsImgs: [htmlPro, reactEssential, htmlEssential],
          },
        },

        lessons: "226 уроков",
        hours: "40 часа видео уроков",
        months: "4 месяца время прохождения",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
        oldPrice: "34,990 руб",
        price: "24,990 руб",

        reviews: {
          reviewsAmount: 150,
          ratingUdemy: 4.8,
          ratingStepik: 5.0,
          ratingUdemyLink: "https://www.udemy.com/course/javascript_full/",
          ratingStepikLink: "https://www.udemy.com/course/javascript_ful/",
          reviews: [
            {
              id: 1,
              name: "Иван",
              courese: " Курс по WordPress с нуля",
              text: "Замечательный курс, уже третий, который прохожу у Дмитрия. Как всегда, очень доступное и понятное изложение, прекрасная логика и удобная подача материала со всеми нужными ссылками, сервисами, презентациями. Объем материла тщательно отфильтрован, ничего лишнего.",
              rating: 5,
            },
            {
              id: 2,
              name: "Мария",
              courese: " Курс по WordPress с нуля",
              text: "Курс очень понравился, все доступно и понятно объясняется, рекомендую!",
              rating: 5,
            },
          ],
        },

        videoAdLink: "https://www.youtube.com/watch?v=9KJxaFHotqI",
      },
    },
    {
      slug: "html-css-essential",
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
      slug: "react-essential",
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
      slug: "html-css-pro",
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
      slug: "tilda-essential",
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
      slug: "webflow-essential",
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
      slug: "wordpress-essential",
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
      slug: "figma-essential",
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
      slug: "figma-animations",
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
      slug: "design-theory-essential",
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
      slug: "illustrator-essential",
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
      slug: "photoshop-essential",
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
      slug: "after-effects-essential",
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
      slug: "photoshop-pro",
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
      slug: "premiere-pro-essential",
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
      slug: "after-effects-essential",
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
      slug: "frontend-developer-program",
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
      slug: "graphic-designer-program",
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
      slug: "web-designer-program",
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

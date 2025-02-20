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
import arrowSalarySection from "../assets/img/arrowSalarySection.svg";

import infiniti from "../assets/img/infinityLable.png";
import vsCodeLogo from "../assets/img/softLogos/vsCodeLogo.png";
import chromeLogo from "../assets/img/softLogos/chromeLogo.png";
import { v4 as uuidv4 } from "uuid";

import courseProgramJSEssential from "./coursePrograms/jsEssentialProgram";

const coursesData = {
  // ======================================
  // 1) WEB DEVELOPMENT
  // ======================================
  webDevelopment: [
    // Уже оформленный JavaScript-курс
    {
      slug: "javascript-essential",
      hero: {
        title: "JavaScript — Полный курс!",
        heroSubtitle:
          "В этом курсе вы найдете все о современном языке программирования JavaScript. Станьте Front-end разработчиком на JavaScript!",
        tag: "Со знанием HTML",

        type: "Курс",
      },
      bgImg: jsEssentialFront,
      difficulty: 2,

      details: {
        lessons: `223`,
        hours: "40 часов видео",
        duration: "4 месяца",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
        price: "24,990 руб",
        oldPrice: "34,990 руб",

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
            "Разберетесь как создаются реальные проекты на JavaScript",
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
            udemy: "https://www.udemy.com/course/javascript_full/",
            stepik: "https://www.udemy.com/course/javascript_ful/",
          },
          list: [
            {
              id: uuidv4(),
              name: "Петя",
              course: "Курс по JS с нуля",
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
              name: "Даня",
              course: "Курс по Js с нуля",
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

        videoAdLink: "https://www.youtube.com/watch?v=9KJxaFHotqI",
        program: courseProgramJSEssential,
      },
    },

    // Верстка HTML/CSS
    {
      slug: "html-css-essential",
      hero: {
        title: "Верстка HTML / CSS",
        heroSubtitle:
          "В этом курсе вы найдете все о современном языке программирования JavaScript. Станьте Front-end разработчиком на JavaScript!",
        tag: "С нуля",
        type: "Курс",
      },
      bgImg: htmlEssential,
      difficulty: 1,

      details: {
        lessons: "246 уроков",
        hours: "30 часов видео",
        duration: "2 месяца",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
        price: "24,990 руб",
        oldPrice: "34,990 руб",

        about: {
          subtitle: "...",
          title: "...",
          text: "...",
          highlight: "...",
        },

        salary: {
          title: "...",
          text: "...",
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
          topics: ["...", "...", "..."],
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
              name: "Ксюша",
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

        videoAdLink: "#",
      },
    },

    // React JS
    {
      slug: "react-essential",
      hero: {
        title: "React JS",
        tag: "Со знанием JS и HTML",
        heroSubtitle:
          "В этом курсе вы найдете все о современном языке программирования JavaScript. Станьте Front-end разработчиком на JavaScript!",
        type: "Курс",
      },
      bgImg: reactEssential,
      difficulty: 2,

      details: {
        lessons: "226 уроков",
        hours: "40 часов видео",
        duration: "4 месяца",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
        price: "24,990 руб",
        oldPrice: "34,990 руб",

        about: {
          subtitle: "...",
          title: "...",
          text: "...",
          highlight: "...",
        },

        salary: {
          title: "...",
          text: "...",
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
          topics: ["...", "...", "..."],
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

        videoAdLink: "#",
      },
    },

    // Верстка HTML/CSS (Pro)
    {
      slug: "html-css-pro",
      hero: {
        title: "Верстка HTML/CSS (Pro)",
        tag: "Со знанием HTML / CSS",
        heroSubtitle:
          "В этом курсе вы найдете все о современном языке программирования JavaScript. Станьте Front-end разработчиком на JavaScript!",
        type: "Курс",
      },
      bgImg: htmlPro,
      difficulty: 2,

      details: {
        lessons: "226 уроков",
        hours: "40 часов видео",
        duration: "4 месяца",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
        price: "24,990 руб",
        oldPrice: "34,990 руб",

        about: {
          subtitle: "...",
          title: "...",
          text: "...",
          highlight: "...",
        },

        salary: {
          title: "...",
          text: "...",
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
          topics: ["...", "...", "..."],
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

        videoAdLink: "#",
      },
    },
  ],

  // ======================================
  // 2) CMS
  // ======================================
  CMS: [
    {
      slug: "tilda-essential",
      hero: {
        title: "Создание сайтов в Tilda",
        tag: "C нуля",
        heroSubtitle:
          "В этом курсе вы найдете все о современном языке программирования JavaScript. Станьте Front-end разработчиком на JavaScript!",
        type: "Курс",
      },
      bgImg: tildaEssential,
      difficulty: 1,

      details: {
        lessons: "226 уроков",
        hours: "40 часов видео",
        duration: "4 месяца",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
        price: "24,990 руб",
        oldPrice: "34,990 руб",

        about: {
          subtitle: "...",
          title: "...",
          text: "...",
          highlight: "...",
        },

        salary: {
          title: "...",
          text: "...",
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
          topics: ["...", "...", "..."],
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

        videoAdLink: "#",
      },
    },
    {
      slug: "webflow-essential",
      hero: {
        title: "Верстка в Webflow",
        tag: "C нуля",
        heroSubtitle:
          "В этом курсе вы найдете все о современном языке программирования JavaScript. Станьте Front-end разработчиком на JavaScript!",
        type: "Курс",
      },
      bgImg: webflowEssential,
      difficulty: 1,

      details: {
        lessons: "226 уроков",
        hours: "40 часов видео",
        duration: "4 месяца",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
        price: "24,990 руб",
        oldPrice: "34,990 руб",

        about: {
          subtitle: "...",
          title: "...",
          text: "...",
          highlight: "...",
        },

        salary: {
          title: "...",
          text: "...",
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
          topics: ["...", "...", "..."],
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

        videoAdLink: "#",
      },
    },
    {
      slug: "wordpress-essential",
      hero: {
        title: "WordPress",
        tag: "C нуля",
        heroSubtitle:
          "В этом курсе вы найдете все о современном языке программирования JavaScript. Станьте Front-end разработчиком на JavaScript!",
        type: "Курс",
      },
      bgImg: wordPressEssential,
      difficulty: 1,

      details: {
        lessons: "226 уроков",
        hours: "40 часов видео",
        duration: "4 месяца",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
        price: "24,990 руб",
        oldPrice: "34,990 руб",

        about: {
          subtitle: "...",
          title: "...",
          text: "...",
          highlight: "...",
        },

        salary: {
          title: "...",
          text: "...",
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
          topics: ["...", "...", "..."],
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

        videoAdLink: "#",
      },
    },
  ],

  // ======================================
  // 3) WEB DESIGN
  // ======================================
  webDesign: [
    {
      slug: "figma-essential",
      hero: {
        title: "Веб дизайн в Figma",
        tag: "C нуля",
        heroSubtitle:
          "В этом курсе вы найдете все о современном языке программирования JavaScript. Станьте Front-end разработчиком на JavaScript!",
        type: "Курс",
      },
      bgImg: figmaEssential,
      difficulty: 1,

      details: {
        lessons: "226 уроков",
        hours: "40 часов видео",
        duration: "4 месяца",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
        price: "24,990 руб",
        oldPrice: "34,990 руб",

        about: {
          subtitle: "...",
          title: "...",
          text: "...",
          highlight: "...",
        },

        salary: {
          title: "...",
          text: "...",
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
          topics: ["...", "...", "..."],
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

        videoAdLink: "#",
      },
    },
    {
      slug: "figma-animations",
      hero: {
        title: "Figma Анимации",
        tag: "C знаниями основ Figma",
        heroSubtitle:
          "В этом курсе вы найдете все о современном языке программирования JavaScript. Станьте Front-end разработчиком на JavaScript!",
        type: "Курс",
      },
      bgImg: figmaAnimation,
      difficulty: 2,

      details: {
        lessons: "226 уроков",
        hours: "40 часов видео",
        duration: "4 месяца",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
        price: "24,990 руб",
        oldPrice: "34,990 руб",

        about: {
          subtitle: "...",
          title: "...",
          text: "...",
          highlight: "...",
        },

        salary: {
          title: "...",
          text: "...",
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
          topics: ["...", "...", "..."],
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

        videoAdLink: "#",
      },
    },
    {
      slug: "design-theory-essential",
      hero: {
        title: "Теория дизайна",
        tag: "C нуля",
        heroSubtitle:
          "В этом курсе вы найдете все о современном языке программирования JavaScript. Станьте Front-end разработчиком на JavaScript!",
        type: "Курс",
      },
      bgImg: designTheoryEssential,
      difficulty: 1,

      details: {
        lessons: "226 уроков",
        hours: "40 часов видео",
        duration: "4 месяца",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
        price: "24,990 руб",
        oldPrice: "34,990 руб",

        about: {
          subtitle: "...",
          title: "...",
          text: "...",
          highlight: "...",
        },

        salary: {
          title: "...",
          text: "...",
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
          topics: ["...", "...", "..."],
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

        videoAdLink: "#",
      },
    },
  ],

  // ======================================
  // 4) GRAPHIC DESIGN
  // ======================================
  graphicDesign: [
    {
      slug: "illustrator-essential",
      hero: {
        title: "Illistrator",
        tag: "C нуля",
        heroSubtitle:
          "В этом курсе вы найдете все о современном языке программирования JavaScript. Станьте Front-end разработчиком на JavaScript!",
        type: "Курс",
      },
      bgImg: illustratorEssential,
      difficulty: 1,

      details: {
        lessons: "226 уроков",
        hours: "40 часов видео",
        duration: "4 месяца",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
        price: "24,990 руб",
        oldPrice: "34,990 руб",

        about: {
          subtitle: "...",
          title: "...",
          text: "...",
          highlight: "...",
        },

        salary: {
          title: "...",
          text: "...",
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
          topics: ["...", "...", "..."],
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

        videoAdLink: "#",
      },
    },
    {
      slug: "photoshop-essential",
      hero: {
        title: "Photoshop",
        tag: "C нуля",
        heroSubtitle:
          "В этом курсе вы найдете все о современном языке программирования JavaScript. Станьте Front-end разработчиком на JavaScript!",
        type: "Курс",
      },
      bgImg: photoshopEssential,
      difficulty: 1,

      details: {
        lessons: "226 уроков",
        hours: "40 часов видео",
        duration: "4 месяца",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
        price: "24,990 руб",
        oldPrice: "34,990 руб",

        about: {
          subtitle: "...",
          title: "...",
          text: "...",
          highlight: "...",
        },

        salary: {
          title: "...",
          text: "...",
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
          topics: ["...", "...", "..."],
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

        videoAdLink: "#",
      },
    },
    {
      slug: "after-effects-essential",
      hero: {
        title: "Adobe After Effects",
        tag: "C нуля",
        heroSubtitle:
          "В этом курсе вы найдете все о современном языке программирования JavaScript. Станьте Front-end разработчиком на JavaScript!",
        type: "Курс",
      },
      bgImg: afterEffectsEssential,
      difficulty: 1,

      details: {
        lessons: "226 уроков",
        hours: "40 часов видео",
        duration: "4 месяца",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
        price: "24,990 руб",
        oldPrice: "34,990 руб",

        about: {
          subtitle: "...",
          title: "...",
          text: "...",
          highlight: "...",
        },

        salary: {
          title: "...",
          text: "...",
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
          topics: ["...", "...", "..."],
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

        videoAdLink: "#",
      },
    },
    {
      slug: "photoshop-pro",
      hero: {
        title: "Photoshop (Pro)",
        tag: "Со знаниями Photoshop",
        heroSubtitle:
          "В этом курсе вы найдете все о современном языке программирования JavaScript. Станьте Front-end разработчиком на JavaScript!",
        type: "Курс",
      },
      bgImg: photoshopPro,
      difficulty: 2,

      details: {
        lessons: "226 уроков",
        hours: "40 часов видео",
        duration: "4 месяца",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
        price: "24,990 руб",
        oldPrice: "34,990 руб",

        about: {
          subtitle: "...",
          title: "...",
          text: "...",
          highlight: "...",
        },

        salary: {
          title: "...",
          text: "...",
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
          topics: ["...", "...", "..."],
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

        videoAdLink: "#",
      },
    },
  ],

  // ======================================
  // 5) VIDEO MONTAGE
  // ======================================
  videoMontage: [
    {
      slug: "premiere-pro-essential",
      hero: {
        title: "Adobe Premiere Pro",
        tag: "C нуля",
        heroSubtitle:
          "В этом курсе вы найдете все о современном языке программирования JavaScript. Станьте Front-end разработчиком на JavaScript!",
        type: "Курс",
      },
      bgImg: premiereProEssential,
      difficulty: 1,

      details: {
        lessons: "226 уроков",
        hours: "40 часов видео",
        duration: "4 месяца",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
        price: "24,990 руб",
        oldPrice: "34,990 руб",

        about: {
          subtitle: "...",
          title: "...",
          text: "...",
          highlight: "...",
        },

        salary: {
          title: "...",
          text: "...",
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
          topics: ["...", "...", "..."],
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

        videoAdLink: "#",
      },
    },
    {
      slug: "after-effects-essential",
      hero: {
        title: "Adobe After Effects",
        tag: "C нуля",
        heroSubtitle:
          "В этом курсе вы найдете все о современном языке программирования JavaScript. Станьте Front-end разработчиком на JavaScript!",
        type: "Курс",
      },
      bgImg: afterEffectsEssential,
      difficulty: 1,

      details: {
        lessons: "226 уроков",
        hours: "40 часов видео",
        duration: "4 месяца",
        practices: "20 самостоятельных практик",
        tests: "10 тестов",
        projects: "5 проектов",
        price: "24,990 руб",
        oldPrice: "34,990 руб",

        about: {
          subtitle: "...",
          title: "...",
          text: "...",
          highlight: "...",
        },

        salary: {
          title: "...",
          text: "...",
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
          topics: ["...", "...", "..."],
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
              name: "Дмитрий",
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

        videoAdLink: "#",
      },
    },
  ],
  // ======================================
  // 6) PROGRAMMS
  // ======================================
  programms: [
    {
      slug: "frontend-developer-program",
      group: "webDevelopment", // добавлено свойство group
      hero: {
        title: "Front-End Веб разработчик",
        tag: "C нуля",
        type: "Программа",
      },
      bgImg: programmWebDev,
      difficulty: 1,
      details: {
        lessons: "—",
        hours: "—",
        duration: "—",
        practices: "—",
        tests: "—",
        projects: "—",
        price: "24,990 руб",
        oldPrice: "34,990 руб",
        about: {
          subtitle: "...",
          title: "...",
          text: "...",
          highlight: "...",
        },
        salary: {
          title: "...",
          text: "...",
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
          topics: ["...", "...", "..."],
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
        videoAdLink: "#",
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
          {
            title: "React JS",
            lessons: "226 уроков",
            hours: "40 часов видео",
            duration: "4 месяца",
            practices: "20 самостоятельных практик",
            tests: "10 тестов",
            projects: "5 проектов",
          },
        ],
      },
    },
    {
      slug: "graphic-designer-program",
      group: "graphicDesign", // добавлено свойство group
      hero: {
        title: "Графический дизайнер с нуля",
        tag: "C нуля",
        type: "Программа",
      },
      bgImg: programmWebDev,
      difficulty: 1,
      details: {
        lessons: "—",
        hours: "—",
        duration: "—",
        practices: "—",
        tests: "—",
        projects: "—",
        price: "24,990 руб",
        oldPrice: "34,990 руб",
        about: {
          subtitle: "...",
          title: "...",
          text: "...",
          highlight: "...",
        },
        salary: {
          title: "...",
          text: "...",
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
          topics: ["...", "...", "..."],
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
        videoAdLink: "#",
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
    },
    {
      slug: "web-designer-program",
      group: "webDesign", // добавлено свойство group
      hero: {
        title: "Веб дизайнер с нуля",
        tag: "C нуля",
        type: "Программа",
      },
      bgImg: programmWebDev,
      difficulty: 1,
      details: {
        lessons: "—",
        hours: "—",
        duration: "—",
        practices: "—",
        tests: "—",
        projects: "—",
        price: "24,990 руб",
        oldPrice: "34,990 руб",
        about: {
          subtitle: "...",
          title: "...",
          text: "...",
          highlight: "...",
        },
        salary: {
          title: "...",
          text: "...",
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
          topics: ["...", "...", "..."],
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
        videoAdLink: "#",
        programCourses: [
          {
            title: "Figma с нуля",
            lessons: "226 уроков",
            hours: "40 часов видео",
            duration: "4 месяца",
            practices: "20 самостоятельных практик",
            tests: "10 тестов",
            projects: "5 проектов",
          },
          {
            title: "Figma Анимации",
            lessons: "226 уроков",
            hours: "40 часов видео",
            duration: "4 месяца",
            practices: "20 самостоятельных практик",
            tests: "10 тестов",
            projects: "5 проектов",
          },
          {
            title: "Теория дизайна",
            lessons: "226 уроков",
            hours: "40 часов видео",
            duration: "4 месяца",
            practices: "20 самостоятельных практик",
            tests: "10 тестов",
            projects: "5 проектов",
          },
        ],
      },
    },
  ],
};

export default coursesData;

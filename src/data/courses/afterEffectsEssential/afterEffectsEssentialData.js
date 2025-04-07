import arrowSalarySection from "../../../assets/img/arrowSalarySection.svg";
import infiniti from "../../../assets/img/infinityLable.png";
import aeLogo from "../../../assets/img/softLogos/aeLogo.png";

import { v4 as uuidv4 } from "uuid";

import afterEffectsEssential from "../../../assets/img/bgCourseCards/afterEffectsEssential.jpg";

import afterEffectsEssentialProgram from "./afterEffectEssentialProgram";

const afterEffectsEssentialData = {
  slug: "after-effects-essential",
  hero: {
    title: "Курс по Adobe After Effects",
    tag: "C нуля",
    heroSubtitle:
      "В этом курсе вы узнаете всё о создании современной и эффектной графики в программе After Effects! Получите востребованные навыки по созданию графики и анимации в After Effects!",
    type: "Курс",
  },
  bgImg: afterEffectsEssential,
  difficulty: 1,

  details: {
    raiting: "4,8 рейтинг",
    raitingNubmer: "440+ отзывов",
    lessons: "73 урока",
    hours: "11,5 часов видео",
    duration: "2 месяца обучения",
    practices: "6 самостоятельных практик",
    projects: "3 проекта",
    // price: "1,990 руб",
    price: "5 руб",
    oldPrice: "4,990 руб",

    // Эти данные обязательны:
    skillspaceToken: "bdc987e4-6eb8-35e9-8559-ca8530018d22", // API-ключ курса

    skillspaceCourses: [{ courseId: "15556", groupId: "25159" }],

    about: {
      boxImgTitle: "AfterEffect - стандарт индустрии по созданию графики и анимации",
      title:
        "Создание сложных анимаций, работа с визуальными эффектами, монтаж и композиция видео, подготовка графики для различных платформ. Всё это — After Effects",
      text: "After Effects — одна из самых популярных программ для создания анимации и визуальных эффектов. Она используется в кинопроизводстве, рекламе, видеомонтаже, создании анимированной графики и многого другого.",
      highlight: "...",
    },

    salary: {
      title: "Более 1700 открытых вакансий где требуется AfterEffect как один из скилов",
      text: "Средняя зарплата специалиста по After Effects более 110 000 руб/мес",
      note: "*Бонус работа удаленно и возможность работы на фрилансе",
      salaryLevels: [
        {
          level: "junior",
          salary: "60К+",
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
        "Научитесь создавать современную motion-графику в After Effects",
        "Разберётесь в интерфейсе программы After Effects",
        "Сможете создать анимированные текстовые заголовки",
        "Научитесь анимировать любую графику при помощи ключевых точек",
        "Узнаете, как перенести графику, созданную в After Effects, на ваш сайт",
        "Поймёте, как создавать графику и спецэффекты в связке с Illustrator, Photoshop, Premiere Pro",
        "Разберётесь с тем, как создавать маски в After Effects",
        "Научитесь работать в 3D-среде After Effects",
        "Изучите способы отслеживания объектов в кадре с помощью трекеров",
        "Научитесь создавать спецэффекты для ваших видео",
        "Узнаете, как поместить любую графику внутрь видео",
        "Узнаете множество источников графических шаблонов и футажей для ваших проектов",
        "Разберётесь с настройками оптимизации After Effects",
        "Научитесь использовать плагины в After Effects",
        "Сможете создавать красивые анимированные переходы",
      ],
      tools: [aeLogo],
    },

    reviews: {
      totalCount: 440,
      ratings: {
        udemy: 4.7,
        stepik: 5,
      },
      links: {
        udemy: "https://www.udemy.com/course/adobe-after-effects-2023/#reviews",
        stepik: "https://stepik.org/course/177850/promo#reviews",
      },
      list: [
        {
          id: uuidv4(),
          name: "Виктория",
          course: "Курс по AfterEffects с нуля",
          text: "Мне очень понравился курс. Я научилась потрясающим вещам. В курсе много интересных трюков с использованием масок. Очень понятно объясняется, поэтому чудесные анимации я смогла повторить и понять как они делаются. Очень рада, что нашла этот курс, советую всем, кто хочет научиться крутым штукам в After Effects. Спасибо огромное Дмитрию Фокееву за такой прекрасный курс.",
          rating: 5,
        },
        {
          id: uuidv4(),
          name: "Павел",
          course: "Курс по AfterEffects с нуля",
          text: "Доступная подача материала,спрактическими заданиями,от простого к сложному:Как работает 3D Эффекты After Effects. быстро разобрался в программе. Спасибо автору за Курс!",
          rating: 5,
        },
        {
          id: uuidv4(),
          name: "Юлия",
          course: "Курс по AfterEffects с нуля",
          text: "Спасибо большое за курс. Мне теперь намного проще работать с After Effects,я до этого сама по различным туториалам училась,но были какие-то непонимания. Дима отлично всё рассказал и показал, спасибо еще раз!",
          rating: 5,
        },
        {
          id: uuidv4(),
          name: "Вадим",
          course: "Курс по AfterEffects с нуля",
          text: "Прохожу уже ваш третий курс, и похоже вы и есть топ 1 на степике ну или хотя бы в разделе графики. Раньше мне after effects казался дремучим лесом, но теперь всё понято. Теперь когда я вижу какую нибудь анимацию на ютубе или тв, я всегда представляю, как бы её можно было бы сделать в AE. Огромное спасибо! Пойду проходить какой нибудь другой ваш курс))",
          rating: 5,
        },
        {
          id: uuidv4(),
          name: "Вадим",
          course: "Курс по AfterEffects с нуля",
          text: "Это было не просто. НО Я ЭТО СДЕЛАЛА!!! Я очень собой горжусь :) Курс был интересным и доступным для моего понимания. Не пожалела о его приобретении. Большое спасибо преподавателю!",
          rating: 5,
        },
        {
          id: uuidv4(),
          name: "Кирилл",
          course: "Курс по AfterEffects с нуля",
          text: "Подача у данного автора просто бомбовая) Мне нужно было понять, как вставить в мокап свою композицию и тд, к концу курса я полностью разобрался. Огромное спасибо!",
          rating: 5,
        },
      ],
    },

    videoAdLink: "https://rutube.ru/play/embed/763c51eb85312f2650f8ddb2c41ab292",
    programs: [afterEffectsEssentialProgram],
  },
};

export default afterEffectsEssentialData;

import arrowSalarySection from "../../../assets/img/arrowSalarySection.svg";
import infiniti from "../../../assets/img/infinityLable.png";

import { v4 as uuidv4 } from "uuid";

import figmaAnimation from "../../../assets/img/bgCourseCards/figmaAnimations.jpg";
import motionFigmaProgram from "./motionFigmaProgram";

const figmaAnimationsData = {
  slug: "figma-animations",
  hero: {
    title: " Курс Figma Анимации",
    tag: "C знаниями основ Figma",
    heroSubtitle:
      "Курс Figma Motion и главные правила UX, погрузит вас в самые современные принципы создания анимированных веб сайтов в программе Figma.",
    type: "Курс",
  },
  bgImg: figmaAnimation,
  difficulty: 2,

  details: {
    raiting: "4,8 рейтинг",
    raitingNubmer: "450+ отзывов",
    lessons: "61 урок",
    hours: "6,5 часов видео",
    duration: "1 месяц",
    practices: "3 самостоятельных практик",
    price: "1,990 руб",
    // price: "5 руб",
    oldPrice: "3,990 руб",

    // Эти данные обязательны:
    skillspaceToken: "bdc987e4-6eb8-35e9-8559-ca8530018d22", // API-ключ курса

    skillspaceCourses: [{ courseId: "15574", groupId: "25181" }],

    about: {
      boxImgTitle:
        "Анимация в Figma — это ключ к созданию интерактивных и впечатляющих интерфейсов.",
      title:
        "Создание анимаций, микровзаимодействий, сложных интерфейсов. Все это Курс по Анимации в Figma",
      text: "Анимация — это важная часть современного дизайна. В этом курсе вы научитесь создавать впечатляющие анимации, микровзаимодействия и сложные интерфейсы, которые сделают ваши проекты более динамичными и привлекательными.",
      highlight: "...",
    },

    salary: {
      title: "Анимации в интерфейсах востребованы во всех топовых digital-компаниях",
      text: "Средняя зарплата UI/UX-дизайнера с навыками анимации более 120 000 руб/мес",
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
          experience: "От 1,5 до 3 лет",
          bgColor: "bg-secondary-50",
          height: "220px",
          icon: arrowSalarySection,
          iconSize: "50px",
        },
        {
          level: "senior",
          salary: "250К+",
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
        "Изучите как создавать самые современные стили в Figma",
        "Узнаете как создавать эффекты 'стекла' на ваших сайтах",
        "Узнаете как создать 3D из любой фигуры или элемента в Figma",
        "Узнаете современные способы использования и анимации градиента",
        "Узнаете все о создании анимаций в Figma",
        "Научитесь создавать анимацию 360 градусов прямо в Figma",
        "Сможете создавать анимацию как на сайте Apple",
        "Научитесь анимировать любые элементы страницы сайта, такие как кнопки, гамбургеры и т.д.",
        "Научитесь использовать 'Варианты' для создания впечатляющих анимаций",
        "Узнаете про стоковые площадки, где вы найдете современную графику для ваших работ",
        "Научитесь использовать продвинутые плагины, которые позволят вам создавать собственные кастомные анимации",
        "Изучите главные принципы пользовательского опыта с точки зрения 'Юзабилити'",
        "Узнаете как пользователи в действительности используют веб-браузер",
        "Изучите то, как сделать ваш сайт простым и интуитивно понятным",
      ],
      tools: [],
    },

    reviews: {
      totalCount: 450,
      ratings: {
        udemy: 4.8,
        stepik: 5,
      },
      links: {
        udemy: "https://www.udemy.com/course/figma-motion-ux/#reviews",
        stepik: "https://stepik.org/course/128116/reviews",
      },
      list: [
        {
          id: uuidv4(),
          name: "Дина",
          course: "Курс Figma - Анимации",
          text: "Дмитрий, спасибо за составленный курс!Вы очень профессионально его организовали: коротко и понятно, без лишних действий для учеников.Этот курс уже помог мне сменить должность с дизайнера на веб-дизайнера во время обучения за счет новых знаний в анимации, я применила их в работе.Мне понравилось то? что не было заморочек по выравниванию текста, блоков - это я итак применяю в своей работе по умолчанию. Понравилась легкость и автоматизация процессов.Я выбрала этот курс, потому что знания, полученные в нем показались мне актуальными и это подтвердилось на практике. Спасибо, успехов Вам, Дмитрий и нам, ученикам, в продвижении нашей практике в веб-дизайне!",
          rating: 5,
        },
        {
          id: uuidv4(),
          name: "Евгения",
          course: "Курс Figma - Анимации",
          text: "У Дмитрия все как всегда - понятно, просто, полезно! Это далеко не первый курс, который я прошла, поэтому однозначно могу сказать - курс прекрасный! Хочу курс еще дальше и больше в дизайн, работаю дизайнером уже несколько лет и все равно кажется что нужно что-то еще для изучения, нужны советы опытного человека! С удовольствием послушала бы какие-то наставления как двигаться дальше.",
          rating: 5,
        },
        {
          id: uuidv4(),
          name: "Артем",
          course: "Курс Figma - Анимации",
          text: "Отличный курс который поможет вам узнать многое то что вы не знали по фигме и UI/UX в целом. Куча интересной практики, объяснений, примеров и конечно же как создавать красивое в Figma. Отличное продолжение к прошлому курсу от Дмитрия по фигме. Ну и конечно же в этом курсе вас научат создавать самые лучшие и удобные дизайны для пользователей без воды и прочих мешающих вещей!",
          rating: 5,
        },
        {
          id: uuidv4(),
          name: "Марина",
          course: "Курс Figma - Анимации",
          text: "Курс доступный и интересный. Понравилось то, что видео не слишком большие по продолжительности, все четко и по делу. Понравилось, что несмотря на то, что преподаватель проговаривает каждый шаг, есть место для самостоятельной отработки каждой темы. Закрепила уже имеющиеся навыки, научилась работать с анимацией, с вариантами, узнала много полезной информации по работе с figma. Спасибо!",
          rating: 5,
        },
        {
          id: uuidv4(),
          name: "Марина",
          course: "Курс Figma - Анимации",
          text: "Курс оказался очень полезным. При выборе меня привлекла часть про UX, но на деле в каждой теме было что-то новое и интересное. И главное, сразу получилось применить знания на практике: я научилась анимировать элементы макета с помощью вариантов - и буквально на следующий день они пригодились, чтобы продемонстрировать заказчице кликабельный прототип! Дмитрий, большое Вам спасибо за толковые курсы и такой доброжелательный подход!",
          rating: 5,
        },
      ],
    },

    videoAdLink: "https://rutube.ru/play/embed/6e8abdce526e144e58eebe7c0cccb85d",
    programs: [motionFigmaProgram],
  },
};

export default figmaAnimationsData;

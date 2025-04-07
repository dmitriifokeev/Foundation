import arrowSalarySection from "../../../assets/img/arrowSalarySection.svg";
import infiniti from "../../../assets/img/infinityLable.png";
import bgImgAePPShort from "../../../assets/img/bgCourseCards/bgImgAePPShort.jpg";

import { v4 as uuidv4 } from "uuid";

import programmAePP from "../../../assets/img/bgCourseCards/programmAePP.jpg";
import afterEffectEssentialProgram from "../afterEffectsEssential/afterEffectEssentialProgram";
import premiereProEssentialProgram from "../premiereProEssential/premiereProEssentialProgram";

const programAePPCourselData = {
  slug: "video-montage-program",
  group: ["videoMontage", "fromZero"], // добавлено свойство group
  hero: {
    title: "Программа: Видеомантаж + Создание графики в Ae",
    tag: "C нуля",
    type: "Программа",
    heroSubtitle:
      "В этом курсе вы узнаете всё о создании современной графики и эффектной анимации в After Effects, а также освоите современные методы видеомонтажа в программе Premiere Pro, чтобы создавать по-настоящему творческие видео!",
    bgImgShort: bgImgAePPShort,
  },
  bgImg: programmAePP,
  difficulty: 1,
  details: {
    lessons: "161 урок",
    hours: "20.5 часов видео",
    duration: "3 месяца",
    practices: "11 самостоятельных практик",
    // tests: "5 проектов",
    projects: "5 проектов",
    // price: "3,490 руб",
    price: "10 руб",
    oldPrice: "6,990 руб",

    // Эти данные обязательны:
    skillspaceToken: "bdc987e4-6eb8-35e9-8559-ca8530018d22", // API-ключ курса

    // несколько курсов с ID и группами
    skillspaceCourses: [
      { courseId: "15556", groupId: "25159" },
      { courseId: "15651", groupId: "25291" },
    ],

    about: {
      boxImgTitle:
        "Adobe Premiere Pro и After Effects — профессиональные программы для видеомонтажа, создания графики и анимации, которые являются стандартом индустрии для работы с видеопроектами",
      title:
        "Монтаж видео, работа с аудио, создание анимаций и спецэффектов, создание сложных анимаций, работа с визуальными эффектами, композиция видео и подготовка графики для различных платформ — всё это вы найдете в курсах по Premiere Pro и After Effects",
      text: "Adobe Premiere Pro и After Effects — программы для монтажа видео, создания анимации и спецэффектов. В этом курсе вы научитесь монтировать видео, добавлять визуальные эффекты, работать со звуком, создавать профессиональные видеоролики, а также осваивать анимацию и графику для видеопроектов на разных платформах.",
      highlight: "",
    },
    salary: {
      title:
        "Монтаж видео и работа в Adobe Premiere Pro востребованы в медиа, а знание After Effects необходимо для создания анимации и визуальных эффектов.",
      text: "Средняя зарплата специалиста по After Effects более 110 000 руб/мес",
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
        "Научитесь монтажу видео в Adobe Premiere Pro с нуля",
        "Изучите самые важные инструменты программы Premiere Pro",
        "Узнаете как работать с цвето-коррекцией видео",
        "Научитесь использовать пресеты в своих видео",
        "Научитесь ускорять или замедлять видео",
        "Узнаете как создавать видео переходы",
        "Начнете создавать собственную графику движения в видео",
        "Научитесь применять сторонние графические шаблоны в своих видео",
        "Научитесь отчищать звук и делать голос сильнее",
        "Изучите приемы работы с аудио и аудио переходы",
        "Узнаете о форматах, fps и разрешении в видео",
        "Научитесь монтировать фильмы",
        "Сможете создать видео для социальных сетей",
        "Научитесь записывать screen cast",
        "Узнаете как работать с масками в видео",
        "Научитесь создавать современную motion графику в After Effects",
        "Разберетесь в интерфейсе программы After Effects",
        "Сможете создать анимированные текстовые заголовки",
        "Научитесь анимировать любую графику при помощи ключевых точек",
        "Узнаете как перенести графику, созданную в After Effects, на ваш сайт",
        "Поймете как создавать графику и спецэффекты в связке с Illustrator, Photoshop и Premiere Pro",
        "Разберетесь с тем, как создавать маски в After Effects",
        "Научитесь работать в 3D среде After Effects",
        "Изучите способы отслеживания объектов в кадре с помощью трекеров",
        "Научитесь создавать спецэффекты для ваших видео",
        "Узнаете, как поместить любую графику внутрь видео",
        "Узнаете множество источников графических шаблонов и футажей для ваших проектов",
        "Разберетесь с настройками оптимизации After Effects",
        "Научитесь использовать плагины в After Effects",
        "Сможете создавать красивые анимированные переходы",
      ],
      tools: [],
    },
    reviews: {
      totalCount: 2,
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
    videoAdLink: "https://rutube.ru/play/embed/6a828f388620a5dad1f56c342cb1c2d4",
    programs: [premiereProEssentialProgram, afterEffectEssentialProgram],

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

export default programAePPCourselData;

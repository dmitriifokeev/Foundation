import arrowSalarySection from "../../../assets/img/arrowSalarySection.svg";
import infiniti from "../../../assets/img/infinityLable.png";

import { v4 as uuidv4 } from "uuid";

import photoshopEssential from "../../../assets/img/bgCourseCards/photoshopEsssential.jpg";

import photoshopEssentialProgram from "./photoshopEssentialProgram";

const photoshopEssentialCourselData = {
  slug: "photoshop-essential",
  hero: {
    title: "Курс Photoshop с нуля",
    tag: "C нуля",
    heroSubtitle:
      "Курс позволит вам быстро освоить все необходимые инструменты для работы с изображениями в программе Photoshop!",
    type: "Курс",
  },
  bgImg: photoshopEssential,
  difficulty: 1,

  details: {
    raiting: "4,9 рейтинг",
    raitingNubmer: "1400+ отзывов",
    lessons: "76 уроков",
    hours: "9 часов видео",
    duration: "1 месяц",
    practices: "10 самостоятельных практик",
    projects: "5 проектов",
    price: "1,990 руб",
    // price: "5 руб",
    oldPrice: "3,990 руб",

    // Эти данные обязательны:
    skillspaceToken: "bdc987e4-6eb8-35e9-8559-ca8530018d22", // API-ключ курса

    skillspaceCourses: [{ courseId: "15520", groupId: "25113" }],

    about: {
      boxImgTitle:
        "Adobe Photoshop — лидер среди программ для обработки фотографий и создания графики.",
      title:
        "Редактирование фотографий, ретушь, создание графики и коллажей. Все это Курс по Photoshop",
      text: "Adobe Photoshop — это универсальный инструмент для обработки фотографий, создания графики и дизайна. В этом курсе вы изучите все основные инструменты программы и научитесь работать с цветокоррекцией, ретушью и слоями.",
      highlight: "...",
    },

    salary: {
      title: "Навыки работы в Photoshop востребованы во всех сферах визуального контента.",
      text: "Средняя зарплата дизайнера в Photoshop более 85 000 руб/мес.",
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
          salary: "110К+",
          experience: "От 1,5 до 3 лет",
          bgColor: "bg-secondary-50",
          height: "220px",
          icon: arrowSalarySection,
          iconSize: "50px",
        },
        {
          level: "senior",
          salary: "200К+",
          experience: "От 3лет",
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
        "Научитесь удалять людей и предметы из изображений",
        "Научитесь вырезать людей и любые предметы из ваших изображений и переносить их на другие фото",
        "Научитесь делать идеальную фигуру у любого человека на фотографии",
        "Вы научитесь ретушировать лицо, удалять прыщи и веснушки и любые дефекты кожи",
        "Научитесь создавать популярные визуальные стили и эффекты",
        "Научитесь создавать рекламные плакаты",
        "Научитесь изменять цвет вещей на изображениях",
        "Научитесь создавать реалистичные тени",
        "Узнаете, как исправлять цвета на фотографиях",
        "Научитесь изменять цвет глаз и волос",
        "Научитесь объединять несколько фотографий, чтобы создать удивительные композиции",
        "Узнаете, как поместить звездное небо в вашу чашку с чаем",
        "Научитесь создавать объемные логотипы",
        "Узнаете, как создать текст, который будет оборачивать людей и предметы",
        "Научитесь создавать больше фонового пространства в ваших изображениях просто из воздуха",
        "Научитесь превращать свои изображения в реалистичные картины маслом",
        "Узнаете, как создавать эффекты с помощью кисти",
        "Сможете восстановить старые фотографии, удаляя с них пыль, царапины и трещины",
      ],
      tools: [],
    },

    reviews: {
      totalCount: 1400,
      ratings: {
        udemy: 4.8,
        stepik: 5,
      },
      links: {
        udemy: "https://www.udemy.com/course/photoshop-2021-f/#reviews",
        stepik: "https://stepik.org/course/96072/reviews",
      },
      list: [
        {
          id: uuidv4(),
          name: "Алена",
          course: "Курс по Adobe Photoshop с нуля",
          text: "Хочу выразить огромную благодарность Дмитрию за интересные практические задания, подробные объяснения и описания инструментов фотошоп, хорошо продуманную структуру программы по изучению(от простого к сложному). Очень долго откладывала изучение этой программы. Не знала с чего начать и терялась в большом многообразии разных функций. Благодаря Вам поняла, что он не так страшен. Буду продолжать практиковаться и набираться опыта. СПАСИБО!",
          rating: 5,
        },
        {
          id: uuidv4(),
          name: "Наталья",
          course: "Курс по Adobe Photoshop с нуля",

          text: "Дмитрий, огромное спасибо за курс! Раньше Фотошоп виделся мне страшной неприступной крепостью, а с вами все оказалось достаточно просто для понимания и изучения. Даже захотелось попробовать себя в графическом дизайне, а вдруг получится.",
          rating: 5,
        },
        {
          id: uuidv4(),
          name: "Дарья",
          course: "Курс по Adobe Photoshop с нуля",

          text: "Дмитрий отличный преподаватель, я уже прошла его курс по Premier Pro и теперь этот по основам Photoshop. Уже купила третий курс, а именно продвинутый курс по Photoshop, настолько мне нравится подача материала от Дмитрия. Ну и, конечно, рада, что могу так легко и быстро осваивать такие сложные программы с помощью этих курсов. Всем советую!",
          rating: 5,
        },
        {
          id: uuidv4(),
          name: "Ви Миньярд",
          course: "Курс по Adobe Photoshop с нуля",

          text: "Большое спасибо за курс! Все подробно и понятно. За 3 дня неспешно освоила его весь, так как знания какие-то у меня были, но скудные и методом тыка, а хотелось по правильному начать пользоваться инструментами. Обязательно буду покупать продвинутый чуть позднее!",
          rating: 5,
        },
        {
          id: uuidv4(),
          name: "Мария",
          course: "Курс по Adobe Photoshop с нуля",
          text: "Курс очень понравился. 95% материала - новый для меня. В процессе обучения вела конспект и делала все практические задания. К концу решила проверить, что запомнилось, оказалось, что помню практически все. Очень логично и понятно изложен весь материал и все закреплено на практических задания. Очень довольна результатом, иду на вторую ступень (продвинутый уровень владения Фотошопом). Огромная благодарность автору за этот и другие курсы (не первый прохожу у данного автора).",
          rating: 5,
        },
      ],
    },

    videoAdLink: "https://rutube.ru/play/embed/c3be29b8887e0463ac0bfd6a3d8ac6ee",
    programs: [photoshopEssentialProgram],
  },
};

export default photoshopEssentialCourselData;

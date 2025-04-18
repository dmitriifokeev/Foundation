import arrowSalarySection from "../../../assets/img/arrowSalarySection.svg";
import infiniti from "../../../assets/img/infinityLable.png";

import { v4 as uuidv4 } from "uuid";

import wordPressEssential from "../../../assets/img/bgCourseCards/wordPressEssential.jpg";

import wordPressEssentialProgram from "./wordPressEssentialProgram";

const wordpressCourseEssentialData = {
  slug: "wordpress-essential",
  hero: {
    title: "Курс создание сайтов в WordPress",
    tag: "C нуля",
    heroSubtitle:
      "Курс по WordPress познакомит вас со всеми инструментами для создания современного сайта с любым дизайном и полным функционалом без подписок и дополнительных трат, которые есть у других CMS и конструкторов сайтов.",
    type: "Курс",
  },
  bgImg: wordPressEssential,
  difficulty: 1,

  details: {
    raiting: "4,9 рейтинг",
    raitingNubmer: "70+ отзывов ",
    lessons: "98 уроков",
    hours: "13,5 часов видео",
    duration: "2 месяца",
    practices: "4 самостоятельных практик",
    projects: "2 проекта",
    price: "2,490 руб",
    // price: "5 руб",
    oldPrice: "4,990 руб",

    // Эти данные обязательны:
    skillspaceToken: "bdc987e4-6eb8-35e9-8559-ca8530018d22", // API-ключ курса

    skillspaceCourses: [{ courseId: "40246", groupId: "61031" }],

    about: {
      boxImgTitle:
        "WordPress — самая популярная платформа для создания и управления сайтами любой сложности.",
      title:
        "Создание сайтов любой сложности, интернет-магазины, настройка тем и плагинов. Все это Курс по WordPress",
      text: "WordPress — это самая популярная CMS в мире. В этом курсе вы научитесь создавать сайты любой сложности, управлять контентом, подключать плагины, настраивать темы и создавать интернет-магазины.",
      highlight: "...",
    },

    salary: {
      title: "WordPress используется на 43% всех сайтов в интернете.",
      text: "Средняя зарплата специалиста по WordPress более 90 000 руб/мес.",
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
        "Создавать сайты на WordPress с любым дизайном",
        "Создавать сайты на WordPress, используя сторонние шаблоны",
        "Научитесь изменять любые стили темы сайта на WordPress",
        "Научитесь работать в no-code платформе Elementor",
        "Изучите все возможности WordPress",
        "Сможете создать интернет-магазин",
        "Научитесь подключать оплату в рублях и криптовалюте",
        "Научитесь создавать блок с комментариями",
        "Узнаете, как адаптировать сайт под любое устройство",
        "Научитесь продвигать ваш сайт в поиске Google/Yandex",
        "Узнаете основы SEO",
        "Поймёте, как создавать основные анимации на сайте",
        "Научитесь приобретать домен, хостинг и настраивать WordPress",
        "Узнаете, как оптимизировать ваш сайт, чтобы он работал быстрее",
        "Научитесь создавать собственные шаблоны для сайта",
        "Сможете создать сайт любой сложности на WordPress",
        "Узнаете, как использовать собственные CSS-стили в WordPress",
      ],
      tools: [],
    },

    reviews: {
      totalCount: 70,
      ratings: {
        udemy: 4.8,
        stepik: 5,
      },
      links: {
        udemy: "https://www.udemy.com/course/wordpress-fokeev-essential/#reviews",
        stepik: "https://stepik.org/course/208466/reviews",
      },
      list: [
        {
          id: uuidv4(),
          name: "Юлия",
          course: "Курс по WordPress с нуля",
          text: "Отличный курс, как и все курсы этого автора! Дмитрий не только опытный специалист в своей области, но и прекрасный преподаватель, который умеет преподнести и объяснять сложные вещи простым и понятным языком. Хорошую речь, кстати тоже нельзя не отметить. Курсы у него увлекательные, затягивают, не оторваться от них до последнего урока. Отдельно отмечу, что автор всегда на связи, сразу отвечает на вопросы. И еще важный момент в веб дизайне - у преподавателя хороший вкус, у него красивые вещи получаются. Учиться ведь надо у лучших. Да, еще: информация в курсах всегда самая последняя, всякие новые фишки, источники. В общем, даже не думайте - берите курс и начинайте учиться, не пожалеете!",
          rating: 5,
        },
        {
          id: uuidv4(),
          name: "Павел",
          course: "Курс по WordPress с нуля",
          text: "Отличный курс! Перед тем, как начал проходить курс, были сомнения, стоит ли платить за курс по теме, о которой есть много бесплатного видео на ютубе. Оказалось, что да, определённо стоит. Материал хорошо структурирован, ясно изложен, рассказано множество деталей, которые вы не найдёте в бесплатных источниках, либо вам придётся перелопатить их очень много, теряя недели и месяцы своей жизни, вместо того, чтобы уже зарабатывать, создавая сайты за деньги. Ещё понравилось, что благодаря практическим заданиям в курсе, у нас появляются навыки, как создать то или это, например, разместить элемент в нужном месте на экране и с правильным размером. Этот курс даёт необходимые знания для создания коммерческих сайтов на WordPress.",
          rating: 5,
        },
        {
          id: uuidv4(),
          name: "Павел",
          course: "Курс по WordPress с нуля",
          text: "Отличный курс! Прям основы-основ! Я довольно хорошо разбираюсь в верстке, знаю HTML и CSS. Но мне захотелось попробовать изучить какой-нибудь конструктор сайтов и я выбрал Wordpress. А тут еще и пришло уведомление на скидку на новый курс от Дмитрия Фокеева. Автор разложил все по полочкам, шел пошагово от урока к уроку, рассказал что такое Wordpress, принципы его работы, как работаю плагины и многое другое. Мало воды и много практики. В общем, рекомендасьон)",
          rating: 5,
        },
        {
          id: uuidv4(),
          name: "Ярослав",
          course: "Курс по WordPress с нуля",
          text: "Прошел курс ровно за месяц. Это мой третий курс у Дмитрия и я очень благодарен ему за новые полученные знания. Теперь ждем курс по React))",
          rating: 5,
        },
      ],
    },

    videoAdLink: "https://rutube.ru/play/embed/59f4698445c5c95037a71892ef19f1de",
    programs: [wordPressEssentialProgram],
  },
};

export default wordpressCourseEssentialData;

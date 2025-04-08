import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import PromotionTimer from "../../UI/PromotionTimer";
import { getLessonWord, getHourWord } from "../../utility/formatWordFromNum";
import StarRating from "../../UI/StartRaiting";
import { useCart } from "../../context/CartContext"; // импортируем контекст

// Вспомогательная функция: если значение - число, возвращаем его,
// если это строка (например, "226 уроков"), пытаемся извлечь число из текста.
function parseNumber(value) {
  if (typeof value === "number") return value;
  if (typeof value === "string") {
    const match = value.match(/\d+/);
    return match ? Number(match[0]) : 0;
  }
  return 0;
}

function HeroCoursePage({ currentCourse }) {
  const { addToCart } = useCart(); // получаем функцию добавления в корзину

  const {
    slug,
    hero: { title, heroSubtitle, tag, type, lessonsNum, hoursNum } = {},
    bgImg = "",
    difficulty = 1,
    details: {
      lessons,
      hours,
      duration,
      practices,
      tests,
      projects,
      price,
      oldPrice,
      videoAdLink,
      about: { title: aboutTitle, boxImgTitle, text: aboutText } = {},
      salary: { title: salaryTitle, text: salaryText, note: salaryNote, salaryLevels } = {},
      skills: { topics, tools } = {},
      reviews: { totalCount, ratings, links, list } = {},
    } = {},
  } = currentCourse || {};

  const wordsFromSlugArr = slug.split("-");

  const finalLessonsNum = parseNumber(lessons);
  const finalHoursNum = parseNumber(hours);

  const levelClasses =
    difficulty === 2 ? "bg-secondary-50 text-secondary-700" : "bg-primary-100 text-primary-700";

  const handleBuyClick = () => {
    // Добавляем курс в корзину
    addToCart(currentCourse);
  };

  // --- Header Content (заголовок, тип, подзаголовок) ---
  const headerContent = (
    <div>
      <div className="flex items-center gap-2 mb-8">
        <span className="body-14 text-neutral-600">{type}</span>
        <span className="text-neutral-600 text-[12px]">•</span>
        <span className={`body-14 font-medium px-3 rounded-full ${levelClasses}`}>{tag}</span>
      </div>
      <h2 className="mb-16 sm:h1 h2 sm:text-neutral-900 text-neutral-900">{title}</h2>
      <h1 className="sr-only">{title} школы Foundation Дмитрия Фокеева</h1>
      <p className="mb-32 lg:mb-40 lg:body-18 body-16 lg:text-neutral-600 text-neutral-600">
        {heroSubtitle}
      </p>
    </div>
  );

  // --- Actions Content (кнопки, скидка, цены, таймер) ---
  const actionsContent = (
    <div>
      <div className="flex flex-col gap-8 mb-20 sm:flex-row sm:flex">
        {/* Вместо ссылки используем onClick */}
        <Button iconed onClick={handleBuyClick}>
          Оплатить и начать учиться
        </Button>
        <div className="flex flex-col items-center px-20 py-4 rounded-md w-fit bg-secondary-100">
          <h3 className="mb-4 h5 text-secondary-600">-30%</h3>
          <div className="flex items-center gap-1 text-[8px] text-secondary-600">
            Действует <PromotionTimer onlyTimer />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-8 mb-8">
        <p className="h4 text-primary-500">{price}</p>
        <p className="line-through text-neutral-400">{oldPrice}</p>
      </div>
      <div className="body-10 text-neutral-500">
        <PromotionTimer onlyDate />
      </div>
    </div>
  );

  // --- Right Block Content (видео и блоки с информацией) ---
  const rightContent = (
    <div className="mb-20 sm:mb-32 lg:mb-0">
      <div className="relative mb-8 overflow-hidden lg:w-full aspect-video rounded-xl">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={videoAdLink}
          allow="clipboard-write; autoplay"
        ></iframe>
      </div>
      <div className="grid [grid-template-columns:minmax(max-content,1fr)_minmax(max-content,1fr)_minmax(max-content,2fr)_minmax(max-content,2fr)] gap-4 mb-4 overflow-x-auto sm420:overflow-x-visible ">
        <div className="flex flex-col items-center justify-center p-8 rounded-md bg-neutral-300">
          <p className="h7 text-neutral-900">{finalLessonsNum}</p>
          <p className="leading-5 text-neutral-700 sm420:body-12 body-10 sm420:text-neutral-700">
            {getLessonWord(finalLessonsNum)}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 rounded-md bg-neutral-300">
          <p className="h7 text-neutral-900">{finalHoursNum}</p>
          <p className="leading-5 text-neutral-700 sm420:body-12 body-10 sm420:text-neutral-700">
            {getHourWord(finalHoursNum)}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 rounded-md bg-neutral-300">
          <p className="mb-1 h7 text-neutral-900">(∞)</p>
          <p className="leading-5 text-neutral-700 sm420:body-12 body-10 sm420:text-neutral-700">
            Пожизненный доступ
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 rounded-md bg-neutral-300">
          <p className="mb-1 h7 text-neutral-900">Сертификат</p>
          <p className="leading-5 text-neutral-700 sm420:body-12 body-10 sm420:text-neutral-700">
            Foundation
          </p>
        </div>
      </div>
      <div className="grid [grid-template-columns:minmax(max-content,1fr)_minmax(max-content,1fr)_minmax(max-content,2fr)_minmax(max-content,2fr)] gap-4">
        <div className="flex flex-col items-center justify-center col-span-2 p-8 rounded-md bg-neutral-300">
          <p className="text-center h7 text-neutral-900">
            Поддержка <br /> преподавателя
          </p>
        </div>
        {!wordsFromSlugArr.includes("program") && (
          <div className="flex flex-col items-start justify-center col-span-2 p-8 border rounded-md body-10 border-neutral-300">
            <div className="mb-4 h7 text-neutral-900">
              <StarRating />
            </div>
            <p className="leading-4 text-neutral-700 max-w-[130px] sm420:max-w-[180px] sm:max-w-[310px] md:max-w-[390px]  lg:max-w-[250px]">
              Более {totalCount} отзывов со средней оценкой {ratings.udemy} на{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary-500"
                href={links.udemy}
              >
                Udemy
              </a>{" "}
              и {ratings.stepik} на{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary-500"
                href={links.stepik}
              >
                Stepik
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Большие экраны */}
      <div className="container hidden m-auto lg:block">
        <div className="grid grid-cols-2 gap-40 py-32 lg:py-60 px-60 bg-neutral-200 rounded-xl">
          <div>
            {headerContent}
            {actionsContent}
          </div>
          <div>{rightContent}</div>
        </div>
      </div>

      {/* Маленькие экраны */}
      <div className="container block m-auto lg:hidden">
        <div className="flex flex-col gap-8 px-20 py-32 lg:py-60 bg-neutral-200 rounded-xl">
          {headerContent}
          {rightContent}
          {actionsContent}
        </div>
      </div>
    </>
  );
}

export default HeroCoursePage;

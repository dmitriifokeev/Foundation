import React from "react";
import { Link } from "react-router-dom";

function CourseCard({ course }) {
  const {
    hero: { title, tag, type } = {},
    bgImg = "",
    slug,
    difficulty = 1,
    details = {},
  } = course || {};

  // Определяем стили для уровня сложности
  const levelClasses =
    difficulty === 2 ? "bg-secondary-50 text-secondary-700" : "bg-primary-100 text-primary-700";

  // Извлекаем нужные поля из details
  const {
    raiting,
    raitingNubmer,
    lessons,
    hours,
    duration,
    practices,
    tests,
    projects,
    oldPrice,
    price,
  } = details;

  // Формируем массив для вывода деталей
  const detailItems = [
    raiting,
    raitingNubmer,
    lessons,
    hours,
    duration,
    practices,
    tests,
    projects,
  ].filter(Boolean);

  return (
    <Link to={`/courses/${slug}`}>
      <div className="relative overflow-hidden bg-neutral-700 rounded-xl group">
        {/* Label */}
        <div className="px-8 pt-8 mb-8">
          <div className="p-16 rounded-md bg-neutral-50">
            <div className="flex items-center gap-2 mb-[2px]">
              <span className="body-14 text-neutral-600">{type}</span>
              <span className="text-neutral-600 text-[12px]">•</span>
              <span className={`body-14 font-medium px-3 rounded-full ${levelClasses}`}>{tag}</span>
            </div>
            <h2 className=" h5 text-neutral-800">{title}</h2>
          </div>
        </div>

        {/* Main content */}
        <div className="relative w-full lg:h-52 sm:h-[192px] md:h-56 h-[210px] sm420:h-[250px] sm520:h-[290px] xl:h-[250px]">
          {/* Background Image */}
          <img
            src={bgImg}
            alt={title}
            className="absolute inset-0 w-full object-cover origin-center rotate-[-12deg] z-10 rounded-xl"
          />
          {/* Back Details */}
          <div className="absolute inset-0 pl-32 pt-20 md:pt-32 bg-black/40 backdrop-blur-md rounded-xl origin-center rotate-[-12deg] z-20 transition-opacity duration-300 opacity-0 md:group-hover:opacity-100 xl:pl-40">
            <h5 className="mb-12 text-white h5">Что внутри</h5>

            {/* Выводим динамический список деталей с разделителем */}
            <ul className="flex flex-wrap items-center gap-4 pr-32 mb-12 xl:pr-80 ">
              {detailItems.map((item, index) => (
                <React.Fragment key={index}>
                  <li className="text-white body-12">{item}</li>
                  {index < detailItems.length - 1 && (
                    <span className="text-neutral-400 text-[12px]">•</span>
                  )}
                </React.Fragment>
              ))}
            </ul>

            {/* Блок с ценами */}
            <div className="flex items-center">
              <h6 className="mr-12 line-through text-neutral-400">{oldPrice}</h6>
              <h4 className="h4 text-primary-500">{price}</h4>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CourseCard;

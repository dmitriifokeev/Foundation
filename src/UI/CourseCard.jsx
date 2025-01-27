import React from "react";

function CourseCard({ course }) {
  const {
    label: { title, tag, type } = {},
    bgImg = "",
    levelDifficulties = 1, // Уровень сложности
    detailsDescription = {}, // Используем detailsDescription на верхнем уровне
  } = course || {};

  const levelClasses =
    levelDifficulties === 2
      ? "bg-secondary-50 text-secondary-700"
      : "bg-primary-100 text-primary-700";

  return (
    <div className="relative pb-20 overflow-hidden bg-neutral-700 rounded-xl group">
      {/* Label */}
      <div className="px-16 pt-8 mb-8">
        <div className="p-16 bg-neutral-50 rounded-xl">
          <div className="flex items-center gap-2">
            <span className="body-14 text-neutral-600">{type}</span>
            <span className="text-neutral-600 text-[12px]">•</span>
            <span className={`body-14 font-medium px-3 rounded-full ${levelClasses}`}>{tag}</span>
          </div>
          <h2 className="font-bold h4 text-neutral-800">{title}</h2>
        </div>
      </div>

      {/* Main content */}
      <div className="relative w-full h-52">
        {/* Background Image */}
        <img
          src={bgImg}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover origin-center rotate-[-12deg] z-10 rounded-xl"
        />
        {/* Back Details */}
        <div className="absolute inset-0 pl-32 pt-20 bg-black/40 backdrop-blur-md rounded-xl origin-center rotate-[-12deg] z-20 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <h5 className="mb-12 text-white h5">Что внутри</h5>

          {/* Dynamic list of details with separator */}
          <ul className="flex flex-wrap items-center gap-4 mb-12">
            {Object.entries(detailsDescription).map(([key, value], index, array) => (
              <React.Fragment key={key}>
                <li className="text-white body-12">{value}</li>
                {/* Добавляем разделитель, если это не последний элемент */}
                {index < array.length - 1 && (
                  <span className="text-neutral-400 text-[12px]">•</span>
                )}
              </React.Fragment>
            ))}
          </ul>

          {/* Pricing */}
          <div className="flex items-center">
            <h6 className="mr-12 line-through text-neutral-400">{detailsDescription.oldPrice}</h6>
            <h4 className="h4 text-primary-500">{detailsDescription.price}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;

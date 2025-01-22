import React from "react";

function CourseCard({ course }) {
  const {
    label: { title, tag, type } = {},
    bgImg = "",
    detailsDescription = {}, // Используем detailsDescription на верхнем уровне
  } = course || {};

  return (
    <div className="bg-neutral-700 rounded-lg overflow-hidden group relative pb-20">
      {/* Label */}
      <div className="pt-8 px-16 mb-8">
        <div className="bg-neutral-50 rounded-lg p-16">
          <div className="flex items-center gap-2">
            <span className="body-14 text-neutral-600">{type}</span>
            <span className="text-neutral-600 text-[12px]">•</span>
            <span className="bg-secondary-50 text-secondary-700 body-14 font-medium px-3 rounded-full">
              {tag}
            </span>
          </div>
          <h2 className="h4 font-bold text-neutral-800">{title}</h2>
        </div>
      </div>

      {/* Main content */}
      <div className="relative w-full h-52">
        {/* Background Image */}
        <img
          src={bgImg}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover origin-center rotate-[-12deg] z-10 rounded-lg"
        />

        {/* Back Details */}
        <div className="absolute inset-0 pl-32 pt-20 bg-black/40 backdrop-blur-md rounded-lg origin-center rotate-[-12deg] z-20 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <h5 className="h5 mb-12 text-white">Что внутри</h5>

          {/* Dynamic list of details with separator */}
          <ul className="flex flex-wrap gap-4 mb-12 items-center">
            {Object.entries(detailsDescription).map(([key, value], index, array) => (
              <React.Fragment key={key}>
                <li className="body-12 text-white">{value}</li>
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

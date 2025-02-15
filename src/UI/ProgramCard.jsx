import SaleLabel from "./SaleLable";

export default function ProgramCard({ course }) {
  const {
    label: { title, tag, type } = {},
    bgImg = "",
    levelDifficulties = 1,
    courses = [],
  } = course;

  const levelClasses =
    levelDifficulties === 2
      ? "bg-secondary-50 text-secondary-700"
      : "bg-primary-100 text-primary-700";

  return (
    <div className="relative w-full overflow-hidden group rounded-xl">
      <SaleLabel
        size={100}
        position="absolute"
        text="-30%"
        textColor="#ffffff"
        fontSize={24}
        coordinate={{ top: -23, right: -20, bottom: null, left: null }}
      />
      <h2 className="absolute z-50 text-white sm:text-[150px] font-semibold font-main sm:bottom-[-52px] bottom-[-32px] right-[10px] text-[100px] tracking-tighter sm420:text-[120px] sm420:bottom-[-40px] lg:bottom-[-72px] lg:text-[200px] md:group-hover:opacity-0 transition-opacity duration-300">
        Junior
      </h2>

      {/* Верхний блок (height: 52) */}
      <div className="relative w-full h-56 overflow-hidden rounded-xl ">
        {/* Фон */}
        <img
          src={bgImg}
          alt={title}
          className="absolute inset-0 z-10 object-cover w-full h-full origin-center"
        />

        {/* Лейбл/тайтл */}
        <div className="absolute z-30 px-16 pt-8 mb-8 transition-opacity duration-300 md:group-hover:opacity-0">
          <div className="p-16 rounded-xl bg-neutral-50">
            <div className="flex items-center gap-2">
              <span className="body-14 text-neutral-600">{type}</span>
              <span className="text-neutral-600 text-[12px]">•</span>
              <span className={`body-14 font-medium px-3 rounded-full ${levelClasses}`}>{tag}</span>
            </div>
            <h2 className="font-bold h4 text-neutral-800">{title}</h2>
          </div>
        </div>

        {/* Затемняем картинку */}
        <div className="absolute inset-0 z-20" />
      </div>

      {/* Выплывающий блок снизу (анимация сохранена, не трогаем) */}
      <div
        className="absolute bottom-0 left-0 z-30 grid w-full h-full p-16 text-white align-middle transition-transform duration-300 transform translate-y-full rounded-xl bg-black/30 backdrop-blur-md md:group-hover:translate-y-0"
        style={{ minHeight: "150px" }}
      >
        <div
          className="grid items-center gap-4"
          style={{ gridTemplateColumns: "1fr 1fr 1fr 150px" }}
        >
          {courses.slice(0, 3).map((item, idx) => (
            <div key={idx} className="p-8 border-r border-neutral-600">
              <h3 className="mb-2 font-semibold body">{item.title}</h3>
              <p className="leading-relaxed body-14 text-neutral-300">
                {/* Вот здесь добавляем все поля */}
                {item.lessons} &middot; {item.hours} &middot; {item.months} &middot;{" "}
                {item.practices} &middot; {item.tests} &middot; {item.projects}
              </p>
            </div>
          ))}

          {/* 4-я колонка (цена) */}
          {courses[3]?.price ? (
            <div className="relative flex flex-col items-center justify-center p-8">
              <div className="text-center">
                <div className="mb-1 text-xl font-bold text-primary-400">{courses[3].price}</div>
                <div className="text-base line-through text-neutral-400">{courses[3].oldPrice}</div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center p-8 border-l border-neutral-600">
              Нет цены
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

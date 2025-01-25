import { SaleLabel } from "./Svgs";

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
    <div className="relative group w-full overflow-hidden">
      <SaleLabel
        size={100}
        position="absolute"
        text="-30%"
        textColor="#ffffff"
        fontSize={24}
        coordinate={{ top: -23, right: -20, bottom: null, left: null }}
      />
      {/* Верхний блок (height: 52) */}
      <div className="relative w-full h-56 rounded-lg overflow-hidden">
        {/* Фон */}
        <img
          src={bgImg}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover origin-center z-10"
        />

        {/* Лейбл/тайтл */}
        <div className="pt-8 px-16 mb-8 absolute z-30">
          <div className="bg-neutral-50 rounded-lg p-16">
            <div className="flex items-center gap-2">
              <span className="body-14 text-neutral-600">{type}</span>
              <span className="text-neutral-600 text-[12px]">•</span>
              <span className={`body-14 font-medium px-3 rounded-full ${levelClasses}`}>{tag}</span>
            </div>
            <h2 className="h4 font-bold text-neutral-800">{title}</h2>
          </div>
        </div>

        {/* Затемняем картинку */}
        <div className="absolute inset-0  z-20" />
      </div>

      {/* Выплывающий блок снизу (анимация сохранена, не трогаем) */}
      <div
        className="
            absolute bottom-0 left-0 w-full
            bg-black/80 backdrop-blur-md text-white h-full
            rounded-lg
            transform translate-y-full 
            group-hover:translate-y-0
            transition-transform duration-300
            p-16
            z-30
    grid    
    align-middle
          "
        style={{ minHeight: "150px" }}
      >
        <div
          className="grid gap-4  items-center"
          style={{ gridTemplateColumns: "1fr 1fr 1fr 150px" }}
        >
          {courses.slice(0, 3).map((item, idx) => (
            <div key={idx} className="p-8 border-r border-neutral-600">
              <h3 className="body font-semibold mb-2">{item.title}</h3>
              <p className="body-14 text-neutral-300 leading-relaxed">
                {/* Вот здесь добавляем все поля */}
                {item.lessons} &middot; {item.hours} &middot; {item.months} &middot;{" "}
                {item.practices} &middot; {item.tests} &middot; {item.projects}
              </p>
            </div>
          ))}

          {/* 4-я колонка (цена) */}
          {courses[3]?.price ? (
            <div className="relative p-8 flex flex-col items-center justify-center">
              <div className="text-center">
                <div className="text-xl font-bold mb-1 text-primary-400">{courses[3].price}</div>
                <div className="line-through text-neutral-400 text-base">{courses[3].oldPrice}</div>
              </div>
            </div>
          ) : (
            <div className="p-8 flex items-center justify-center border-l border-neutral-600">
              Нет цены
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

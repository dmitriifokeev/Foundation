function HeroCoursePage({ course }) {
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
    <section className="container m-auto">
      <div className="pb-32 pt-60 bg-neutral-200 rounded-xl">
        <div className="">
          <div className="">
            <div className="flex items-center gap-2">
              <span className="body-14 text-neutral-600">{type}</span>
              <span className="text-neutral-600 text-[12px]">•</span>
              <span className={`body-14 font-medium px-3 rounded-full ${levelClasses}`}>{tag}</span>
            </div>
            <h1>JavaScript Course</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroCoursePage;

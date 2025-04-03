import woman from "../../assets/img/woman.jpg";

export default function AboutCourseSection({ currentCourse }) {
  const {
    slug,
    hero: {
      title,
      heroSubtitle,
      tag,
      type,
      lessonsNum, // возможно, undefined, если не передано
      hoursNum, // возможно, undefined
      bgImgShort,
    } = {},
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
      about: {
        title: aboutTitle, // переименовываем, чтобы не пересекаться с hero.title
        boxImgTitle,
        text: aboutText,
      } = {},
      salary: { title: salaryTitle, text: salaryText, note: salaryNote, salaryLevels } = {},
      skills: { topics, tools } = {},
      reviews: { totalCount, ratings, links, list } = {},
    } = {},
  } = currentCourse || {};

  // Разбиваем slug на отдельные слова и запихиваем в массив типа "video-montage-program"
  const wordsFromSlugArr = slug.split("-");

  return (
    <section className="container m-auto pt-60 lg:pb-120 pb-80">
      <div className="flex flex-col items-center sm:gap-32 lg:flex-row">
        {/* Левая часть - Текст */}
        <div className="flex-1 ">
          <h2 className="mb-20 lg:h2 h3 lg:text-neutral-900 text-neutral-900 ">{aboutTitle}</h2>
          <p className="hidden lg:body-18 body-14 text-neutral-600 lg:text-neutral-600 sm:block">
            {aboutText}
          </p>
        </div>

        {/* Правая часть - Картинка и дополнительный текст */}
        <div className="relative flex-1 ">
          <div className="flex flex-col">
            <div className="z-10 md:py-40 md:px-32 px-20 py-32 lg:max-w-[440px] max-w-[80%] lg:leading-7 leading-5 rounded-lg bg-primary-700 text-neutral-50 lg:h3 sm:h4 h5">
              {boxImgTitle}
            </div>
            <img
              src={wordsFromSlugArr.includes("program") ? bgImgShort : bgImg}
              alt="Девушка с ноутбуком"
              className=" rounded-lg max-w-[355px] z-20 relative mt-[-20px] self-end w-[70%] md:w-[100%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

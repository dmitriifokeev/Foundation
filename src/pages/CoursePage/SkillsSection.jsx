import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import okIcon from "../../assets/img/okIcon.svg";

function SkillsSection({ currentCourse }) {
  const {
    slug,
    hero: {
      title,
      heroSubtitle,
      tag,
      type,
      lessonsNum, // возможно, undefined, если не передано
      hoursNum, // возможно, undefined
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

  return (
    <section className="container pt-20 pb-0 m-auto md:pb-20">
      <div className="grid md:grid-cols-[1fr_2fr] grid-cols-1 md:gap-40 gap-32">
        {/* left */}
        <div className="flex flex-col ">
          <h2 className="md:mb-32 lg:h2 h3 text-neutral-900 lg:text-neutral-900">
            Ваши навыки после курса
          </h2>
          <div className="hidden md:block">
            <Link to="/#">
              <Button iconed>Начать учиться</Button>
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="p-32 bg-neutral-100 rounded-xl">
          <h3 className="mb-16 lg:h4 h5 text-neutral-900 lg:text-neutral-900">Темы курса</h3>
          <ul className="flex flex-col gap-8 mb-20 body-12 text-neutral-600">
            {topics.map((skill, index) => {
              return (
                <li key={index} className="flex gap-8">
                  <img src={okIcon} alt="ок icon" /> {skill}
                </li>
              );
            })}
          </ul>

          <h3 className="mb-16 lg:h4 h5 text-neutral-900 lg:text-neutral-900">
            Софт / Инструменты
          </h3>
          <ul className="flex gap-[4px]">
            {tools.map((tool, index) => {
              return (
                <li key={index} className="flex gap-8">
                  <img src={tool} alt="ок icon" className="w-[30px]" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;

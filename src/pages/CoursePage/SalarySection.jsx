import { createBackgroundStyles } from "../../utility/bgImg";
import bgLinesSelarySection from "../../assets/img/bgLinesSelarySection.svg";
import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import { useState } from "react";
import { useEffect } from "react";

function SalarySection({ currentCourse }) {
  // Состояние для отслеживания ширины экрана
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Следим за изменением размера экрана
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <section className="container pt-20 m-auto pb-80">
      <div className="grid md:grid-cols-[1fr_2fr] grid-cols-1 md:gap-40 gap-32">
        {/* Left */}
        <div className="flex flex-col justify-between">
          <div className="mb-16">
            <h2 className="mb-16 lg:h2 h3 text-neutral-900 lg:text-neutral-900">{salaryTitle}</h2>
            <p className="body-16 lg:body-18 text-neutral-600 lg:text-neutral-600">{salaryText}</p>
          </div>
          <div>
            <p className="mb-16 body-10 text-neutral-600">{salaryNote}</p>
            {/* <Link to="/card">
              <Button iconed>Начать учиться</Button>
            </Link> */}
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col items-end gap-8 md:gap-16 md:flex-row">
          {salaryLevels.map((item, index) => {
            // Определяем адаптивную высоту
            let height = item.height;
            if (windowWidth < 768) height = item.adaptivHeight; // Мобильные устройства (sm)
            else height = item.height; // Десктоп

            return (
              <div
                key={index}
                className={` md:flex-1 overflow-hidden w-full md:w-auto pl-[20px] pb-12 p-4 rounded-xl relative shadow-sm ${item.bgColor} flex flex-col justify-end`}
                style={{ ...createBackgroundStyles(bgLinesSelarySection), height }}
              >
                <img
                  src={item.icon}
                  alt="иконка стрелки"
                  className="absolute top-16 right-16"
                  style={{ width: item.iconSize, top: item.topRight, right: item.topRight }}
                />
                <div>
                  <h2 className="text-[40px] font-semibold text-neutral-600">{item.salary}</h2>
                  <p className="text-gray-600 body-12">{item.experience}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SalarySection;

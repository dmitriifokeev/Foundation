import { useState } from "react";
import coursesData from "../../data/coursesData";
import { ArrowLeftIcon, ArrowRightIcon } from "../../UI/ArrowIcons";
import CourseCard from "../../UI/CourseCard";
import CoursesButtons from "./CoursesButtons";

export function Courses() {
  const [activeCategory, setActiveCategory] = useState("webDevelopment");
  const [filteredCourses, setFilteredCourses] = useState(coursesData[activeCategory] || []);
  const [currentIndex, setCurrentIndex] = useState(0);

  // При клике на категорию решаем, какие курсы надо показать
  function handleCategoryChange(category) {
    let newCourses = [];

    if (category === "fromZero") {
      // Берём ВСЕ курсы из объекта coursesData и фильтруем тех, у кого levelDifficulties === 1
      newCourses = Object.values(coursesData)
        .flat()
        .filter((course) => course.levelDifficulties === 1);
    } else if (category === "proLevel") {
      // Аналогично, берём все курсы, оставляем levelDifficulties === 2
      newCourses = Object.values(coursesData)
        .flat()
        .filter((course) => course.levelDifficulties === 2);
    } else {
      // Обычная категория (webDevelopment, CMS, ...), берём напрямую
      newCourses = coursesData[category] || [];
    }

    setActiveCategory(category);
    setFilteredCourses(newCourses);
    setCurrentIndex(0); // при смене категории сбрасываем слайдер на начало
  }

  const itemsPerPage = 3;

  function handleNext() {
    if (currentIndex + itemsPerPage < filteredCourses.length) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function handlePrev() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  return (
    <>
      <div className="flex flex-row items-end justify-between mb-20">
        <CoursesButtons activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
      </div>

      {/* Контейнер курсов с навигацией */}
      <div className="relative overflow-hidden">
        {currentIndex > 0 && (
          <button
            onClick={handlePrev}
            className="w-40 h-40 absolute left-0 top-1/2 transform -translate-y-1/2 bg-neutral-900/40 p-3 rounded-full z-50"
          >
            <ArrowLeftIcon />
          </button>
        )}

        {currentIndex + itemsPerPage < filteredCourses.length && (
          <button
            onClick={handleNext}
            className="w-40 h-40 absolute right-0 top-1/2 transform -translate-y-1/2 bg-neutral-900/40 p-3 rounded-full z-50 flex items-center justify-center"
          >
            <ArrowRightIcon />
          </button>
        )}

        {/* Слайдер карточек */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
          }}
        >
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="min-w-[calc(100%/3)] px-1" // Устанавливаем ширину каждой карточки
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

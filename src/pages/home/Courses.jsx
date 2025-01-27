import { useState } from "react";
import coursesData from "../../data/coursesData";
import { ArrowLeftIcon, ArrowRightIcon } from "../../UI/Svgs";
import CourseCard from "../../UI/CourseCard";
import CoursesButtons from "./CoursesButtons";
import ProgramCard from "../../UI/ProgramCard";

export function Courses() {
  const [activeCategory, setActiveCategory] = useState("webDevelopment");
  const [filteredCourses, setFilteredCourses] = useState(coursesData.webDevelopment || []);
  const [filteredProgramms, setFilteredProgramms] = useState(() =>
    coursesData.programms
      ? coursesData.programms.filter((prog) => prog.group === "webDevelopment")
      : []
  );

  // Индексы для двух слайдеров:
  const [currentIndexCourses, setCurrentIndexCourses] = useState(0);
  const [currentIndexPrograms, setCurrentIndexPrograms] = useState(0);

  // Для курсов оставим как прежде, 3 на страницу
  const itemsPerPageCourses = 3;

  // Для программ показываем по 1 (или 2...) на «страницу»,
  // чтобы листались «одна за другой»:
  const itemsPerPagePrograms = 1;

  // Фильтруем курсы и программы при переключении категории
  function filterCoursesAndPrograms(category) {
    let newCourses = [];
    let newProgramms = [];

    if (category === "fromZero") {
      // (1) Курсы (levelDifficulties=1)
      const keysWithoutProgramms = Object.keys(coursesData).filter((k) => k !== "programms");
      newCourses = keysWithoutProgramms
        .map((key) => coursesData[key])
        .flat()
        .filter((course) => course.levelDifficulties === 1);

      // (2) Все программы
      newProgramms = coursesData.programms || [];
    } else if (category === "proLevel") {
      const keysWithoutProgramms = Object.keys(coursesData).filter((k) => k !== "programms");
      newCourses = keysWithoutProgramms
        .map((key) => coursesData[key])
        .flat()
        .filter((course) => course.levelDifficulties === 2);
      newProgramms = [];
    } else if (category === "programms") {
      newCourses = [];
      newProgramms = coursesData.programms || [];
    } else {
      // Обычная категория
      newCourses = coursesData[category] || [];
      if (coursesData.programms) {
        newProgramms = coursesData.programms.filter((prog) => prog.group === category);
      }
    }

    setFilteredCourses(newCourses);
    setFilteredProgramms(newProgramms);
    setCurrentIndexCourses(0);
    setCurrentIndexPrograms(0);
  }

  function handleCategoryChange(category) {
    setActiveCategory(category);
    filterCoursesAndPrograms(category);
  }

  // Слайдер курсов
  function handleNextCourses() {
    if (currentIndexCourses + itemsPerPageCourses < filteredCourses.length) {
      setCurrentIndexCourses(currentIndexCourses + 1);
    }
  }
  function handlePrevCourses() {
    if (currentIndexCourses > 0) {
      setCurrentIndexCourses(currentIndexCourses - 1);
    }
  }

  // Слайдер программ
  function handleNextPrograms() {
    if (currentIndexPrograms + itemsPerPagePrograms < filteredProgramms.length) {
      setCurrentIndexPrograms(currentIndexPrograms + 1);
    }
  }
  function handlePrevPrograms() {
    if (currentIndexPrograms > 0) {
      setCurrentIndexPrograms(currentIndexPrograms - 1);
    }
  }

  return (
    <div className="mb-80 container m-auto">
      <div className="flex flex-row items-end justify-between mb-20 ">
        <CoursesButtons activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
      </div>

      {/* --- СЛАЙДЕР КУРСОВ --- */}
      {activeCategory !== "programms" && filteredCourses.length > 0 && (
        <div className="relative overflow-hidden mb-8">
          {currentIndexCourses > 0 && (
            <button
              onClick={handlePrevCourses}
              className="w-40 h-40 absolute left-0 top-1/2 transform -translate-y-1/2 
                         bg-neutral-900/40 p-3 rounded-full z-50"
            >
              <ArrowLeftIcon />
            </button>
          )}
          {currentIndexCourses + itemsPerPageCourses < filteredCourses.length && (
            <button
              onClick={handleNextCourses}
              className="w-40 h-40 absolute right-0 top-1/2 transform -translate-y-1/2 
                         bg-neutral-900/40 p-3 rounded-full z-50 flex items-center justify-center"
            >
              <ArrowRightIcon />
            </button>
          )}

          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndexCourses * (100 / itemsPerPageCourses)}%)`,
            }}
          >
            {filteredCourses.map((course, idx) => (
              <div key={idx} className="min-w-[calc(100%/3)] px-1">
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- СЛАЙДЕР ПРОГРАММ --- */}
      {filteredProgramms.length > 0 && (
        <div className="relative overflow-hidden">
          {currentIndexPrograms > 0 && (
            <button
              onClick={handlePrevPrograms}
              className="w-40 h-40 absolute left-0 top-1/2 transform -translate-y-1/2 
                         bg-neutral-900/40 p-3 rounded-full z-50"
            >
              <ArrowLeftIcon />
            </button>
          )}
          {currentIndexPrograms + itemsPerPagePrograms < filteredProgramms.length && (
            <button
              onClick={handleNextPrograms}
              className="w-40 h-40 absolute right-0 top-1/2 transform -translate-y-1/2 
                         bg-neutral-900/40 p-3 rounded-full z-50 flex items-center justify-center"
            >
              <ArrowRightIcon />
            </button>
          )}

          {/* 
            «Горизонтальный» вывод программ, 
            по 1 программе на «кадр» (если itemsPerPagePrograms=1).
          */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndexPrograms * (100 / itemsPerPagePrograms)}%)`,
            }}
          >
            {filteredProgramms.map((program, idx) => (
              <div key={idx} className="min-w-full px-1">
                <ProgramCard course={program} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

import { useState, useEffect } from "react";
import coursesData from "../../data/coursesData";
import { ArrowLeftIcon, ArrowRightIcon } from "../../UI/Svgs";
import CourseCard from "../../UI/CourseCard";
import CoursesButtons from "./CoursesButtons";
import ProgramCard from "../../UI/ProgramCard";

export function Courses() {
  // Динамическое значение для курсов в зависимости от ширины экрана:
  const [itemsPerPageCourses, setItemsPerPageCourses] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Мобильные устройства: 1 карточка
        setItemsPerPageCourses(1);
      } else if (width < 1024) {
        // Устройства sm: 2 карточки
        setItemsPerPageCourses(2);
      } else {
        // Устройства lg и больше: 3 карточки
        setItemsPerPageCourses(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Остальные стейты и логика:
  const [activeCategory, setActiveCategory] = useState("webDevelopment");
  const [filteredCourses, setFilteredCourses] = useState(coursesData.webDevelopment || []);
  const [filteredProgramms, setFilteredProgramms] = useState(() =>
    coursesData.programms
      ? coursesData.programms.filter((prog) => prog.group === "webDevelopment")
      : []
  );

  // Индексы для слайдеров:
  const [currentIndexCourses, setCurrentIndexCourses] = useState(0);
  const [currentIndexPrograms, setCurrentIndexPrograms] = useState(0);

  // Для программ оставляем по 1 на страницу
  const itemsPerPagePrograms = 1;

  // Фильтрация курсов и программ при выборе категории
  function filterCoursesAndPrograms(category) {
    let newCourses = [];
    let newProgramms = [];

    if (category === "fromZero") {
      // (1) Курсы (levelDifficulties = 1)
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

  // Логика переключения слайдера курсов
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

  // Логика переключения слайдера программ
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
    <div className="container m-auto mb-80">
      <div className="flex flex-row justify-between mb-20 sm:mb-0 md:mb-20">
        <CoursesButtons activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
      </div>

      {/* --- СЛАЙДЕР КУРСОВ --- */}
      {activeCategory !== "programms" && filteredCourses.length > 0 && (
        <div className="relative mb-8 overflow-hidden">
          {currentIndexCourses > 0 && (
            <button
              onClick={handlePrevCourses}
              className="absolute left-0 z-50 w-40 h-40 p-3 transform -translate-y-1/2 rounded-full top-1/2 bg-neutral-900/40"
            >
              <ArrowLeftIcon />
            </button>
          )}
          {currentIndexCourses + itemsPerPageCourses < filteredCourses.length && (
            <button
              onClick={handleNextCourses}
              className="absolute right-0 z-50 flex items-center justify-center w-40 h-40 p-3 transform -translate-y-1/2 rounded-full top-1/2 bg-neutral-900/40"
            >
              <ArrowRightIcon />
            </button>
          )}

          <div
            className="flex transition-transform duration-500 ease-in-out sm:items-end"
            style={{
              transform: `translateX(-${currentIndexCourses * (100 / itemsPerPageCourses)}%)`,
            }}
          >
            {filteredCourses.map((course, idx) => (
              <div
                key={idx}
                className="lg:min-w-[calc(100%/3)] sm:min-w-[calc(100%/2)] min-w-[calc(100%/1)] px-1"
              >
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
              className="absolute left-0 z-50 w-40 h-40 p-3 transform -translate-y-1/2 rounded-full top-1/2 bg-neutral-900/40"
            >
              <ArrowLeftIcon />
            </button>
          )}
          {currentIndexPrograms + itemsPerPagePrograms < filteredProgramms.length && (
            <button
              onClick={handleNextPrograms}
              className="absolute right-0 z-50 flex items-center justify-center w-40 h-40 p-3 transform -translate-y-1/2 rounded-full top-1/2 bg-neutral-900/40"
            >
              <ArrowRightIcon />
            </button>
          )}

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

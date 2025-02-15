import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import iconLeftSliderBtnWhite from "../../assets/img/buttonsSvg/iconLeftSliderBtnWhite.svg";
import iconRightSliderBtnWhite from "../../assets/img/buttonsSvg/iconRightSliderBtnWhite.svg";
import "swiper/css"; // базовые стили Swiper

import coursesData from "../../data/coursesData";

import CourseCard from "../../UI/CourseCard";
import CoursesButtons from "./CoursesButtons";
import ProgramCard from "../../UI/ProgramCard";

export function Courses() {
  // Состояния для активной категории и отфильтрованных данных
  const [activeCategory, setActiveCategory] = useState("webDevelopment");
  const [filteredCourses, setFilteredCourses] = useState(coursesData.webDevelopment || []);
  const [filteredProgramms, setFilteredProgramms] = useState(() =>
    coursesData.programms
      ? coursesData.programms.filter((prog) => prog.group === "webDevelopment")
      : []
  );

  // Фильтрация курсов и программ при выборе категории
  function filterCoursesAndPrograms(category) {
    let newCourses = [];
    let newProgramms = [];

    if (category === "fromZero") {
      // Курсы для начинающих (levelDifficulties = 1)
      const keysWithoutProgramms = Object.keys(coursesData).filter((k) => k !== "programms");
      newCourses = keysWithoutProgramms
        .map((key) => coursesData[key])
        .flat()
        .filter((course) => course.levelDifficulties === 1);
      newProgramms = coursesData.programms || [];
    } else if (category === "proLevel") {
      // Курсы для продвинутых (levelDifficulties = 2)
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
  }

  function handleCategoryChange(category) {
    setActiveCategory(category);
    filterCoursesAndPrograms(category);
  }

  // Создаем рефы для навигации курсов и программ
  const coursesPrevRef = useRef(null);
  const coursesNextRef = useRef(null);
  const programsPrevRef = useRef(null);
  const programsNextRef = useRef(null);

  return (
    <div className="container m-auto mb-80">
      {/* Панель переключения категорий */}
      <div className="flex flex-row mb-20">
        <CoursesButtons activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
      </div>

      {/* --- Слайдер КУРСОВ --- */}
      {activeCategory !== "programms" && filteredCourses.length > 0 && (
        <div className="relative sm:mb-[-16px] mb-[8px] md:mb-[8px]">
          <Swiper
            modules={[Navigation]}
            loop={true}
            navigation={{
              prevEl: coursesPrevRef.current,
              nextEl: coursesNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // Привязываем элементы навигации до инициализации
              swiper.params.navigation.prevEl = coursesPrevRef.current;
              swiper.params.navigation.nextEl = coursesNextRef.current;
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            spaceBetween={8}
          >
            {filteredCourses.map((course, idx) => (
              <SwiperSlide key={idx}>
                <div className="">
                  <CourseCard course={course} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Кастомные кнопки навигации для курсов */}
          <button
            ref={coursesPrevRef}
            className="absolute left-0 z-50 w-40 h-40 p-3 transform -translate-y-1/2 rounded-full top-1/2 bg-neutral-900/40"
          >
            <img
              className="absolute transform -translate-y-1/2 top-1/2"
              src={iconLeftSliderBtnWhite}
              alt="left arrow"
            />
          </button>
          <button
            ref={coursesNextRef}
            className="absolute right-0 z-50 w-40 h-40 p-3 transform -translate-y-1/2 rounded-full top-1/2 bg-neutral-900/40"
          >
            <img
              className="absolute transform translate-x-[4px] -translate-y-1/2 top-1/2"
              src={iconRightSliderBtnWhite}
              alt="right arrow"
            />
          </button>
        </div>
      )}

      {/* --- Слайдер ПРОГРАММ --- */}
      {filteredProgramms.length > 0 && (
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            loop={true}
            navigation={{
              prevEl: programsPrevRef.current,
              nextEl: programsNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = programsPrevRef.current;
              swiper.params.navigation.nextEl = programsNextRef.current;
            }}
            slidesPerView={1}
            spaceBetween={16}
          >
            {filteredProgramms.map((program, idx) => (
              <SwiperSlide key={idx}>
                <div className="">
                  <ProgramCard course={program} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Кастомные кнопки навигации для программ */}
          <button
            ref={programsPrevRef}
            className="absolute left-0 z-50 w-40 h-40 p-3 transform -translate-y-1/2 rounded-full top-1/2 bg-neutral-900/40"
          >
            <img
              className="absolute transform -translate-y-1/2 top-1/2"
              src={iconLeftSliderBtnWhite}
              alt="left arrow"
            />
          </button>
          <button
            ref={programsNextRef}
            className="absolute right-0 z-50 w-40 h-40 p-3 transform -translate-y-1/2 rounded-full top-1/2 bg-neutral-900/40"
          >
            <img src={iconRightSliderBtnWhite} alt="right arrow" />
          </button>
        </div>
      )}
    </div>
  );
}

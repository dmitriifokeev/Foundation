import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import iconLeftSliderBtnWhite from "../../assets/img/buttonsSvg/iconLeftSliderBtnWhite.svg";
import iconRightSliderBtnWhite from "../../assets/img/buttonsSvg/iconRightSliderBtnWhite.svg";
import "swiper/css"; // базовые стили Swiper

import coursesData from "../../data/coursesData";
import CourseCard from "../../UI/CourseCard";
import CoursesButtons from "./CoursesButtons";
import ProgramCard from "../../UI/ProgramCard";

import { v4 as uuidv4 } from "uuid";

export function Courses({ pt, staticCategory, showButtons = true, categoryData, forCoursesPage }) {
  // Если передан staticCategory, то используем его, иначе значение по умолчанию
  const initialCategory = staticCategory || "webDevelopment";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [filteredCourses, setFilteredCourses] = useState(coursesData[initialCategory] || []);
  const [filteredProgramms, setFilteredProgramms] = useState(() =>
    coursesData.programms
      ? coursesData.programms.filter((prog) => prog.group === initialCategory)
      : []
  );

  // Фильтрация курсов и программ по выбранной категории
  function filterCoursesAndPrograms(category) {
    let newCourses = [];
    let newProgramms = [];

    if (category === "fromZero") {
      // Курсы для начинающих (difficulty === 1)
      const keysWithoutProgramms = Object.keys(coursesData).filter((k) => k !== "programms");
      newCourses = keysWithoutProgramms
        .map((key) => coursesData[key])
        .flat()
        .filter((course) => course.difficulty === 1);
      newProgramms = coursesData.programms || [];
    } else if (category === "proLevel") {
      // Курсы для продвинутых (difficulty === 2)
      const keysWithoutProgramms = Object.keys(coursesData).filter((k) => k !== "programms");
      newCourses = keysWithoutProgramms
        .map((key) => coursesData[key])
        .flat()
        .filter((course) => course.difficulty === 2);
      newProgramms = [];
    } else if (category === "programms") {
      newCourses = [];
      newProgramms = coursesData.programms || [];
    } else {
      // Обычная категория (например, "webDevelopment", "CMS", "webDesign" и т.д.)
      newCourses = coursesData[category] || [];
      if (coursesData.programms) {
        newProgramms = coursesData.programms.filter((prog) => prog.group === category);
      }
    }

    setFilteredCourses(newCourses);
    setFilteredProgramms(newProgramms);
  }

  // Если компонент работает в статичном режиме, переключение категорий не требуется
  function handleCategoryChange(category) {
    setActiveCategory(category);
    filterCoursesAndPrograms(category);
  }

  // При изменении fixed категории (если она передана) автоматически фильтруем данные
  useEffect(() => {
    if (staticCategory) {
      filterCoursesAndPrograms(staticCategory);
      setActiveCategory(staticCategory);
    }
  }, [staticCategory]);

  // Рефы для навигации слайдеров
  const coursesPrevRef = useRef(null);
  const coursesNextRef = useRef(null);
  const programsPrevRef = useRef(null);
  const programsNextRef = useRef(null);

  return (
    <div className="container m-auto mb-80" style={{ paddingTop: `${pt}px` }}>
      {forCoursesPage &&
        categoryData.map((category) => (
          <div key={uuidv4()} className="flex flex-col justify-start rounded-lg ">
            {console.log(category.description)}
            <h2 className="mb-20 h2 sm:h1 text-neutral-900 sm:text-neutral-900">
              {category.title}
            </h2>
            <p className="mb-20 body-16 text-neutral-600">{category.description}</p>
          </div>
        ))}

      {/* Отображать панель переключения категорий только если showButtons === true */}
      {showButtons && (
        <div className="flex flex-row mb-20">
          <CoursesButtons activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
        </div>
      )}

      {/* --- Слайдер КУРСОВ --- */}
      {activeCategory !== "programms" && filteredCourses.length > 0 && (
        <div className="relative mb-[8px] md:mb-[8px]">
          <Swiper
            modules={[Navigation]}
            loop={true}
            navigation={{
              prevEl: coursesPrevRef.current,
              nextEl: coursesNextRef.current,
            }}
            onBeforeInit={(swiper) => {
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
                <div>
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
                <div>
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

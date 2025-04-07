import iconLeftSliderBtnWhite from "../../assets/img/buttonsSvg/iconLeftSliderBtnWhite.svg";
import iconRightSliderBtnWhite from "../../assets/img/buttonsSvg/iconRightSliderBtnWhite.svg";
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Если у вас Swiper 9+, то импортируйте Navigation из "swiper/modules"
import { Navigation } from "swiper/modules";
import "swiper/css"; // базовые стили Swiper

import CourseCard from "../../UI/CourseCard";
import CoursesButtons from "./CoursesButtons";
import ProgramCard from "../../UI/ProgramCard";
import { allCategoriesData } from "../../data/filteredCoursesData";

export function Courses({ pt, staticCategory, showButtons = true }) {
  const initialCategory = staticCategory || "webDevelopment";
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  useEffect(() => {
    if (staticCategory) {
      setActiveCategory(staticCategory);
    }
  }, [staticCategory]);

  const activeCategoryData = allCategoriesData.find((cat) => cat.slug === activeCategory);
  const programmsCategory = allCategoriesData.find((cat) => cat.slug === "programms");
  const filteredCourses = activeCategoryData?.courses || [];

  let filteredProgramms = [];
  if (programmsCategory) {
    if (activeCategory === "programms") {
      filteredProgramms = programmsCategory.courses;
    } else {
      filteredProgramms = programmsCategory.courses.filter(
        (prog) => prog.group && prog.group.includes(activeCategory)
      );
    }
  }

  function handleCategoryChange(categorySlug) {
    setActiveCategory(categorySlug);
  }

  // Рефы для навигации слайдеров
  const coursesPrevRef = useRef(null);
  const coursesNextRef = useRef(null);
  const programsPrevRef = useRef(null);
  const programsNextRef = useRef(null);
  const [coursesSwiper, setCoursesSwiper] = useState(null);
  const [programsSwiper, setProgramsSwiper] = useState(null);

  // Обновляем навигацию для слайдера курсов с небольшой задержкой
  useEffect(() => {
    if (coursesSwiper && coursesPrevRef.current && coursesNextRef.current) {
      setTimeout(() => {
        coursesSwiper.params.navigation.prevEl = coursesPrevRef.current;
        coursesSwiper.params.navigation.nextEl = coursesNextRef.current;
        coursesSwiper.navigation.destroy();
        coursesSwiper.navigation.init();
        coursesSwiper.navigation.update();
      }, 100);
    }
  }, [coursesSwiper, coursesPrevRef.current, coursesNextRef.current]);

  // Аналогично обновляем навигацию для слайдера программ
  useEffect(() => {
    if (programsSwiper && programsPrevRef.current && programsNextRef.current) {
      setTimeout(() => {
        programsSwiper.params.navigation.prevEl = programsPrevRef.current;
        programsSwiper.params.navigation.nextEl = programsNextRef.current;
        programsSwiper.navigation.destroy();
        programsSwiper.navigation.init();
        programsSwiper.navigation.update();
      }, 100);
    }
  }, [programsSwiper, programsPrevRef.current, programsNextRef.current]);

  return (
    <div className="container m-auto mb-80" style={{ paddingTop: `${pt}px` }}>
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
            onSwiper={(swiper) => setCoursesSwiper(swiper)}
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
            onSwiper={(swiper) => setProgramsSwiper(swiper)}
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
            <img
              className="absolute transform -translate-y-1/2 top-1/2"
              src={iconRightSliderBtnWhite}
              alt="right arrow"
            />
          </button>
        </div>
      )}
    </div>
  );
}

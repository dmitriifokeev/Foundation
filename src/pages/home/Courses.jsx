import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import iconLeftSliderBtnWhite from "../../assets/img/buttonsSvg/iconLeftSliderBtnWhite.svg";
import iconRightSliderBtnWhite from "../../assets/img/buttonsSvg/iconRightSliderBtnWhite.svg";
import "swiper/css"; // базовые стили Swiper

import CourseCard from "../../UI/CourseCard";
import CoursesButtons from "./CoursesButtons";
import ProgramCard from "../../UI/ProgramCard";

// Это ваш готовый массив категорий, уже с подставленными курсами для fromZero и proLevel.
// Предположим, он импортируется как summaryCoursesData:
import { allCategoriesData } from "../../data/filteredCoursesData";

import { v4 as uuidv4 } from "uuid";

export function Courses({ pt, staticCategory, showButtons = true }) {
  // Если передали staticCategory, используем его как slug, иначе берём "webDevelopment" по умолчанию
  const initialCategory = staticCategory || "webDevelopment";

  // Активная категория
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  // При каждом изменении staticCategory (если передаётся) — обновляем activeCategory
  useEffect(() => {
    if (staticCategory) {
      setActiveCategory(staticCategory);
    }
  }, [staticCategory]);

  // Находим объект категории, у которой slug === activeCategory
  const activeCategoryData = allCategoriesData.find((cat) => cat.slug === activeCategory);

  // Для программ — ищем категорию, где slug === "programms"
  const programmsCategory = allCategoriesData.find((cat) => cat.slug === "programms");

  // Массив курсов активной категории
  const filteredCourses = activeCategoryData?.courses || [];

  // Если выбрана категория "programms", показываем все программы.
  // Иначе показываем программы, которые относятся к текущей категории (через поле group).
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

  // Функция переключения категории (при нажатии на кнопки)
  function handleCategoryChange(categorySlug) {
    setActiveCategory(categorySlug);
  }

  // Рефы для навигации слайдеров
  const coursesPrevRef = useRef(null);
  const coursesNextRef = useRef(null);
  const programsPrevRef = useRef(null);
  const programsNextRef = useRef(null);

  return (
    <div className="container m-auto mb-80" style={{ paddingTop: `${pt}px` }}>
      {/* Отображать панель переключения категорий только если showButtons === true */}
      {showButtons && (
        <div className="flex flex-row mb-20">
          <CoursesButtons activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
        </div>
      )}

      {/* --- Слайдер КУРСОВ --- */}
      {/* Если текущая категория НЕ "programms", и в ней есть курсы */}
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
      {/* Если в массиве программ что-то есть, показываем их отдельным слайдером */}
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

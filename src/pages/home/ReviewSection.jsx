// ReviewsSection.jsx
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import bgCircles from "../../assets/img/bgLines.svg";

import NavigationButton from "../../UI/NavigationButton";
import { createBackgroundStyles } from "../../utility/bgImg";
import useSwiperNavigation from "../../hooks/useSwiperNavigationBtn";
import coursesData from "../../data/coursesData";
import { useState } from "react";
import { useEffect } from "react";

export default function ReviewsSection({ allReviews, currentCourse }) {
  const [reviews, setReviews] = useState([]);

  // Реф для экземпляра Swiper
  const swiperRef = useRef(null);
  // Рефы для кастомных кнопок навигации
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

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

  useEffect(() => {
    if (allReviews) {
      function collectFirstReviews(data) {
        return Object.values(data)
          .flatMap((category) =>
            category.flatMap((course) =>
              course.details?.reviews?.list?.length ? course.details.reviews.list[0] : null
            )
          )
          .filter((review) => review !== null);
      }

      setReviews(collectFirstReviews(coursesData));
    } else {
      setReviews(list);
    }
  }, [allReviews, list]); // ✅ Запускаем `useEffect` при изменении `allReviews`

  // Подключаем хук для обновления навигации
  useSwiperNavigation(swiperRef, prevButtonRef, nextButtonRef);

  return (
    <section className="pt-[80px] md:pb-[120px] pb-80">
      <div className="container px-4 text-center md:max-w-none">
        {/* Заголовок и подзаголовок */}
        <h2 className="mb-20 lg:h1 h2 text-neutral-900 lg:text-neutral-900">
          98% студентов проходивших курсы
          <br />
          оставляют оценку <span className="text-primary-500">5 из 5</span>
        </h2>

        <p className="mb-32 text-gray-600 lg:mb-40 lg:body body-14">
          Тысячи независимых отзывов на{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-primary-500"
            href="https://stepik.org/users/345251800/reviews"
          >
            Stepik
          </a>{" "}
          и{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-primary-500"
            href="https://www.udemy.com/user/dmitrii-4275/"
          >
            Udemy
          </a>
        </p>

        {/* Слайдер */}
        <div className="relative reviews-slider">
          <Swiper
            modules={[Navigation]}
            // Сохраняем экземпляр Swiper в swiperRef
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            // Первоначальное назначение навигации (может быть null до монтирования кнопок)
            navigation={{
              prevEl: prevButtonRef.current,
              nextEl: nextButtonRef.current,
            }}
            centeredSlides={true}
            loop={true}
            slidesPerView={1.2}
            spaceBetween={30}
            initialSlide={1}
            speed={500}
            breakpoints={{
              320: { slidesPerView: 1.0, spaceBetween: 20 },
              480: { slidesPerView: 1.0, spaceBetween: 15 },
              640: { slidesPerView: 1.0, spaceBetween: 20 },
              768: { slidesPerView: 1.4, spaceBetween: 25 },
              1024: { slidesPerView: 1.4, spaceBetween: 30 },
            }}
          >
            {reviews.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div
                  className={`relative lg:pt-32 lg:pb-40 mb-32 py-20 px-20 border rounded-xl shadow-lg lg:px-60 reviews-slider`}
                  style={createBackgroundStyles(bgCircles)}
                >
                  {/* Header отзыва */}
                  <div className="flex flex-col items-start justify-between body-12 sm:flex-row">
                    {/* Звёздочки рейтинга */}
                    <div className="flex order-[-1] sm:order-1 mb-20 sm:mb-0">
                      {Array.from({ length: slide.rating }).map((_, index) => (
                        <svg
                          key={index}
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1"
                        >
                          <path
                            d="M9.83426 1.04893C10.0438 0.404017 10.9562 0.404018 11.1657 1.04894L13.1493 7.1536C13.243 7.44202 13.5117 7.63729 13.815 7.63729H20.2338C20.9119 7.63729 21.1939 8.50502 20.6453 8.9036L15.4523 12.6765C15.207 12.8547 15.1043 13.1707 15.1981 13.4591L17.1816 19.5638C17.3911 20.2087 16.653 20.745 16.1044 20.3464L10.9114 16.5735C10.6661 16.3953 10.3339 16.3953 10.0886 16.5735L4.89561 20.3464C4.34701 20.745 3.60888 20.2087 3.81842 19.5638L5.80195 13.4591C5.89566 13.1707 5.793 12.8547 5.54766 12.6765L0.354721 8.9036C-0.193879 8.50502 0.0880656 7.63729 0.766172 7.63729H7.185C7.48825 7.63729 7.75702 7.44201 7.85073 7.1536L9.83426 1.04893Z"
                            fill="#FACC15"
                          />
                        </svg>
                      ))}
                    </div>

                    {/* Информация об авторе */}
                    <div className="order-1 sm:order-[-1]">
                      <h3 className="mb-4 text-left lg:h3 h4 text-neutral-900 lg:text-neutral-900">
                        {slide.name}
                      </h3>
                      <span className="block mb-12 text-gray-400 text-start">{slide.course}</span>
                    </div>
                  </div>
                  {/* Текст отзыва */}
                  <p className="lg:body-18 lg:text-neutral-700 text-start body-14 text-neutral-700">
                    {slide.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Кастомные кнопки навигации */}
          <NavigationButton prevButtonRef={prevButtonRef} nextButtonRef={nextButtonRef} />
        </div>
      </div>
    </section>
  );
}

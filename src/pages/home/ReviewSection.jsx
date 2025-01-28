// Импорты из Swiper
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import bgCircles from "../../assets/img/bgLines.svg";

// Если нужны стили базовые:
import "swiper/css"; // базовые стили
import "swiper/css/navigation"; // стили для кнопок-стрелок
import NavigationButtons from "../../UI/NavigationButton";
import { createBackgroundStyles } from "../../utility/bgImg";

export default function ReviewsSection() {
  // Рефы для кастомных кнопок
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  // Пример данных отзывов
  const slides = [
    {
      id: 1,
      author: "Мария Суворова",
      course: "Курс по WordPress с нуля",
      text: "Замечательный курс, уже третий, который прохожу у Дмитрия. Как всегда, очень доступное и понятное изложение, прекрасная логика и удобная подача материала со всеми нужными ссылками, сервисами, презентациями. Объем материла тщательно отфильтрован, ничего лишнего.",
      rating: 5,
    },
    {
      id: 2,
      author: "Иван Петров",
      course: "React для начинающих",
      text: "Замечательный курс, уже третий, который прохожу у Дмитрия. Как всегда, очень доступное и понятное изложение, прекрасная логика и удобная подача материала со всеми нужными ссылками, сервисами, презентациями. Объем материла тщательно отфильтрован, ничего лишнего.",
      rating: 5,
    },
    {
      id: 3,
      author: "Ольга Смирнова",
      course: "JavaScript c нуля",
      text: "Замечательный курс, уже третий, который прохожу у Дмитрия. Как всегда, очень доступное и понятное изложение, прекрасная логика и удобная подача материала со всеми нужными ссылками, сервисами, презентациями. Объем материла тщательно отфильтрован, ничего лишнего.",
      rating: 5,
    },
  ];

  return (
    <section className="py-[120px]">
      <div className="px-4 text-center">
        {/* Заголовок и подзаголовок */}
        <h2 className="mb-20 font-semibold h1 text-neutral-900">
          98% студентов проходивших курсы
          <br />
          оставляют оценку <span className="text-primary-500">5 из 5</span>
        </h2>

        <p className="mb-40 text-gray-600 body">
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
            navigation={{
              prevEl: prevButtonRef.current,
              nextEl: nextButtonRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevButtonRef.current;
              swiper.params.navigation.nextEl = nextButtonRef.current;
            }}
            centeredSlides={true}
            slidesPerView={1.2}
            spaceBetween={30}
            initialSlide={1}
            speed={500}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 1.4 },
              1024: { slidesPerView: 1.4 },
            }}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div
                  className={`relative pt-32 pb-40 mb-32 border rounded-xl shadow-lg px-60 reviews-slider`}
                  style={createBackgroundStyles(bgCircles)}
                >
                  {/* Header отзыва */}
                  <div className="flex items-start justify-between body-12">
                    <div>
                      <h3 className="mb-4 font-semibold h3 text-neutral-900 ">{slide.author}</h3>
                      <span className="block mb-12 text-gray-400 text-start">{slide.course}</span>
                    </div>
                    {/* Звёздочки рейтинга */}
                    <div className="flex">
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
                  </div>
                  {/* Текст отзыва */}
                  <p className="body-18 text-neutral-700 text-start">{slide.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Кастомные кнопки */}

          <NavigationButtons prevButtonRef={prevButtonRef} nextButtonRef={nextButtonRef} />
        </div>
      </div>
    </section>
  );
}

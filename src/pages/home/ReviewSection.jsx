// Импорты из Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Если нужны стили базовые:
import "swiper/css"; // базовые стили
import "swiper/css/navigation"; // стили для кнопок-стрелок

export default function ReviewsSection() {
  // Пример данных отзывов
  const slides = [
    {
      id: 1,
      author: "Мария Суворова",
      course: "Курс по WordPress с нуля",
      text: "Замечательный курс, уже третий, который прохожу у Дмитрия...",
      rating: 5,
    },
    {
      id: 2,
      author: "Иван Петров",
      course: "React для начинающих",
      text: "Очень подробное и доступное объяснение, полезная практика...",
      rating: 5,
    },
    {
      id: 3,
      author: "Ольга Смирнова",
      course: "JavaScript c нуля",
      text: "Материал изложен логично, примеры помогают быстро разобраться...",
      rating: 5,
    },
    // при желании можно добавить больше
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Заголовок и подзаголовок */}
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          96% студентов проходивших курсы
          <br />
          оставляют оценку <span className="text-primary-500">5 из 5</span>
        </h2>
        <p className="text-gray-600 mb-6">Тысячи независимых отзывов</p>

        {/* Слайдер */}
        <div className="relative">
          <Swiper
            // Модули, если нужны стрелки
            modules={[Navigation]}
            navigation
            // Настройки слайдера
            // Параметр centeredSlides сделает центральный слайд "акцентным"
            centeredSlides={true}
            // Параметр slidesPerView позволяет показывать часть соседних слайдов
            slidesPerView={1.2}
            spaceBetween={20}
            // Разрешить свайп на мобильных
            grabCursor={true}
            // Адаптивные настройки (при ширине больше 768px, показывать 1.4 и т.д.)
            breakpoints={{
              640: {
                slidesPerView: 1.2,
              },
              768: {
                slidesPerView: 1.4,
              },
              1024: {
                slidesPerView: 1.6,
              },
            }}
            className="py-6"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="bg-white w-full max-w-[90%] mx-auto rounded-lg shadow-lg p-6 relative">
                  {/* Текст отзыва */}
                  <h3 className="text-xl font-semibold mb-1">{slide.author}</h3>
                  <p className="text-sm text-gray-400 mb-4">{slide.course}</p>
                  <p className="text-gray-700 leading-relaxed">{slide.text}</p>

                  {/* Звёздочки рейтинга (5 из 5) */}
                  <div className="flex mt-3">
                    {Array.from({ length: slide.rating }).map((_, index) => (
                      <svg
                        key={index}
                        className="h-5 w-5 text-yellow-400 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 15l-5.878 3.09 1.122-6.545L.487 6.91l6.554-.953L10 .818l2.959 5.14
                          6.554.952-4.757 4.635 1.122 6.545L10 15z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Button from "../../UI/Button";
import NavigationButtons from "../../UI/NavigationButton";
import bgBlueLines from "../../assets/img/bgBlueLines.jpg";
import bgBrownLines2 from "../../assets/img/bgBrownLines2.jpg";
import bigStar from "../../assets/img/bigStar.svg";
import { createBackgroundStyles } from "../../utility/bgImg";
import useSwiperNavigation from "../../hooks/useSwiperNavigationBtn";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    cards: [
      {
        id: 1,
        title: "ОТВЕТЫ НА ВСЕ ВОПРОСЫ ПО КУРСАМ ЛИЧНО ОТ АВТОРА",
        description: "Без кураторов. Только прямое общение с автором курса.",
        background: "bg-white text-neutral-900",
        badge: "КАЖДЫЙ ДЕНЬ · БЕЗ ВЫХОДНЫХ · ЛИЧНО ·",
        whiteText: false,
        label: false,
      },
      {
        id: 2,
        title: "ПОКАЗЫВАЕМ, КАК ДЕЛАТЬ, А НЕ РАССКАЗЫВАЕМ",
        description: "Преподаватель решает задачи вместе с вами — шаг за шагом.",
        background: "bg-blue-900 text-white",
        backgroundIMG: bgBlueLines,
        whiteText: true,
        label: false,
      },
    ],
  },
  {
    id: 2,
    cards: [
      {
        id: 3,
        title: "СООБЩЕСТВО ЕДИНОМЫШЛЕННИКОВ И ЗАКРЫТЫЙ ЧАТ",
        description: "Большое комьюнити студентов, всегда готовых поддержать.",
        background: "bg-neutral-900 text-white",
        backgroundIMG: bgBrownLines2,
        whiteText: true,
        label: false,
      },
      {
        id: 4,
        title: "КУРСЫ ОТ АВТОРА, А НЕ ОТ НАЁМНОГО СОТРУДНИКА",
        description: "Автор создаёт материал — автор сам его преподаёт.",
        background: "bg-white text-neutral-900",
        whiteText: false,
        label: true,
      },
    ],
  },
];

export default function SupportSection() {
  // Реф для экземпляра Swiper
  const swiperRef = useRef(null);
  // Рефы для кастомных кнопок навигации
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  // Подключаем хук для обновления навигации
  useSwiperNavigation(swiperRef, prevButtonRef, nextButtonRef);

  return (
    <section className="relative overflow-hidden pt-[50px] pb-80">
      {/* Левая часть */}
      <div className="container m-auto relative mb-[40px] lg:mb-0">
        <div className="flex justify-between align-middle lg:absolute lg:block">
          <h2 className="lg:mb-10 lg:h1 h2 text-neutral-900 lg:max-w-[450px] lg:text-neutral-900">
            Поддерживаем <br /> и помогаем <span className="text-primary-500">лично</span>
          </h2>
          <div className="items-end hidden sm:flex">
            <Link to="/courses">
              <Button iconed>Все курсы</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Правая часть */}
      <div className="grid grid-cols-1 m-auto lg:gap-10 lg:grid-cols-[40%_60%] xl:grid-cols-[35%_65%]">
        <div className=""></div>

        {/* Правая часть (слайдер) */}
        <div className="container relative">
          <Swiper
            modules={[Navigation]}
            // Сохраняем экземпляр Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            // Первоначальное назначение навигации (элементы могут быть null до монтирования)
            navigation={{
              prevEl: prevButtonRef.current,
              nextEl: nextButtonRef.current,
            }}
            slidesPerView={1.2}
            spaceBetween={8}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="grid grid-cols-1 gap-2 grid-rows-[230px_230px] rounded-lg mb-[32px]">
                  {slide.cards.map((card) => (
                    <div
                      key={card.id}
                      style={
                        card.backgroundIMG ? createBackgroundStyles(card.backgroundIMG) : undefined
                      }
                      className={`lg:pr-[120px] pt-20 pl-12 pr-40 sm:pt-20 sm:pl-20 border rounded-xl shadow-md ${card.background} relative overflow-hidden`}
                    >
                      <h3
                        className={`mb-12 ${
                          card.whiteText
                            ? "text-neutral-50"
                            : "text-neutral-900 lg:text-neutral-900"
                        } lg:h3 h4 z-20 relative max-w-[300px]`}
                      >
                        {card.title}
                      </h3>
                      <p
                        className={`${
                          card.whiteText
                            ? "text-neutral-50 lg:text-neutral-50"
                            : "text-neutral-600 lg:text-neutral-600"
                        } lg:body-18 body-14 relative z-20 max-w-[250px] lg:max-w-[320px]`}
                      >
                        {card.description}
                      </p>
                      {card.badge && (
                        <div className="absolute bottom-[50px] sm:right-[-100px] h-[35px] right-[-120px] overflow-hidden transform bg-secondary-400 rounded-lg rotate-[-55deg] flex items-center">
                          <p className="whitespace-nowrap animate-marquee text-neutral-50">
                            КАЖДЫЙ ДЕНЬ · ЛИЧНО · БЕЗ ВЫХОДНЫХ
                          </p>
                        </div>
                      )}
                      {card.label && (
                        <img
                          src={bigStar}
                          alt="зеленая звезда"
                          className="absolute bottom-[-100px] right-[-100px] z-10"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Кастомные кнопки навигации */}
          <div className="flex justify-center">
            <NavigationButtons prevButtonRef={prevButtonRef} nextButtonRef={nextButtonRef} />
          </div>
        </div>
      </div>
    </section>
  );
}

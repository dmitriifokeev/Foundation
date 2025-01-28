import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import Button from "../../UI/Button";
import NavigationButtons from "../../UI/NavigationButton";
import bgBlueLines from "../../assets/img/bgBlueLines.jpg";
import bgBrownLines2 from "../../assets/img/bgBrownLines2.jpg";
import bigStar from "../../assets/img/bigStar.svg";
import { createBackgroundStyles } from "../../utility/bgImg";

const slides = [
  {
    id: 1,
    cards: [
      {
        id: 1,
        title: "ОТВЕТЫ НА ВСЕ ВОПРОСЫ ПО КУРСАМ ЛИЧНО ОТ АВТОРА",
        description: "Никаких ответов от кураторов. Только от создателя курса.",
        background: "bg-white text-neutral-900",
        badge: "КАЖДЫЙ ДЕНЬ · БЕЗ ВЫХОДНЫХ · ЛИЧНО ·",
        whiteText: false,
        label: false,
      },
      {
        id: 2,
        title: "ПОКАЗЫВАЕМ, КАК ДЕЛАТЬ, А НЕ РАССКАЗЫВАЕМ",
        description: "Преподаватель выполняет задачи вместе со студентом.",
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
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  return (
    <section className="pt-50 pb-100">
      <div className="absolute w-full">
        <div className="container m-auto">
          <h2 className="mb-10 font-semibold h1 text-neutral-900 max-w-[450px]">
            Поддерживаем и помогаем <span className="text-primary-500">лично</span>
          </h2>
          <Button iconed>Все курсы</Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 ">
        {/* Левая часть */}

        <div className=""></div>

        {/* Правая часть (слайдер) */}
        <div className="relative col-span-1 ">
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
            slidesPerView={1.2}
            spaceBetween={8}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="grid grid-cols-1 gap-2 grid-rows-[230px_230px]  rounded-lg mb-[32px] ">
                  {slide.cards.map((card) => (
                    <div
                      style={
                        card.backgroundIMG ? createBackgroundStyles(card.backgroundIMG) : undefined
                      }
                      key={card.id}
                      className={`pt-40 pl-32 pr-[120px] border rounded-xl shadow-md ${card.background} relative overflow-hidden`}
                    >
                      <h3
                        className={`mb-12 ${
                          card.whiteText ? "text-neutral-50" : "text-neutral-900"
                        } h3`}
                      >
                        {card.title}
                      </h3>
                      <p
                        className={`${
                          card.whiteText ? "text-neutral-50" : "text-neutral-600"
                        } body-18`}
                      >
                        {card.description}
                      </p>
                      {card.badge && (
                        <div className="absolute bottom-[50px] right-[-100px] h-[35px] overflow-hidden transform bg-secondary-400 rounded-lg rotate-[-55deg] flex items-center ">
                          <p className="whitespace-nowrap animate-marquee text-neutral-50 ">
                            КАЖДЫЙ ДЕНЬ · ЛИЧНО · БЕЗ ВЫХОДНЫХ
                          </p>
                        </div>
                      )}
                      {card.label && (
                        <img
                          src={bigStar}
                          alt="зеленая звезда"
                          className="absolute bottom-[-100px] right-[-100px]"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Кастомные кнопки */}
          <div className="flex justify-center">
            <NavigationButtons prevButtonRef={prevButtonRef} nextButtonRef={nextButtonRef} />
          </div>
        </div>
      </div>
    </section>
  );
}

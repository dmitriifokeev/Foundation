import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import bgBlueLines from "../../assets/img/bgBlueLines.jpg";

// TODO: Не синхронизированы 2 слайдера

// import videoThumbnail from "../../assets/img/videoThumbnail.jpg"; // Заглушка для видео
import NavigationButtons from "../../UI/NavigationButton";

const steps = [
  {
    id: 1,
    title: "Короткие видео уроки",
    description: [
      "Короткие видео уроки на конкретную тему длиной в среднем 10 мин.",
      "Вся вода и прочая болтовня вырезана и выброшена.",
    ],
    buttonText: "Видео уроки",
    contentType: "iframe",
    contentValue: "https://rutube.ru/play/embed/70f564e084ca04c7c78e49760cf277a6/", // 🔹 Видео с Яндекс.Диска
  },
  {
    id: 2,
    title: "Практика",
    description: [
      "Каждый урок сопровождается практическими заданиями.",
      "Задачи разного уровня сложности помогают глубже понять материал.",
    ],
    buttonText: "Практика",
    contentType: "image",
    contentValue: bgBlueLines, // 🔹 Изображение
  },
  {
    id: 3,
    title: "Проекты",
    description: [
      "Финальный этап — работа над проектами для портфолио.",
      "Вы создаете полноценные проекты с нуля.",
    ],
    buttonText: "Проекты",
    contentType: "video",
    contentValue: "https://downloader.disk.yandex.ru/disk/YOUR_VIDEO_FILE", // 🔹 Видео-файл
  },
];

export default function LearningProcessSection() {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  return (
    <section className="pt-100 sm:pb-60 ">
      <div className="container m-auto">
        {/* Заголовок */}
        <h2 className="mb-32 lg:h1 h2 text-neutral-900 lg:text-neutral-900">
          Процесс обучения <br /> состоит из <span className="text-primary-500">3-х этапов</span>
        </h2>

        {/* Контейнер слайдера */}
        <div className="p-[8px] sm:p-[20px] bg-neutral-100 rounded-xl">
          <div className="p-[8px] sm:pt-[20px] sm:px-[20px] sm:pb-[32px] bg-white rounded-xl">
            <div className="grid grid-cols-1 grid-rows-[auto_auto_auto_auto] sm:grid-cols-[40%_60%] lg:grid-cols-[50%_50%] lg:px-40 sm:grid-rows-[auto_auto_auto] gap-8 py-[20px]  bg-white rounded-xl ">
              <div className="mb-20 sm:justify-center sm:flex sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 sm:mb-0">
                <div className="sm:mt-4 custom-swiper-pagination "></div>
              </div>

              {/* Первый Swiper (текст) */}
              <div className="text-center sm:mr-8 sm:text-left col-start-1 col-end-2 row-start-2 row-end-3 lg:max-w-[80%] sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-3 mb-20 sm:mb-0 sm:mt-20">
                <Swiper
                  effect="fade"
                  fadeEffect={{ crossFade: true }}
                  allowTouchMove={false}
                  modules={[Pagination, Navigation, EffectFade]}
                  pagination={{
                    clickable: true,
                    el: ".custom-swiper-pagination",
                    renderBullet: (index, className) => {
                      return `<span class="${className} custom-pagination-bullet">${steps[index].buttonText}</span>`;
                    },
                  }}
                  navigation={{
                    prevEl: prevButtonRef.current,
                    nextEl: nextButtonRef.current,
                  }}
                  onBeforeInit={(swiper) => {
                    swiper.params.pagination.el = ".custom-swiper-pagination";
                    swiper.params.navigation.prevEl = prevButtonRef.current;
                    swiper.params.navigation.nextEl = nextButtonRef.current;
                  }}
                  slidesPerView={1}
                  spaceBetween={10}
                >
                  {steps.map((step) => (
                    <SwiperSlide key={step.id}>
                      <div className="rounded-xl">
                        {/* Описание этапа */}
                        <div>
                          <h3 className="mb-20 sm:mb-[20px] lg:h2 h3 text-neutral-900 lg:text-neutral-900">
                            {step.title}
                          </h3>
                          <ul className="space-y-12 text-neutral-600 lg:body-18 body-14 lg:text-neutral-600">
                            {step.description.map((text, idx) => (
                              <li key={idx}>{text}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Второй Swiper (контент: iframe, img, video) */}
              <div className="col-start-1 col-end-2 row-start-3 row-end-4 mb-32 sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-3">
                <Swiper
                  modules={[Pagination, Navigation]}
                  allowTouchMove={false}
                  pagination={{
                    clickable: true,
                    el: ".custom-swiper-pagination",
                    renderBullet: (index, className) => {
                      return `<span class="${className} custom-pagination-bullet ">${steps[index].buttonText}</span>`;
                    },
                  }}
                  navigation={{
                    prevEl: prevButtonRef.current,
                    nextEl: nextButtonRef.current,
                  }}
                  onBeforeInit={(swiper) => {
                    swiper.params.pagination.el = ".custom-swiper-pagination";
                    swiper.params.navigation.prevEl = prevButtonRef.current;
                    swiper.params.navigation.nextEl = nextButtonRef.current;
                  }}
                  slidesPerView={1}
                  spaceBetween={10}
                >
                  {steps.map((step) => (
                    <SwiperSlide key={step.id} className="h-[300px] sm:h-[250px]">
                      <div className="flex items-center justify-center h-full ">
                        {/* Выбор контента по `contentType` */}
                        {step.contentType === "iframe" && (
                          <iframe
                            className="w-full h-full rounded-xl"
                            src="https://www.youtube.com/embed/6XOXMuN3Xwo?si=SW_SejIKRRzBGo7n"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          ></iframe>
                        )}

                        {step.contentType === "image" && (
                          <img
                            src={step.contentValue}
                            alt="Изображение"
                            className="object-cover w-full h-full rounded-xl"
                          />
                        )}

                        {step.contentType === "video" && (
                          <video controls className="w-full h-full rounded-xl">
                            <source src={step.contentValue} type="video/mp4" />
                            Ваш браузер не поддерживает видео.
                          </video>
                        )}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* Кнопки навигации */}
              <div className="relative grid row-start-4 row-end-5 sm:col-start-1 sm:col-end-3 ">
                <div className="relative flex justify-center">
                  <div className=" sm:bottom-0 bottom-32">
                    <NavigationButtons
                      prevButtonRef={prevButtonRef}
                      nextButtonRef={nextButtonRef}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import infiniti from "../../assets/img/infinityLable.png";
import bgCircles from "../../assets/img/bgLines.svg";
import bgBlueLines from "../../assets/img/bgBlueLines.jpg";
import bgBrownLines from "../../assets/img/bgBrownLines.jpg";
import ArrowRight from "../../assets/img/ArrowRight2.svg";
import video1 from "../../assets/video/video1.mp4";
import { createBackgroundStyles } from "../../utility/bgImg";

export default function AdvantagesSection() {
  const [card1Active, setCard1Active] = useState(false);
  const [card2Active, setCard2Active] = useState(false);
  const [card3Active, setCard3Active] = useState(false);

  return (
    <section className="bg-neutral-100 pt-80 pb-100">
      <div className="container m-auto">
        {/* Заголовок */}
        <h2 className="mb-32 lg:mb-40 h2 lg:h1 text-neutral-900 lg:text-neutral-900">
          Преимущества <br /> обучения
        </h2>

        {/* Сетка с блоками */}
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="grid lg:grid-cols-1 gap-8 lg:grid-rows-[130px_130px_130px]">
            {/* Карточка 1: 30 дней гарантии */}
            <div
              style={createBackgroundStyles(bgCircles)}
              className="relative p-6 overflow-hidden text-white bg-white shadow-sm cursor-pointer rounded-xl "
              onClick={() => setCard1Active(!card1Active)}
            >
              {/* Лицевая сторона */}
              <div
                className={`transition duration-300 ${
                  card1Active ? "opacity-0" : "opacity-100"
                } min-h-100`}
              >
                <h3 className="lg:h3 h4 lg:text-neutral-900 absolute top-1/2 -translate-y-1/2 lg:right-[50px] z-10  ">
                  30 ДНЕЙ <br /> ГАРАНТИИ
                </h3>
                <div className=" absolute inset-0   lg:left-[-100px] xl:left-[-40px] lg:w-[400px] lg:h-[200px] overflow-hidden lg:[clip-path:polygon(0_0,80%_0,100%_100%,0_100%)] rounded-xl">
                  <img src={bgBlueLines} alt="синий фон" />
                </div>
              </div>

              {/* Обратная сторона */}
              <div
                className={`absolute inset-0 flex flex-col items-start p-6 transition duration-300 border rounded-xl border-neutral-300 ${
                  card1Active ? "opacity-100" : "opacity-0"
                }`}
              >
                <h4 className="mb-8 font-semibold h4 text-neutral-900">30 дней гарантии</h4>
                <p className="body-14 text-neutral-600 max-w-[300px]">
                  * 100% возврат средств в течение 30 дней, <br /> если вы прошли не более 35% курса
                </p>
              </div>

              {/* Кнопка (только визуальный индикатор) */}
              <button
                className={`absolute px-2 py-1 text-xl leading-none transition duration-300 transform rounded-full bottom-3 right-3 bg-blue-900/30 ${
                  card1Active ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </button>
            </div>

            {/* Карточка 2: Средняя оценка 4.85 */}
            <div
              style={createBackgroundStyles(bgCircles)}
              className="relative p-6 overflow-hidden bg-white shadow-sm cursor-pointer rounded-xl "
              onClick={() => setCard2Active(!card2Active)}
            >
              {/* Лицевая сторона */}
              <div
                className={`transition duration-300 ${
                  card2Active ? "opacity-0" : "opacity-100"
                } min-h-100`}
              >
                <div className="absolute inset-0 lg:inset-auto lg:right-[-170px] lg:top-[-10px] lg:w-[400px] lg:h-[200px] overflow-hidden lg:[clip-path:polygon(0_0,100%_0,100%_100%,20%_100%)] rounded-xl xl:right-[-100px]">
                  <img src={bgBrownLines} alt="синий фон" />
                </div>
                <div className="absolute z-10 -translate-y-1/2 top-1/2">
                  <h3 className="lg:h3 h4 lg:text-neutral-900   lg:right-[50px] mb-8 ">4.85</h3>
                  <p className="lg:text-gray-600 lg:body max-w-64 text-neutral-200 body-14">
                    Средняя оценка всех курсов на платформе
                  </p>
                </div>
              </div>

              {/* Обратная сторона */}
              <div
                className={`absolute inset-0 flex flex-col items-start p-6 transition duration-300 border rounded-xl border-neutral-300 ${
                  card2Active ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute right-[-170px] top-[-10px] w-[400px] h-[200px] overflow-hidden [clip-path:polygon(0_0,100%_0,100%_100%,20%_100%)] rounded-xl"></div>
                <h4 className="mb-8 font-semibold h4 text-neutral-900">
                  Более 5 000 реальных отзывов
                </h4>
                <p className="body-14 text-gray-600 max-w-[300px]">
                  * Более 1 300 отзывов на{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-primary-500"
                    href="https://stepik.org/users/345251800/reviews"
                  >
                    Stepik
                  </a>{" "}
                  и свыше 9000 отзывов на{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-primary-500"
                    href="https://www.udemy.com/user/dmitrii-4275/"
                  >
                    Udemy
                  </a>
                </p>
              </div>

              {/* Кнопка (визуальный индикатор) */}
              <button
                className={`absolute px-2 py-1 text-xl leading-none transition duration-300 transform rounded-full bottom-3 right-3 bg-blue-900/30 text-neutral-50 ${
                  card2Active ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </button>
            </div>

            {/* Карточка 3: LIFETIME ACCESS */}
            <div
              style={createBackgroundStyles(bgCircles)}
              className="relative p-6 overflow-hidden bg-white shadow-sm cursor-pointer rounded-xl min-h-120"
              onClick={() => setCard3Active(!card3Active)}
            >
              {/* Лицевая сторона */}
              <div
                className={`transition duration-300 ${
                  card3Active ? "opacity-0" : "opacity-100"
                } min-h-100`}
              >
                <h3 className="lg:h3 h4 text-neutral-900 lg:text-neutral-900 absolute top-1/2 -translate-y-1/2 lg:right-[50px] ">
                  LIFETIME <br /> ACCESS
                </h3>
                <img
                  className="lg:w-[300px] absolute lg:top-[-50px] w-[200px] right-[10px] top-[-10px] lg:left-[20px] "
                  src={infiniti}
                  alt="знак бесконечности"
                />
              </div>

              {/* Обратная сторона */}
              <div
                className={`absolute inset-0 flex flex-col items-start p-6 transition duration-300 border rounded-xl border-neutral-300 ${
                  card3Active ? "opacity-100" : "opacity-0"
                }`}
              >
                <h4 className="mb-8 font-semibold h4 text-neutral-900">
                  Пожизненный доступ к курсам
                </h4>
                <p className="body-14 text-neutral-600 max-w-[300px]">
                  * Курсы обновляются ежегодно. Все будущие обновления для вас — бесплатны.
                </p>
              </div>

              {/* Кнопка (визуальный индикатор) */}
              <button
                className={`absolute px-2 py-1 text-xl leading-none transition duration-300 transform rounded-full bottom-3 right-3 bg-blue-900/30 text-neutral-50 ${
                  card3Active ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </button>
            </div>
          </div>

          {/* Правая колонка */}
          <div className="grid lg:grid-rows-[2fr_130px] gap-8">
            {/* Верхний блок с видео */}
            <div className="relative flex items-center p-6 overflow-hidden rounded-xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                src={video1}
                className="absolute inset-0 object-cover w-full h-full"
              />
              <h3 className="relative h3 w-[280px] uppercase text-white self-start z-30">
                <span className="text-neutral-400">Обучение</span> современным{" "}
                <span className="text-neutral-400">навыкам для</span> жизни и карьеры
              </h3>
              <div className="absolute inset-0 bg-slate-900/30"></div>
            </div>

            {/* Блок со стрелкой */}
            <div
              style={createBackgroundStyles(bgCircles)}
              className="relative items-center justify-center hidden bg-white shadow-sm lg:flex rounded-xl "
            >
              <img src={ArrowRight} alt="стрелка вправо" className="w-120 absolute right-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

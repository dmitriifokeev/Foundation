import infiniti from "../../assets/img/infinityLable.png";
import bgCircles from "../../assets/img/bgLines.svg";
import bgBlueLines from "../../assets/img/bgBlueLines.jpg";
import bgBrownLines from "../../assets/img/bgBrownLines.jpg";
import ArrowRight from "../../assets/img/ArrowRight2.svg";
import video1 from "../../assets/video/video1.mp4";

export default function AdvantagesSection() {
  return (
    <section className=" bg-neutral-100 pt-80 pb-100">
      <div className="container m-auto  ">
        {/* Заголовок */}
        <h2 className="h1 font-semibold mb-40 text-neutral-900">Преимущества обучения</h2>

        {/* Сетка с блоками */}
        {/*
          Здесь используем 2 колонки (левая - уже под 3 вертикальных блока,
           правая - под один большой блок + снизу ещё блок со стрелкой).
          Можно настроить grid-rows-auto, чтобы правая колонка тянулась по высоте.
        */}
        <div className="grid grid-cols-2 gap-8 ">
          {/* Левая колонка - 3 вертикальных блока (stack) */}
          <div className="grid grid-cols-1 gap-8 grid-rows-[130px_130px_130px] ">
            {/* 1)  30 дней Верхний синий блок */}
            <div
              style={{
                backgroundImage: `url(${bgCircles})`,
              }}
              className="relative  rounded-lg p-6 text-white overflow-hidden group"
            >
              {/* Передняя сторона */}
              <div className="  opacity-100 group-hover:opacity-0 transition duration-300">
                <div className="absolute inset-0 left-[-100px] w-[400px] h-[200px] overflow-hidden [clip-path:polygon(0_0,80%_0,100%_100%,0_100%)] rounded-lg opacity-100 group-hover:opacity-0 transition duration-300">
                  <img src={bgBlueLines} alt="синий фон" />
                </div>

                <h3 className="h3 text-neutral-900   absolute  top-1/2  -translate-y-1/2 right-[50px] font-semibold ">
                  30 ДНЕЙ <br /> ГАРАНТИИ
                </h3>
              </div>

              {/* Обратная сторона */}
              <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 border border-neutral-300 inset-0 rounded-lg flex flex-col items-start  p-6 ">
                <h4 className="h4 font-semibold text-neutral-900 mb-8 "> 30 дней гарантии</h4>

                <p className="body-14 text-neutral-600   max-w-[300px]">
                  * 100% возврат средств в течении 30 дней,
                  <br /> если вы не прошли более 35% курса.
                </p>
              </div>

              <button
                disabled
                className="absolute bottom-3 right-3 text-xl leading-none bg-blue-900/30 px-2 py-1 rounded-full opacity-100 group-hover:opacity-0 transition duration-300 	"
              >
                +
              </button>
            </div>

            {/* 2) Средний блок (4.85) */}

            <div
              style={{
                backgroundImage: `url(${bgCircles})`,
              }}
              className="relative bg-white rounded-lg p-6 shadow-sm overflow-hidden group"
            >
              {/* Передняя сторона */}
              <div className="opacity-100 group-hover:opacity-0 transition duration-300">
                <div className="absolute right-[-170px] top-[-10px] w-[400px] h-[200px] overflow-hidden [clip-path:polygon(0_0,100%_0,100%_100%,20%_100%)] rounded-lg">
                  <img src={bgBrownLines} alt="синий фон" />
                </div>
                <h3 className="h4 text-neutral-900 font-semibold mb-1">4.85</h3>
                <p className="body text-gray-600 max-w-64">
                  Средняя оценка всех курсов на платформе
                </p>
              </div>

              {/* Обратная сторона */}
              <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 border border-neutral-300 inset-0 rounded-lg flex flex-col items-start p-6">
                {/* Ниже — те же тексты, что и на «передней» стороне, 
        чтобы показать flip-эффект без изменения контента */}
                <div className="absolute right-[-170px] top-[-10px] w-[400px] h-[200px] overflow-hidden [clip-path:polygon(0_0,100%_0,100%_100%,20%_100%)] rounded-lg"></div>
                <h4 className="h4 text-neutral-900 font-semibold mb-8">
                  Более 5 000 реальных отзывов
                </h4>
                <p className="body text-gray-600 max-w-[300px]">
                  * Более 1300 отзывов{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-primary-500"
                    href="https://stepik.org/users/345251800/reviews"
                  >
                    Stepik
                  </a>{" "}
                  и более 8000 отзывов{" "}
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

              {/* Кнопка со знаком "+" (как в первом блоке) */}
              <button
                disabled
                className="absolute bottom-3 right-3 text-xl leading-none bg-blue-900/30 px-2 py-1 rounded-full opacity-100 group-hover:opacity-0 transition duration-300 text-neutral-300"
              >
                +
              </button>
            </div>

            {/* 3) Нижний блок (Lifetime Access) */}
            <div
              style={{
                backgroundImage: `url(${bgCircles})`,
              }}
              className="relative bg-white rounded-lg p-6 shadow-sm overflow-hidden group"
            >
              {/* Передняя сторона */}
              <div className="opacity-100 group-hover:opacity-0 transition duration-300">
                <h3 className="h3 text-neutral-900 absolute top-1/2 -translate-y-1/2 right-[50px] font-semibold">
                  LIFETIME <br /> ACCESS
                </h3>
                <img
                  className="w-[300px] absolute top-[-50px]"
                  src={infiniti}
                  alt="знак бесконечности"
                />
              </div>

              {/* Обратная сторона */}
              <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 border border-neutral-300 inset-0 rounded-lg flex flex-col items-start p-6">
                {/* Повторяем тот же контент для flip-эффекта */}
                <h4 className="h4 font-semibold text-neutral-900 mb-8 ">
                  {" "}
                  Пожизненный доступ к курсам
                </h4>

                <p className="body-14 text-neutral-600   max-w-[300px]">
                  * Курсы обновляются ежегодно. Все будущие обновления купленного курса бесплатны.
                </p>
              </div>

              {/* Кнопка со знаком "+" (как в первом блоке) */}
              <button
                disabled
                className="absolute bottom-3 right-3 text-xl leading-none bg-blue-900/30 px-2 py-1 rounded-full opacity-100 group-hover:opacity-0 transition duration-300 text-neutral-50"
              >
                +
              </button>
            </div>
          </div>

          {/* Правая колонка - делим на 2 вертикальных ряда */}
          <div className="grid grid-rows-[2fr_130px] gap-8">
            {/* 1) Верхний большой чёрный блок */}
            <div className="relative rounded-lg overflow-hidden p-6 flex items-center ">
              {/* Само видео на фоне */}
              <video
                autoPlay
                loop
                muted
                playsInline
                src={video1}
                className="absolute inset-0 w-full h-full object-cover "
              />

              {/* Текст поверх видео */}
              <h3 className="relative h3 w-[280px] uppercase text-white self-start z-30">
                <span className="text-neutral-400">Обучение</span> современным{" "}
                <span className="text-neutral-400">навыкам для</span> жизни, карьеры и развития
              </h3>
              <div className="absolute inset-0 bg-slate-900/30"></div>
            </div>

            {/* 2) Блок со стрелкой */}
            <div
              style={{
                backgroundImage: `url(${bgCircles})`,
              }}
              className="bg-white rounded-lg flex items-center justify-center  shadow-sm relative"
            >
              {/* Пример простого SVG-стрелки вправо */}
              <img src={ArrowRight} alt="стрелка вправо" className="w-120 absolute right-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

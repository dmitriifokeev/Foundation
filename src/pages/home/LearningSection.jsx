import { Link } from "react-router-dom";
import woman from "../../assets/img/woman.jpg";

export default function LearningSection() {
  return (
    <section className="container pt-40 pb-40 m-auto lg:pb-80">
      <h2 className="mb-32 text-neutral-900 lg:h1 lg:mb-60 h2 lg:text-neutral-900">
        Учитесь так, как <br /> удобно именно вам
      </h2>

      <div className="flex flex-col items-center gap-32 lg:flex-row">
        {/* Левая часть - Текст */}
        <div className="flex-1 ">
          <div className="space-y-20">
            {/* Блок 1 */}
            <div>
              <div className="px-24 py-8 mb-8 rounded-md bg-primary-700 text-neutral-50 w-fit">
                БЕЗ ДЕДЛАЙНОВ НА ДОМАШКИ
              </div>
              <p className="p-16 bg-gray-100 rounded-md text-neutral-700 body-14">
                *Дедлайн — это когда твою домашку по геометрии нужно сдать в понедельник, но ты
                вспоминаешь об этом в воскресенье утром, а единственный “треугольник”, который тебе
                хочется видеть, — это кусок пиццы, пока ты лежишь на диване.
              </p>
            </div>

            {/* Блок 2 */}
            <div>
              <div className="px-24 py-8 mb-8 rounded-md bg-primary-700 text-neutral-50 w-fit">
                ПОЛНАЯ ПРОГРАММА ПО ТЕМЕ
              </div>
              <p className="p-16 bg-gray-100 rounded-md text-neutral-700 body-14">
                Если не знаете, что выбрать для старта — у нас есть{" "}
                <Link to="/courses#programms" className="underline text-primary-600">
                  программы подготовки
                </Link>{" "}
                конкретных профессий с нуля.
              </p>
            </div>

            {/* Блок 3 */}
            <div>
              <div className="px-24 py-8 mb-8 rounded-md bg-primary-700 text-neutral-50 w-fit">
                НИКАКИХ ГРУПП ИЗ 20+ ЧЕЛОВЕК
              </div>
              <p className="p-16 bg-gray-100 rounded-md text-neutral-700 body-14">
                Короткие и понятные уроки — лично для вас. Без Zoom-групп из 20+ человек, где
                половина лекции — вода. Ещё и опоздать можно.
              </p>
            </div>
          </div>
        </div>

        {/* Правая часть - Картинка и дополнительный текст */}
        <div className="relative flex-1 ">
          <div className="flex flex-col">
            <div className="z-10 py-40 px-32 lg:max-w-[440px] max-w-[80%] lg:leading-7 leading-5 rounded-lg bg-neutral-800 text-neutral-50 lg:h3 sm:h4 h5">
              Но с большим количеством практики для самостоятельного выполнения
            </div>
            <img
              src={woman}
              alt="Девушка с ноутбуком"
              className=" rounded-lg sm:max-w-[355px] max-w-[300px] z-20 relative mt-[-20px] self-end"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

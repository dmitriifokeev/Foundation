import rubleCoin from "../../assets/img/rubleCoin.png";
import Button from "../../UI/Button";
import bgCircles from "../../assets/img/bgLines.svg";
import { createBackgroundStyles } from "../../utility/bgImg";

function PriceSection() {
  return (
    <section className="pt-20 pb-0 lg:pb-40">
      <div className="container grid lg:grid-cols-[5fr_6fr] m-auto lg:grid-rows-2">
        {/* Левая часть */}
        <div className="order-1 mb-20 lg:col-start-1 lg:row-start-1 lg:mb-0">
          <h2 className="mb-[20px] lg:h1 h2 text-neutral-900 lg:text-neutral-900">
            Средняя цена курса <br /> <span className="text-primary-500"> 2 490 руб.</span>
          </h2>
          <ul className="lg:mb-[60px] space-y-4 text-neutral-600 lg:body-18 lg:text-neutral-600 body-14 ">
            <li>• Множество практических заданий</li>
            <li>• Проекты в портфолио</li>
            <li>• Полная программа обучения по выбранной теме</li>
          </ul>
        </div>
        <div className="flex flex-col order-3 lg:col-start-1 lg:row-start-2">
          <div>
            <Button iconed>Все курсы</Button>
          </div>
          <p className=" body-12 text-neutral-600 max-w-[300px] order-[-1] mb-32">
            *Мы создаём не только лучшие, но и самые доступные курсы.
          </p>
        </div>

        {/* Правая часть (блоки с преимуществами) */}
        <div className="grid order-2 grid-cols-6 gap-8 mb-20 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:mb-0">
          {/* Блок 1 */}
          <div
            style={createBackgroundStyles(bgCircles)}
            className="relative col-span-6 p-20 overflow-hidden bg-white border shadow-md lg:py-20 rounded-xl lg:pl-32"
          >
            <h3 className="mb-12 uppercase lg:h3 h4 text-neutral-900 max-w-[70%] z-20 relative lg:text-neutral-900">
              С ПОДДЕРЖКОЙ <br /> ПРЕПОДАВАТЕЛЯ
            </h3>
            <p className="body-12 text-neutral-600 max-w-[55%] relative z-20">
              Вопросы по темам курса лично автору
            </p>
            <div className="body-10 absolute lg:top-[16px] lg:right-[-74px] right-[-100px] bg-neutral-700 rounded-lg rotate-[-20deg] sm:max-w-[250px] max-w-[210px]  lg:pl-20 lg:pt-20  h-[200px] font-light pl-12 pt-12 top-[10px] pr-[90px] sm:right-[-30px] sm:pl-20 sm:pr-60">
              <p className="max-w-[170px] text-neutral-300 ">
                Автор отвечает на все вопросы по темам курса ежедневно, без выходных.
              </p>
            </div>
          </div>

          {/* Блок 2 */}
          <div
            style={createBackgroundStyles(bgCircles)}
            className="relative col-span-6 p-20 overflow-hidden bg-white border shadow-md lg:pl-32 lg:py-20 lg:col-span-5 lg:col-start-2 rounded-xl"
          >
            <h3 className="mb-12 uppercase lg:h3 h4 text-neutral-900 max-w-[70%] lg:text-neutral-900">
              БЕЗ РАССРОЧЕК <br /> И КРЕДИТОВ
            </h3>
            <p className="body-12 text-neutral-600 max-w-[55%]">
              Без &quot;долей&quot;, &quot;частей&quot;, &quot;плати потом&quot; и других скрытых
              условий.
            </p>
            <img
              src={rubleCoin}
              alt="Монета рубля"
              className="absolute top-1/2 transform -translate-y-1/2 -right-10 sm:right-[10px] lg:w-[300px] w-[250px] lg:right-[-20px] "
            />
          </div>

          {/* Блок 3 */}
          <div
            style={createBackgroundStyles(bgCircles)}
            className="relative col-span-6 p-20 overflow-hidden bg-white border shadow-md lg:pl-32 lg:py-20 lg:col-span-5 lg:col-start-2 rounded-xl "
          >
            <h3 className="mb-12 uppercase lg:h3 h4 text-neutral-900 max-w-[70%] z-20 relative lg:text-neutral-900">
              С ГАРАНТИЕЙ <br /> 30 ДНЕЙ
            </h3>
            <p className="body-12 text-neutral-600 max-w-[57%] relative z-20">
              100% возврат средств в течение 30 дней, если вы прошли менее 35% курса.
            </p>
            <div className="body-10 absolute lg:top-[16px] lg:right-[-74px] right-[-50px] bg-neutral-700 rounded-lg rotate-[-20deg] sm:max-w-[250px] sm:pl-20 sm:pr-60 max-w-[220px] sm:right-[-40px] lg:pl-20 lg:pt-20  h-[200px] font-light pl-12 pt-12 top-20">
              <p className="max-w-[170px] text-neutral-300 pr-60 sm:pr-0">
                Без скрытых условий, общения с оператором, письменных заявлений и опросов.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PriceSection;

import rubleCoin from "../../assets/img/rubleCoin.png";
import Button from "../../UI/Button";
import bgCircles from "../../assets/img/bgLines.svg";
import { createBackgroundStyles } from "../../utility/bgImg";

function PriceSection() {
  return (
    <section className="border py-100">
      <div className="container grid grid-cols-[5fr_6fr] m-auto gap-32">
        {/* Левая часть */}
        <div>
          <h2 className="mb-[20px] h1 text-neutral-900">
            Средняя цена курса <span className="text-primary-500"> 2 490 руб.</span>
          </h2>
          <ul className="mb-[60px] space-y-4 text-neutral-600 body-18">
            <li>• Множество практических заданий</li>
            <li>• Проекты в портфолио</li>
            <li>• Полная программа обучения по выбранной теме</li>
          </ul>
          <Button iconed>Все курсы</Button>
          <p className="mt-10 body-12 text-neutral-600 max-w-[300px]">
            *Мы создаём не только лучшие, но и самые доступные курсы.
          </p>
        </div>

        {/* Правая часть (блоки с преимуществами) */}
        <div className="grid grid-cols-6 gap-8">
          {/* Блок 1 */}
          <div
            style={createBackgroundStyles(bgCircles)}
            className="relative col-span-6 py-20 overflow-hidden bg-white border shadow-md rounded-xl pl-60"
          >
            <h3 className="mb-12 uppercase h3 text-neutral-900 max-w-[70%]">
              С ПОДДЕРЖКОЙ <br /> ПРЕПОДАВАТЕЛЯ
            </h3>
            <p className="body-12 text-neutral-600 max-w-[55%]">
              Вопросы по темам курса лично автору
            </p>
            <div className="body-12 absolute top-[10px] right-[-44px] bg-neutral-700 rounded-lg rotate-[-20deg] max-w-[250px] pl-20 pt-20 pr-32 h-[200px]">
              <p className="max-w-[170px] text-neutral-300">
                Автор отвечает на все вопросы по темам курса ежедневно, без выходных.
              </p>
            </div>
          </div>

          {/* Блок 2 */}
          <div
            style={createBackgroundStyles(bgCircles)}
            className="relative col-span-5 col-start-2 py-20 pl-32 overflow-hidden bg-white border shadow-md rounded-xl"
          >
            <h3 className="mb-12 uppercase h3 text-neutral-900 max-w-[70%]">
              БЕЗ РАССРОЧЕК <br /> И КРЕДИТОВ
            </h3>
            <p className="body-12 text-neutral-600 max-w-[55%]">
              Без &quot;долей&quot;, &quot;частей&quot;, &quot;плати потом&quot; и других скрытых
              условий.
            </p>
            <img
              src={rubleCoin}
              alt="Монета рубля"
              className="absolute top-1/2 transform -translate-y-1/2 -right-10 w-[300px]"
            />
          </div>

          {/* Блок 3 */}
          <div
            style={createBackgroundStyles(bgCircles)}
            className="relative col-span-5 col-start-2 py-20 pl-32 overflow-hidden bg-white border shadow-md rounded-xl"
          >
            <h3 className="mb-12 uppercase h3 text-neutral-900 max-w-[70%]">
              С ГАРАНТИЕЙ <br /> 30 ДНЕЙ
            </h3>
            <p className="body-12 text-neutral-600 max-w-[55%]">
              100% возврат средств в течение 30 дней, если вы прошли менее 35% курса.
            </p>
            <div className="body-12 absolute top-[10px] right-[-44px] bg-neutral-700 rounded-lg rotate-[-20deg] max-w-[250px] pl-20 pt-20 pr-32 h-[200px]">
              <p className="max-w-[170px] text-neutral-300">
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

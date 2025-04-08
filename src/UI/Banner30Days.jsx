import rubbleImg from "../assets/img/rubleCoin.png";
import { createBackgroundStyles } from "../utility/bgImg";
import bgCircles from "../assets/img/bgLines.svg";

function Banner30Days() {
  return (
    <section className="container  m-auto md:pb-[60px] pb-40 md:pt-60 pt-40">
      <div
        className="relative grid sm:grid-cols-[1fr_3fr] xl:grid-cols-[2fr_5fr] px-20 sm:px-40 py-20 sm:py-32 overflow-hidden bg-secondary-100 rounded-xl "
        style={createBackgroundStyles(bgCircles)}
      >
        <div></div>
        <img
          src={rubbleImg}
          alt="Бесконечность"
          className="absolute  lg:w-[330px] w-[230px] top-1/2 xl:left-[20px] left-[-50px] md:left-[-20px] lg:left-[-40px] transform -translate-y-1/2  hidden sm:block"
        />
        <div className="flex flex-col justify-center">
          <h3 className="mb-12 lg:h3 h4 text-secondary-800 lg:text-secondary-800  max-w-[650px] lg:leading-8 ">
            Если курс вам не подойдет вернем 100% денег без каких либо вопросов
          </h3>

          <div className="flex justify-between">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="px-16 py-4 text-secondary-800 transition bg-secondary-700/20 rounded-[4px] hover:bg-secondary-800/20 h-fit mr-8"
            >
              Начните учиться сейчас
            </button>
            <p className="body-10 text-secondary-600 sm:text-secondary-600 sm520:max-w-[200px] sm:max-w-[180px]  md:max-w-[270px] max-w-[120px] text-[8px] sm:body-10">
              *100% возврат течении 30 дней после покупки при прохождении не более 30% материалов
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner30Days;

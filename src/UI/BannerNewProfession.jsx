import hatEducation from "../assets/img/hatEducation.svg";
import rocketEducation from "../assets/img/rocketEducation.svg";
import Button from "../UI/Button";

function BannerNewProfession() {
  return (
    <section className="flex flex-col items-center pt-40 overflow-hidden text-center pb-60 lg:py-100">
      {/* Фоновая иконка (левая) */}

      <div className="relative ">
        <img
          className="absolute sm:left-[-80px]   lg:top-[-60px] top-[-40px] left-[-40px] lg:max-w-[30%] max-w-[30%]"
          src={hatEducation}
          alt="Graduation Hat"
        />
        {/* Заголовок */}
        <h2 className="relative z-10 mb-40 lg:h1 h2 text-neutral-900 lg:mb-60 lg:text-neutral-900">
          Освойте <span className="text-primary-600">новую</span> профессию
          <br /> вместе с Foundation
        </h2>
        <img
          className="absolute lg:top-[0px] sm:top-[10px] top-[20px] lg:right-[-80px] sm:right-[-60px] right-[-40px]  z-0 lg:max-w-[30%] max-w-[30%]"
          src={rocketEducation}
          alt="Rocket"
        />
      </div>
      {/* Кнопка */}

      <Button iconed>Все курсы</Button>

      {/* Фоновая иконка (правая) */}
    </section>
  );
}

export default BannerNewProfession;

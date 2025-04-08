import { createBackgroundStyles } from "../utility/bgImg";
import coursesBg from "../assets/img/coursesBg.jpg";
import bgCircles from "../assets/img/bgLines.svg";

function BannerEnjoyEducation() {
  return (
    <div className="container pt-20 pb-40 m-auto lg:pb-100">
      <div className="lg:py-[40px] py-32 lg:rounded-xl rounded-md text-center flex flex-col items-center relative overflow-hidden">
        {/* Обёртка для фонового элемента с поворотом */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              ...createBackgroundStyles(coursesBg, {
                repeat: "repeat", // Повторение изображения
                size: "100% auto", // Настройте под свои нужды
                position: "0 0",
              }),
              transform: "rotate(-15deg)",
              transformOrigin: "center",
              animation: "bg-scroll 500s linear infinite",
              // При повороте могут появляться пустые области, поэтому можно увеличить размеры:
              width: "150%",
              height: "400%",
              top: "-150%",
            }}
          ></div>
        </div>

        {/* Затемняющий слой */}
        <div
          style={createBackgroundStyles(bgCircles)}
          className="absolute inset-0 bg-black opacity-70"
        ></div>

        {/* Контент */}
        <h3 className="relative z-10 leading-5 lg:leading-8 lg:h3 sm:h5 h6 text-neutral-50 ">
          Обучение с удовольствием, в удобном ритме <br /> и по честной цене — с гарантированным
          результатом
        </h3>
      </div>
    </div>
  );
}

export default BannerEnjoyEducation;

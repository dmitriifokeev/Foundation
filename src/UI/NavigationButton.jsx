import RoundButton from "./RoundButton";
import iconLeftSliderBtnBlack from "../assets/img/buttonsSvg/iconLeftSliderBtnBlack.svg";
import iconRightSliderBtnBlack from "../assets/img/buttonsSvg/iconRightSliderBtnBlack.svg";

export default function NavigationButtons({ prevButtonRef, nextButtonRef }) {
  return (
    <div className="inline-flex justify-center p-1 mt-4 space-x-4 rounded-full bg-neutral-300">
      {/* Кнопка "Назад" */}
      <RoundButton ref={prevButtonRef} variant="default" size="md" icon={iconLeftSliderBtnBlack} />
      {/* Кнопка "Вперёд" */}
      <RoundButton ref={nextButtonRef} variant="default" size="md" icon={iconRightSliderBtnBlack} />
    </div>
  );
}

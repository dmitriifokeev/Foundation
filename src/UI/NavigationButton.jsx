import { ArrowLeftIcon, ArrowRightIcon } from "./Svgs"; // Иконка стрелки влево
import RoundButton from "./RoundButton";

export default function NavigationButtons({ prevButtonRef, nextButtonRef }) {
  return (
    <div className="inline-flex justify-center mt-4 space-x-4 bg-neutral-300 p-1 rounded-full">
      {/* Кнопка "Назад" */}
      <RoundButton
        ref={prevButtonRef}
        variant="default"
        size="md"
        icon={<ArrowLeftIcon stroke={"#0D9488"} />}
      />
      {/* Кнопка "Вперёд" */}
      <RoundButton
        ref={nextButtonRef}
        variant="default"
        size="md"
        icon={<ArrowRightIcon size={21} stroke={"#0D9488"} />}
      />
    </div>
  );
}

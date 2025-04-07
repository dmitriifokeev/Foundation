import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import okIcon from "../../assets/img/okIcon.svg";
import { useCart } from "../../context/CartContext";

function SkillsSection({ currentCourse }) {
  const { addToCart } = useCart(); // получаем функцию добавления курса

  const {
    hero: { title, heroSubtitle, tag, type, lessonsNum, hoursNum } = {},
    details: { skills: { topics, tools } = {} } = {},
  } = currentCourse || {};

  // Обработчик клика: добавляем курс в корзину
  const handleStartLearning = () => {
    addToCart(currentCourse);
  };

  return (
    <section className="container pt-20 pb-0 m-auto md:pb-20">
      <div className="grid md:grid-cols-[1fr_2fr] grid-cols-1 md:gap-40 gap-32">
        {/* left */}
        <div className="flex flex-col ">
          <h2 className="md:mb-32 lg:h2 h3 text-neutral-900 lg:text-neutral-900">
            Ваши навыки после курса
          </h2>
          <div className="hidden md:block">
            {/* Если нужно просто добавить курс в корзину, заменяем Link на кнопку с onClick */}
            <Button iconed onClick={handleStartLearning}>
              Начать учиться
            </Button>
          </div>
        </div>

        {/* Right */}
        <div className="p-32 bg-neutral-100 rounded-xl">
          <h3 className="mb-16 lg:h4 h5 text-neutral-900 lg:text-neutral-900">Темы курса</h3>
          <ul className="flex flex-col gap-8 mb-20 body-12 text-neutral-600">
            {topics?.map((skill, index) => (
              <li key={index} className="flex gap-8">
                <img src={okIcon} alt="ок icon" /> {skill}
              </li>
            ))}
          </ul>

          <h3 className="mb-16 lg:h4 h5 text-neutral-900 lg:text-neutral-900">
            Софт / Инструменты
          </h3>
          <ul className="flex gap-[4px]">
            {tools?.map((tool, index) => (
              <li key={index} className="flex gap-8">
                <img src={tool} alt="инструмент" className="w-[30px]" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;

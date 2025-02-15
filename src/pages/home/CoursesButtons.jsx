import coursesData from "../../data/coursesData";
import Button from "../../UI/Button";

// Компонент с кнопками (категориями)
export default function CoursesButtons({ activeCategory, onCategoryChange }) {
  // Собираем все ключи из coursesData, к ним добавляем "fromZero" и "proLevel"
  // (если хотите, чтобы они появились в списке кнопок)
  const categories = [
    ...Object.keys(coursesData),
    // Можно вставить "fromZero" и "proLevel", если их нет в объекте
    // "fromZero",
    // "proLevel",
  ];

  return (
    <div className="grid justify-between sm:grid-cols-[auto_auto] items-end sm:gap-40 gap-20  ">
      <div className="flex flex-row flex-wrap gap-2 lg:gap-3 ">
        {categories.map((category) => (
          <Button
            key={category}
            variant="neutral"
            isActive={activeCategory === category}
            onClick={() => onCategoryChange(category)}
          >
            {formatCategoryName(category)}
          </Button>
        ))}

        {/* Дополнительно вручную кнопки "С нуля" и "Продвинутый" если нужно */}
        <Button
          variant="neutral"
          isActive={activeCategory === "fromZero"}
          onClick={() => onCategoryChange("fromZero")}
        >
          С нуля
        </Button>
        <Button
          variant="neutral"
          isActive={activeCategory === "proLevel"}
          onClick={() => onCategoryChange("proLevel")}
        >
          Продвинутый
        </Button>
      </div>
      <div className="">
        <Button iconed>Все курсы</Button>
      </div>
    </div>
  );
}

// Преобразуем ключ в читаемое название
function formatCategoryName(category) {
  const categoryNames = {
    webDevelopment: "Веб разработка",
    CMS: "CMS и Конструкторы",
    webDesign: "Веб Дизайн",
    graphicDesign: "Графический дизайн",
    videoMontage: "Видеомонтаж",
    proLevel: "Продвинутый уровень",
    fromZero: "С нуля",
    programms: "Программы курсов",
  };

  return categoryNames[category] || category;
}

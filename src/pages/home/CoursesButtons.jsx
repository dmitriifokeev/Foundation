import { Link } from "react-router-dom";
import { allCategoriesData } from "../../data/filteredCoursesData";
import Button from "../../UI/Button";

// Компонент с кнопками (категориями)
export default function CoursesButtons({ activeCategory, onCategoryChange }) {
  // Собираем все ключи из coursesData, к ним добавляем "fromZero" и "proLevel"
  // (если хотите, чтобы они появились в списке кнопок)

  const allCategories = allCategoriesData.flatMap((category) => category.slug);

  return (
    <div className={`grid justify-between sm:grid-cols-[auto_auto] items-end sm:gap-40 gap-20  `}>
      <div className="flex flex-row flex-wrap gap-2 lg:gap-3 ">
        {allCategories.map((category) => (
          <Button
            key={category}
            variant="neutral"
            isActive={activeCategory === category}
            onClick={() => onCategoryChange(category)}
          >
            {formatCategoryName(category)}
          </Button>
        ))}
      </div>
      <div className="">
        <Link to="/courses">
          <Button iconed>Все курсы</Button>
        </Link>
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

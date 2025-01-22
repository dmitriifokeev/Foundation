import { useState } from "react";
import heroImg from "../assets/img/hero.jpg";
import Button from "../UI/Button";
import CourseCard from "../UI/CourseCard";
import coursesData from "../data/coursesData";
// import arrowR from "../assets/img/arrowR.png";
// import arrowL from "../assets/img/arrowL.png";
import { ArrowRightIcon, ArrowLeftIcon } from "../UI/ArrowIcons";

function Home() {
  return (
    <>
      <div className="container m-auto relative">
        <Header />
        <Courses />
      </div>
    </>
  );
}

function Header() {
  return (
    <header className="h-550 relative mb-10">
      <img src={heroImg} alt="hero img" className="w-full h-full object-cover " />
      <div className="rounded-lg pl-80 absolute inset-0 flex flex-col items-start justify-center p-8 bg-gradient-to-r from-black/60 to-transparent text-neutral-50">
        <h1 className="h1 mb-20 font-main max-w-[650px]">Современное обучение доступное каждому</h1>
        <p className="body-18 max-w-[600px] leading-[170%] font-light">
          Обучение с удовольствием, в своем ритме, с гарантированным результатом и по честным ценам
        </p>
      </div>
    </header>
  );
}

function Courses() {
  const [activeCategory, setActiveCategory] = useState("webDevelopment");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredCourses = coursesData[activeCategory] || [];
  const itemsPerPage = 3;

  const handleNext = () => {
    if (currentIndex + itemsPerPage < filteredCourses.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <div className="flex flex-row items-end justify-between mb-20">
        <CoursesButtons activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      </div>

      {/* Контейнер курсов с навигацией */}
      <div className="relative overflow-hidden">
        {currentIndex > 0 && (
          <button
            onClick={handlePrev}
            className="w-40 h-40 absolute left-0 top-1/2 transform -translate-y-1/2 bg-neutral-900/40  p-3 rounded-full z-50"
          >
            <ArrowLeftIcon />
          </button>
        )}
        {currentIndex + itemsPerPage < filteredCourses.length && (
          <button
            onClick={handleNext}
            className="w-40 h-40 absolute right-0 top-1/2 transform -translate-y-1/2 bg-neutral-900/40  p-3 rounded-full z-50 flex items-center justify-center"
          >
            <ArrowRightIcon />
          </button>
        )}

        {/* Карточки */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
          }}
        >
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="min-w-[calc(100%/3)] px-1" // Устанавливаем ширину каждой карточки
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function CoursesButtons({ activeCategory, setActiveCategory }) {
  const categories = Object.keys(coursesData);

  return (
    <>
      <div className="flex gap-3 flex-row flex-wrap max-w-[800px]">
        {categories.map((category) => (
          <Button
            key={category}
            variant="neutral"
            isActive={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {formatCategoryName(category)}
          </Button>
        ))}
      </div>
      <Button iconed>Все курсы</Button>
    </>
  );
}

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

export default Home;

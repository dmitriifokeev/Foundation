import { useRef, useState, useLayoutEffect } from "react";
import arrowRight from "../../assets/img/arrowRight.svg";
import { Link } from "react-router-dom";
import Button from "../../UI/Button";

function ProgramSection({ currentCourse }) {
  // Массив открытых табов
  const [openTabs, setOpenTabs] = useState([1]);

  const handleToggle = (id) => {
    setOpenTabs((prev) =>
      prev.includes(id) ? prev.filter((openId) => openId !== id) : [...prev, id]
    );
  };

  const {
    // Деструктуризация currentCourse (если нет данных — пустой объект)
    hero: { title, heroSubtitle } = {},
    details: { programs = [] } = {},
  } = currentCourse || {};

  return (
    <section className="container pb-0 m-auto md:pt-20 md:pb-20">
      <div className="grid md:grid-cols-[1fr_2fr] grid-cols-1 gap-8">
        {/* Левая колонка */}
        <div>
          <h2 className="mb-20 lg:h1 h2 md:mb-0 lg:text-neutral-900 text-neutral-900">
            Программа курса
          </h2>
        </div>

        {/* Правая колонка */}
        <div>
          {/* Блок с табами */}
          <div className="p-20 pt-32 bg-neutral-700 rounded-xl">
            {programs.map((program, programIndex) => (
              <div key={programIndex} className="grid lg:grid-cols-[3fr_2fr] grid-cols-1 gap-20">
                <div className="order-2 mx-auto mb-32 border-t border-b border-l border-r rounded-md last:mb-0 lg:order-1 h-fit border-neutral-500">
                  {program.program.map((tab, index) => (
                    <Tab
                      tabNum={index + 1}
                      key={tab.id}
                      tab={tab}
                      isOpen={openTabs.includes(tab.id)}
                      onToggle={() => handleToggle(tab.id)}
                    />
                  ))}
                </div>
                {/* Блок с информацией о курсе */}
                <div key={`info-${programIndex}`} className="flex flex-col order-1 gap-8 pt-8">
                  <h2 className="mb-20 md:mb-8 lg:h2 h3 text-neutral-100">
                    {program.programHeader.title}
                  </h2>
                  <img
                    className="mb-20 rounded-md md:mb-8"
                    src={program.programHeader.bgImg}
                    alt="Обложка курса"
                  />
                  <p className="body-14 max-w-[500px] text-neutral-300 mb-8">
                    {program.programHeader.heroSubtitle}
                  </p>
                  {/* Если необходимо, можно добавить кнопку */}
                  {/* <Link to="/#">
                    <Button>Записаться на курс</Button>
                  </Link> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Tab({ tab, isOpen, onToggle, tabNum }) {
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  // Начальное значение maxHeight – сначала показываем только шапку таба
  const [maxHeight, setMaxHeight] = useState("0px");

  useLayoutEffect(() => {
    if (!headerRef.current || !contentRef.current) return;
    // Вычисляем высоту шапки + небольшой отступ (24px)
    const headerHeight = headerRef.current.scrollHeight + 24;
    // Вычисляем высоту содержимого (уроки)
    const contentHeight = contentRef.current.scrollHeight;
    setMaxHeight(isOpen ? `${headerHeight + contentHeight}px` : `${headerHeight}px`);
  }, [isOpen]);

  return (
    // Обработчик onClick теперь на внешнем контейнере,
    // что делает область клика всей области таба
    <div className="cursor-pointer" onClick={onToggle}>
      <div
        style={{ maxHeight }}
        className="grid grid-cols-[auto_1fr_15%] border-b border-neutral-500 overflow-hidden transition-all duration-500 ease-in-out group"
      >
        {/* Левая колонка (номер таба) */}
        <div
          className={`h-full border-r-2 border-neutral-400 ${
            isOpen
              ? "bg-gradient-to-r to-primary-700 from-primary-700/30 border-primary-400 transition-all duration-500 ease-in-out"
              : ""
          } rounded-tl-md transition-all duration-300 ease-in-out group-hover:border-primary-400`}
        >
          <div className="w-[70px] h-[70px] flex justify-center items-center">
            <p className="h2">{String(tabNum).padStart(2, "0")}</p>
          </div>
        </div>

        {/* Центральная колонка */}
        <div className="flex flex-col pt-20 pl-16">
          {/* Заголовок таба – убран onClick, так как он уже на внешнем контейнере */}
          <div className="pb-8" ref={headerRef}>
            <h3 className="mb-[4px] h5">{tab.title}</h3>
            <p className="text-gray-400 body-12">{tab.info}</p>
          </div>
          {/* Раскрывающаяся часть с уроками с дополнительной анимацией */}
          <div
            ref={contentRef}
            className={`pb-20 transition-all duration-500 ease-in-out ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
            }`}
          >
            {tab.lessons.map((lesson, idx) => (
              <div
                key={idx}
                className="flex items-center pb-2 pl-4 my-2 border-b border-gray-400 border-dotted last:border-0 text-gray-50"
              >
                <span className="font-semibold body-14 text-primary-500">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-row justify-between w-full">
                  <span className="ml-2 body-12 text-neutral-200">{lesson.lesson}</span>
                  <span className="ml-2 body-12 text-neutral-200">{lesson.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Правая колонка (стрелка) */}
        <div className="flex items-start justify-center pt-24">
          <img
            className={`transform transition-transform duration-300 text-neutral-50 block w-2 ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
            src={arrowRight}
            alt="Стрелка"
          />
        </div>
      </div>
    </div>
  );
}

export default ProgramSection;

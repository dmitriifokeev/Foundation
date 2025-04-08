import { createBackgroundStyles } from "../../utility/bgImg";
import bgCircles from "../../assets/img/bgLines.svg";
import bgLines from "../../assets/img/bgLines2.svg";
import crossIcon from "../../assets/img/cross.svg";
import okIcon from "../../assets/img/okIcon.svg";

export default function ComparisonSection() {
  const formats = [
    {
      title: "Foundation",

      bgLines: true,
      bgTitle: "bg-primary-600",
      bgColor: "bg-primary-50",
      textColor: "text-neutral-900",
      items: [
        "Короткие уроки от профи по теме в высоком качестве",
        "Цена в 50-80 раз дешевле других школ",
        "Оценки студентов выше любой другой школы",
        "Преподаватель сначала показывает, как сделать — потом даёт задание на закрепление",
        "Выполнение практических задач преподаватель показывает сам",
        "Методика наставничества: повторил — сделал — закрепил",
        "Высокая мотивация на протяжении всего курса",
        "Успех зависит только от вас",
        "Без посредников и кураторов — только личное общение с автором курса. Ответы каждый день, а не раз в неделю на Q&A сессии в группах Zoom на 20 человек",
        "Курс собран одним экспертом по методике, а не десятками подрядчиков",
        "Без “звёзд” с 40-летним стажем, которые умеют программировать, но не умеют обучать",
      ],
      icon: okIcon,
    },
    {
      title: "Большие онлайн школы",
      bgLines: false,
      bgTitle: "bg-neutral-400",
      bgColor: "bg-neutral-100",
      textColor: "text-neutral-600",
      items: [
        "3-часовые стримы в группе из 20 студентов в единственный ваш выходной",
        "Преподаватели на ставке — без личной заинтересованности",
        "Множество разных людей составляют курс и ведут курс, по программе которую создавали не они",
        "Обязательные домашки по темам, которые вам могут быть не нужны или не интересны",
        "Преподаватель отвечает на вопросы только на сессиях в Zoom, обычно раз в неделю для всех студентов сразу",
        "Любой вопрос решается через 'Кураторов курса'",
        "Преподаватели не показывают, как сделать, а рассказывают",
        "Большой стаж ≠ умение объяснять. Часто — наоборот.",
        "Цены от 150к+",
      ],
      icon: crossIcon,
    },

    {
      title: "Оффлайн образование",
      bgLines: false,
      bgTitle: "bg-neutral-400",
      bgColor: "bg-gray-100",
      textColor: "text-gray-700",
      items: [
        "Скучнейшие лекции по 1.5 часа",
        "Устаревшая программа",
        "Формальный подход и дисциплина вместо поддержки",
        "Ненужные скучные домашки",
        "Не актуальные знания",
        "Группы по 30 человек",
        "Цены от 150к ежегодно",
      ],
      icon: crossIcon,
    },
  ];

  return (
    <section className="py-100">
      <div className="container mx-auto">
        <h2 className="mb-32 lg:mb-40 lg:h1 h2 text-neutral-900 lg:text-neutral-900">
          Сравните <br /> форматы обучения
        </h2>
        <div className="grid items-start gap-8 md:grid-cols-3">
          {formats.map((format, index) => (
            <div
              style={format.bgLines ? createBackgroundStyles(bgLines) : {}}
              key={index}
              className={`lg:px-20  px-12 sm:px-20 py-20 sm:py-32 rounded-lg border ${format.bgColor}`}
            >
              <div className={`rounded-md lg:p-20 lg:mb-32 p-12 mb-20  ${format.bgTitle}`}>
                <h3 className="font-normal lg:h3 h4">{format.title}</h3>
              </div>

              <ul className={`lg:space-y-20 space-y-12 ${format.textColor}`}>
                {format.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start lg:body-14 body-12 text-neutral-600 lg:text-neutral-600"
                  >
                    <img className="pt-4 mr-3" src={format.icon} alt="иконка ок" />

                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

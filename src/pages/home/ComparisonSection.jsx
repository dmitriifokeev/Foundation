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
        "Преподаватель всегда сначала показывает, как сделать, а потом даёт задачу на отработку этой темы",
        "Выполнение практических задач преподаватель показывает сам",
        "Современная методика 'наставничества'. Повторил - сделал - учись",
        "Высокая мотивация на протяжении всего курса",
        "Ваш успех в ваших руках",
        "Никаких глупых вопросов через кураторов, как на больших курсах - личное общение с создателем курса. Ответы каждый день, а не раз в неделю на Q&A сессии в группах Zoom на 20 человек",
        "Программа выстроена одним специалистом с использованием специальных обучающих методик",
        "Никаких супер крутых айтишников с 40-летним опытом, которые не прекрасные программисты, но никакие преподаватели",
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
        "Наемные преподаватели на зарплате без мотивации учить",
        "Множество разных людей составляют курс и ведут курс, по программе которую создавали не они",
        "Обязательные домашки по темам, которые вам могут быть не нужны или не интересны",
        "Преподаватель отвечает на вопросы только на сессиях в Zoom, обычно раз в неделю для всех студентов сразу",
        "Любой вопрос решается через 'Кураторов курса'",
        "Преподаватели не показывают, как сделать, а рассказывают",
        "Если человек программист со стажем 20+ лет в программировании - это не делает его хорошим преподавателем. Как правило, наоборот",
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
        "Преподаватели с властью наказать вас",
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

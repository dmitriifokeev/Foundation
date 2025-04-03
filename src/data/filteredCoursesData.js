/**
 * Функция, которая добавляет курсы в категории fromZero и proLevel.
 * @param {Array} data - исходный массив категорий
 * @returns {Array} новый массив категорий с заполненными курсами для fromZero и proLevel
 */

import coursesData from "./coursesData";

//Все категории с курсами внутри. В том числе отфильтрованные курсы fromZero в категорию FromZero и курсы proLevel в категорию proLevel

function addFilteredCourses(data) {
  const fromZeroCourses = [];
  const proLevelCourses = [];

  // Проходим по всем категориям, кроме целевых (fromZero и proLevel)
  data.forEach((category) => {
    if (category.slug !== "fromZero" && category.slug !== "proLevel") {
      category.courses.forEach((course) => {
        // Если difficulty === 1 — курс для начинающих, иначе — продвинутый
        if (course.difficulty === 1 && !course.group) {
          fromZeroCourses.push(course);
        } else if (course.difficulty > 1) {
          proLevelCourses.push(course);
        }
      });
    }
  });

  // Обновляем категории fromZero и proLevel
  const updatedData = data.map((category) => {
    if (category.slug === "fromZero") {
      return { ...category, courses: fromZeroCourses };
    }
    if (category.slug === "proLevel") {
      return { ...category, courses: proLevelCourses };
    }
    return category;
  });

  return updatedData;
}

// Создаем итоговый объект данных, со всеми категориями, применяя фильтрацию
export const allCategoriesData = addFilteredCourses(coursesData);

//Отфильтрованые курсы из всех категорий курсов кроме категорий fromZero и prolevel. Общий массив со всеми курсами.
export const allCoursesData = allCategoriesData
  .filter((category) => category.slug !== "proLevel" && category.slug !== "fromZero")
  .flatMap((category) => category.courses);

import { useParams } from "react-router-dom";
import HeroCoursePage from "./HeroCoursePage";
import { useState } from "react";
import coursesData from "../../data/coursesData";
import NotFoundPage from "../../components/NotFoundPage";

function CoursePage() {
  const { courseId } = useParams();

  // Объединяем все курсы в один массив
  const combined = Object.values(coursesData).flat();

  // Ищем нужный объект
  const currentCourse = combined.find((item) => item.slug === courseId);

  // Если курс не найден, показываем страницу 404
  if (!currentCourse) {
    return <NotFoundPage />;
  }

  return (
    <div>
      {courseId}
      <HeroCoursePage />{" "}
    </div>
  );
}

export default CoursePage;

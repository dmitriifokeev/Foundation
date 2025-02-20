import { useParams } from "react-router-dom";
import HeroCoursePage from "./HeroCoursePage";

import coursesData from "../../data/coursesData";
import NotFoundPage from "../../components/NotFoundPage";

import AboutCourseSection from "./AboutCourseSection";
import SalarySection from "./SalarySection";
import SkillsSection from "./SkillsSection";
import ReviewsSection from "../home/ReviewSection";
import ProgramSection from "./ProgramSection";
import Banner30Days from "../../UI/Banner30Days";
import LearningProcessSection from "../home/LearningProcessSection";
import SupportSection from "../home/SupportSection";
import BannerLifetimeAccess from "../../UI/BannerLifetimeAccess";
import LearningSection from "../home/LearningSection";
import SertificateSection from "../home/SertificateSection";
import CoursesButtons from "../home/CoursesButtons";
import { Courses } from "../home/Courses";
import BannerNewProfession from "../../UI/BannerNewProfession";

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
      <HeroCoursePage currentCourse={currentCourse} />{" "}
      <AboutCourseSection currentCourse={currentCourse} />
      <SalarySection currentCourse={currentCourse} />
      <SkillsSection currentCourse={currentCourse} />
      <ReviewsSection allReviews={false} currentCourse={currentCourse} />
      <ProgramSection currentCourse={currentCourse} />
      <Banner30Days />
      <LearningProcessSection />
      <SupportSection />
      <BannerLifetimeAccess />
      <LearningSection />
      <SertificateSection />
      <Courses pt={60} title={true} />
      <BannerNewProfession />
    </div>
  );
}

export default CoursePage;

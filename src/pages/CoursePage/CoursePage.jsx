import { useParams } from "react-router-dom";
import HeroCoursePage from "./HeroCoursePage";
import { allCoursesData } from "../../data/filteredCoursesData";
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
import { Courses } from "../home/Courses";
import BannerNewProfession from "../../UI/BannerNewProfession";
import CartPopup from "../../components/CartPopup";
import { useCart } from "../../context/CartContext";

function CoursePageContent() {
  const { courseId } = useParams();
  const currentCourse = allCoursesData.find((item) => item.slug === courseId);
  const { cartItems, showCart, setShowCart } = useCart();

  if (!currentCourse) {
    return <NotFoundPage />;
  }

  const handleCheckout = () => {
    // Реализуйте переход к оплате (например, редирект или вызов API)
    console.log("Переход к оплате");
    setShowCart(false);
  };

  return (
    <div>
      <HeroCoursePage currentCourse={currentCourse} />
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

function CoursePage() {
  return <CoursePageContent />;
}

export default CoursePage;

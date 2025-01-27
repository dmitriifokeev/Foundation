import NavigationButtons from "../../UI/NavigationButton";
import AdvantagesSection from "./AdvantagesSection";
import { Courses } from "./Courses";
import Header from "./hero";
import ReviewsSection from "./ReviewSection";
import SupportSection from "./SupportSection";

function Home() {
  return (
    <div className="relative">
      <Header />
      <Courses />
      <AdvantagesSection />
      <ReviewsSection />
      <SupportSection />
    </div>
  );
}

export default Home;

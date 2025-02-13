import BannerLifetimeAccess from "../../UI/BannerLifetimeAccess";

import AdvantagesSection from "./AdvantagesSection";
import { Courses } from "./Courses";
import Header from "./hero";

import LearningProcessSection from "./LearningProcessSection";
import PriceSection from "./PriceSection";
import ReviewsSection from "./ReviewSection";
import SupportSection from "./SupportSection";
import LearningSection from "./LearningSection";
import BannerEnjoyEdication from "../../UI/BannerEnjoyEdication";
import SertificateSection from "./SertificateSection";
import ComparisonSection from "./ComparisonSection";
import BannerNewProfession from "../../UI/BannerNewProfession";

function Home() {
  return (
    <div className="relative">
      <Header />
      <Courses />
      <AdvantagesSection />
      <ReviewsSection />
      <SupportSection />
      <BannerLifetimeAccess />
      <PriceSection />
      {/* <LearningProcessSection /> */}
      <LearningProcessSection />
      <LearningSection />
      <BannerEnjoyEdication />
      <SertificateSection />
      <ComparisonSection />
      <BannerNewProfession />
    </div>
  );
}

export default Home;

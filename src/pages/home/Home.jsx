import AdvantagesSection from "./AdvantagesSection";
import { Courses } from "./Courses";
import Header from "./hero";

function Home() {
  return (
    <div className="relative">
      <Header />
      <Courses />
      <AdvantagesSection />
    </div>
  );
}

export default Home;

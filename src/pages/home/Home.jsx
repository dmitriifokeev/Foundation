import { Courses } from "./Courses";
import Header from "./hero";

function Home() {
  return (
    <div className="container m-auto relative">
      <Header />
      <Courses />
    </div>
  );
}

export default Home;

import { Courses } from "../home/Courses";
import { categoryData } from "../../data/categoryData";

function CoursesPage() {
  return (
    <div className="container m-auto">
      <div className="">
        <Courses
          pt={60}
          staticCategory="webDevelopment"
          showButtons={false}
          categoryData={categoryData}
          forCoursesPage={true}
        />
      </div>
    </div>
  );
}

export default CoursesPage;

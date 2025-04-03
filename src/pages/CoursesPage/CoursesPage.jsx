import { Courses } from "../home/Courses";
import { allCategoriesData } from "../../data/filteredCoursesData";
import { v4 as uuidv4 } from "uuid";

function CoursesPage() {
  return (
    <div className="container m-auto">
      <div className="">
        {allCategoriesData.map((category) => {
          return (
            <div key={uuidv4()} className="">
              <h2 className="mb-16 h2 lg:h1 text-neutral-900 lg:text-neutral-900">
                {category.title}
              </h2>
              <p className="mb-20 body-16 text-neutral-600">{category.description}</p>
              <Courses staticCategory={category.slug} showButtons={false} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CoursesPage;

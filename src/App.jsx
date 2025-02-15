import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/layout";
import Home from "./pages/home/Home";
import CoursePage from "./pages/CoursePage/CoursePage";
import NotFoundPage from "./components/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      // { path: "courses", element: <CoursesListPage /> },
      { path: "courses/:courseId", element: <CoursePage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

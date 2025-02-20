import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/layout";
import Home from "./pages/home/Home";
import CoursePage from "./pages/CoursePage/CoursePage";
import NotFoundPage from "./components/NotFoundPage";
import { useEffect } from "react";
import CoursesPage from "./pages/CoursesPage/CoursesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "courses", element: <CoursesPage /> },

      { path: "courses/:courseId", element: <CoursePage /> },

      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

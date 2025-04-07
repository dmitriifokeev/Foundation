// src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import CoursePage from "./pages/CoursePage/CoursePage";
import CoursesPage from "./pages/CoursesPage/CoursesPage";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import NotFoundPage from "./components/NotFoundPage";
import PublickOffer from "./pages/PublickOffer/PublickOffer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CartProvider>
        <Layout />
      </CartProvider>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "courses", element: <CoursesPage /> },
      { path: "courses/:courseId", element: <CoursePage /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },
      { path: "publick-offer", element: <PublickOffer /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

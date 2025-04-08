import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { CartProvider } from "./context/CartContext";
import Layout from "./components/Layout";
import ClipLoader from "react-spinners/ClipLoader";

// Ленивые загрузки страниц
const Home = lazy(() => import("./pages/home/Home"));
const CoursePage = lazy(() => import("./pages/CoursePage/CoursePage"));
const CoursesPage = lazy(() => import("./pages/CoursesPage/CoursesPage"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/PrivacyPolicy"));
const PublickOffer = lazy(() => import("./pages/PublickOffer/PublickOffer"));
const ThanksPage = lazy(() => import("./pages/ThanksPage/ThanksPage"));
const NotFoundPage = lazy(() => import("./components/NotFoundPage"));

// Конфигурация роутера
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
      { path: "thanks-page", element: <ThanksPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  return (
    <HelmetProvider>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <ClipLoader size={50} color="#123abc" loading={true} />
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </HelmetProvider>
  );
}

export default App;

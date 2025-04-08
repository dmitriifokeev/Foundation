import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import { Helmet } from "react-helmet-async";

const NotFoundPage = () => {
  return (
    <div className="container m-auto">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Страница не для индексации</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center text-white p-60 rounded-xl bg-neutral-600 ">
        <h1 className="mb-4 font-extrabold text-9xl">404</h1>
        <p className="mb-40 text-2xl">Страница не найдена</p>
        <Link to="/">
          <Button>Вернуться на главную</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

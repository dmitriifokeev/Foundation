import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";

const NotFoundPage = () => {
  return (
    <div className="container flex flex-col items-center justify-center m-auto text-white p-60 rounded-xl bg-neutral-600">
      <h1 className="mb-4 font-extrabold text-9xl">404</h1>
      <p className="mb-40 text-2xl">Страница не найдена</p>
      <Link to="/">
        <Button>Вернуться на главную</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;

import React from "react";
import thanksPageInstruction from "../../assets/img/thanksPageInstruction.png";
import thanksPageInstruction2 from "../../assets/img/thanksPageInstruction2.png";
import thanksPageInstruction3 from "../../assets/img/thanksPageInstruction3.png";
import thanksPageInstruction4 from "../../assets/img/thanksPageInstruction4.png";
import telegramLogoGreen from "../../assets/img/telegramLogoGreen.png";
import telegramQuestionsLogo from "../../assets/img/telegramQuestionsLogo.png";
import { Courses } from "../home/Courses";
import { Helmet } from "react-helmet-async";

function ThanksPage() {
  return (
    <section className="py-20 bg-neutral-100">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Страница не для индексации</title>
      </Helmet>
      {/* Заголовок / блок благодарности */}
      <div className="container m-auto mb-20 text-center bg-white border shadow-sm py-80 border-neutral-200 rounded-xl">
        <h1 className="mb-20 lg:h1 h2 text-primary-600 lg:text-primary-600 ">
          🥳 Спасибо за приобретение курса! 🥳
        </h1>
        <p className="body-20 text-neutral-700">
          Ниже вы найдете пошаговую инструкцию по доступу к материалам курса.
        </p>
      </div>

      {/* Блок с пошаговой инструкцией */}
      <div className="container px-4 m-auto mb-60">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Шаг 1. Проверка почты */}
          <div className="p-32 bg-white border shadow-sm border-neutral-200 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="mr-4 text-xl font-bold text-primary-500">Шаг 1</span>
              <h2 className="text-xl font-semibold text-neutral-900">Проверка почты</h2>
            </div>
            <p className="mb-20 body-14 text-neutral-700">
              После успешной оплаты вы получите письмо на почту, указанную при оплате.
            </p>
            <img
              src={thanksPageInstruction}
              alt="Письмо с инструкцией"
              className="w-full rounded"
            />
          </div>

          {/* Шаг 2. Содержимое письма */}
          <div className="p-32 bg-white border shadow-sm border-neutral-200 rounded-xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="mr-4 text-xl font-bold text-primary-500">Шаг 2</span>
              <h2 className="text-xl font-semibold text-neutral-900">Содержимое письма</h2>
            </div>
            <p className="mb-20 body-14 text-neutral-700">
              Ознакомьтесь с содержимым письма – проверьте все папки, включая «Спам».
            </p>
            <img src={thanksPageInstruction2} alt="Содержимое письма" className="w-full rounded" />
          </div>

          {/* Шаг 3. Вход в аккаунт */}
          <div className="p-32 bg-white border shadow-sm border-neutral-200 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="mr-4 text-xl font-bold text-primary-500">Шаг 3</span>
              <h2 className="text-xl font-semibold text-neutral-900">Вход в аккаунт</h2>
            </div>
            <p className="mb-20 body-14 text-neutral-700">
              Нажмите на кнопку «Войти в аккаунт» и создайте пароль, используя вашу почту как логин.
            </p>
            <img src={thanksPageInstruction3} alt="Страница входа" className="w-full rounded" />
          </div>

          {/* Шаг 4. Доступ к курсам */}
          <div className="p-32 bg-white border shadow-sm border-neutral-200 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="mr-4 text-xl font-bold text-primary-500">Шаг 4</span>
              <h2 className="text-xl font-semibold text-neutral-900">Доступ к курсам</h2>
            </div>
            <p className="mb-20 body-14 text-neutral-700">
              После входа вы увидите список доступных курсов. Для удобства используйте одну и ту же
              почту при каждой покупке.
            </p>
            <img src={thanksPageInstruction4} alt="Список курсов" className="w-full rounded" />
          </div>
        </div>
      </div>

      {/* Блок поддержки при возникновении проблем */}
      <div className="container px-4 m-auto mb-80">
        <div className="p-32 text-center bg-white border shadow-sm border-secondary-200 rounded-xl">
          <h2 className="mb-12 font-semibold text-neutral-900 lg:h2 h3 lg:text-neutral-900">
            Проблемы с доступом?
          </h2>
          <p className="mb-6 italic body-14 text-neutral-700">
            Если возникли сложности, напишите нам, указав вашу почту и приложив чек или скриншот
            оплаты.
          </p>
          <div className="">
            <a
              href="https://t.me/DmitriiFokeev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-4"
            >
              <img
                src={telegramQuestionsLogo}
                alt="Telegram"
                className="mx-auto transition-opacity opacity-90 w-[300px] hover:opacity-100 shadow-xm"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Компонент курсов */}
      <Courses />
    </section>
  );
}

export default ThanksPage;

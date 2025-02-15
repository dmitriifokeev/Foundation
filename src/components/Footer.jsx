import logo from "../assets/img/logo.svg";
import arrowFooter from "../assets/img/arrowFooter.svg";
import telegramLogo from "../assets/img/telegramLogo.svg";

export default function Footer() {
  return (
    <footer className="pt-20 pb-20 text-white">
      <div className="container grid grid-cols-[2fr_1fr]  gap-8 mx-auto px-0">
        {/* Левая колонка */}
        <div className="grid sm:grid-cols-[2fr_1fr] grid-cols-[1fr] sm:p-32 p-20  rounded-lg bg-neutral-700 ">
          <div className="flex flex-col justify-between">
            <img
              src={logo}
              alt="Лого Foundation"
              className="lg:w-[180px] w-[100px] cursor-pointer mb-20 sm:mb-0"
            />

            <div className="lg:body-12 text-[10px] text-neutral-300 mb-20 sm:mb-0">
              <p className="mb-4 cursor-pointer hover:underline">Политика конфиденциальности</p>
              <p className="">Все права защищены</p>
            </div>
          </div>

          <div className="flex flex-col justify-between lg:body-12 text-[10px] text-neutral-300">
            <img
              src={arrowFooter}
              alt="Arrow Icon"
              className="lg:w-[130px] w-60 mb-40 self-end hidden sm:block"
            />
            <div className="sm:self-end">
              <p>ИП Фокеев Дмитрий Сергеевич</p>
              <p>ИНН: 7806268916</p>
              <p className="mb-2">ОГРНИП: 3247803004020</p>
              <p className="mb-2">simpleeducation.sup@gmail.com</p>
              <p>
                <a href="https://t.me/dmitriifokeev" className="text-primary-400 hover:underline">
                  Задать вопрос в телеграме
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Правая колонка (Телеграм) */}
        <div className="relative flex flex-col items-center justify-start p-20 rounded-lg sm:pt-40 bg-neutral-700 sm:p-0">
          <h3 className="mb-8 lg:h4 sm:h5 h6 ">Наш телеграм канал</h3>
          <p className=" lg:body-12 text-[10px] mb-20 lg:mb-60">Скидки новинки обучение</p>
          <img
            src={telegramLogo}
            alt="Telegram"
            className=" opacity-75 cursor-pointer hover:opacity-100 max-w-[60%] sm:max-w-[100%]"
          />
        </div>
      </div>
    </footer>
  );
}

import heroImg from "../../assets/img/hero.jpg";

import { createBackgroundStyles } from "../../utility/bgImg";

export default function Header() {
  return (
    <header className="container relative pb-20 m-auto">
      <div style={createBackgroundStyles(heroImg)} className="rounded-md lg:rounded-xl ">
        <div className="flex flex-col px-32 py-32 sm:px-40 sm:py-60 text-neutral-50 xl:py-80">
          <h2 className="lg:h1 mb-12 sm:mb-12 lg:mb-20 font-main lg:max-w-[650px] max-w-[450px] h2 ">
            Современное обучение, доступное каждому
          </h2>
          <p className="lg:body-18 body-14 lg:max-w-[600px] max-w-[450px] leading-[170%] font-light">
            Обучение с удовольствием, в своем ритме, с гарантированным результатом и по честным
            ценам
          </p>
          <h1 className="sr-only">
            Онлайн-курсы по веб-разработке и веб-дизайну с нуля — школа Foundation Дмитрия Фокеева
          </h1>
        </div>
      </div>
    </header>
  );
}

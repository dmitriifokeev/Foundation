import heroImg from "../../assets/img/hero.jpg";

export default function Header() {
  return (
    <header className="h-550 relative mb-10">
      <img src={heroImg} alt="hero img" className="w-full h-full object-cover " />
      <div className="rounded-lg pl-80 absolute inset-0 flex flex-col items-start justify-center p-8 bg-gradient-to-r from-black/60 to-transparent text-neutral-50">
        <h1 className="h1 mb-20 font-main max-w-[650px]">Современное обучение доступное каждому</h1>
        <p className="body-18 max-w-[600px] leading-[170%] font-light">
          Обучение с удовольствием, в своем ритме, с гарантированным результатом и по честным ценам
        </p>
      </div>
    </header>
  );
}

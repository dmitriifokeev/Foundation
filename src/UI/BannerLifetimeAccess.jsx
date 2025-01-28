import infiniti from "../assets/img/infinityLable.png";

function BannerLifetimeAccess() {
  return (
    <section className="container py-10 m-auto ">
      <div className="relative grid grid-cols-[1fr_2fr] py-32 overflow-hidden bg-teal-800 rounded-xl">
        <div></div>
        <img
          src={infiniti}
          alt="Бесконечность"
          className="absolute mr-6 w-[330px] top-1/2 transform -translate-y-1/2"
        />
        <div>
          <h3 className="mb-12 h3 text-primary-100 max-w-[650px] leading-8">
            Пожизненный доступ ко всем материалам курса. <br /> Все обновления курсов бесплатны.
          </h3>

          <button className="px-16 py-4 text-primary-100 transition bg-teal-100/20 rounded-[4px] hover:bg-primary-300/20">
            Начните учиться сейчас
          </button>
        </div>
      </div>
    </section>
  );
}

export default BannerLifetimeAccess;

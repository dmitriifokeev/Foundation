import infiniti from "../assets/img/infinityLable.png";

function BannerLifetimeAccess() {
  return (
    <section className="container  m-auto sm:pb-[100px] pb-60">
      <div className="relative grid sm:grid-cols-[1fr_2fr] xl:grid-cols-[2fr_3fr] px-20 sm:px-0 py-20 sm:py-32 overflow-hidden bg-teal-800 rounded-xl">
        <div></div>
        <img
          src={infiniti}
          alt="Бесконечность"
          className="absolute mr-6 lg:w-[330px] w-[230px] top-1/2 xl:left-[100px] left-[-10px] md:left-[10px] lg:left-0 transform -translate-y-1/2  hidden sm:block"
        />
        <div>
          <h3 className="mb-12 lg:h3 h4 text-primary-100 max-w-[650px] lg:leading-8">
            Пожизненный доступ ко всем материалам курса. <br /> Все обновления курсов бесплатны.
          </h3>

          <button className="px-16 py-4 text-primary-100 transition bg-primary-100/20 rounded-[4px] hover:bg-primary-300/20">
            Начните учиться сейчас
          </button>
        </div>
      </div>
    </section>
  );
}

export default BannerLifetimeAccess;

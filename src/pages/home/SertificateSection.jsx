import sertificateBlack from "../../assets/img/sertificateBlack.svg";
import sertificateWhite from "../../assets/img/sertificateWhite.svg";

function SertificateSection() {
  return (
    <section>
      <div className="container pt-40 m-auto">
        <h2 className="mb-32 lg:mb-0 lg:h1 h2 text-neutral-900 lg:text-neutral-900">
          Сертификат об <br /> окончанию курса
        </h2>
        <div className="relative">
          <img
            className="max-w-[70%] lg:max-w-[100%]"
            src={sertificateBlack}
            alt="Сертификат темный стиль"
          />
          <img
            className="absolute top-0 right-0 max-w-[70%] lg:max-w-[100%]"
            src={sertificateWhite}
            alt="Сертификат темный стиль"
          />
        </div>
      </div>
    </section>
  );
}

export default SertificateSection;

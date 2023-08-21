import Image from "next/image";
import React from "react";
import HeroImage from "@/public/hero-photo.jpg";

const HomepageContainer = () => {
  return (
    <>
      <section className="hero-section" id="anasafya">
        <div className="w-[700px]">
          <h1 className="hero-heading">
            Süreç Yönetim ve Dijital Dönüşümle Yüksek Performanslı Süreçler
          </h1>
          <p className="hero-p">
            Başarılı bir Dijital Dönüşüm sağlayan İç Süreç Yönetimini kurma ve
            uygulamada uzmanız.
          </p>
        </div>
        <div className="hero-image">
          <Image
            src={HeroImage}
            alt="Hero Image"
            fill
            className="object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default HomepageContainer;

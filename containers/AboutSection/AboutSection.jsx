import React from "react";

const AboutSection = () => {
  return (
    <section
      className="flex flex-col items-center justify-start gap-2 p-24"
      id="hakkimizda"
    >
      <div className="flex flex-wrap gap-2 border-b-2 border-solid border-secondary/30">
        <h2 className="pl-1 text-5xl border-b-2 border-l-2 border-dashed border-secondary/30 h-fit">
          Biz Kimiz?
        </h2>
        <p className="w-full text-start h-fit ">
          Şirketimiz bilişim alanında kamu kurum ve kuruluşları ile özel sektöre
          İş Süreç Yönetimi ve Dijital Dönüşüm başta olmak üzere alanında
          deneyimli ve yenilikçi kadrosu İş Süreçleri Yönetimi, Süreç
          İyileştirme, Dijital Dönüşüm, Akıllı Otomasyon, Yönetim Danışmanlığı,
          CX Excellence, PaperWork ve BT Danışmanlık hizmetleri vermektedir.{" "}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 border-b-2 border-solid border-secondary/30">
        <h2 className="pl-1 text-5xl h-fit">Misyon</h2>
        <p className="w-full text-start h-fit ">
          Uzman danışmanlarımız ile müşterilerimizin süreçlerini sürekli ölçerek
          ve iyileştirerek çevik yönetilen bir şirket olmalarına yardımcı olmak.
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <p className="p-2 mb-2 rounded-sm bg-secondary w-fit text-primary">
            Eğitim Hizmeti Vermek.
          </p>
          <p className="p-2 mb-2 rounded-sm w-fit bg-secondary text-primary">
            Danışmanlık Hizmeti Vermek.
          </p>
          <p className="p-2 mb-2 rounded-sm bg-secondary w-fit text-primary">
            Etkin Kalite Yönetiminin Sağlanması.
          </p>
          <p className="p-2 mb-2 rounded-sm bg-secondary w-fit text-primary">
            Yazılım, Test ve Ürün Desteği Sağlamak.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 border-b-2 border-solid border-secondary/30">
        <h2 className="pl-1 text-5xl h-fit">Vizyon</h2>
        <p className="w-full text-start h-fit ">
          Yeni nesil dijital işletmeye giden yolculuğu sağlamada lider olmak.
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <p className="p-2 mb-2 rounded-sm bg-secondary w-fit text-primary">
            Yenilikçi süreç yönetimiyle tercih edilen firma olmak.
          </p>
          <p className="p-2 mb-2 rounded-sm w-fit bg-secondary text-primary">
            Dürüstlük ve güveni temel ilke olarak benimseyerek değer yaratan bir
            kuruluş olmak.
          </p>
          <p className="p-2 mb-2 rounded-sm bg-secondary w-fit text-primary">
            Güvenilir ürünlerle işleri hızlandıran, kolaylaştıran bir çözüm
            ortağı olmak.
          </p>
          <p className="p-2 mb-2 rounded-sm bg-secondary w-fit text-primary">
            Çevreye duyarlı teknoloji üretimini sürekli hale getirerek ülke
            kalkınmasına önemli katkılar sağlayan lider bir teknoloji şirketi
            olmak
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 border-b-2 border-solid border-secondary/30">
        <h2 className="pl-1 text-5xl h-fit">Değerlerimiz</h2>
        <p className="w-full text-start h-fit ">DigitalAid olarak;</p>
        <div className="flex flex-wrap items-center gap-2">
          <p className="p-2 mb-2 rounded-sm bg-secondary w-fit text-primary">
            Etik Değerlere bağlıyız.
          </p>
          <p className="p-2 mb-2 rounded-sm w-fit bg-secondary text-primary">
            Yüksek Müşteri Memnuniyeti Yaratıyoruz.
          </p>
          <p className="p-2 mb-2 rounded-sm bg-secondary w-fit text-primary">
            Mutlu bir çalışanın mutlu bir müşteri sağlayacağına inanıyoruz.
          </p>
          <p className="p-2 mb-2 rounded-sm bg-secondary w-fit text-primary">
            Sürdürülebilirliğe Katkı Sağlıyoruz.
          </p>
          <p className="p-2 mb-2 rounded-sm bg-secondary w-fit text-primary">
            İletişime ve Geri Bildirime Değer Veriyoruz.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

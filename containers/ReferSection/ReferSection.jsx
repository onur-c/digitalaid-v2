import Link from "next/link";
import React from "react";
import estart from "@/public/estart.webp";
import tüyap from "@/public/tüyap.webp";
import paperworkRef from "@/public/paperworkRef.webp";
import akfenren from "@/public/akfenren.webp";
import akfen from "@/public/akfen.webp";
import Image from "next/image";
const ReferSection = () => {
  return (
    <section className="flex flex-col flex-wrap items-center justify-center py-12 m-auto transition-transform border-t-4 border-b-4 border-solid w-fit border-secondary/10 h-fit ">
      <Link target="_blank" href="https://estarthealthgroup.com/tr/">
        <Image
          src={estart}
          alt="Estart Health Group"
          className="object-contain w-64 h-24 transition-opacity opacity-50 hover:opacity-100"
        />
      </Link>
      <Link target="_blank" href="https://tuyap.com.tr/">
        <Image
          src={tüyap}
          alt="Tüyap"
          className="object-contain h-24 transition-opacity opacity-50 w-96 hover:opacity-100 "
        />
      </Link>
      <Link target="_blank" href="https://www.paperwork.com.tr/">
        <Image
          src={paperworkRef}
          alt="Paperwork"
          className="object-contain h-24 transition-opacity opacity-50 w-96 hover:opacity-100 "
        />
      </Link>
      <Link target="_blank" href="https://akfenren.com.tr/">
        <Image
          src={akfenren}
          alt="Akfenren"
          className="object-contain h-24 transition-opacity opacity-50 w-96 hover:opacity-100 "
        />
      </Link>
      <Link target="_blank" href="https://www.akfen.com.tr/">
        <Image
          src={akfen}
          alt="Akfen"
          className="object-contain h-24 transition-opacity opacity-50 w-96 hover:opacity-100 "
        />
      </Link>
    </section>
  );
};
export default ReferSection;

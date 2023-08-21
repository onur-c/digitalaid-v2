import Image from "next/image";
import React from "react";
import MaleAvatar from "@/public/male-avatar.webp";
import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { TiStarOutline, TiStarFullOutline } from "react-icons/ti";
const CommentSection = () => {
  return (
    <section className="relative flex flex-wrap items-center justify-center gap-12">
      <div className="w-[350px] h-[400px] rounded-sm p-4 bg-secondary text-primary relative">
        <div className="absolute text-5xl top-5 left-5">
          <FaQuoteLeft />
        </div>
        <div className="absolute text-5xl bottom-5 right-5">
          <FaQuoteRight />
        </div>
        <div className="flex items-center justify-center mt-12 ">
          <div className="text-8xl">
            <RxAvatar />
          </div>
          <div className="flex flex-col">
            <p className="text-2xl">M... G...</p>
            <span className="flex gap-3 p-2 text-yellow-300 rounded-sm bg-primary">
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
            </span>
          </div>
        </div>
        <h4 className="text-2xl font-bold text-center">Eğitici</h4>
        <p className="mt-8 italic text-center">Eğitimden çok memnun kaldık.</p>
      </div>
      <div className="w-[350px] h-[400px] rounded-sm p-4 bg-secondary text-primary relative">
        <div className="absolute text-5xl top-5 left-5">
          <FaQuoteLeft />
        </div>
        <div className="absolute text-5xl bottom-5 right-5">
          <FaQuoteRight />
        </div>
        <div className="flex items-center justify-center mt-12 ">
          <div className="text-8xl">
            <RxAvatar />
          </div>
          <div className="flex flex-col">
            <p className="text-2xl">G... G...</p>
            <span className="flex gap-3 p-2 text-yellow-300 rounded-sm bg-primary">
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarOutline />
            </span>
          </div>
        </div>
        <h4 className="text-2xl font-bold text-center">İyi</h4>
        <p className="mt-8 italic text-center">
          Danışmanlık hizmeti çok başarılıydı. Çok hızlı sürede süreçler
          dijitale aktarıldı. Çok deneyimliler.
        </p>
      </div>
      <div className="w-[350px] h-[400px] rounded-sm p-4 bg-secondary text-primary relative">
        <div className="absolute text-5xl top-5 left-5">
          <FaQuoteLeft />
        </div>
        <div className="absolute text-5xl bottom-5 right-5">
          <FaQuoteRight />
        </div>
        <div className="flex items-center justify-center mt-12 ">
          <div className="text-8xl">
            <RxAvatar />
          </div>
          <div className="flex flex-col">
            <p className="text-2xl">S... A...</p>
            <span className="flex gap-3 p-2 text-yellow-300 rounded-sm bg-primary">
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarOutline />
            </span>
          </div>
        </div>
        <h4 className="text-2xl font-bold text-center">Başarılı</h4>
        <p className="mt-8 italic text-center">
          Eğitim genel anlamda çok başarılıydı. Süreleri uzun tutulabilirdi.
        </p>
      </div>
    </section>
  );
};

export default CommentSection;

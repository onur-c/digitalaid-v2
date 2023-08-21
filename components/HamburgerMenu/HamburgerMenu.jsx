"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Logo from "@/public/digitalaid-logo.webp";
import { BiChevronDown } from "react-icons/bi";
import Image from "next/image";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button className="hamburger-menu" onClick={(e) => handleClick(e)}>
        <RxHamburgerMenu />
      </button>
      <div
        className={
          isOpen
            ? "absolute w-full h-screen top-0 right-0 bg-primary/95  md:hidden opacity-100  transition-all duration-1000"
            : "absolute w-0 h-0 opacity-0 top-0 right-0 transition-all duration-1000"
        }
      >
        <button
          className="absolute right-0 text-2xl top-[88px]"
          onClick={(e) => handleClick(e)}
        >
          <AiOutlineClose />
        </button>
        <div className="absolute left-0 flex flex-col items-center justify-center gap-24 top-24 ">
          {/* Links on the left */}
          <div className="flex flex-col items-start gap-6">
            <Link href="/#hakkimizda" onClick={handleClick}>
              Hakkımızda
            </Link>
            <Link href="/#blog" onClick={handleClick}>
              Blog
            </Link>
            <Link href="/#referanslar" onClick={handleClick}>
              Referanslar
            </Link>
            {/* onHover Dropdown menu - Hizmetler */}
            <div className="group">
              <span className="flex items-center">
                <Link href="/#hizmetler" onClick={handleClick}>
                  Hizmetler
                </Link>
                <BiChevronDown />
              </span>
              <div className="absolute hidden p-2 rounded bg-primary/90 group-hover:flex group-hover:flex-col group-hover:gap-2">
                <Link href="/#egitim" onClick={handleClick}>
                  Eğitim
                </Link>
                <Link href="/#danismanlik" onClick={handleClick}>
                  Danışmanlık
                </Link>
                <Link href="/#yazilim" onClick={handleClick}>
                  Yazılım
                </Link>
              </div>
            </div>
          </div>
          {/* Contact Link */}

          <Link href="/#iletisim" className="iletisim">
            İletisim
          </Link>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;

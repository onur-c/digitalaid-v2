import React from "react";
import Image from "next/image";
import Link from "next/link";
//
import { BiChevronDown } from "react-icons/bi";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Logo from "@/public/digitalaid-logo.webp";

const Header = () => {
  return (
    <header className="header-bar">
      {/* Logo */}
      <Link href="/" className="logo">
        <Image src={Logo} width={56} height={56} />
      </Link>
      {/* Links on the left */}
      <div className="links">
        <Link href="/#hakkimizda">Hakkımızda</Link>
        <Link href="/#blog">Blog</Link>
        <Link href="/#referanslar">Referanslar</Link>
        {/* onHover Dropdown menu - Hizmetler */}
        <div className="group">
          <span className="flex items-center">
            <Link href="/#hizmetler">Hizmetler</Link>
            <BiChevronDown />
          </span>
          <div className="absolute hidden p-2 rounded bg-primary/90 group-hover:flex group-hover:flex-col group-hover:gap-2">
            <Link href="/#egitim">Eğitim</Link>
            <Link href="/#danismanlik">Danışmanlık</Link>
            <Link href="/#yazilim">Yazılım</Link>
          </div>
        </div>
      </div>
      {/* Contact Link */}

      <Link href="/#iletisim" className="iletisim">
        İletisim
      </Link>
      {/* Hamburger Menu */}
      <HamburgerMenu />
    </header>
  );
};

export default Header;

// className="absolute hidden mt-2 opacity-0 group-hover:gap-2 group-hover:flex group-hover:flex-col group-hover:opacity-60"

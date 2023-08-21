"use client";
import Link from "next/link";
import React from "react";
import { MdArrowUpward } from "react-icons/md";
const ScrollToTop = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <button
      className="fixed p-5 rounded-lg text-primary bg-secondary bottom-10 right-10"
      onClick={handleClick}
    >
      <MdArrowUpward />
    </button>
  );
};

export default ScrollToTop;

{
  /* <Link
      href="/#"
      className="fixed p-5 rounded-lg text-primary bg-secondary bottom-10 right-10"
    >
      <MdArrowUpward />
    </Link> */
}

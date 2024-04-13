"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function InputBusqueda() {
  const [scrollY, setScrollY] = useState(0);
  const [busqueda, setBusqueda] = useState("");

  function searchStyle() {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }
  searchStyle();

  const handleChange = (e: any) => {
    setBusqueda(e.target.value);
  };

  return (
    <div
      className={`
      flex items-center justify-evenly
      bg-gradient-to-b from-pageColor to-gradientColor rounded-b-2xl w-48 h-10 px-4
      transform transition-transform duration-1000
      ${scrollY ? "translate-y-18px" : "-translate-y-7"}
      input-busqueda
      `}
    >
      <input
        type="text"
        placeholder="Buscador"
        className="px-2 mr-2 rounded-sm text-black"
        value={busqueda}
        onChange={handleChange}
      />
      {busqueda.trim() !== "" ? (
        <Link href={`/pages/searchpage/${busqueda}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-search"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#fff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
        </Link>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-search"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#fff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>
      )}
    </div>
  );
}

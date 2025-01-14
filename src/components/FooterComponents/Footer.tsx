import Link from "next/link";
import CategoriesButton from "../Buttons/CategoriesButton";
import SocialButtons from "../Buttons/SocialButtons";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full grid grid-cols-4 bg-gradient-to-b from-pageColor to-gradientColor text-white absolute footer">
      <article className="col-start-2 col-end-4 flex flex-col justify-center items-center">
        <h1 className="flex justify-center items-center">
          <Link
            href="/"
            className="text-7xl font-bold w-full flex justify-center p-12 footer_title"
          >
            <Image
              className="title_hover footer_image"
              src={"/eltitularwhite.png"}
              alt="EL TITULAR"
              height={80}
              width={350}
            />
          </Link>
        </h1>
        <ul className="flex justify-center items-center p-4 footer_socials border-t w-full">
          <li className="flex justify-evenly">
            <SocialButtons />
          </li>
        </ul>
        <h2 className="text-4xl m-4 footer_slogan">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          "NOTICIAS QUE MARCAN LA DIFERENCIA"
        </h2>
        <ul className="w-full flex items-center justify-center m-4 footer_category">
          <li className="w-full flex justify-evenly">
            <CategoriesButton />
          </li>
        </ul>
        <h3 className="w-full flex justify-center m-4 footer_contact">
          <Link
            href={"mailto:eltitularmdp@gmail.com"}
            target="#"
            className="p-4 text-2xl flex items-center footer_contact_p headersButtons"
          >
            <svg
              className="footer_contact_svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
              <path d="M3 7l9 6l9 -6" />
            </svg>
            eltitularmdp@gmail.com
          </Link>
          <Link
            href={"https://wa.me/5492234544870"}
            target="#"
            className="p-4 text-2xl flex items-center footer_contact_p headersButtons"
          >
            <svg
              className="footer_contact_svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            </svg>
            +54 9 223 454-4870
          </Link>
          <Link
            href={"/pages/terminosycondiciones"}
            target="#"
            className="p-4 text-2xl flex items-center footer_contact_p headersButtons"
          >
            Términos y condiciones
          </Link>
        </h3>
        <h5 className="p-4 border-t w-full flex justify-center items-center">
          <Link
            href="https://www.linkedin.com/in/gaston-cauteruccio/"
            target="#"
            className="text-xs title_hover footer_created"
          >
            Página creada por Gaston Cauteruccio
          </Link>
        </h5>
      </article>
    </footer>
  );
}

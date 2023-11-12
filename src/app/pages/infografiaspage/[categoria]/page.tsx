import Footer from "@/components/FooterComponents/Footer";
import Header from "@/components/HeaderComponents/Header";
import { Noticia } from "@/types/componentes.types";
import { obtenerNoticias } from "@/utils/noticia";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function page({ params }: any) {
  const noticias = await obtenerNoticias();
  const categoriaSeleccionada = params.categoria;
  const noticiasDeCadaCategoria = noticias.filter((noticia: Noticia) => {
    return noticia.categoria === categoriaSeleccionada;
  });

  return (
    <>
      <Header />
      <section className="grid grid-cols-2 mx-48 my-24 text-black">
        <div className="row-span-1 flex items-center mt-12 mb-4">
          <Link
            href={""}
            className="border border-pageColor rounded-3xl p-2 px-4 font-bold button"
          >
            {categoriaSeleccionada}
          </Link>
        </div>
        <article className="col-start-1 col-end-3 grid grid-cols-2 border border-pageColor rounded-3xl h-min p-4">
          {noticiasDeCadaCategoria.map((noticia: Noticia, index: any) => {
            if (index >= 6) {
              return null;
            }
            return (
              <Link
                href={`/pages/noticepage/${noticia.title}`}
                key={index}
                className={
                  index === 0
                    ? "mx-8 m-4 col-start-1 col-end-2 row-start-1 row-end-2 border rounded-3xl border-pageColor py-8 title flex justify-center items-center"
                    : index === 1
                    ? "mx-8 m-4 col-start-2 col-end-3 row-start-1 row-end-2 border rounded-3xl border-pageColor py-8 title flex justify-center items-center"
                    : index === 2
                    ? "mx-8 m-4 col-start-1 col-end-2 row-start-2 row-end-3 border rounded-3xl border-pageColor py-8 title flex justify-center items-center"
                    : index === 3
                    ? "mx-8 m-4 col-start-2 col-end-3 row-start-2 row-end-3 border rounded-3xl border-pageColor py-8 title flex justify-center items-center"
                    : index === 4
                    ? "mx-8 m-4 col-start-1 col-end-2 row-start-3 row-end-4 border rounded-3xl border-pageColor py-8 title flex justify-center items-center"
                    : "mx-8 m-4 col-start-2 col-end-3 row-start-3 row-end-4 border rounded-3xl border-pageColor py-8 title flex justify-center items-center"
                }
              >
                <div className="flex justify-center items-center">
                  <div style={{ maxWidth: "120%", height: "auto" }}>
                    <Image
                      src={noticia.image_principal}
                      alt={noticia.title}
                      height={250}
                      width={400}
                    />
                  </div>
                </div>
                {/* <div className="col-start-2 col-end-3 flex flex-col items-center justify-center m-4">
                <h1 className={"text-3xl mb-8 font-bold"}>{noticia.title}</h1> 
              </div>*/}
              </Link>
            );
          })}
          {noticiasDeCadaCategoria.length > 6 && (
            <button className="border border-pageColor rounded-3xl p-2 w-60 text-xl font-bold button">
              VER MAS
            </button>
          )}
        </article>
      </section>
      <Footer />
    </>
  );
}

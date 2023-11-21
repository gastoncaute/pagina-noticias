import { Noticia } from "@/types/componentes.types";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";
import { Tweet } from "react-tweet";

export default function TercerBloque({
  tercerBloque,
}: {
  tercerBloque: Noticia["tercer_bloque"];
}) {
  const modifyImageUrl = (imageRef: any) => {
    const modifiedRef = String(imageRef)
      .replace("image-", "")
      .replace("-jpg", ".jpg")
      .replace("-webp", ".webp")
      .replace("-png", ".png");
    const baseUrl = "https://cdn.sanity.io/images/lrwm6m86/production/";
    return baseUrl + modifiedRef;
  };

  const modifyVideoCode = (videoCode: string | undefined) => {
    return videoCode ? videoCode.replace("https://youtu.be/", "") : "";
  };

  return (
    <section>
      {tercerBloque?.imagen_3 && (
        <div>
          <Image
            src={modifyImageUrl(tercerBloque?.imagen_3.imagen.asset._ref)}
            alt={tercerBloque?.imagen_3.epigrafe}
            height={1000}
            width={1000}
          />
          <h5 className="py-4 text-gray-700">
            {tercerBloque?.imagen_3.epigrafe}
          </h5>
        </div>
      )}
      {modifyVideoCode(tercerBloque?.YouTubeCode_2) && (
        <div className="py-4 video-container">
          <iframe
            width="100%"
            height="315"
            className="video-iframe"
            src={`https://www.youtube.com/embed/${modifyVideoCode(
              tercerBloque?.YouTubeCode_2
            )}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}
      {tercerBloque?.TwitterID_2 && <Tweet id={tercerBloque?.TwitterID_2} />}
      {tercerBloque?.tercera_descripcion && (
        <p className="text-2xl py-4 noticepage_parrafo">
          <PortableText value={tercerBloque?.tercera_descripcion} />
        </p>
      )}
    </section>
  );
}

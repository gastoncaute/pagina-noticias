import { Video } from "@/types/componentes.types";
import { obtenerVideos } from "@/utils/obtenerVideos";
import { PortableText } from "@portabletext/react";
import React from "react";

export default async function Videos() {
  const videos = await obtenerVideos();
  const modifyVideoCode = (videoCode: string | undefined) => {
    return videoCode ? videoCode.replace("https://youtu.be/", "") : "";
  };

  return (
    <>
      {videos.map((video: Video) => (
        <section
          key={video.categoria}
          className="col-start-2 col-end-7 bg-gradient-to-b from-pageColor to-gradientColor m-auto p-8 border border-pageColor rounded-3xl masRecientes_main_section text-white"
        >
          <h1 className="flex justify-center text-4xl font-bold pb-4">
            <PortableText value={video.title} />
          </h1>
          <article>
            <iframe
              width="900"
              height="500"
              src={`https://www.youtube.com/embed/${modifyVideoCode(
                video.link_video
              )}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </article>
        </section>
      ))}
    </>
  );
}

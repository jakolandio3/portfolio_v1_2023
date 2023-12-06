"use client";
import Image from "next/image";
import clsx from "clsx";
import React, { useState } from "react";
import { AiOutlineExpandAlt } from "react-icons/ai";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import Modal from "./Modal";

function AppCard({
  gallery,
  onClickCard,
  appName,
  appBlurb,
  appPhoto = "/rishabh-malhotra-83ypHTv6J2M-unsplash.png",
  bannerImg,
  techStack,
  whiteBG,
}) {
  const newGalleryTab = gallery;
  console.log("gallerytab", newGalleryTab);
  const newSlide = newGalleryTab?.map((item) => ({
    src: item.imageUrl,
    width: 3840,
    height: 2560,
    srcSet: [
      { src: item.imageUrl, width: 320, height: 213 },
      { src: item.imageUrl, width: 640, height: 426 },
      { src: item.imageUrl, width: 1200, height: 800 },
      { src: item.imageUrl, width: 2048, height: 1365 },
      { src: item.imageUrl, width: 3840, height: 2560 },
    ],
  }));
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");
  const [showMore, setShowMore] = useState(false);
  return (
    <div
      style={{
        backgroundImage: "url(" + bannerImg + ")",
      }}
      className=" z-10 m-16 flex w-[50vw] flex-row rounded-3xl border border-solid
   border-gray-500  bg-gray-800 bg-cover px-5 pb-0.5 pt-5 opacity-70 transition-all duration-500 ease-in-out hover:opacity-100 hover:shadow-[0px_0px_150px_rgba(255,0,0,0.25),-50px_0px_150px_rgba(0,0,255,0.25),50px_0px_150px_rgba(255,255,0,0.25)] hover:blur-0"
    >
      <div
        className={clsx(
          "blur-xs mr-5 flex h-[60vh] w-[110%] flex-col justify-between overflow-hidden rounded-xl ",
          whiteBG === true && "bg-gray-800 bg-opacity-90 px-[2px]",
        )}
      >
        <>
          <div className=" mb-2 flex max-w-[70%] flex-row gap-2 rounded-md border-gray-500 p-1  shadow-inner shadow-gray-950">
            {techStack?.map((tech) => (
              <p
                className={clsx(
                  "rounded-full p-1",
                  tech === "JS"
                    ? "bg-yellow-300"
                    : tech === "CSS"
                      ? "bg-blue-300"
                      : tech === "HTML5"
                        ? "bg-red-500"
                        : "bg-green-500",
                )}
                key={tech}
              >
                {tech}
              </p>
            ))}
          </div>
          <h1
            className={clsx(
              "text-3xl font-bold",
              whiteBG === true ? "text-white opacity-70" : "text-white",
            )}
          >
            {appName}
          </h1>
        </>
        <p
          className={clsx(
            " pb-[10%] pt-2 ",
            whiteBG === true
              ? "rounded-xl bg-gray-900 bg-opacity-75 text-gray-400"
              : "text-white opacity-40",
          )}
        >
          {appBlurb}
        </p>
        {onClickCard && <div className=" w-[80%]">{onClickCard}</div>}
      </div>
      <div
        onClick={() => {
          setShowMore(!showMore);
        }}
        className=" min-w[30%] relative w-[100%] "
      >
        {appPhoto !== "" && (
          <>
            <Modal
              modalName={appName}
              modalButton={
                <Image
                  className=" rounded-t-xl"
                  fill={true}
                  style={{ objectFit: "cover" }}
                  sizes="full"
                  src={appPhoto}
                  alt="Phone"
                />
              }
              content={
                <Gallery
                  image={image}
                  setImage={setImage}
                  setOpen={setOpen}
                  galleryTab={newGalleryTab}
                />
              }
            ></Modal>{" "}
          </>
        )}
      </div>
      <Lightbox
        // on={{ view: ({ index: currentIndex }) => setImage(currentIndex) }}
        open={open}
        close={() => setOpen(false)}
        plugins={[Zoom]}
        showPrevNext={true}
        slides={newSlide}
        index={image}
      />
    </div>
  );
}

export default AppCard;

const Gallery = ({ setOpen, setImage, image, galleryTab }) => {
  return (
    <div className="z-50 w-full">
      <div className=" ">
        <div className="mx-2 flex h-full flex-col flex-wrap justify-center gap-x-3 gap-y-5 md:mx-0 md:grid md:grid-cols-3">
          {galleryTab?.map((x, index) => {
            return (
              <div key={index} className="relative h-1/4 md:h-[10vw]">
                <div className="group h-[100%]">
                  <div
                    className="h-full w-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url("${x.imageUrl}")` }}
                  ></div>
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-75"
                    onClick={() => {
                      setOpen(true);
                      setImage(index);
                    }}
                  >
                    <div className="absolute bottom-0 left-2 z-10 text-xl text-white">
                      <div>{x.type}</div>
                      <div>{x.title}</div>
                    </div>
                    <p className="text-white">
                      <AiOutlineExpandAlt className="h-16 w-16 cursor-pointer rounded-full border bg-neutral-500 text-5xl hover:bg-white hover:text-black" />
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

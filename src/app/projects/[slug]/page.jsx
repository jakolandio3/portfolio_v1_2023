"use client";
import Button from "@/app/components/Button";
import PageLayout from "@/app/components/PageLayout";
import List from "@/app/library/AppList";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

function Page({ params }) {
  const [open, setOpen] = useState(false);
  const [loadingImage, setLoadingImage] = useState(true);
  const [currentImage, setCurrentImage] = useState(1);
  let app = List.filter((app) => app.name === params.slug).at(0);

  const imageArray = app.gallery.map((image) => ({
    src: image.imageUrl,
    width: 3840,
    height: 2560,
    srcSet: [
      { src: image.imageUrl, width: 320, height: 213 },
      { src: image.imageUrl, width: 640, height: 426 },
      { src: image.imageUrl, width: 1200, height: 800 },
      { src: image.imageUrl, width: 2048, height: 1365 },
      { src: image.imageUrl, width: 3840, height: 2560 },
    ],
  }));

  return (
    <PageLayout
      extLinks={<AppExtLinks app={app} />}
      title={app.name}
      blurb={app.description}
    >
      <div className="grid-flow-rows grid gap-10 md:grid-cols-3 md:gap-5">
        {app.gallery.map((item, index) => (
          <div
            onClick={() => {
              setCurrentImage(index);
              setOpen(true);
            }}
            className="flex w-full items-center gap-12 rounded-lg border hover:cursor-pointer md:flex-col md:gap-0  md:border-none"
            key={item.title}
          >
            <h3 className="m-2 border-b-2 text-center text-xl font-semibold">
              {item.title}
            </h3>
            {loadingImage === true ? (
              <div className="relative h-full w-full">
                <div className=" absolute flex h-full w-full content-center items-center justify-center self-center bg-black">
                  <span className="loading loading-bars loading-lg"></span>
                </div>{" "}
                <Image
                  onLoad={() => {
                    setLoadingImage(false);
                  }}
                  className="self-center"
                  alt={item.title}
                  width={400}
                  height={600}
                  src={item.imageUrl}
                />{" "}
              </div>
            ) : (
              <Image
                className="self-center"
                alt={item.title}
                width={400}
                height={600}
                src={item.imageUrl}
              />
            )}
          </div>
        ))}
        <Lightbox
          // on={{ view: ({ index: currentIndex }) => setImage(currentIndex) }}
          open={open}
          close={() => setOpen(false)}
          plugins={[Zoom]}
          showPrevNext={true}
          slides={imageArray}
          index={currentImage}
        />
      </div>
    </PageLayout>
  );
}

export default Page;

function AppExtLinks({ app }) {
  return (
    <div className="mt-12 flex flex-col md:mt-0">
      {" "}
      <div className="flex flex-row items-center justify-between md:w-[80%] ">
        <div className=" m-1 flex  w-fit gap-12 rounded-xl border border-dashed p-2 md:gap-1 ">
          <Link
            target="_blank"
            href={app.gitHub}
            className="flex h-full w-full flex-col items-center justify-center text-center text-2xl text-white opacity-80 hover:opacity-100"
          >
            <SiGithub />
            <span className="hidden md:block"> Visit Repo </span>
          </Link>
          <Link
            target="_blank"
            href={app.website}
            className="flex h-full w-full justify-center text-center text-2xl text-white opacity-80 hover:opacity-100"
          >
            <span className="hidden md:block"> View Website</span>{" "}
            <FaExternalLinkAlt />
          </Link>
        </div>
        <span className=" text-lg font-extrabold">
          <Button scroll={false} to="/projects">
            &larr; Back to projects
          </Button>
        </span>
      </div>
    </div>
  );
}

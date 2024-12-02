'use client';
import Image from 'next/image';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

function Gallery({ items }: GalleryProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(1);

  return (
    <div className="grid-flow-rows grid gap-10 md:grid-cols-3 md:gap-5">
      {items.map((item, index) => (
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
          {loading === true ? (
            <div className="relative h-full w-full">
              <div className=" absolute flex h-full w-full content-center items-center justify-center self-center bg-black">
                <span className="loading loading-bars loading-lg"></span>
              </div>{' '}
              <Image
                onLoad={() => {
                  setLoading(false);
                }}
                className="self-center"
                alt={item.title}
                width={400}
                height={600}
                src={item.imageUrl}
              />{' '}
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
        open={open}
        close={() => setOpen(false)}
        plugins={[Zoom]}
        slides={items.map((item) => buildLightBoxSlide(item))}
        index={currentImage}
      />
    </div>
  );
}

function buildLightBoxSlide(image: GalleryItem) {
  return {
    src: image.imageUrl,
    width: 3840,
    height: 2560,
    srcSet: [
      { src: image.imageUrl, width: 320, height: 213 },
      { src: image.imageUrl, width: 640, height: 426 },
      { src: image.imageUrl, width: 1200, height: 800 },
      { src: image.imageUrl, width: 2048, height: 1365 },
      { src: image.imageUrl, width: 3840, height: 2560 }
    ]
  };
}

export default Gallery;

interface GalleryProps {
  items: GalleryItem[];
}

export interface GalleryItem {
  imageUrl: string;
  type: string;
  title: string;
}

import { HiAcademicCap } from "react-icons/hi2";
import Button from "./Button";
import Image from "next/image";

function AppCard() {
  return (
    <div
      className="flex max-w-[80vw] flex-row rounded-3xl border border-solid 
   border-gray-500 bg-gray-800 px-5 pb-0.5 pt-5 opacity-70 transition-all duration-500 ease-in-out hover:opacity-100 hover:shadow-[0px_0px_150px_rgba(255,0,0,0.25),-50px_0px_150px_rgba(0,0,255,0.25),50px_0px_150px_rgba(255,255,0,0.25)] hover:blur-0"
    >
      <div className="w-lg mr-5 h-[70vh]">
        <div className=" mb-2 max-w-fit rounded-md border-gray-500 bg-gray-400 p-1 shadow-inner shadow-gray-950">
          <HiAcademicCap />
        </div>
        <h1 className="text-3xl font-bold text-white">App-managment</h1>
        <p className=" pb-[150px] pt-2 text-white opacity-40">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias nisi
          corporis, voluptatum officiis voluptatibus animi dolore, beatae sint
          reprehenderit at enim nulla libero hic laudantium dignissimos
          architecto! Dolor possimus a aperiam inventore quidem obcaecati dolore
          quaerat repellat fuga velit, similique quae fugit maiores suscipit
          dolorum, porro fugiat, sunt laudantium pariatur!
        </p>
        <div className="relative bottom-3 mt-[40px] w-[40%]">
          <Button>Download App &rarr;</Button>
        </div>
      </div>
      <div className=" relative w-full min-w-[200px]">
        <Image
          className="-scale-x-100 rounded-t-xl"
          fill={true}
          objectFit="cover"
          Position="fixed"
          src="/rishabh-malhotra-83ypHTv6J2M-unsplash.png"
          alt="Phone"
        />
      </div>
    </div>
  );
}

export default AppCard;

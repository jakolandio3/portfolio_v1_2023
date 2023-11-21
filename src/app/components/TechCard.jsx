import { HiAcademicCap } from "react-icons/hi2";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

function TechCard({
  title = "Add title",
  blurb = "placeholder, add a blurb",
  image = "/rishabh-malhotra-83ypHTv6J2M-unsplash.png",
  link = "",
}) {
  return (
    <Link href={link}>
      <div
        className="flex max-h-[350px] min-h-fit min-w-fit max-w-[350px] flex-col rounded-3xl
			border border-solid border-gray-500 bg-gray-800 px-5 pb-0.5 pt-5 opacity-70 transition-all duration-500 ease-in-out hover:opacity-100 hover:shadow-[0px_0px_150px_rgba(255,0,0,0.25),-50px_0px_150px_rgba(0,0,255,0.25),50px_0px_150px_rgba(255,255,0,0.25)] hover:blur-0"
      >
        <div className=" relative m-2 h-[150px] w-[150px] justify-center self-center">
          <Image
            className="-scale-x-100 rounded-2xl "
            fill={true}
            objectFit="cover"
            Position="absolute"
            src={image}
            alt="Phone"
          />
        </div>
        <div className=" flex max-h-fit max-w-full flex-row content-center items-center justify-between text-center align-middle">
          <h1 className=" pb-5 pt-5 text-xs font-bold text-white">{title}</h1>

          <Button size={"sm"} className=" pb-10 pt-1 text-white opacity-40">
            {blurb}
          </Button>
        </div>
      </div>
    </Link>
  );
}

export default TechCard;

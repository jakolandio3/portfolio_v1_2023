import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

function TechCardSmall({
  title = "Add title",
  blurb = "placeholder, add a blurb",
  image = "/rishabh-malhotra-83ypHTv6J2M-unsplash.png",
  link = "",
}) {
  return (
    <Link href={link}>
      <div
        className="flex  flex-col rounded-3xl
			border border-dashed border-gray-500 bg-gray-900 px-1 pb-0.5 pt-5 opacity-70"
      >
        <div className=" relative m-2 h-[80px] w-[80px] justify-center self-center">
          <Image
            className="-scale-x-100 rounded-2xl "
            fill={true}
            objectFit="cover"
            Position="absolute"
            src={image}
            alt="Phone"
          />
        </div>
        <div className=" flex max-h-fit w-full justify-center text-center align-middle">
          <Button
            to="/techStack"
            size={"sm"}
            className=" w-full pb-10 pt-1 text-white opacity-40"
          >
            {blurb}
          </Button>
        </div>
      </div>
    </Link>
  );
}

export default TechCardSmall;

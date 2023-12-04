import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";

function LinksCard() {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl  bg-transparent px-5 pb-0.5 pt-10 text-center ">
      <div className=" mr-5 max-h-fit max-w-lg">
        <h1 className="pt-5 text-3xl font-bold text-white">
          Alternativley, Find me here:
        </h1>
        <p className=" pb-[70px] pt-2 text-white opacity-40">
          Checkout some of my socials
        </p>
        <div
          className="mb-[150px] rounded-full 
   border border-dashed border-gray-500"
        >
          <div className="relative flex h-full content-center items-center justify-center gap-8 self-center p-5 text-5xl">
            <Link href={"/"}>
              <HiOutlineMail />
            </Link>
            <Link href={"/"}>
              <SiGithub />
            </Link>

            <Link href={"/"}>
              <SiLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinksCard;

import Image from "next/image";
import Link from "next/link";

function SectionCard({
  title = "Add title",
  blurb = "placeholder, add a blurb",
  image = "",
  link = "/",
  children,
}) {
  return (
    <>
      <Link href={link}>
        <div
          className="] my-5 flex h-full w-full flex-col rounded-3xl border
        border-dashed border-gray-500 bg-transparent px-5 pb-0.5 pt-5 opacity-70 transition-all duration-500 ease-in-out hover:opacity-100 hover:shadow-[0px_0px_150px_rgba(255,0,0,0.25),-50px_0px_150px_rgba(0,0,255,0.25),50px_0px_150px_rgba(255,255,0,0.25)] hover:blur-0 "
        >
          <div className=" content-center justify-center text-center">
            <h1 className="pb-5 pt-5 text-3xl font-bold text-white">{title}</h1>
            <p className=" pb-5 pt-1 text-white opacity-40 md:pb-10">{blurb}</p>
          </div>

          <div className="relative flex h-[200px] justify-center overflow-hidden object-contain lg:h-[300px]">
            {children}
            {image !== "" && (
              <Image
                className="-scale-x-100 rounded-t-2xl "
                fill={true}
                sizes="full"
                style={{ objectFit: "cover" }}
                src={image}
                alt="Phone"
              />
            )}
          </div>
        </div>
      </Link>
    </>
  );
}

export default SectionCard;

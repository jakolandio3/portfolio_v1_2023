import Image from "next/image";

function TechCard({
  title = "Add title",
  blurb = "placeholder, add a blurb",
  image = "/rishabh-malhotra-83ypHTv6J2M-unsplash.png",
}) {
  return (
    <div
      className="flex max-h-[350px] max-w-[350px] flex-col rounded-3xl border border-solid
			border-gray-500 bg-gray-800 px-5 pb-0.5 pt-5 opacity-70 transition-all duration-500 ease-in-out hover:opacity-100 hover:shadow-[0px_0px_150px_rgba(255,0,0,0.25),-50px_0px_150px_rgba(0,0,255,0.25),50px_0px_150px_rgba(255,255,0,0.25)] hover:blur-0 md:min-h-[200px] md:min-w-[200px]"
    >
      <div className="relative m-2 flex h-[50px] w-[50px] justify-center md:h-[150px] md:w-[150px]">
        <Image
          className="rounded-2xl "
          fill={true}
          objectFit="cover"
          src={image}
          alt="Phone"
        />
      </div>
      <div className=" flex max-h-fit max-w-full flex-row content-center items-center justify-between text-center align-middle">
        <h1 className=" py-2 text-xs font-bold text-white">{title}</h1>

        <p className=" hidden py-2 text-white opacity-40 md:block">{blurb}</p>
      </div>
    </div>
  );
}

export default TechCard;

import { HiAcademicCap } from "react-icons/hi2";

import Image from "next/image";
import clsx from "clsx";

function AppCard({
  onClickCard,
  appName,
  appBlurb,
  appPhoto = "/rishabh-malhotra-83ypHTv6J2M-unsplash.png",
  bannerImg,
  techStack,
  whiteBG,
}) {
  return (
    <div
      style={{ "background-image": "url(" + bannerImg + ")" }}
      className=" m-16 flex w-[50vw] flex-row rounded-3xl border border-solid 
   border-gray-500  bg-gray-800 bg-cover px-5 pb-0.5 pt-5 opacity-70 transition-all duration-500 ease-in-out hover:opacity-100 hover:shadow-[0px_0px_150px_rgba(255,0,0,0.25),-50px_0px_150px_rgba(0,0,255,0.25),50px_0px_150px_rgba(255,255,0,0.25)] hover:blur-0"
    >
      <div
        className={clsx(
          "blur-xs mr-5 flex h-[60vh] w-[110%] flex-col justify-between overflow-hidden rounded-xl ",
          whiteBG === true && "bg-gray-800 bg-opacity-90 px-[2px]",
        )}
      >
        <>
          <div className=" mb-2 flex max-w-[70%] flex-row gap-2 rounded-md border-gray-500  p-1 shadow-inner shadow-gray-950">
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
      <div className=" min-w[30%] relative w-[100%] ">
        <Image
          className=" rounded-t-xl"
          fill={true}
          objectFit="cover"
          Position="fixed"
          src={appPhoto}
          alt="Phone"
        />
      </div>
    </div>
  );
}

export default AppCard;

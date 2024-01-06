import { FaExternalLinkAlt } from "react-icons/fa";
import AppCard from "../components/AppCard";
import Button from "../components/Button";
import NewProjectCard from "../components/NewProjectCard";
import Link from "next/link";
import List from "../library/AppList";
import { SiGithub } from "react-icons/si";

function page() {
  return (
    <div className="flex flex-col md:w-[80%]">
      <section
        id="title-card"
        className="mb-[80px] mt-[180px] border-b border-dashed border-gray-500 border-opacity-20 pb-8"
      >
        <div className="flex h-full flex-col justify-center justify-items-center text-left text-white">
          <h1 className="text-7xl font-bold">Projects</h1>

          <p className="mr-auto max-w-[80%] py-5 text-left opacity-40">
            Some of my previous projects
          </p>
        </div>
      </section>
      <section id="selected-work">
        <div className="flex flex-col gap-12">
          <div className="flex w-full flex-col items-center justify-between gap-5 lg:flex-row lg:gap-0">
            <h2 className=" font-bold text-white md:text-2xl lg:text-4xl">
              Get in contact to start a new project today
            </h2>
            <Button className="w-fit text-xs" to="/contact">
              Get started &rarr;
            </Button>
          </div>
          {List.map((app) => (
            <AppCard
              gallery={app.gallery}
              key={app.name}
              appName={app.name}
              appBlurb={app.description}
              appPhoto={app.photo}
              bannerImg={app.bannerImg}
              techStack={app.techStack}
              whiteBG={app.light}
              onClickCard={
                <div className="flex h-full flex-col justify-between gap-3">
                  <div className="grid grid-flow-row grid-cols-3 gap-1 text-xs">
                    {app.category.map((genre) => (
                      <p
                        key={genre}
                        className="w-[full] pb-3 italic text-white text-opacity-80"
                      >
                        {genre}
                      </p>
                    ))}
                  </div>
                  <div className="m-1 grid w-fit grid-flow-row grid-cols-3 gap-1 rounded-xl border p-2 ">
                    <Link
                      target="_blank"
                      href={app.gitHub}
                      className="flex h-full w-full justify-center text-center text-2xl text-white opacity-80 hover:opacity-100"
                    >
                      <SiGithub />
                    </Link>
                    <Link
                      target="_blank"
                      href={app.website}
                      className="flex h-full w-full justify-center text-center text-2xl text-white opacity-80 hover:opacity-100"
                    >
                      <FaExternalLinkAlt />
                    </Link>

                    <Link
                      href={`/projects/${app.name}`}
                      className="text-xl text-white opacity-80 hover:opacity-100 "
                    >
                      {"Gallery.."}
                    </Link>
                  </div>
                </div>
              }
            />
          ))}

          <NewProjectCard />
        </div>
      </section>
    </div>
  );
}

export default page;

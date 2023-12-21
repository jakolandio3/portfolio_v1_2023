import AppCard from "./components/AppCard";
import SectionCard from "./components/SectionCard";
import Button from "./components/Button";
import Link from "next/link";
import List from "./library/AppList";
import Image from "next/image";

import {
  SiCss3,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiVisualstudiocode,
  SiVite,
} from "react-icons/si";
import { FaCloudDownloadAlt, FaExternalLinkAlt } from "react-icons/fa";

function app() {
  const topApps = List.slice(0, 3);

  return (
    <main className="w-full">
      <section id="title-card" className="pb-8 md:mb-[15vh]">
        <div className="mr-auto flex h-[80vh] flex-col justify-center justify-items-center text-left text-primary-text-color md:ml-20">
          <h1
            id="name-header"
            className="text-7xl font-bold text-secondary-text-color md:pt-20"
          >
            Hi👋,
          </h1>
          <h1 className="pb-8 text-7xl font-bold md:pb-0">
            <span id="name-header" className="text-secondary-text-color">
              I'm{" "}
            </span>
            Jakob <span className="hidden md:block">Douglas</span>
          </h1>

          <p className="mr-auto hidden max-w-[80%] py-5 text-left italic sm:block">
            Im a Full-Stack Web developer specializing in creating web-based
            apps, <br /> and working with frameworks such as NextJs and React
          </p>

          <div className="flex flex-row gap-5">
            <Button to="/about"> About me </Button>
            <Button to="/contact"> Contact Me </Button>
            <Link
              className="flex rounded-lg border border-button-text bg-sun-color p-3 font-bold text-button-text shadow-inner hover:text-black hover:shadow-gray-600"
              download={"resume"}
              href="/resume/JakobResume_2023_Hospo.docX"
            >
              See my Resume {<FaCloudDownloadAlt />}
            </Link>
          </div>
        </div>
      </section>
      <section id="selected-work" className="w-[full] overflow-hidden">
        <div className="flex flex-col items-center justify-center gap-8">
          <h2 className="flex flex-col justify-around gap-5 pb-5 text-6xl font-bold text-primary-text-color md:w-[80%] md:flex-row md:gap-0">
            Selected Work{" "}
            <span className="text-center text-lg">
              <Button scroll={true} to="projects">
                View All..
              </Button>
            </span>
          </h2>
          {topApps.map((app) => (
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
                        className="w-[full] pb-3 italic text-primary-text-color text-opacity-80"
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
        </div>
      </section>
      <section
        id="title-card"
        className="my-[10vh] flex flex-col items-center gap-5 md:m-20"
      >
        <h2 className=" justify-center pb-[20px] text-6xl font-bold text-primary-text-color md:w-[80%]">
          Get to know me
        </h2>
        <div className="grid grid-flow-row gap-5 md:grid-cols-2">
          <SectionCard
            title="About Me"
            blurb="Who I am and what I do"
            link="about"
          >
            {
              <Image
                className=" invert"
                src={"/userIcon.svg"}
                alt="https://www.freepik.com/icon/profile_8459373"
                fill={true}
              />
            }
          </SectionCard>
          <SectionCard
            title="Projects"
            blurb="Projects, Components and proofs on concepts that im working on"
            link="projects"
          >
            {
              <Image
                className=" invert"
                src={"/projects.svg"}
                alt="https://www.freepik.com/icon/graphic-design_1448180"
                fill={true}
              />
            }
          </SectionCard>
          <SectionCard
            title="Tech Stack"
            blurb="My development toolkit"
            link="techStack"
          >
            {
              <div className=" grid grid-flow-row grid-cols-3 justify-items-center gap-8 overflow-hidden text-center text-4xl text-white md:mx-12 md:h-full md:grid-cols-4 md:items-center md:gap-1 md:py-10">
                <SiHtml5 />
                <SiCss3 />
                <SiJavascript />
                <SiNodedotjs />
                <SiReact />
                <SiVisualstudiocode />
                <SiVite />
                <SiNextdotjs />
              </div>
            }
          </SectionCard>
          <SectionCard
            title="Contact Me"
            blurb="Send me a message so we can work together 😀"
            link="contact"
          >
            {
              <Image
                className=" invert"
                src={"/envelope-plus_5070398.svg"}
                alt="https://www.freepik.com/icon/book_10089799#fromView=resource_detail&position=26"
                fill={true}
              />
            }
          </SectionCard>
        </div>
      </section>
      <section id="contact" className="md:m-20">
        <div className="flex flex-row justify-between">
          <div className="flex h-full flex-col justify-center justify-items-center text-left text-primary-text-color">
            <h1 className="pt-10 text-4xl font-bold text-primary-text-color">
              Lets work together
            </h1>

            <p className="mr-auto max-w-[50%] py-5 text-left opacity-40">
              Send me a message to get in contact and we can start working
              together.
            </p>
          </div>

          <div className=" min-w-fit self-center text-center md:flex md:min-w-[200px]">
            <Button to="/contact">&rarr; Get in touch</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default app;

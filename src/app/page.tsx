import AppCard from "./components/AppCard";
import SectionCard from "./components/SectionCard";
import Button from "./components/Button";
import Link from "next/link";
import { AppList } from "./library/AppList";
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
  const topApps = AppList.slice(0, 3);

  return (
    <main className="w-full flex-col justify-center px-5 md:flex">
      <section
        id="title-card"
        className="flex justify-center self-center pb-8 md:mb-[15vh] md:w-[80%]"
      >
        <div className="flex h-[80vh] flex-col justify-center justify-items-center text-left text-primary-text-color md:mr-auto md:w-[80%] ">
          <h1
            id="name-header"
            className="text-7xl font-bold text-secondary-text-color md:pt-20"
          >
            Hi👋,
          </h1>
          <h2 className="pb-3 text-7xl font-bold sm:pb-8 md:pb-0">
            <span id="name-header" className="text-secondary-text-color">
              I'm{" "}
            </span>
            Jakob <span className="hidden md:inline-block">Douglas</span>
          </h2>
          <p className="mr-auto max-w-[80%] py-5 text-left text-xs italic sm:hidden md:hidden">
            Full-Stack Software Engineer working with frameworks such as NextJs
            and React.
          </p>
          <p className="flex items-center gap-2 pb-3 text-xs opacity-80 md:pt-5">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-200 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-teal-400"></span>
            </span>{" "}
            Open to work in 2024
          </p>

          <p className="mr-auto hidden max-w-[80%] py-5 text-left italic sm:block">
            I'm a Full-Stack Software Engineer specializing in creating
            web-based apps, <br /> Working with frameworks such as NextJs and
            React{" "}
            <Link
              href="/about"
              className="text-center font-bold italic text-yellow-400"
            >
              {" "}
              ..Read more{" "}
            </Link>
          </p>

          <div className="flex gap-5 pt-10">
            <Button href="/contact" className="text-center">
              {" "}
              Contact Me{" "}
            </Button>
            <Link
              className="flex rounded-lg border border-button-text bg-sun-color p-3 font-bold text-button-text shadow-inner hover:text-black hover:shadow-gray-600"
              download={"resume"}
              href="/resume/JakobResumepdf_2024.pdf"
            >
              View my Resume
            </Link>
          </div>
        </div>
      </section>
      <section
        id="selected-work"
        className="flex w-full justify-center self-center md:w-[80%]"
      >
        <div className="flex w-full flex-col items-center justify-between gap-8">
          <h2 className="flex w-full flex-col justify-between gap-5 pb-5 text-6xl font-bold text-primary-text-color md:flex-row">
            <p>Selected Work</p>
            <span className="text-center text-lg">
              <Button scroll={true} href="projects">
                View All..
              </Button>
            </span>
          </h2>
          {topApps.map((app) => (
            <AppCard
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
                    {app.categories.map((category, idx) => (
                      <p
                        key={`${app.name}-${category}-${idx}`}
                        className="w-[full] pb-3 italic text-primary-text-color text-opacity-80"
                      >
                        {category}
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
        className="my-[10vh] flex flex-col items-center gap-8 self-center md:w-[80%] "
      >
        <h2 className="flex w-full  pb-[20px] text-left text-6xl font-bold text-primary-text-color md:w-[100%]">
          Get to know me
        </h2>
        <div className="grid w-[100%] grid-flow-row gap-5 md:grid-cols-2">
          <SectionCard
            title="About Me"
            blurb="Who I am and what I do"
            link="about"
          >
            {
              <Image
                className="object-contain invert"
                src={"/userIcon.svg"}
                alt="https://www.freepik.com/icon/profile_8459373"
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
              <div className=" grid grid-flow-row grid-cols-3 justify-items-center gap-8 overflow-hidden text-center text-2xl text-white md:h-full md:grid-cols-4 md:items-center md:gap-1  md:text-4xl lg:mx-12 lg:py-10">
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
        </div>
      </section>
      <section id="contact" className="flex self-center  md:w-[80%] ">
        <div className="flex flex-row justify-between md:w-[100%]">
          <div className="flex h-full flex-col justify-center justify-items-center text-left text-primary-text-color">
            <h1 className="text-4xl font-bold text-primary-text-color md:pt-10">
              Lets work together
            </h1>

            <p className="mr-auto hidden max-w-[50%] py-5 text-left opacity-40 md:block">
              Send me a message to get in contact and we can start working
              together.
            </p>
          </div>

          <div className=" min-w-fit self-center text-center md:flex md:min-w-[200px]">
            <Button href="/contact">Get in touch &rarr;</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default app;

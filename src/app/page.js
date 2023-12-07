import AppCard from "./components/AppCard";
import SectionCard from "./components/SectionCard";
import Button from "./components/Button";

import List from "./library/AppList";

import TechCardSmall from "./components/TechCardSmall";

function app() {
  const topApps = List.slice(0, 3);

  return (
    <main className="w-full">
      <section id="title-card" className="mb-[15vh] pb-8">
        <div className="text-primary-text-color ml-20 mr-auto flex h-[80vh] flex-col justify-center justify-items-center text-left">
          <h1
            id="name-header"
            className="text-secondary-text-color pt-20 text-7xl font-bold"
          >
            Hi👋,
          </h1>
          <h1 className="text-7xl font-bold">
            <span id="name-header" className="text-secondary-text-color">
              I'm{" "}
            </span>
            Jakob Douglas
          </h1>

          <p className="mr-auto max-w-[80%] py-5 text-left opacity-40">
            Im a student Full-Stack Web developer specializing in creating
            web-based apps, <br /> and working with frameworks such as NextJs
            and React
          </p>

          <div className="flex flex-row gap-5">
            <Button to="/about"> About me </Button>
            <Button to="/contact"> Contact Me </Button>
          </div>
        </div>
      </section>
      <section id="selected-work" className="w-[full] overflow-hidden">
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="w-[80%] pb-5 text-6xl font-bold text-white">
            Selected Work
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
                        className="w-[full] pb-3 italic text-white text-opacity-80"
                      >
                        {genre}
                      </p>
                    ))}
                  </div>
                  <div className="grid w-fit grid-flow-row grid-cols-2 gap-1">
                    <Button newTab={true} to={app.gitHub}>
                      {"Git Repo"}
                    </Button>
                    <Button newTab={true} to={app.website}>
                      {"View site"}
                    </Button>
                    <Button to="projects">{"More.."}</Button>
                  </div>
                </div>
              }
            />
          ))}
        </div>
      </section>
      <section
        id="title-card"
        className="m-20 my-[10vh] flex flex-col items-center gap-5"
      >
        <h2 className=" text-primary-text-color w-[80%] justify-center pb-[20px] text-6xl font-bold">
          Get to know me
        </h2>
        <div className="grid grid-flow-row grid-cols-2 gap-5">
          <SectionCard
            title="About Me"
            blurb="Who I am and what aI do 🍆"
            link="about"
          />
          <SectionCard
            title="Small Projects"
            blurb="Little Components and proofs on concepts that im working on"
            link="smallProjects"
            image="/nubelson-fernandes--Xqckh_XVU4-unsplash.png"
          />
          <SectionCard
            title="Tech Stack"
            blurb="My development toolkit 🤓💾"
            link="techStack"
          >
            {
              <div className=" mx-12 grid grid-flow-row grid-cols-4 gap-8 overflow-hidden">
                <TechCardSmall />
              </div>
            }
          </SectionCard>
          <SectionCard
            title="Bookshelf"
            blurb="My collection of inspirational titles 📖"
            link="bookshelf"
          />
        </div>
      </section>
      <section id="contact" className="m-20">
        <div className="flex flex-row justify-between">
          <div className="flex h-full flex-col justify-center justify-items-center text-left text-white">
            <h1 className="pt-10 text-4xl font-bold text-white">
              Lets work together
            </h1>

            <p className="mr-auto max-w-[50%] py-5 text-left opacity-40">
              Send me a message to get in contact and we can start working
              together.
            </p>
          </div>

          <div className="flex min-w-[200px] flex-nowrap self-center text-center">
            <Button to="/contact">&rarr; Get in touch</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default app;

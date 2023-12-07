import AppCard from "../components/AppCard";
import Button from "../components/Button";
import NewProjectCard from "../components/NewProjectCard";

import List from "../library/AppList";

function page() {
  return (
    <div>
      <section
        id="title-card"
        className="mt-[15vh] border-b border-dashed border-gray-500 border-opacity-20 pb-8"
      >
        <div className="ml-20 mr-auto flex h-full flex-col justify-center justify-items-center text-left text-white">
          <h1 className="text-7xl font-bold">Projects</h1>

          <p className="mr-auto max-w-[80%] py-5 text-left opacity-40">
            Dis is what I do BBy.
          </p>
        </div>
      </section>
      <section id="selected-work" className="m-20">
        <div className="flex flex-col gap-5">
          <div className="flex w-full flex-row justify-between">
            <h2 className=" text-4xl font-bold text-white">
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

          <NewProjectCard />
        </div>
      </section>
    </div>
  );
}

export default page;

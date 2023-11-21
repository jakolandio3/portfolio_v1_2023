import AppCard from "./components/AppCard";
import SectionCard from "./components/SectionCard";
import Button from "./components/Button";
import Link from "next/link";

function app() {
  return (
    <main className="">
      <section id="title-card" className="mb-[15vh] pb-8">
        <div className="ml-20 mr-auto flex h-[80vh] flex-col justify-center justify-items-center text-left text-white">
          <h1 className="pt-20 text-7xl font-bold text-gray-500">Hi👋,</h1>
          <h1 className="text-7xl font-bold">
            <span className="text-gray-500">I'm </span>Jakob Douglas
          </h1>

          <p className="mr-auto max-w-[80%] py-5 text-left opacity-40">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            labore non tenetur similique unde autem qui sapiente debitis
            adipisci magnam.
          </p>

          <div className="flex flex-row gap-5">
            <Button to="/resume"> See me Resume</Button>
            <Button> Touch me</Button>
          </div>
        </div>
      </section>
      <section id="selected-work" className="m-20">
        <div className="flex flex-col gap-5">
          <h2 className=" text-4xl font-bold text-white">Selected Work</h2>
          <AppCard />
          <AppCard />
          <AppCard />
          <AppCard />
          <AppCard />
        </div>
      </section>
      <section id="title-card" className="m-20 my-[10vh] flex flex-col gap-5">
        <h2 className=" pb-[20px] text-4xl font-bold text-white">
          Get to know me
        </h2>
        <div className="grid grid-flow-row grid-cols-2 gap-5">
          <SectionCard
            title="About Me"
            blurb="Who I am and what aI do 🍆"
            link="about"
          />
          <SectionCard
            title="Notebook"
            blurb="My thoughts, notes and reflections 🧘‍♀️"
            link="notebook"
          />
          <SectionCard
            title="Tech Stack"
            blurb="My development toolkit 🤓💾"
            link="techStack"
          />
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
              Let's work together
            </h1>

            <p className="mr-auto max-w-[50%] py-5 text-left opacity-40">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              labore non tenetur similique unde autem qui sapiente debitis
              adipisci magnam.
            </p>
          </div>

          <div className="flex min-w-[200px] flex-nowrap self-center text-center">
            <Button to="/resume">&rarr; Get in touch</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default app;

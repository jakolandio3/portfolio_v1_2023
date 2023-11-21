import AppCard from "../components/AppCard";
import NewProjectCard from "../components/NewProjectCard";
import SectionCard from "../components/SectionCard";

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
          <h2 className=" text-4xl font-bold text-white">Selected Work</h2>
          <AppCard />
          <AppCard />
          <AppCard />
          <AppCard />
          <AppCard />
          <NewProjectCard />
        </div>
      </section>
    </div>
  );
}

export default page;

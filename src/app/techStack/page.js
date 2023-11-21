import PageLayout from "../components/PageLayout";

import TechCard from "../components/TechCard";

function page() {
  return (
    <PageLayout
      title={"Tech Stack"}
      blurb={"The Development tools in my arsenal"}
    >
      <main className="flex w-full flex-col items-center gap-40">
        <section className="flex w-[80%] flex-col items-center gap-5">
          <h2 className="ml-[10%] w-full text-4xl">Dev & Design</h2>
          <div className="grid grid-flow-row grid-cols-3 gap-5">
            <TechCard title="TailwindCSS" blurb="CSS" />
            <TechCard title="TailwindCSS" blurb="CSS" />
            <TechCard title="TailwindCSS" blurb="CSS" />
            <TechCard title="TailwindCSS" blurb="CSS" />
            <TechCard title="TailwindCSS" blurb="CSS" />
            <TechCard title="TailwindCSS" blurb="CSS" />
            <TechCard title="TailwindCSS" blurb="CSS" />
            <TechCard title="TailwindCSS" blurb="CSS" />
            <TechCard title="TailwindCSS" blurb="CSS" />
          </div>
        </section>
        <section className="flex w-[80%] flex-col items-center gap-5">
          <h2 className="ml-[10%] w-full  text-4xl">Apps</h2>
          <div className="grid grid-flow-row grid-cols-3 gap-5">
            <TechCard title="TailwindCSS" blurb="CSS" />
            <TechCard title="TailwindCSS" blurb="CSS" />
            <TechCard title="TailwindCSS" blurb="CSS" />
            <TechCard title="TailwindCSS" blurb="CSS" />
            <TechCard title="TailwindCSS" blurb="CSS" />
            <TechCard title="TailwindCSS" blurb="CSS" />
            <TechCard title="TailwindCSS" blurb="CSS" />
            <TechCard title="TailwindCSS" blurb="CSS" />
            <TechCard title="TailwindCSS" blurb="CSS" />
          </div>
        </section>
      </main>
    </PageLayout>
  );
}

export default page;

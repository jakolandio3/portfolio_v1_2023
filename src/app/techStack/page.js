import PageLayout from "../components/PageLayout";

import TechCard from "../components/TechCard";

function page() {
  return (
    <PageLayout
      title={"Tech Stack"}
      blurb={"The Development tools in my arsenal"}
    >
      <main className="mx-auto flex w-full flex-col items-center gap-32 px-12 ">
        <section className="flex w-full flex-col items-center gap-8">
          <h2 className="w-full text-4xl">Programming Languages</h2>
          <div className="flex w-full grow flex-wrap justify-start gap-5">
            <TechCard
              className={""}
              title="TypeScript"
              blurb="Dev"
              image="/ts-logo-256-1.svg"
            />
            <TechCard
              className={""}
              title="JavaScript"
              blurb="Dev"
              image="icons8-javascript.svg"
            />

            <TechCard
              className={""}
              title="SassCSS"
              blurb="style"
              image="/icons8-sass.svg"
            />
            <TechCard
              className={""}
              title="CSS-3"
              blurb="Style"
              image="/icons8-css3.svg"
            />
            <TechCard
              className={""}
              title="HTML-5"
              blurb="HTML"
              image="/icons8-html5.svg"
            />

            <TechCard
              className={""}
              title="J-Query"
              blurb="Dev"
              image="/icons8-jquery.svg"
            />
          </div>
        </section>

        <section className="flex w-full flex-col items-center gap-8">
          <h2 className="w-full text-4xl">Libraries & Frameworks</h2>
          <div className="flex w-full flex-wrap justify-start gap-5">
            <TechCard title="Next-JS" blurb="Dev" image="/Nextjs.svg" />
            <TechCard
              title="React-JS"
              blurb="Dev"
              image="icons8-react-js.svg"
            />
            <TechCard title="Vue" blurb="Dev" image="/icons8-vue-js.svg" />
            <TechCard title="Node-JS" blurb="Dev" image="/icons8-node-js.svg" />
            <TechCard title="Vite" blurb="Dev" image="/icons8-vite.svg" />
            <TechCard
              title="TailwindCSS"
              blurb="Style"
              image="/icons8-tailwindcss.svg"
            />
            <TechCard title="React-Query" blurb="Dev" image="/image-19.svg" />
            <TechCard
              title="Styled Components"
              blurb="style"
              image="/styled.svg"
            />
            <TechCard title="J-Query" blurb="Dev" image="/icons8-jquery.svg" />
          </div>
        </section>
        <section className="flex w-full flex-col items-center gap-8">
          <h2 className="w-full text-4xl">Apps</h2>
          <div className="flex w-full flex-wrap justify-start gap-5">
            <TechCard
              title="Visual Studio Code"
              blurb="Dev"
              image="/icons8-visual-studio-code.svg"
            />
            <TechCard title="Figma" blurb="Design" image="/icons8-figma.svg" />
            <TechCard
              title="GitHub"
              blurb="Version Control"
              image="/github.svg"
            />
            <TechCard
              title="Supabase"
              blurb="Back-End"
              image="/supabase-logo-icon.svg"
            />
            <TechCard title="Vercel" blurb="Deployment" image="/vercel.svg" />
            <TechCard
              title="Netlify"
              blurb="Deployment"
              image="/netlify-icon-seeklogo.com.svg"
            />
            <TechCard
              title="Mongo DB"
              blurb="Back-End"
              image="/icons8-mongodb.svg"
            />
            <TechCard title="Postman" blurb="Back-End" image="/postman.png" />
            <TechCard
              title="Git"
              blurb="Version control"
              image="/icons8-git.svg"
            />
          </div>
        </section>
      </main>
    </PageLayout>
  );
}

export default page;

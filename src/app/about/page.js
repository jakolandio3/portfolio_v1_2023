import Button from "../components/Button";
import Image from "next/image";

function page() {
  return (
    <div className="w-3/4">
      <section
        id="title-card"
        className="mt-[15vh] border-b border-dashed border-gray-500 border-opacity-20 pb-8"
      >
        <div className="max-w-l ml-20 mr-auto flex h-full flex-col justify-center justify-items-center text-left text-white">
          <h1 className="text-7xl font-bold">A little bit about myself</h1>

          <p className="mr-auto max-w-[80%] py-5 text-left opacity-40">
            Who I am and what I do.
          </p>
        </div>
      </section>
      <section className="max-w-l ml-20 mr-auto mt-[20px] flex h-full flex-row justify-between justify-items-center text-left text-white">
        <main className="w-1/2">
          <div className="pb-3">
            <h2 className="text-sm font-medium opacity-40">Who I am</h2>
            <p className="text-sm font-thin opacity-90">
              My name is Jakob Douglas, I'm 28 years old from Adelaide, South
              Australia and I enjoy learning how things work and then creating
              amazing things with this knowledge
            </p>
          </div>
          <div className="pb-3">
            <h2 className="text-sm font-medium opacity-40">What I do</h2>
            <p className="text-sm font-thin opacity-90">
              Currently I work towards bettering my knowledge in the field of
              software engineering and building projects, working on self
              development skills and gaining new information within the
              industry. I create projects and test my knowledge and design
              process.
            </p>
          </div>
          <div className="pb-10">
            <h2 className="text-sm font-medium opacity-40">What I did</h2>
            <p className="text-sm font-thin opacity-90">
              I have come from a varied background, from Hospitality and client
              management, dealing with a variety of teams and liaising with
              multiple organizations on and off sites to come together for a
              specific goal things such as project management and team
              development are not foreign to me. I have also had a vast history
              in travel and tourism, building and contracted work. This Mixture
              of backgrounds and workplaces has driven me to find new things and
              be the best I can at them, which has now led me to the software
              industry in which I am thoroughly enjoying and look forward to
              elevating my skills and knowledge even further in.
            </p>
          </div>
          <div className="pb-10">
            <p className="text-sm font-thin opacity-90">
              I look forward to the future of this field and working with some
              amazing people
            </p>
          </div>
          <div>
            <p className="text-sm font-thin opacity-90">-sincerely</p>
          </div>
        </main>
        <aside className="mx-5 mt-3 flex w-1/2 flex-col gap-20">
          <div className=" flex h-1/2 w-1/2 items-center justify-center self-center rounded-xl border border-gray-500 border-opacity-20">
            <div className=" relative h-full w-full">
              <Image
                className="invert"
                src={"/userIcon.svg"}
                alt="https://www.freepik.com/icon/profile_8459373"
                fill
                objectFit="contain"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Button to="/contact">&rarr; Get in touch</Button>
          </div>
        </aside>
      </section>
      <section className=" justify-left ml-[30vw] mt-5 flex skew-x-12 text-3xl text-white opacity-70">
        <div>
          <h1 className=" -rotate-[15deg] skew-x-[-40deg] font-thin italic">
            Jakob .D
          </h1>
        </div>
      </section>
    </div>
  );
}

export default page;

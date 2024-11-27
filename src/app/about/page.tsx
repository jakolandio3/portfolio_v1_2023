import Button from "../components/Button";

function page() {
  return (
    <div className="px-5 md:w-[80%]">
      <section
        id="title-card"
        className="mt-[180px] border-b border-dashed border-gray-500 border-opacity-20 pb-8 md:mb-[80px]"
      >
        <div className=" mr-auto flex h-full flex-col justify-center justify-items-center text-left text-white ">
          <h1 className="text-7xl font-bold">A little bit about myself</h1>

          <p className="py-5 text-left opacity-40">Who I am and what I do.</p>
        </div>
      </section>
      <section className=" mr-auto  flex h-full flex-col justify-items-center gap-10 text-left text-white  md:flex-row">
        <main className="md:w-3/4">
          <div className="pb-3">
            <h2 className="text-lg font-medium opacity-40">Who I am</h2>
            <p className="text-md font-thin opacity-90">
              My name is Jakob Douglas, I'm 28 years old from Adelaide, South
              Australia and I enjoy learning how things work and then creating
              amazing things with this knowledge.
            </p>
          </div>
          <div className="pb-3">
            <h2 className="text-lg font-medium opacity-40">What I do</h2>
            <p className="text-md font-thin opacity-90">
              Currently I work towards bettering my knowledge in the field of
              software engineering and building projects, working on self
              development skills and gaining new information within the
              industry. I create projects and test my knowledge and design
              process.
            </p>
          </div>
          <div className="pb-10">
            <h2 className="text-lg font-medium opacity-40">What I did</h2>
            <p className="text-md font-thin opacity-90">
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
            <p className="text-md font-thin opacity-90">
              I look forward to the future of this field and working with some
              amazing people.
            </p>
          </div>
          <div>
            <p className="text-lg font-thin opacity-90">-Thankyou</p>
          </div>
        </main>
        <aside className="flex flex-col gap-20 p-5">
          <div className="flex items-center justify-center md:h-full">
            <Button href="/contact">Get in touch &rarr;</Button>
          </div>
        </aside>
      </section>
      <section className=" justify-left ml-[30px] mt-5 flex skew-x-12 text-3xl text-white opacity-70">
        <div>
          <h1 className="hidden -rotate-[15deg] skew-x-[-40deg] font-thin italic md:flex">
            Jakob .D
          </h1>
        </div>
      </section>
    </div>
  );
}

export default page;

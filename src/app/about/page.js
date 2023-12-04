import Button from "../components/Button";

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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
              officiis corrupti est tenetur aut nisi porro ea odio ducimus
              maxime!
            </p>
          </div>
          <div className="pb-3">
            <h2 className="text-sm font-medium opacity-40">What I do</h2>
            <p className="text-sm font-thin opacity-90">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, enim ad nisi facilis rerum eveniet eius ipsam, ratione
              ex dicta ut itaque obcaecati voluptate quae impedit possimus
              provident vero eligendi soluta nobis magni pariatur. Neque quia
              asperiores est at, nisi tenetur reiciendis doloribus fuga delectus
              quibusdam quis tempora perferendis voluptatem voluptate omnis,
              architecto ratione sit dolorem tempore ipsa distinctio ut iste
              expedita nemo. Illo commodi itaque, quod totam molestias aut
              facere quae aperiam voluptatum veritatis sit obcaecati similique
              nam beatae accusamus reiciendis vel laboriosam consequuntur
              tempora ipsam fugiat. Neque maxime voluptas cupiditate tenetur
              possimus voluptate distinctio magni ullam voluptatum libero?
            </p>
          </div>
          <div className="pb-10">
            <h2 className="text-sm font-medium opacity-40">What I did</h2>
            <p className="text-sm font-thin opacity-90">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              illo unde vel harum est deleniti libero, quia iure, temporibus,
              voluptatibus necessitatibus deserunt aliquam delectus. Nesciunt
              quia quam iste itaque animi ut corrupti deleniti recusandae nam
              voluptatem minus assumenda porro sed saepe dicta in, quos dolorem
              doloribus voluptates! Natus, laboriosam in?
            </p>
          </div>
          <div className="pb-10">
            <p className="text-sm font-thin opacity-90">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              eaque doloremque voluptatibus
            </p>
          </div>
          <div>
            <p className="text-sm font-thin opacity-90">
              Lorem ipsum dolor sit
            </p>
          </div>
        </main>
        <aside className="mx-5 mt-3 flex w-1/2 flex-col gap-20">
          <div className="flex h-1/2 w-1/2 items-center justify-center self-center rounded-xl  border border-gray-500 border-opacity-20">
            <img src="" alt="nope" />
          </div>
          <div className="flex items-center justify-center">
            <Button to="/contact">&rarr; Get in touch</Button>
          </div>
        </aside>
      </section>
      <section className=" justify-left ml-[30vw] mt-5 flex skew-x-12 text-3xl text-white opacity-70">
        <div>
          <h1 className=" -rotate-[15deg] skew-x-[-40deg] font-thin italic">
            Jacking Off
          </h1>
        </div>
      </section>
    </div>
  );
}

export default page;

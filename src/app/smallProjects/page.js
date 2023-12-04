import Image from "next/image";
import Button from "../components/Button";
import PageLayout from "../components/PageLayout";

function page() {
  return (
    <PageLayout
      title={"Small-Projects"}
      blurb={"Some small components and proofs on concept"}
    >
      <div className="mx-20 flex w-full flex-col">
        <Notes title="Dev" image={"/altumcode-dMUt0X3f59Q-unsplash.png"} />
        <Notes
          title="Design"
          image={"/nubelson-fernandes--Xqckh_XVU4-unsplash.png"}
        />
      </div>
    </PageLayout>
  );
}

export default page;

function Notes({
  title = "add a title",
  image,
  amount,
  blurb = "add a brief description",
  imageTitle,
  date,
  length,
}) {
  return (
    <div className="flex w-full justify-center">
      <div
        className="my-5 flex max-w-4xl flex-grow flex-row justify-between rounded-3xl border border-dashed border-gray-500 
      bg-transparent p-10 text-left text-white text-opacity-70 opacity-70 transition-all duration-500 ease-in-out hover:opacity-100 hover:shadow-[0px_0px_150px_rgba(255,0,0,0.25),-50px_0px_150px_rgba(0,0,255,0.25),50px_0px_150px_rgba(255,255,0,0.25)]"
      >
        <div className=" flex flex-col gap-5">
          <h1 className="text-2xl capitalize">{title}</h1>
          <div className="relative flex h-[250px] w-[250px] items-center justify-center self-center  rounded-xl border border-gray-500 border-opacity-20">
            <Image
              className="rounded-xl "
              objectFit="cover"
              fill={true}
              src={image}
              alt="nope"
              objectPosition="fixed"
            />

            <div className="absolute bottom-0 z-10 h-fit w-full p-2 text-left hover:text-opacity-100">
              <h2>{imageTitle ? imageTitle : "Add An Image title"}</h2>
              <p className="text-xs italic">
                {date ? date : "no date"} -{length ? length : "0"} min read
              </p>
            </div>
          </div>
        </div>
        <aside className="flex flex-col justify-between gap-3">
          <div>
            <h2 className="mb-5">
              {amount ? amount : "0"} {amount > 0 ? "Notes" : "Note"}
            </h2>
            <p className="text-xs">{blurb}</p>
          </div>
          <div className="flex flex-row gap-4">
            <input
              className="rounded-xl border bg-transparent p-2"
              type="text"
            />{" "}
            <Button>Add a Note</Button>
          </div>
        </aside>
      </div>
    </div>
  );
}

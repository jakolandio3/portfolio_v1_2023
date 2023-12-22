function PageLayout({ children, title, blurb, extLinks }) {
  return (
    <div className="md:w-[80%]">
      <section
        id="title-card"
        className="mt-[180px] w-full flex-col border-b border-dashed border-gray-500 border-opacity-20 bg-transparent pb-8 text-left text-white"
      >
        <div className=" flex h-full flex-col text-left text-white ">
          <h1 className="flex flex-col gap-5 text-7xl font-bold">
            {title} <span>{extLinks}</span>
          </h1>

          <p className="max-w-[80%] py-5 text-left opacity-40">{blurb}</p>
        </div>
      </section>
      <section className=" flex w-full items-center justify-center overflow-hidden py-[80px] text-white">
        {children}
      </section>
    </div>
  );
}

export default PageLayout;

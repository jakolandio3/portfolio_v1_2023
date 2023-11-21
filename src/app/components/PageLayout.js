function PageLayout({ children, title, blurb }) {
  return (
    <div className="w-full">
      <section
        id="title-card"
        className="mr-auto mt-[15vh] w-full flex-col border-b border-dashed border-gray-500 border-opacity-20 bg-transparent pb-8 text-left text-white"
      >
        <div className=" ml-32 flex h-full flex-col text-left text-white">
          <h1 className="text-7xl font-bold">{title}</h1>

          <p className="max-w-[80%] py-5 text-left opacity-40">{blurb}</p>
        </div>
      </section>
      <section className=" flex w-full items-center justify-center overflow-hidden py-32 text-white text-opacity-70">
        {children}
      </section>
    </div>
  );
}

export default PageLayout;

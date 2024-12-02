import ContactForm from '../components/ContactForm';
import LinksCard from '../components/LinksCard';

import PageLayout from '../components/PageLayout';

function page() {
  return (
    <div className="w-full">
      <section
        id="title-card"
        className="mt-[180px] w-full flex-col border-b border-dashed border-gray-500 border-opacity-20 bg-transparent px-5 pb-8 text-left text-white md:mx-auto md:w-[80%]"
      >
        <div className=" flex h-full flex-col text-left text-white ">
          <h1 className="flex flex-col gap-5 text-7xl font-bold">
            Get in touch
            <span></span>
          </h1>

          <p className="max-w-[80%] py-5 text-left opacity-40">
            Reach out so we can get started on something great
          </p>
        </div>
      </section>
      <section className=" flex w-full items-center justify-center overflow-hidden px-5 py-[80px] text-white">
        <div className="flex w-full flex-col items-center justify-center gap-8">
          <ContactForm />
          <LinksCard />
        </div>
      </section>
    </div>
  );
}

export default page;

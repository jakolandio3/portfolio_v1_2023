import ContactForm from "../components/ContactForm";
import LinksCard from "../components/LinksCard";

import PageLayout from "../components/PageLayout";

function page() {
  return (
    <PageLayout
      title={"Get in touch"}
      blurb={"Reach out so we can get started on something great"}
    >
      <div className="flex w-full flex-col items-center justify-center gap-8">
        <ContactForm />
        <LinksCard />
      </div>
    </PageLayout>
  );
}

export default page;

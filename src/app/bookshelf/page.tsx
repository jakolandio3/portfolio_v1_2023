import PageLayout from '../components/PageLayout';

function page() {
  return (
    <PageLayout
      title={'Bookshelf'}
      blurb={
        'A collecton of pieces that have been both enjopyable and inspirational'
      }
    >
      <div className="mx-10 grid w-[80%] grid-flow-row grid-cols-4 items-center justify-center gap-7 text-center">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
    </PageLayout>
  );
}

export default page;

function Book() {
  return (
    <div className=" flex h-[330px] max-w-[215px] justify-center self-center py-3">
      <img
        className="cover h-[full] w-[full] rounded-lg border border-dashed border-opacity-50 transition-all duration-500 ease-in-out hover:shadow-[0px_0px_150px_rgba(255,0,0,0.25),-50px_0px_150px_rgba(0,0,255,0.25),50px_0px_150px_rgba(255,255,0,0.25)] hover:blur-0"
        src="rishabh-malhotra-83ypHTv6J2M-unsplash.png"
      ></img>
    </div>
  );
}

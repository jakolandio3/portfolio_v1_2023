import { HiAcademicCap, HiOutlineStar, HiStar } from 'react-icons/hi2';
import Button from './Button';

function NewProjectCard() {
  return (
    <div
      className="flex flex-col items-center justify-center rounded-3xl border 
   border-dashed border-gray-500 bg-transparent px-5 pb-0.5 pt-5 text-center opacity-70 transition-all duration-500 ease-in-out hover:opacity-100 hover:shadow-[0px_0px_150px_rgba(255,0,0,0.25),-50px_0px_150px_rgba(0,0,255,0.25),50px_0px_150px_rgba(255,255,0,0.25)] hover:blur-0"
    >
      <div className=" mr-5 flex h-full w-full flex-col items-center justify-center">
        <div className="mb-4 mt-10 flex items-center justify-center bg-transparent text-6xl text-white">
          <HiOutlineStar />
        </div>
        <h1 className="text-3xl font-bold text-white">
          Your Project Goes Here
        </h1>
        <p className=" pb-[70px] pt-2 text-white opacity-40">
          Let&apos;s turn your idea into a virtual reality
        </p>
        <div className="mb-[100px] w-[50%]">
          <Button href="/contact">Get in touch &rarr;</Button>
        </div>
      </div>
    </div>
  );
}

export default NewProjectCard;

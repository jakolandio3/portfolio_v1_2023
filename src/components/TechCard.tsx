import clsx from 'clsx';
import Image from 'next/image';

function TechCard({
  title = 'Add title',
  blurb = 'placeholder, add a blurb',
  image = '/rishabh-malhotra-83ypHTv6J2M-unsplash.png',
  className
}: TechCardProps) {
  return (
    <div
      className={clsx(
        'min-w-40 flex max-w-full basis-full flex-col items-center justify-center gap-2 rounded-3xl border border-solid border-gray-500 bg-gray-800 px-2 py-6 opacity-70 transition-all duration-500 ease-in-out hover:opacity-100 hover:shadow-[0px_0px_150px_rgba(255,0,0,0.25),-50px_0px_150px_rgba(0,0,255,0.25),50px_0px_150px_rgba(255,255,0,0.25)] hover:blur-0 md:max-w-[175px]',
        className ? className : ''
      )}
    >
      <div className="relative flex h-20 w-20 justify-center">
        <Image
          className="rounded-2xl "
          fill={true}
          objectFit="cover"
          src={image}
          alt="Phone"
        />
      </div>
      <div className=" flex max-h-fit max-w-full flex-col content-center items-center justify-between text-center">
        <p className=" text font-medium text-white">{title}</p>
      </div>
    </div>
  );
}

interface TechCardProps {
  title: string;
  blurb: string;
  image: string;
  className?: string;
}

export default TechCard;

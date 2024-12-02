import Image from 'next/image';

import Button from './Button';

function TechCardSmall({
  blurb = 'placeholder, add a blurb',
  image = '/rishabh-malhotra-83ypHTv6J2M-unsplash.png'
}) {
  return (
    <div
      className="flex  flex-col rounded-3xl
			border border-dashed border-gray-500 bg-gray-900 px-1 pb-0.5 pt-5 opacity-70"
    >
      <div className=" relative m-2 h-[80px] w-[80px] justify-center self-center">
        <Image
          className="-scale-x-100 rounded-2xl "
          fill={true}
          sizes="full"
          style={{ objectFit: 'cover' }}
          src={image}
          alt="Phone"
        />
      </div>
      <div className=" flex max-h-fit w-full justify-center text-center align-middle text-white">
        {blurb}
      </div>
    </div>
  );
}

export default TechCardSmall;

import Image from 'next/image';
import clsx from 'clsx';

function AppCard({
  onClickCard,
  appName,
  appBlurb,
  appPhoto = '/rishabh-malhotra-83ypHTv6J2M-unsplash.png',
  bannerImg,
  techStack,
  whiteBG
}: AppCardProps) {
  return (
    <div
      style={{
        backgroundImage: 'url(' + bannerImg + ')'
      }}
      className=" z-10 flex w-full flex-row rounded-3xl border border-solid border-gray-500
   bg-gray-800   bg-cover p-2 opacity-70 transition-all duration-500 ease-in-out hover:opacity-100 hover:shadow-[0px_0px_150px_rgba(255,0,0,0.25),-50px_0px_150px_rgba(0,0,255,0.25),50px_0px_150px_rgba(255,255,0,0.25)] hover:blur-0"
    >
      <div
        className={clsx(
          'blur-xs flex w-[100%] flex-col  items-center self-center overflow-hidden rounded-xl p-2 md:h-[100%] md:justify-between md:gap-0 ',
          whiteBG === true && 'bg-black bg-opacity-70 '
        )}
      >
        <>
          <div className="mb-2 hidden max-w-[70%] flex-row gap-2 rounded-md border-gray-500 p-1 shadow-inner  shadow-gray-950 md:flex">
            {techStack?.map((tech) => (
              <p
                className={clsx(
                  'rounded-full p-1',
                  tech === 'JS'
                    ? 'bg-yellow-300'
                    : tech === 'CSS'
                      ? 'bg-blue-300'
                      : tech === 'HTML5'
                        ? 'bg-red-500'
                        : tech === 'NODEJS'
                          ? 'bg-green-500'
                          : tech === 'React'
                            ? 'bg-blue-500'
                            : tech === 'Redux'
                              ? 'bg-purple-500'
                              : tech === 'Vite'
                                ? 'bg-yellow-300'
                                : tech === 'tailwind'
                                  ? 'bg-blue-900'
                                  : tech === 'Json-Server'
                                    ? 'bg-orange-500'
                                    : tech === 'WebPack'
                                      ? 'bg-red-900'
                                      : tech === 'CSS-Modules'
                                        ? 'bg-red-500'
                                        : ''
                )}
                key={tech}
              >
                {/* {tech} */}
              </p>
            ))}
          </div>
          <h1
            className={clsx(
              'text-3xl font-bold',
              whiteBG === true ? 'text-white opacity-70' : 'text-white'
            )}
          >
            {appName}
          </h1>
        </>
        <p
          className={clsx(
            ' hidden pb-[10%] pt-2 md:block ',
            whiteBG === true
              ? 'rounded-xl bg-gray-900 bg-opacity-75 text-gray-400'
              : 'text-white opacity-40'
          )}
        >
          {appBlurb}
        </p>
        {onClickCard && <div className=" w-[80%]">{onClickCard}</div>}
      </div>
      <div className="min-w[30%] relative hidden w-[100%] md:block ">
        {appPhoto !== '' && (
          <Image
            className=" rounded-t-xl"
            fill={true}
            style={{ objectFit: 'cover' }}
            sizes="full"
            src={appPhoto}
            alt="Phone"
          />
        )}
      </div>
    </div>
  );
}

interface AppCardProps {
  onClickCard?: React.ReactNode;
  appName: string;
  appBlurb: string;
  appPhoto?: string;
  bannerImg: string;
  techStack: string[];
  whiteBG?: boolean;
}

export default AppCard;

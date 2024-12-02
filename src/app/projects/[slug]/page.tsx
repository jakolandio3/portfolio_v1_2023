import Button from '@/app/components/Button';
import Gallery from '@/app/components/Gallery';
import PageLayout from '@/app/components/PageLayout';
import { AppList, AppView } from '@/app/library/AppList';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';
import 'yet-another-react-lightbox/styles.css';

async function fetchAppData(name: string) {
  const app = AppList.find((app) => app.name === name);
  return app;
}

async function Page({ params }: { params: { slug: string } }) {
  const app = await fetchAppData(params.slug);

  if (!app) {
    notFound();
  }

  return (
    <PageLayout
      extLinks={<AppExtLinks app={app} />}
      title={app.name}
      blurb={app.description}
    >
      <Gallery items={app.images} />
    </PageLayout>
  );
}

export default Page;

function AppExtLinks({ app }: { app: AppView }) {
  return (
    <div className="mt-12 flex flex-col md:mt-0">
      {' '}
      <div className="flex flex-row items-center justify-between md:w-[80%] ">
        <div className=" m-1 flex  w-fit gap-12 rounded-xl border border-dashed p-2 md:gap-1 ">
          <Link
            target="_blank"
            href={app.gitHub}
            className="flex h-full w-full flex-col items-center justify-center text-center text-2xl text-white opacity-80 hover:opacity-100"
          >
            <SiGithub />
            <span className="hidden md:block"> Visit Repo </span>
          </Link>
          <Link
            target="_blank"
            href={app.website}
            className="flex h-full w-full justify-center text-center text-2xl text-white opacity-80 hover:opacity-100"
          >
            <span className="hidden md:block"> View Website</span>{' '}
            <FaExternalLinkAlt />
          </Link>
        </div>
        <span className=" text-lg font-extrabold">
          <Button scroll={false} href="/projects">
            &larr; Back to projects
          </Button>
        </span>
      </div>
    </div>
  );
}

"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

function NavbarLinks() {
  const searchParams = useSearchParams();
  let more = searchParams.get("More");
  console.log(more);
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex flex-auto justify-between justify-items-center gap-4 px-2 align-middle">
      <Link href={"/"}>Home</Link>
      <Link href={"projects"}>Work</Link>
      <Link href={"contact"}>Contact</Link>
      <Link
        onClick={() => setShowMore(showMore === "true" ? "false" : "true")}
        href={{
          pathname: "",
          query: {
            More: showMore,
          },
        }}
      >
        More &darr;
      </Link>
      {more === "true" && (
        <div className="absolute left-[25vw] top-[10vh] flex flex-col justify-start rounded-xl border-4 bg-black bg-opacity-80  p-8 text-left">
          <Link className="border-b" href={"projects"}>
            Projects
          </Link>
          <Link className="border-b" href={"bookshelf"}>
            Bookshelf
          </Link>
          <Link className="border-b" href={"techStack"}>
            Tech Stack
          </Link>
          <Link className="border-b" href={"/"}>
            This Repo
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavbarLinks;

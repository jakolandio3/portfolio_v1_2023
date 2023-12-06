"use client";
import { computeHeadingLevel } from "@testing-library/react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState } from "react";
function NavbarLinks() {
  const [showMore, setShowMore] = useState("false");
  const pathName = usePathname();
  return (
    <div className="flex flex-auto justify-between justify-items-center gap-4 px-2 align-middle">
      <Link
        className={clsx(
          "hover:border-b-2",
          pathName === "/" ? "text-red-600" : "",
        )}
        href={"/"}
      >
        Home
      </Link>
      <Link
        className={clsx(
          "hover:border-b-2",
          pathName === "/projects" && "text-red-600",
        )}
        href={"projects"}
      >
        Work
      </Link>
      <Link
        className={clsx(
          "hover:border-b-2",
          pathName === "/about" && "text-red-600",
        )}
        href={"about"}
      >
        About
      </Link>
      <Link
        className={clsx(
          "hover:border-b-2",
          pathName === "/contact" && "text-red-600",
        )}
        href={"contact"}
      >
        Contact
      </Link>
      <Link
        className=" hover:border-b-2"
        onClick={() => setShowMore(showMore === "true" ? "false" : "true")}
        href={{
          pathname: "",
          query: {
            More: showMore,
          },
        }}
      >
        {showMore === "true" ? "Show Less 🔺" : "Show More 🔻"}
      </Link>
      {showMore === "true" && (
        <div className="absolute left-[25vw] top-[10vh] flex flex-col justify-start rounded-xl border-4 bg-black bg-opacity-80  p-8 text-left">
          <Link
            className="border-b border-dashed opacity-80 hover:border-solid hover:opacity-100"
            href={"projects"}
          >
            Projects
          </Link>
          <Link
            className="border-b border-dashed opacity-80 hover:border-solid hover:opacity-100"
            href={"bookshelf"}
          >
            Bookshelf
          </Link>
          <Link
            className="border-b border-dashed opacity-80 hover:border-solid hover:opacity-100"
            href={"techStack"}
          >
            Tech Stack
          </Link>
          <Link
            className="border-b border-dashed opacity-80 hover:border-solid hover:opacity-100"
            target="_blank"
            href={"https://github.com/jakolandio3/portfolio_v1_2023"}
          >
            This Repo
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavbarLinks;

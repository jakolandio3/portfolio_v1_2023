"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState } from "react";
import { AiOutlineExpandAlt } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
function NavbarLinks() {
  const [showMore, setShowMore] = useState("false");
  const pathName = usePathname();
  return (
    <div className="flex flex-auto justify-between justify-items-center gap-4 px-2 align-middle">
      <Link
        className={clsx(
          "hover:border-b-2",
          pathName === "/"
            ? "font-extrabold text-nav-text-color hover:border-b-0"
            : "",
        )}
        href={"/"}
      >
        Home
      </Link>
      <Link
        className={clsx(
          "hover:border-b-2",
          pathName === "/projects" &&
            "font-extrabold text-nav-text-color hover:border-b-0",
        )}
        href={"/projects"}
      >
        Work
      </Link>
      <Link
        className={clsx(
          "hover:border-b-2",
          pathName === "/about" &&
            "font-extrabold text-nav-text-color hover:border-b-0",
        )}
        href={"/about"}
      >
        About
      </Link>
      <Link
        className={clsx(
          "hover:border-b-2",
          pathName === "/contact" &&
            "font-extrabold text-nav-text-color hover:border-b-0",
        )}
        href={"/contact"}
      >
        Contact
      </Link>

      <Link
        className={clsx(
          "hover:border-b-2",
          pathName === "/techStack" &&
            "font-extrabold text-nav-text-color hover:border-b-0",
        )}
        href={"/techStack"}
      >
        Tech Stack
      </Link>
      <Link
        className="hover:border-b-2"
        target="_blank"
        href={"https://github.com/jakolandio3/portfolio_v1_2023"}
      >
        <div className="flex flex-row gap-1">
          This Repo{" "}
          <span className="text-xs">
            <FaExternalLinkAlt />
          </span>
        </div>
      </Link>
    </div>
  );
}

export default NavbarLinks;

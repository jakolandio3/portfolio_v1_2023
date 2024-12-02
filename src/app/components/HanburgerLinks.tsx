"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FaExternalLinkAlt } from "react-icons/fa";
function HamburgerLinks({ onChangeState }) {
  const pathName = usePathname();
  return (
    <div className="flex flex-col items-start justify-between justify-items-center gap-4 px-2 text-left text-2xl sm:flex sm:flex-row sm:align-middle sm:text-lg md:grid-cols-2 ">
      <Link
        onClick={() => onChangeState(false)}
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
        onClick={() => onChangeState(false)}
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
        onClick={() => onChangeState(false)}
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
        onClick={() => onChangeState(false)}
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
        onClick={() => onChangeState(false)}
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

export default HamburgerLinks;

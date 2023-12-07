import Link from "next/link";
import LogoImg from "./LogoImg";

function Footer({ children }) {
  return (
    <footer className=" border-t-secondary-color text-primary-text-color mt-20 flex justify-around border-t-2 border-dashed border-opacity-20 pt-8">
      <div className="z-10 mb-4 flex flex-col justify-between">
        <ul>
          <LogoImg />

          <p className=" mt-4 text-xs font-extralight opacity-30">
            Thanks for eating cake
          </p>
        </ul>
        <p className=" text-xs font-extralight opacity-30">
          &copy; 2023 Jakob Douglas. All Rights Reserved
        </p>
      </div>
      <div className="mb-[20px] flex justify-center gap-20">
        <ul>
          <h1 className="mb-4 font-extrabold">Links</h1>
          <div className=" font-extralight opacity-30">
            {" "}
            <li>
              <Link className=" hover:border-b-2" href={"about"}>
                About
              </Link>
            </li>
            <li>
              <Link className=" hover:border-b-2" href={"work"}>
                Work
              </Link>
            </li>
            <li>
              <Link className=" hover:border-b-2" href={"techStack"}>
                Tech Stack
              </Link>
            </li>
            <li>
              <Link className=" hover:border-b-2" href={"contact"}>
                Contact
              </Link>
            </li>{" "}
          </div>
        </ul>
        <ul>
          <h1 className="mb-4 font-extrabold">Elsewhere</h1>
          <div className=" font-extralight opacity-30">
            <li>
              {" "}
              <Link className=" hover:border-b-2" href={"contact"}>
                Email
              </Link>
            </li>
            <li>
              {" "}
              <Link
                className=" hover:border-b-2"
                href={"www.google.com"}
                target="_blank"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              {" "}
              <Link
                className=" hover:border-b-2"
                href={"https://github.com/jakolandio3"}
                target="_blank"
              >
                GitHub
              </Link>
            </li>
          </div>
        </ul>
      </div>
      <div className="absolute -z-10 h-[100px] w-[80%] rounded-t-full bg-gradient-to-r from-[rgba(0,0,255,0.5)] via-red-500 to-yellow-500 opacity-40 blur-3xl"></div>

      {children}
    </footer>
  );
}

export default Footer;

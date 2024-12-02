import Link from "next/link";
import LogoImg from "./LogoImg";

function Footer() {
  return (
    <div className="flex w-full justify-center px-5">
      <footer className=" mt-20 flex w-full justify-around border-t-2 border-dashed border-t-secondary-color border-opacity-20 pt-8 text-primary-text-color">
        <div className="z-10 mb-4 mr-3 flex flex-col justify-between md:mr-0">
          <ul>
            <LogoImg />

            <p className=" mt-4 w-1/2 text-xs font-extralight opacity-30 md:w-full">
              Thanks for viewing my site
            </p>
          </ul>
          <p className=" text-xs font-extralight opacity-30">
            &copy; 2024 Jakob Douglas. <br /> All Rights Reserved
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
                  href={"https://www.linkedin.com/in/jakob-douglas"}
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
      </footer>
    </div>
  );
}

export default Footer;

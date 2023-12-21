import Link from "next/link";

import { SiGithub, SiLinkedin } from "react-icons/si";
import LightMode from "./LightMode";

function NavIcons() {
  return (
    <div
      id="name-header"
      className="relative flex h-full content-center items-center justify-center gap-4 self-center px-2 text-2xl"
    >
      <Link target="_Blank" href={"https://github.com/jakolandio3"}>
        <SiGithub />
      </Link>
      <Link href={"/"}>
        <SiLinkedin />
      </Link>
      |
      <LightMode />
    </div>
  );
}

export default NavIcons;

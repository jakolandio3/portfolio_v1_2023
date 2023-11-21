import Link from "next/link";
import { HiAcademicCap } from "react-icons/hi2";
import {
  SiGithub,
  SiLinkedin,
  SiSpotlight,
  SiVisualstudiocode,
} from "react-icons/si";
import Button from "./Button";
function NavIcons() {
  return (
    <div className="relative flex h-full content-center items-center justify-center gap-4 self-center px-2">
      <Link href={"/"}>
        <HiAcademicCap />
      </Link>
      <Link href={"/"}>
        <SiGithub />
      </Link>
      <Link href={"/"}>
        <SiVisualstudiocode />
      </Link>
      <Link href={"/"}>
        <SiLinkedin />
      </Link>
      |
      <Button>
        <SiSpotlight />
      </Button>
    </div>
  );
}

export default NavIcons;

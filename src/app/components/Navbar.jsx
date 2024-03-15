import LogoImg from "./LogoImg";
import MobileHamburgerMenu from "./MobileHamburgerMenu";
import DialogDemo from "./DialogBox";
import NavIcons from "./NavIcons";
import NavbarLinks from "./NavbarLinks";

function Navbar() {
  return (
    <div className="flex w-full justify-center px-5">
      <header className="ring-black-400 mt-5 grid w-full grid-flow-col items-center self-center  rounded-lg bg-transparent  py-5 text-center text-primary-text-color shadow-[0px_0px_200px_red,-70px_0px_100px_blue,70px_0px_100px_yellow] ring-2  ring-offset-4 md:w-[80%]">
        <div className="ml-5 hidden flex-row items-center gap-4 text-lg md:flex">
          <span className="hidden lg:block">
            <LogoImg size={"sm"} />
          </span>

          <NavbarLinks />
        </div>
        <div className=" mx-2 flex w-full justify-start md:hidden">
          <DialogDemo />
        </div>
        <div className="hidden h-full items-center md:flex">
          <NavIcons />
        </div>
      </header>
    </div>
  );
}

export default Navbar;

import LogoImg from "./LogoImg";
import Modal from "./Modal";
import NavIcons from "./NavIcons";
import NavbarLinks from "./NavbarLinks";

function Navbar() {
  return (
    <header className="ring-black-400 text-primary-text-color mt-5 grid w-[80%] grid-flow-col items-center justify-between self-center  rounded-lg bg-transparent py-5 text-center shadow-[0px_0px_200px_red,-70px_0px_100px_blue,70px_0px_100px_yellow]  ring-2 ring-offset-4">
      <div className="ml-5 flex flex-row items-center gap-4 text-lg">
        <LogoImg size={"sm"} />
        <NavbarLinks />
      </div>
      <div className="flex h-full items-center">
        <NavIcons />
      </div>
    </header>
  );
}

export default Navbar;

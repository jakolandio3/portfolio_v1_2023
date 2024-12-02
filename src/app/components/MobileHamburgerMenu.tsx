import NavbarLinks from "./NavbarLinks";

function MobileHamburgerMenu() {
  return (
    <div className=" px-2">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-10 w-10 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="drawer-side  z-50">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu min-h-full w-full bg-base-200 p-4 text-base-content">
            {/* Sidebar content here */}
            <li>
              <label htmlFor="my-drawer" className="btn drawer-button ">
                ❌
              </label>
            </li>
            <li>
              {" "}
              <NavbarLinks />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileHamburgerMenu;

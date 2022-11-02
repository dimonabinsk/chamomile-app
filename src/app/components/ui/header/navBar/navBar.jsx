/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import { useDarkMode } from "../../../../hooks/useDarkMode";

import { Navbar, MobileNav } from "@material-tailwind/react";
import OpenNavBtn from "../openNavBtn/openNavBtn";
import ChangeThemeBtn from "../changeThemeBtn/changeThemeBtn";
import NavList from "../navList/navList";
import Logo from "../logo/logo";

export default function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  const [isDarkMode, setDarkMode] = useDarkMode();
  const handleModeTheme = () => {
    isDarkMode ? setDarkMode() : setDarkMode();
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="fixed top-2 lg:top-5 left-0 right-0 mx-auto max-w-screen-3xl border-transparent bg-gray-100 py-2 px-4 transition-all dark:bg-main-black lg:px-8 lg:py-4 dark:shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {<Logo darkMode={isDarkMode} />}
        <div className="hidden lg:block">{<NavList />}</div>
        {
          <ChangeThemeBtn
            onChangeTheme={handleModeTheme}
            darkMode={isDarkMode}
            classes={"hidden lg:inline-block"}
          />
        }
        {<OpenNavBtn open={openNav} onOpen={() => setOpenNav(!openNav)} />}
      </div>
      <MobileNav open={openNav}>
        {<NavList />}
        <div className="ml-0">
          {
            <ChangeThemeBtn
              onChangeTheme={handleModeTheme}
              darkMode={isDarkMode}
              classes={"inline-block lg:hidden"}
            />
          }
        </div>
      </MobileNav>
    </Navbar>
  );
}

import { DarkMode } from "./dark-mode";
import DropDownListMenu from "./drop-down-list-menu";
import Logo from "./logo";
import Search from "./search";

const Navbar = () => {
  return (
    <nav>
      <div className="container flex flex-col justify-between py-8 sm:flex-row sm:items-center gap-4">
        {/* Logo */}
        <Logo />
        {/* Search */}
        <Search />
        {/* DarkMode & Profile */}
        <div className="flex gap-4">
          <DarkMode />
          <DropDownListMenu />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

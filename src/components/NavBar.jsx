import NavBarLink from './NavBarLink';

function NavBar() {
  return (
    <nav
      className="w-full sticky top-0 
        py-4 px-2 md:px-15 h-18 backdrop-blur-md bg-(--bg-primary) border-b
        border-b-gray-700 z-100 my-auto"
    >
      <div className="flex justify-between items-center w-full mx-auto">
        <span className="logo-text text-2xl md:text-4xl">Layla.dev</span>

        <ul className="list-none flex items-center gap-3 md:gap-10 lg:gap-15 text-[15px] md:text-xl mt-2">
          <NavBarLink text="About" link="about"></NavBarLink>
          <NavBarLink text="Skills" link="skills"></NavBarLink>
          <NavBarLink text="Projects" link="projects"></NavBarLink>
          <NavBarLink text="Contact" link="contact"></NavBarLink>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

function NavBarLink({ text, link }) {
  return (
    <li className="border-b-3 border-b-transparent hover:border-(--accent) transition-all duration-200">
      <a href={`#${link}`}>{text}</a>
    </li>
  );
}

export default NavBarLink;

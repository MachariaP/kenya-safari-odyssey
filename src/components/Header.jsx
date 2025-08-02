import { Link } from 'react-scroll';

export default function Header() {
  return (
    <header className="bg-safari-green text-white fixed w-full top-0 z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">Kenya Safari Odyssey</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="hero" smooth={true} duration={500} className="hover:text-safari-accent cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="parks" smooth={true} duration={500} className="hover:text-safari-accent cursor-pointer">
              Parks
            </Link>
          </li>
          <li>
            <Link to="gallery" smooth={true} duration={500} className="hover:text-safari-accent cursor-pointer">
              Gallery
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

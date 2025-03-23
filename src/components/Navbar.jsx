import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'services' },
    { id: 3, link: 'about' },
    { id: 4, link: 'testimonials' },
    { id: 5, link: 'contact' },
  ];

  return (
    <nav className="fixed w-full h-16 bg-white shadow-md z-50">
      <div className="flex justify-between items-center h-full px-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-600">FitLife</h1>

        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize text-gray-700 hover:text-blue-600">
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div onClick={() => setNav(!nav)} className="cursor-pointer md:hidden">
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>

      {nav && (
        <ul className="absolute w-full bg-white px-8 py-4 md:hidden">
          {links.map(({ id, link }) => (
            <li key={id} className="py-2 cursor-pointer capitalize">
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

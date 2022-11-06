import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      _Link: "Home",
      name: "",
    },
    {
      id: 2,
      _Link: "Events",
      name: "",
    },
    {
      id: 3,
      _Link: "project",
      name: "project",
    },
    {
      id: 4,
      _Link: "About",
      name: "about",
    },
    {
      id: 5,
      _Link: "contact",
      name: "",
    },
  ];

  return (
    <div className=" flex justify-between items-center w-full h-20 px-4 text-white bg-[#141414] ">
      <div className="w-20 mt-[15px] ">
        <h1 className="  text-3xl font-bold ml-[-2] text-[#00df9a]">RNXG</h1>
      </div>
      <ul className="hidden md:flex hover:cursor-zoom-out">
        {links.map(({ id, _Link, name }) => (
          <Link to={name} smooth duration={500}>
            <li
              key={id}
              className="px-4 cursor-pointer uppercase text-gray-500 hover:scale-105 hover:text-[#00df9a]"
            >
              {_Link}
            </li>
          </Link>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer text-gray-500 pr-4 z-10 md:hidden "
      >
        {nav ? (
          <FaTimes size={30} className="text-[#00df9a]" />
        ) : (
          <FaBars size={30} className="text-[#00df9a]" />
        )}
      </div>
      {nav && (
        <ul className="flex flex-col text-1xl  items-center absolute top-0 left-0 w-full h-screen bg-[#141414] justify-evenly ">
          {links.map(({ id, _Link, name }) => (
            <Link to={name} smooth duration={500}>
              <li
                key={id}
                className="px-4 cursor-pointer uppercase text-gray-500 hover:scale-105 hover:text-[#00df9a]"
              >
                {_Link}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;

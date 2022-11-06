import React from "react";
import Typed from "react-typed";
import { BiRightArrow } from "react-icons/bi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-[#141414] ">
      <div className="max-w-screen-lg mx-auto flex flrx-col py-[25%] justify-centre  h-full px-4 ">
        <div className="flex flex-col justify-center">
          <h2 className=" text-4xl sm:text-7xl font-bold text-[#00df9a] underline">
            <h1 className="text-white text-5xl font-bold py-auto "> Why</h1>{" "}
            RNXG ?
          </h2>
          <Typed
            className="md:text-2xl sm:textxl text uppercase text-[#00df9a] "
            strings={["FOR STUDENTS ", ".......💻", " .......🔩"]}
            typeSpeed={100}
            backSpeed={90}
            loop
          />
          <p className=" max-w-[800px] mt-[-1rem] w-full h-screen mx-auto text-left-10 flex flex-col justify-center text-gray-300 text-2xl font-bold py-5">
            Members of the RNXG, regardless of their fields, collaborate as a
            team to generate multidisciplinary technical expertise. Robotics for
            Next Generation, or RNXG, is the greatest platform for working on
            various issue statements and developing the best solutions for them.
            Artificial Intelligence, Machine Learning, Deep Learning, Embedded
            Systems, IoT, VLSI, Robotics, and other emerging technologies are
            explored in RNXG.
          </p>
          <div>
            <Link
              to="Explore"
              smooth
              duration={500}
              className=" group text-white w-fit px-6 py-3 my-1 flex items-center rounded-md bg-gradient-to-r from-[#00df9a] to-[#11372b] cursor-pointer  shadow-fuchsia-200"
            >
              Explore
              <span className=" group-hover:rotate-90 duration-300 text-center sm:text-left ">
                <BiRightArrow size={25} className=" " />
              </span>
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;

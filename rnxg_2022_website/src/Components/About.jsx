import React from "react";
import { GiTargetShot, GiStairsGoal } from "react-icons/gi";
const About = () => {
  return (
    <div className=" text-center  max-W-[1240px] mx-auto py-16  bg-[#141414] ">
      <h1 className="text-4xl text-center text-[#00df9a]" name="about">
        Who Are We ?
      </h1>
      <p className=" text-gray-400 py-4 text-xl text-center mx-auto justify-center px-[100px]">
        We're a bunch of young people trying to solve as many problems as
        possible for college students and giving them an optimum, all-in-one
        platform for their overall growth.
      </p>
      {/* {card_container} */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-2  gap-4 md:grid-cols-2 px-5 py-5 ">
        {/* {card} */}
        <div className="flex flex-col border rounded-3xl text-left py-12 px-8 ring-1 ring-[#00df9a] ring-offset-0 ">
          <div>
            <div className="bg-[#00df9a] inline-flex p-2 rounded-full ">
              <GiStairsGoal size={40} />
            </div>
            <h3 className="text-xl font-bold py-4 text-[#00df9a]">
              {" "}
              Our Mission !
            </h3>
            <p className=" text-gray-500 font-semibold">
              To increase enthusiasm & knowledge towards robotics by providing
              hands-on & multidisciplinary collaborative experience in
              mechanics, electronics, designing & programming, with all
              departments working in symphony to create marvellous projects.
            </p>
          </div>
        </div>
        <div className="flex flex-col  border rounded-3xl text-left py-12 px-8 ring-1 ring-[#00df9a] ring-offset-0 p-4">
          <div>
            <div className="bg-[#00df9a] inline-flex p-2 rounded-full ">
              <GiTargetShot size={40} />
            </div>
            <h3 className="text-xl font-bold py-4 text-[#00df9a]">
              Our Vision !
            </h3>
            <p className=" text-gray-500 font-semibold">
              We provide an open platform for students in the institute who wish
              to advance in the technological world. We integrate technology to
              tackle real-world challenges.
            </p>
          </div>
        </div>
        <div className="flex flex-col  border rounded-3xl text-left py-12 px-8 ring-1 ring-[#00df9a] ring-offset-0 ">
          <div>
            <div className="bg-[#00df9a] inline-flex p-2 rounded-full ">
              <GiTargetShot size={40} />
            </div>
            <h3 className="text-xl font-bold py-4 text-[#00df9a]">
              Our Vision !
            </h3>
            <p className=" text-gray-500 font-semibold">
              We provide an open platform for students in the institute who wish
              to advance in the technological world. We integrate technology to
              tackle real-world challenges.
            </p>
          </div>
        </div>
        <div className="flex flex-col  border rounded-3xl text-left py-12 px-8 ring-1 ring-[#00df9a] ring-offset-0 ">
          <div>
            <div className="bg-[#00df9a] inline-flex p-2 rounded-full ">
              <GiTargetShot size={40} />
            </div>
            <h3 className="text-xl font-bold py-4 text-[#00df9a]">
              Our Vision !
            </h3>
            <p className=" text-gray-500 font-semibold">
              We provide an open platform for students in the institute who wish
              to advance in the technological world. We integrate technology to
              tackle real-world challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

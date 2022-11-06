import React from "react";
import ProjectCard from "./projectCard";
import LedCube from "../Assets/ledcube.png";
import Pcb from "../Assets/pcb.jpg";
const Project = () => {
  return (
    <div className=" bg-[#141414]" name="project">
      <div className="flex flex-row px-4 ">
        <h1 className="font-bold text-4xl md: text-white  px-4 animate-bounce ">
          RNXG <h1 className="text-[#00df9a]"> PROJECT'S</h1>
        </h1>
      </div>
      <div className="text-white font-bold text-4xl border-box shadow-2xl w-full h-auto p-4  mx-auto flex flex-auto mt-5 ">
        <p className="px-4">
          The <p className=" inline text-[#00df9a] underline">projects</p> that
          actually
          <p className="inline text-[#00df9a] underline">
            help <p className="text-white "> you grow !</p>
          </p>
        </p>
      </div>

      <div className="grid sm:grid-cols-1 lg:grid-cols-4  gap-4 md:grid-cols-4 justify-center  px-[10px]">
        <ProjectCard
          id={1}
          src={LedCube}
          text={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum vitae fugiat, minima sequi cupiditate, at eveniet soluta dolor nesciuntvelit corrupti atque vel labore nostrum iste, voluptas vero!Molestiae, sit?"
          }
        />
        <ProjectCard
          id={2}
          src={Pcb}
          text={
            "Battery Management System For LIPO(Battery) Kshitij Kiran Sagar , Shruti Sunil Kulkarni, Komal Ankush Kuntewad"
          }
        />
        <ProjectCard
          id={3}
          src={Pcb}
          text={
            "Battery Management System For LIPO(Battery) Kshitij Kiran Sagar , Shruti Sunil Kulkarni, Komal Ankush Kuntewad"
          }
        />
        <ProjectCard
          id={4}
          src={Pcb}
          text={
            "Battery Management System For LIPO(Battery) Kshitij Kiran Sagar , Shruti Sunil Kulkarni, Komal Ankush Kuntewad"
          }
        />
        <ProjectCard
          id={5}
          src={Pcb}
          text={
            "Battery Management System For LIPO(Battery) Kshitij Kiran Sagar , Shruti Sunil Kulkarni, Komal Ankush Kuntewad"
          }
        />
        <ProjectCard
          id={6}
          src={Pcb}
          text={
            "Battery Management System For LIPO(Battery) Kshitij Kiran Sagar , Shruti Sunil Kulkarni, Komal Ankush Kuntewad"
          }
        />
        <ProjectCard
          id={7}
          src={Pcb}
          text={
            "Battery Management System For LIPO(Battery) Kshitij Kiran Sagar , Shruti Sunil Kulkarni, Komal Ankush Kuntewad"
          }
        />
        <ProjectCard
          id={8}
          src={Pcb}
          text={
            "Battery Management System For LIPO(Battery) Kshitij Kiran Sagar , Shruti Sunil Kulkarni, Komal Ankush Kuntewad"
          }
        />
      </div>
    </div>
  );
};

export default Project;

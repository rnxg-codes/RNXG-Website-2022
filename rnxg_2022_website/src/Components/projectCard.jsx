import React from "react";

const projectCard = (props) => {
  return (
    <div className="flex flex-col border shadow-md shadow-[#00df9a] rounded-3xl text-left py-auto px-auto w-[100%] max-w-[20rem] ">
      <div>
        <div key={props.id} className=" py-16 px-8 rounded-3xl">
          <div className="hover:scale-105 ">
            <img src={props.src} alt="" />
          </div>
          <h3 className="font-bold  text-[#00df9a] px-2">Our Vision !</h3>
          <p className=" text-gray-500 text-s mx-2 text-left">{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default projectCard;

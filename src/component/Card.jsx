import React, { useState } from "react";

const Card = (props) => {

  const { image, title, description } = props.course;

  const [reedMore,setreedMore] = useState(true);

  const newString = reedMore ? description.substring(0,150)+"..." : description;

 function toggleHandler(){
    setreedMore(!reedMore);
}

  return (
    <div className="  ">
      <div className="w-[320px]  bg-bgDark">
        <img className=" w-72 h-62 mx-4 pt-4  rounded-2xl" src={image.url} alt="" />
        <p className=" mx-2 text-[1.2rem] text-blue-700 font-semibold italic">
          {title}
        </p>
        <p className=" mx-2 text-[1rem] text-white italic pb-4">{newString}
       <span className="text-blue-500 active:text-blue-200 cursor-pointer" onClick={toggleHandler}>{reedMore ? " reedMore":" showLess"}</span> </p>
      </div>
    </div>
  );
};

export default Card;

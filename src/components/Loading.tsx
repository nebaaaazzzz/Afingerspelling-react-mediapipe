import React from "react";
import { ScaleLoader } from "react-spinners";
function Loading() {
  return (
   
    <div className="h-[100vh] w-full gap-20 flex flex-col justify-center items-center bg-[#683aff]  bg-[url('./spelling/Q.png')]
     bg-auto bg-no-repeat bg-center ">
      <ScaleLoader color={"#000"} />
      <p className="text-center">
        Please Sleep While Setting Up It May Take a While
      </p>
    </div>
  );
}

export default Loading;

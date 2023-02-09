import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import SpellingSvg from "../components/SpellingSvg";
import Background from "../components/Background";

function SelectHand() {
  const searchParams = useSearchParams();

  return (
    <div className="flex flex-col h-[100vh] bg-[#ffe090] bg-[url('/Screenshot_2023-02-08_at_07-07-59_Fingerspelling_with_Machine_Learning-removebg-preview(1).png')]  bg-top   bg-no-repeat bg-center items-center justify-center gap-10">
     <div className="circleTop bg-[#ffebb8] w-[230px] h-[432px] rounded-tr-full rounded-br-full absolute inset-x-0"></div> 
     <div className="circleTop bg-[#ffebb8] w-[230px] h-[432px] rounded-tl-full rounded-bl-full absolute right-0 "></div> 
      <BackButton url="/" />
      
      
      <h1 className="text-[#683aff] text-4xl text-bold text-center leading-8 mb-3.5">
        Are left or right handed?
      </h1>
      <h1 className="text-white text-lg w-96 text-center text-[#683aff] inset-11">
        Choose the hand you want to use for fingerspelling You Should use your
        dominant hand
      </h1>
      <div className="flex gap-10">
        <Link
          style={{
            textTransform: "none",
          }}
          to={`/select-level?hand=left`}
          className="btn my-2 h-14 hover:bg-white hover:text-[#683aff] rounded-3xl text-xl border-none text-white px-20 bg-[#683aff]"
        >
          Left
        </Link>
        <Link
          style={{
            textTransform: "none",
          }}
          to={`/select-level?hand=right`}
          className="btn my-2 h-14 text-xl hover:bg-white  hover:text-[#683aff] rounded-3xl bg-[#683aff] border-none px-20 text-white"
        >
          Right
        </Link>
      </div>
    </div>
  );
}

export default SelectHand;

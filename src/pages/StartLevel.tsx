import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import SpellingSvg from "../components/SpellingSvg";
import { levels } from "../utils";

function StartLevel() {
  const searchParams = useSearchParams();
  const level = Number(searchParams[0].get("level"));
  const hand = searchParams[0].get("hand") as string;
  return (
    <div className="flex flex-col h-[100vh] bg-[#ffe090] bg-[url('/Screenshot_2023-02-08_at_07-07-59_Fingerspelling_with_Machine_Learning-removebg-preview(1).png')]  bg-top   bg-no-repeat bg-center items-center justify-center gap-10">
      <BackButton url={`/select-level?hand=${hand}`} />
      <div className="circleTop bg-[#ffebb8] w-[230px] h-[432px] rounded-tr-full rounded-br-full absolute inset-x-0"></div> 
     <div className="circleTop bg-[#ffebb8] w-[230px] h-[432px] rounded-tl-full rounded-bl-full absolute right-0 "></div> 
     
      <h1 className="text-8xl text-[#683aff]">
        Level {searchParams[0].get("level")}
      </h1>
      <h1 className="text-xl  text-[#683aff]">
        Get ready to learn the letters{" "}
        <span className="text-[#683aff] ml-5">{levels[level - 1].join(" , ").toUpperCase()}</span>
      </h1>
      <h1 className="text-xl text-[#683aff] text-center ">
        When you start the game, look at the hand and copy the <h2>handshape 
        with your own hand</h2>
      </h1>
      <div className="card">
        <Link
          style={{
            textTransform: "none",
          }}
          to={`/game?level=${level}&hand=${hand}`}
          className="btn my-2 h-14 hover:bg-white hover:text-[#683aff] rounded-3xl text-xl border-none text-white px-20 bg-[#683aff]"
          >
          Turn On Webcam
        </Link>
       
      </div>
    </div>
  );
}

export default StartLevel;

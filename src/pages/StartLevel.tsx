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
    <div className="flex flex-col  h-[100vh] bg-[#683aff] items-center justify-center gap-10">
      <BackButton url={`/select-level?hand=${hand}`} />
      <SpellingSvg />
      <h1 className="text-8xl text-white">
        Level {searchParams[0].get("level")}
      </h1>
      <h1 className="text-xl ">
        Get ready to learn the letters{" "}
        <span className="text-white ml-5">{levels[level - 1].join(" , ")}</span>
      </h1>
      <h1 className="text-xl">
        When you start the game, look at the hand and copy the handshape with
        your own hand
      </h1>
      <div className="card">
        <Link
          style={{
            textTransform: "none",
          }}
          to={`/game?level=${level}&hand=${hand}`}
          className="btn hover:bg-[#652ae5] rounded-3xl text-white text-2xl hover:border-white border-white bg-[#683aff] my-2"
        >
          Start Level
        </Link>
      </div>
    </div>
  );
}

export default StartLevel;

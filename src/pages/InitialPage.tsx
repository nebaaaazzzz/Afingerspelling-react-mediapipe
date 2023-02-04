import React from "react";
import { Link } from "react-router-dom";
import Background from "../components/Background";
import SpellingSvg from "../components/SpellingSvg";

function InitialPage() {
  return (
    <div className="flex flex-col h-[100vh] items-center justify-center bg-[#683aff] gap-1">
      <Background word="fingerspelling" />
      <SpellingSvg />

      <div className="card">
        <Link
          to="/select-hand"
          className="btn px-10 hover:border-[#683aff] hover:bg- bg-[#fff] text-[#683aff] border-none my-2"
        >
          Let's go...
        </Link>
      </div>
    </div>
  );
}

export default InitialPage;

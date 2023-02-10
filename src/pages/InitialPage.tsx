import React from "react";
import { Link } from "react-router-dom";
import Background from "../components/Background";
import SpellingSvg from "../components/SpellingSvg";

function InitialPage() {
  return (
    <div className="flex flex-col h-[100vh] items-center justify-center bg-[#683aff] bg[url('<Background/>')]">
      {/* <Background word="fingerspelling" /> */}
      <SpellingSvg />
      <div className="text-[#ffe090] text-center">
        <p>Learn the ABC in American Sign Languge </p>
        <h1>with machine Languge</h1>
      </div>
      <div className="card">
        <Link
          to="/select-hand"
          className="btn px-20 h-16 text-2xl  hover:border-[#683aff] rounded-3xl hover:bg-[#ffffa0] bg-[#fff] text-[#683aff] border-none my-2"
        >
          Let's go...
        </Link>
      </div>
    </div>
  );
}

export default InitialPage;

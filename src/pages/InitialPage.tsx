import React from "react";
import { Link } from "react-router-dom";

function InitialPage() {
  return (
    <div className="flex flex-col h-[100vh] items-center justify-center gap-10">
      <h1 className="text-5xl">Welcom to finger spelling....</h1>
      <div className="card">
        <button className="btn my-2 ">
          <Link to="/select-level">Start</Link>
        </button>
      </div>
    </div>
  );
}

export default InitialPage;

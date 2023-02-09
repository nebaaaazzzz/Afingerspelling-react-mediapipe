import React, { MouseEventHandler } from "react";

function LeftBottomContainer({
  selectedWord,
  wordLength,
  handleSkip,
}: {
  selectedWord: string;
  wordLength: number;
  handleSkip: MouseEventHandler;
}) {
  return (
    <div className="flex flex-col items-center ">
      <div className="flex">
        <h1 className="text-4xl text-primary ">
          {selectedWord?.slice(0, wordLength - 1).toUpperCase()}
        </h1>

        <h1 className="text-4xl text-[#c29f48] ">
          {selectedWord?.slice(wordLength - 1).toUpperCase()}
        </h1>
      </div>

      <button
        onClick={handleSkip}
        className="btn my-2 text-xl hover:border-2 hover:border-black hover:bg-white  hover:text-[#683aff] rounded-3xl bg-[#683aff] border-none px-20 text-white"
      >
        Skip Letter
      </button>
    </div>
  );
}

export default LeftBottomContainer;

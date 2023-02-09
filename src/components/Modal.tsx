import React from "react";

function Modal({ nextWord }: { nextWord: string }) {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.6)",
      }}
      className="absolute z-40   flex items-center justify-center"
    >
      <div className="text-black shadow-2xl bg-white w-1/2 h-1/2 rounded-xl opacity-100 flex items-center justify-center z-50 text-bold text-2xl">
        The Next Word is ...{nextWord}
      </div>
    </div>
  );
}

export default Modal;

import { createRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";

function SelectHand() {
  const [isLeftMouseOver, setIsLeftMouseOver] = useState(false);
  const [iseRightMouseOver, setIsRightMouseOver] = useState(false);
  const leftAnchorRef = createRef<HTMLAnchorElement>();
  const rightAnchorRef = createRef<HTMLAnchorElement>();
  const mouseEnterHandler = (e: MouseEvent, handDir: "LEFT" | "RIGHT") => {
    if (handDir == "LEFT") {
      setIsLeftMouseOver(true);
    } else {
      setIsRightMouseOver(true);
    }
  };
  const mouseLeaveHandler = (e: MouseEvent, handDir: "LEFT" | "RIGHT") => {
    if (handDir == "LEFT") {
      setIsLeftMouseOver(false);
    } else {
      setIsRightMouseOver(false);
    }
  };
  useEffect(() => {
    leftAnchorRef.current?.addEventListener("mouseover", (e) =>
      mouseEnterHandler(e, "LEFT")
    );
    rightAnchorRef.current?.addEventListener("mouseover", (e) =>
      mouseEnterHandler(e, "RIGHT")
    );
    leftAnchorRef.current?.addEventListener("mouseleave", (e) =>
      mouseLeaveHandler(e, "LEFT")
    );
    rightAnchorRef.current?.addEventListener("mouseleave", (e) =>
      mouseLeaveHandler(e, "RIGHT")
    );
    return () => {
      [leftAnchorRef, rightAnchorRef].map((anchorElement) => {
        anchorElement.current?.removeEventListener(
          "mouseover",
          mouseEnterHandler
        );
        anchorElement.current?.removeEventListener(
          "mouseleave",
          mouseEnterHandler
        );
      });
    };
  });
  // bg-[url('/Screenshot_2023-02-08_at_07-07-59_Fingerspelling_with_Machine_Learning-removebg-preview(1).png')]
  return (
    <div className="flex flex-col relative h-[100vh] bg-[#ffe090]  bg-top   bg-no-repeat bg-center items-center justify-center gap-10">
      {!isLeftMouseOver && !iseRightMouseOver && (
        <img
          src="Screenshot_2023-02-08_at_07-07-59_Fingerspelling_with_Machine_Learning-removebg-preview(1).png"
          width={450}
          height={450}
          className="absolute top-0"
        />
      )}
      {isLeftMouseOver && (
        <video
          width={350}
          height={350}
          className="absolute top-10"
          src="/left.webm"
          autoPlay
        ></video>
      )}
      {iseRightMouseOver && (
        <video
          width={500}
          height={500}
          className="absolute top-10"
          src="/right.webm"
          autoPlay
        ></video>
      )}
      <div className="circleTop bg-[#ffebb8] w-[230px] h-[432px] rounded-tr-full rounded-br-full absolute inset-x-0"></div>
      <div className="circleTop bg-[#ffebb8] w-[230px] h-[432px] rounded-tl-full rounded-bl-full absolute right-0 "></div>
      <BackButton url="/" />

      <h1 className="text-[#683aff] z-30 text-4xl text-bold text-center leading-8 mb-3.5">
        Are left or right handed?
      </h1>
      <h1 className="text-lg w-96 text-center z-30 text-[#683aff] inset-11">
        Choose the hand you want to use for fingerspelling You Should use your
        dominant hand
      </h1>
      <div className="flex gap-10 z-30">
        <Link
          ref={leftAnchorRef}
          style={{
            textTransform: "none",
          }}
          to={`/select-level?hand=left`}
          className="btn my-2 h-14 hover:bg-white hover:text-[#683aff] rounded-3xl text-xl border-none text-white px-20 bg-[#683aff]"
        >
          Left
        </Link>
        <Link
          ref={rightAnchorRef}
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

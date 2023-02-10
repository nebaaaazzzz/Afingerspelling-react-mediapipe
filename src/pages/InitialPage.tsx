import React, { createRef,useEffect , useState } from "react";
import { Link } from "react-router-dom";
import Background from "../components/Background";
import SpellingSvg from "../components/SpellingSvg";

function InitialPage() {
  const [isMouseOver , setIsMouseOver] = useState(false); 
  const buttonRef = createRef<HTMLButtonElement>();
  useEffect(()=>{
    const mouseEnterHandler = async (e:MouseEvent)=>{
      console.log("entering the button")

      setIsMouseOver(true)
    }
    const mouseLeaveHandler = async (e:MouseEvent)=>{
      console.log("leaving the button")
      setIsMouseOver(false)

    }
      buttonRef.current?.addEventListener("mouseenter" , mouseEnterHandler );
      buttonRef.current?.addEventListener("mouseleave" , mouseLeaveHandler );


      return ()=>{
        buttonRef.current?.removeEventListener("mouseenter" , mouseEnterHandler);
        buttonRef.current?.removeEventListener("mouseleave" , mouseLeaveHandler );

      }
    },[]
  )
  return (
    
    <div className="flex flex-col h-[100vh] items-center justify-center bg-[#683aff]  gap-1 ">
      <div className="absolute inset-x-auto inset-y-32 z-0 w-96 h-96">
      {
          isMouseOver ? <img src="/hover.png"  width="670"
          height="138" /> :          <Background word="fingerspelling"  />


        }
      </div>
      <div className="absolute inset-x-auto inset-y-60 z-40 ">
        
          <SpellingSvg />
      <div className="text-[#ffe090] text-2xl text-center font-[LabilGroteskRegular sans-serif] tracking-wide leading-7">
        <p>
Learn the ABC in American Sign Languge </p>
<h1>with machine Languge</h1>



      <div className="card">
        <Link
        ref={buttonRef}
to="/select-hand"
          className="btn rounded-full w-80 h-16 absolute left-48 inset-y-7 bg-[#FFE090] text-[#683aff] hover:bg-white text-3xl leading-8 normal-case font-normal
          
          
          "
        >
          Let's go
        </Link>
        <div className="text-[14px] absolute top-64 left-40 font-[LabilGroteskRegular sans-serif] leading-5">
          <p>This game will using your webcam and machine learning to  
          
          </p>
          <p>analyze your handshapes.Everything is processed locally and
            <p>no webcam data will be sent or stoerd anywhere

            </p>
            </p></div>
      </div>
    </div>
    </div>
    </div>






  );
}

export default InitialPage;

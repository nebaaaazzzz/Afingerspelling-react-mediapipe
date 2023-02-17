import { createRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SpellingSvg from '../components/SpellingSvg';

function InitialPage() {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const buttonRef = createRef<HTMLAnchorElement>();
  useEffect(() => {
    const mouseEnterHandler = async (e: MouseEvent) => {
      setIsMouseOver(true);
    };
    const mouseLeaveHandler = async (e: MouseEvent) => {
      setIsMouseOver(false);
    };
    buttonRef.current?.addEventListener('mouseenter', mouseEnterHandler);
    buttonRef.current?.addEventListener('mouseleave', mouseLeaveHandler);

    return () => {
      buttonRef.current?.removeEventListener('mouseenter', mouseEnterHandler);
      buttonRef.current?.removeEventListener('mouseleave', mouseLeaveHandler);
    };
  }, []);
  return (
    <div className="flex flex-col h-[100vh] overflow-hidden items-center justify-center bg-[#683aff]  gap-1 ">
      <div className="absolute  z-0 ">
        {isMouseOver ? (
          <img src="/hover.png" width="470" height="100" />
        ) : (
          <img
            src="/inital.gif"
            className="relative -top-14 -left-16"
            style={{
              width: 500,
              height: 500
            }}
          />
        )}
      </div>
      <div className="absolute inset-x-auto inset-y-60 z-40 ">
        <SpellingSvg />
        <div className="text-[#ffe090] text-2xl text-center font-[LabilGroteskRegular sans-serif] tracking-wide leading-7">
          <p>Learn the ABC in American Sign Languge </p>
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
            <div className="text-[14px] absolute top-32 left-40 font-[LabilGroteskRegular sans-serif] leading-5">
              <p>This game will using your webcam and machine learning to</p>
              <p>
                analyze your handshapes.Everything is processed locally and
                <p>no webcam data will be sent or stoerd anywhere</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InitialPage;

import { Link, useSearchParams } from 'react-router-dom';
import SpellingSvg from '../components/SpellingSvg';

function LevelCompleted() {
  const searchParams = useSearchParams()[0];
  const hand = searchParams.get('hand');
  const level = searchParams.get('level');
  const points = searchParams.get('points');
  return (
    <div className="flex flex-col h-[100vh] items-center justify-center bg-[#683aff] gap-1">
      <SpellingSvg />
      <h1 className="text-white text-2xl my-5">Well Done!</h1>
      <h1 className="text-white text-8xl my-6">{points} points</h1>
      <h1 className="text-white w-5/12 text-center ">
        you can try the word again - and see how many points you can get. Or
        move on the next levle - where we will add more letters to your
        fingerspelling vocabulary
      </h1>
      <div className="flex mt-10 gap-10">
        <Link
          to={`/game?hand=${hand}&level=${level}`}
          className="btn px-10 h-14 text-xl border-white  hover:border-[#683aff] hover:text-[#683aff] rounded-3xl hover:bg-[#ffffa0] bg-[transparent] text-[#fff]  my-2"
        >
          Try Again
        </Link>
        {/* if 4 reached not to show Next level button */}
        {!(level == '4') && (
          <Link
            to={`/start-level?hand=${hand}&level=${Number(level) + 1}`}
            className="btn px-10 h-14 text-xl  hover:border-[#683aff] rounded-3xl hover:bg-[#ffffa0] bg-[#fff] text-[#683aff] border-none my-2"
          >
            Next Level
          </Link>
        )}
      </div>
    </div>
  );
}

export default LevelCompleted;

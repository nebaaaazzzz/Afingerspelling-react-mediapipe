import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import SpellingSvg from '../components/SpellingSvg';
import {
  getLevelScore,
  clearAllScore,
  storeSessionInfo,
  storeLevelScore
} from '../utils/localsession';

function LevelCompleted() {
  const searchParams = useSearchParams()[0];
  const hand = searchParams.get('hand');
  const level = searchParams.get('level');
  const [points, setPoints] = useState<number | string>();
  const [levelesScore, setLevelsScore] = useState<Record<string, number>>();
  useEffect(() => {
    (async () => {
      if (Number(level) == 4) {
        storeSessionInfo(
          searchParams[0].get('lang'),
          searchParams[0].get('hand'),
          searchParams[0].get('level')
        );
        let levelScores = {};
        for (let i = 0; i < 3; i++) {
          const levelScore = await getLevelScore(String(i + 1));
          if (levelScore != undefined) {
            levelScores[i + 1] = levelScore;
          }
        }
        levelScores[4] = searchParams.get('points');
        let s = Object.values(levelScores); // array of level scores
        setPoints(
          (Number(
            s.reduce((prev, current) => {
              return Number(prev) + Number(current);
            }, 0)
          ) /
            s.length) *
            10
        );
        setLevelsScore(levelScores);
        await clearAllScore();
      } else {
        storeSessionInfo(
          searchParams[0].get('lang'),
          searchParams[0].get('hand'),
          searchParams[0].get('level') + 1
        );
        let o = ((Number(searchParams.get('points')) * 10) / 3).toFixed(2);
        storeLevelScore(level, o);
        setPoints(o);
      }
    })();
  }, []);
  return (
    <div className="flex flex-col h-[100vh] items-center justify-center bg-[#683aff] gap-1">
      <SpellingSvg />
      <h1 className="text-white text-2xl my-5">Well Done!</h1>
      {levelesScore &&
        Object.entries(levelesScore).map((l) => {
          return (
            <p>
              Level {l[0]} : {l[1] * 10}%
            </p>
          );
        })}
      <h1 className="text-white text-8xl my-6">{points}% points</h1>
      <h1 className="text-white w-5/12 text-center ">
        you can try the word again - and see how many points you can get. Or
        move on the next levle - where we will add more letters to your
        fingerspelling vocabulary
      </h1>
      <div className="flex mt-10 gap-10">
        {/* if 4 reached not to show Next level button */}
        {!(level == '4') || (
          <Link
            to={`/start-level?hand=${hand}&level=${
              Number(level) + 1
            }&lang=${searchParams.get('lang')}`}
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

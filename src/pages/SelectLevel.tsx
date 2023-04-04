import { Link, useSearchParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import { useState } from 'react';
import SpellingSvg from '../components/SpellingSvg';
import LinkwithQuery from '../components/LinkwithQuery';
type levelsI = 1 | 2 | 3 | 4;
const levels: levelsI[] = [1, 2, 3, 4];
function SelectLevel() {
  const searchParams = useSearchParams();
  const [imageUrl, setImageUrl] = useState('level.png');
  const mouseEnterHandler = (e: any, level: levelsI) => {
    setImageUrl('L' + level + '.png');
  };
  const mouseLeaveHandler = (e: any, level: levelsI) => {
    setImageUrl('level.png');
  };
  return (
    <div className="flex relative flex-col bg-[#683aff]  bg-no-repeat  bg-top h-[100vh] items-center justify-center gap-10">
      <BackButton url="/select-hand" />
      <SpellingSvg />
      <img className="absolute z-10 top-0" src={'/levels/' + imageUrl} />
      <div className="card  flex items-center z-20">
        {levels.map((item, i) => {
          return (
            <LinkwithQuery
              path={'/start-level'}
              query={`level=${item}`}
              text={`ደረጃ ${item}`}
              ref={null}
              key={item}
              style={{
                textTransform: 'none'
              }}
              onMouseEnter={(e) => mouseEnterHandler(e, item)}
              onMouseLeave={(e) => mouseLeaveHandler(e, item)}
              className={`btn my-4 w-11/12 text-3xl  rounded-3xl ${
                i == 1 ? 'ml-20' : ''
              } ${
                i == 2 ? 'mr-20' : ''
              } flex items-center text-white bg-transparent hover:bg-[#fff] hover:text-[#683aff] hover:border-white border-white px-20 h-16 text-2xl text-bold`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SelectLevel;

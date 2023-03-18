import { Link, useSearchParams } from 'react-router-dom';
import BackButton from '../components/BackButton';

function SelectLanguage() {
  const searchParams = useSearchParams();
  // bg-[url('/Screenshot_2023-02-08_at_07-07-59_Fingerspelling_with_Machine_Learning-removebg-preview(1).png')]
  return (
    <div className="flex flex-col relative h-[100vh] bg-[#ffe090] bg-no-repeat bg-center items-center justify-center gap-10">
      <div className="circleTop bg-[#ffebb8] w-[230px] h-[432px] rounded-tr-full rounded-br-full absolute inset-x-0"></div>
      <div className="circleTop bg-[#ffebb8] w-[230px] h-[432px] rounded-tl-full rounded-bl-full absolute right-0 "></div>
      <BackButton url="/" />

      <h1 className="text-[#683aff] z-30 text-4xl text-bold text-center leading-8 mb-3.5">
        Selet Language
      </h1>
      <h1 className="text-lg w-96 text-center z-30 text-[#683aff] inset-11">
        Choose the language you want to use for fingerspelling
      </h1>
      <div className="flex gap-10 z-30">
        <Link
          style={{
            textTransform: 'none'
          }}
          to={`/select-level?hand=${searchParams[0].get('hand')}&lang=en`}
          className="btn my-2 h-14 hover:bg-white hover:text-[#683aff] rounded-3xl text-xl border-none text-white px-20 bg-[#683aff]"
        >
          English
        </Link>
        <Link
          style={{
            textTransform: 'none'
          }}
          to={`/select-level?hand=${searchParams[0].get('hand')}&lang=am`}
          className="btn my-2 h-14 text-xl hover:bg-white  hover:text-[#683aff] rounded-3xl bg-[#683aff] border-none px-20 text-white"
        >
          Amharic
        </Link>
      </div>
    </div>
  );
}

export default SelectLanguage;

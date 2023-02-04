import { Link, useSearchParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import { useEffect, useState } from "react";
import SpellingSvg from "../components/SpellingSvg";
const levels = [1, 2, 3, 4];
function SelectLevel() {
  const [selectedHand, setSelectedHand] = useState<string>("");
  const searchParams = useSearchParams();
  useEffect(() => {
    if (searchParams[0].get("hand") != null) {
      setSelectedHand(searchParams[0]?.get("hand"));
    }
  }, []);
  return (
    <div className="flex flex-col bg-[#683aff]  h-[100vh] items-center justify-center gap-10">
      <BackButton url="/select-hand" />
      <SpellingSvg />
      <div className="card">
        {levels.map((item, i) => {
          return (
            <Link
              style={{
                textTransform: "none",
              }}
              to={`/start-level?level=${item}&hand=${selectedHand}`}
              className={`btn my-4 rounded-3xl ${i == 1 ? "ml-14" : ""} ${
                i == 2 ? "mr-14" : ""
              } flex items-center text-white bg-transparent hover:bg-[#fff] hover:text-[#683aff] hover:border-white border-white px-28 h-16 text-2xl text-bold`}
            >
              Level {item}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SelectLevel;

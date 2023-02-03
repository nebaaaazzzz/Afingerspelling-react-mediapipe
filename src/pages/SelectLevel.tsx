import { Link } from "react-router-dom";

const levels = [1, 2, 3, 4];
function SelectLevel() {
  return (
    <div className="flex flex-col h-[100vh] items-center justify-center gap-10">
      <h1 className="text-5xl">Select Level</h1>
      <div className="card">
        {levels.map((item) => {
          return (
            <Link to={`/game?level=${item}`} className="btn my-2">
              Level {item}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SelectLevel;

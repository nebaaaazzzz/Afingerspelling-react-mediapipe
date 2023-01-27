import React, {
  useState,
  useRef,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import Loading from "./components/Loading";
import { FingerPoseEstimator } from "./FingerUtils/FingerPostEstimator";
import { HandAnalyzer } from "./HandUtils/HandAnalyzer";
import reactToDOMCursor from "./HandUtils/temp";
import { fourLetterWords } from "./data/words";
const handAnalyzer = new HandAnalyzer();
function App() {
  const [wordIndex, setWordIndex] = useState(0);
  const [selectedWord, setSelectWord] = useState(fourLetterWords[wordIndex]);
  const [selectedLetter, setSelectedLetter] = useState(selectedWord[0]);
  const [wordLength, setWordLength] = useState(1);

  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const videoElement = useRef(null);
  const canvasElement = useRef<HTMLCanvasElement>(null);
  let [countPrediction, setCountPrediction] = useState(0);
  const [prediction, setPrediction] = useState<boolean>(false);
  useEffect(() => {
    if (prediction) {
      //for transition state block the event loop
      // for (let i = 0; i < 10; i++) {
      //   const arr = Array(i);
      // }
      alert("success");
      if (wordLength == selectedWord.length) {
        setSelectWord(fourLetterWords[wordIndex + 1]);
        setWordIndex(wordIndex + 1);
        setSelectedLetter(selectedWord[0]);
        setWordLength(1);

        //setSelectedLetter(selectedWord[wordLength]);
        //setPrediction(false)
      } else {
        setWordLength((wordLen) => wordLen + 1);
        setSelectedLetter(selectedWord[wordLength]);
        setPrediction(false);
      }
    }
  }, [prediction]);
  console.log(wordLength);
  const onResults = (results) => {
    let canvasCtx = canvasElement?.current?.getContext("2d");
    setCountPrediction(countPrediction++);
    if (countPrediction == 1) {
      setLoading(false);
    }
    canvasCtx?.save();
    canvasCtx?.clearRect(
      0,
      0,
      canvasElement.current.width,
      canvasElement.current.height
    );
    canvasCtx?.drawImage(
      results.image,
      0,
      0,
      canvasElement.current.width,
      canvasElement.current.height
    );
    if (results.multiHandLandmarks && results.multiHandedness) {
      let newLandMarks = [];
      for (const landmarks of results.multiHandLandmarks) {
        for (var i = 0; i < 21; i++) {
          let currentLandmark = landmarks[i];
          newLandMarks.push([
            currentLandmark.x,
            currentLandmark.y,
            currentLandmark.z,
          ]);
          // For Left hand we are reverting all the positions
          if (results.multiHandedness[0].label === "left") {
            newLandMarks[i][0] = newLandMarks[i][0] * -1;
          }
        }
        let fingerPoseEstimator = new FingerPoseEstimator(null);
        let fingerPoseResults = fingerPoseEstimator.estimate(newLandMarks);
        // NOTE: We are only accepting hands of a certain size - to have less false positives
        var handSize =
          handAnalyzer.findDistanceBetweenTwoLandMarks(
            newLandMarks[0],
            newLandMarks[5]
          ) * 10;
        console.log(results.multiHandedness[0].label);

        if (handSize > 0.7) {
          drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {
            color: "#ff00ff",
            lineWidth: 2,
          });
          drawLandmarks(canvasCtx, landmarks, {
            color: "transparent",
            lineWidth: 0,
          });
          if (selectedLetter) {
            let bool =
              5 ==
              reactToDOMCursor(fingerPoseResults, newLandMarks, selectedLetter);
            setPrediction(bool);
          }
        } else {
          setPrediction(false);
        }
      }
    } else {
      setPrediction(false);
    }
    canvasCtx?.restore();
  };

  const hands = useMemo(() => {
    if (started) {
      let hands = new window.Hands({
        locateFile: (file) => {
          return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
        },
      });
      hands.setOptions({
        maxNumHands: 1,
        modelComplexity: 1,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5,
      });
      hands.onResults(onResults);
      return hands;
    }
  }, [started, selectedLetter]);
  const timerRef = React.createRef();
  useEffect(() => {
    if (videoElement.current) {
      const camera = new window.Camera(videoElement.current, {
        onFrame: async () => {
          await hands.send({ image: videoElement.current });
        },
      });
      camera.start();
    }
  }, [started, selectedLetter]);
  if (started) {
    return (
      <div className="flex w-full">
        {loading && <Loading />}
        {!loading && (
          <div className="flex-[1] justify-between items-center p-5 bg-white flex  flex-col">
            <div></div>
            <div className="flex items-center gap-10">
              <img
                src={`/spelling/${selectedLetter.toUpperCase()}.png`}
                className="w-11/12 h-56 object-contain"
              />
              <h1 className="text-8xl text-primary">
                {selectedLetter.toUpperCase()}
              </h1>
            </div>
            <div className="flex">
              <h1 className="text-4xl text-primary">
                {selectedWord.slice(0, wordLength - 1)}
              </h1>
              <h1 className="text-4xl ">
                {selectedWord.slice(wordLength - 1)}
              </h1>
            </div>
          </div>
        )}

        <div className="flex-[1]  relative">
          {/* <p ref={timerRef} className="absolute">
            {setTimeout(() => (timerRef?.current.innerText = "1"), 10000)}
          </p> */}
          <video ref={videoElement} className="input_video hidden"></video>
          <canvas
            className="output_canvas"
            style={{
              width: "100%",
              objectFit: "cover",
              height: "100vh",
              display: loading ? "none" : "block",
            }}
            ref={canvasElement}
          ></canvas>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col h-[100vh] items-center justify-center gap-10">
      <h1 className="text-5xl">Welcom to finger spelling....</h1>
      <div className="card">
        <button
          className="btn btn-primary"
          onClick={() => {
            setStarted(true);
            setLoading(true);
          }}
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default App;

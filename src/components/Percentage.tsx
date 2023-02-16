import React from 'react';
import { AlphabetDefinationI } from '../type';

function Percentage({ lookForLetter }: { lookForLetter: AlphabetDefinationI }) {
  let percent =
    lookForLetter.thumb.percentageCorrect +
    lookForLetter.index.percentageCorrect +
    lookForLetter.middle.percentageCorrect +
    lookForLetter.ring.percentageCorrect +
    lookForLetter.little.percentageCorrect;

  return (
    <div className="absolute top-28 bg-red-700">
      <p>{percent.toFixed(2) * 100}</p>
      {/* <p>thumb {lookForLetter.thumb.percentageCorrect.toFixed(2) * 100}%</p>
      <p>index {lookForLetter.index.percentageCorrect.toFixed(2) * 100}%</p>
      <p>middle {lookForLetter.middle.percentageCorrect.toFixed(2) * 100}%</p>
      <p>ring {lookForLetter.ring.percentageCorrect.toFixed(2) * 100}%</p>
      <p>little {lookForLetter.little.percentageCorrect.toFixed(2) * 100}%</p> */}
    </div>
  );
}

export default Percentage;

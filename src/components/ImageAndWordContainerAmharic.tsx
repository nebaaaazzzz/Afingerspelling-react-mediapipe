import React from 'react';

function ImageAndWordContainer({
  imgPath,
  selectedLetter
}: {
  imgPath: string;
  selectedLetter: string;
}) {
  return (
    <div className="flex items-center gap-10">
      <img
        draggable="false"
        src={`/sign.png`}
        className="w-8/12 object-contain"
      />
      <h1 className="text-[12rem] text-primary font-light leading-10 ">
        {selectedLetter}
      </h1>
    </div>
  );
}

export default ImageAndWordContainer;

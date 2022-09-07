import React from 'react';
import MichaelDeSantisResumePDF from '../assets/MichaelDeSantisResume.pdf';
import MichaelDeSantisResume from '../assets/MichaelDeSantisResume.png';

const Resume = () => {
  function handleDownload() {
    const link = document.createElement('a');
    link.download = 'MichaelDeSantisResume';
    link.target = '_blank';
    link.href = MichaelDeSantisResumePDF;
    link.click();
  }
  return (
    <div id="resume" className="">
      <div className="text-center sticky top-20 sm:top-24 bg-orange-200 z-40 text-2xl py-5 w-full">
        Resume
      </div>
      <div className="h-[150px]"></div>
      <div className="flex flex-col items-center gap-12 justify-center ">
        <button
          onClick={handleDownload}
          className=" w-40 text-white bg-orange-500 hover:bg-orange-700 border-0 py-5 px-6 focus:outline-none  rounded text-lg"
        >
          Download
        </button>
        <div className="flex justify-center items-start max-w-md min-w-[10px] h-[700px] ">
          <img
            src={MichaelDeSantisResume}
            alt="Michael DeSantis Resume"
            className=" object-contain"
          />
        </div>
      </div>
      <div className="h-[50px]"></div>
    </div>
  );
};

export default Resume;

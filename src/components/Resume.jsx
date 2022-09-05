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
    <div>
      <div className="text-center sm:pr-28 sticky top-20 sm:top-24 bg-orange-300 z-40 text-2xl py-5 w-full">
        Resume
      </div>
      <div className="flex  flex-col items-center gap-12 justify-center sm:pr-28">
        <button
          onClick={handleDownload}
          className=" w-40 text-white bg-orange-500 hover:bg-orange-700 border-0 py-2 px-6 focus:outline-none  rounded text-lg"
        >
          Download
        </button>
        <img
          src={MichaelDeSantisResume}
          alt="Michael DeSantis Resume"
          className="w-3/4 pb-10 h-full"
        />
      </div>
    </div>
  );
};

export default Resume;

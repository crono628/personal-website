import React from 'react';

const Welcome = () => {
  return (
    <div className="flex p-3">
      <img
        className="rounded-full w-16 h-16"
        src="https://dummyimage.com/70x70"
        alt="Image"
      />{' '}
      <div className="flex flex-col ml-3 justify-center">
        <div>Michael DeSantis</div>
        <div>Web Developer</div>
      </div>
    </div>
  );
};

export default Welcome;

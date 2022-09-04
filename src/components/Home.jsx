import React from 'react';

const Home = () => {
  return (
    <div className=" silkscreen flex flex-col items-start justify-start  max-w-lg pl-10 pr-5">
      {homeText.map((text, index) => {
        return (
          <div
            key={index}
            ref={(el) => {
              scrollRef.current[index] = el;
            }}
            className="wrapper flex flex-col items-start justify-start "
          >
            <div className="hide">{text}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;

const homeText = [
  'Eloquent solutions to unique problems fuel my interest to learn more.',
  "Leveling up my web development skills gives me an enormous sense of fulfillment and pride. It's the keyboard and me, just a few keystrokes away from a solution.",
  "Getting to intimately know every inch of a subject is my superpower; whether it's coding, cooking, coffee, shaving, health, hiking, video games or anything else I invest myself in, I always value an opportunity to get closer to achieving mastery.",
];

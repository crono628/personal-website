import React from 'react';

const About = () => {
  return (
    <>
      <div className=" text-center sticky top-20 sm:top-24 bg-orange-200 z-40 text-2xl py-5 w-full">
        About Me
      </div>
      {homeText.map((text, index) => {
        return (
          <div
            key={index}
            className="py-5 flex flex-col items-start justify-start "
          >
            {text}
          </div>
        );
      })}
    </>
  );
};

export default About;

const homeText = [
  'Eloquent solutions to unique problems fuel my passion to learn more.',
  "Leveling up my web development skills gives me an enormous sense of fulfillment and pride. It's the keyboard and me, just a few keystrokes away from a solution.",
  "Getting to intimately know every inch of a subject is my superpower; whether it's coding, cooking, coffee, shaving, health, hiking, video games or anything else I invest myself in, I always value an opportunity to get closer to achieving mastery.",
];

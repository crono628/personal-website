import React, { useEffect, useLayoutEffect, useRef } from 'react';

const Home = () => {
  const scrollRef = useRef([]);

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleAnimationScroll);

    return () => window.removeEventListener('scroll', handleAnimationScroll);
  }, []);

  const handleAnimationScroll = () => {
    scrollRef.current.forEach((ref) => {
      if (
        ref.getBoundingClientRect().bottom <
        window.innerHeight + window.innerHeight / 3
      ) {
        ref.classList.add('slide-in');
      } else if (ref.getBoundingClientRect().bottom > window.innerHeight) {
        ref.classList.remove('slide-in');
      }
    });
  };

  return (
    <div
      onScroll={() => handleScrollAnimation(scrollRef[index])}
      className="silkscreen flex flex-col items-start justify-start mt-10  max-w-lg px-10"
    >
      {homeText.map((text, index) => {
        return (
          <div
            key={index}
            ref={(el) => {
              scrollRef.current[index] = el;
            }}
            className="hide flex flex-col items-start justify-start my-36"
          >
            {text}
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
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sunt libero eius molestias, totam et ea tempore assumenda nobis ducimus cumque ipsum beatae ullam aliquid iste, ipsam sapiente in perferendis. Inventore eaque vero, repellat iusto ipsum temporibus illo velit, quidem repellendus aliquam odio autem, iure dolor veritatis tempora.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sunt libero eius molestias, totam et ea tempore assumenda nobis ducimus cumque ipsum beatae ullam aliquid iste, ipsam sapiente in perferendis. Inventore eaque vero, repellat iusto ipsum temporibus illo velit, quidem repellendus aliquam odio autem, iure dolor veritatis tempora.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sunt libero eius molestias, totam et ea tempore assumenda nobis ducimus cumque ipsum beatae ullam aliquid iste, ipsam sapiente in perferendis. Inventore eaque vero, repellat iusto ipsum temporibus illo velit, quidem repellendus aliquam odio autem, iure dolor veritatis tempora.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sunt libero eius molestias, totam et ea tempore assumenda nobis ducimus cumque ipsum beatae ullam aliquid iste, ipsam sapiente in perferendis. Inventore eaque vero, repellat iusto ipsum temporibus illo velit, quidem repellendus aliquam odio autem, iure dolor veritatis tempora.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sunt libero eius molestias, totam et ea tempore assumenda nobis ducimus cumque ipsum beatae ullam aliquid iste, ipsam sapiente in perferendis. Inventore eaque vero, repellat iusto ipsum temporibus illo velit, quidem repellendus aliquam odio autem, iure dolor veritatis tempora.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sunt libero eius molestias, totam et ea tempore assumenda nobis ducimus cumque ipsum beatae ullam aliquid iste, ipsam sapiente in perferendis. Inventore eaque vero, repellat iusto ipsum temporibus illo velit, quidem repellendus aliquam odio autem, iure dolor veritatis tempora.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sunt libero eius molestias, totam et ea tempore assumenda nobis ducimus cumque ipsum beatae ullam aliquid iste, ipsam sapiente in perferendis. Inventore eaque vero, repellat iusto ipsum temporibus illo velit, quidem repellendus aliquam odio autem, iure dolor veritatis tempora.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sunt libero eius molestias, totam et ea tempore assumenda nobis ducimus cumque ipsum beatae ullam aliquid iste, ipsam sapiente in perferendis. Inventore eaque vero, repellat iusto ipsum temporibus illo velit, quidem repellendus aliquam odio autem, iure dolor veritatis tempora.',
];

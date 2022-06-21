const projectCollection = [
  {
    name: 'Wheres Waldo?',
    description:
      'Classic Waldo search built with React, styled with MUI, and served from Firebase. Each game has optional "best time" records stored on Firebase and a timer that can be paused. Adjusting a reusable algorithm that could be used for any picture was a challenge but ultimately provided me with a deeper understanding of event targeting.',
    onLoad: 'waldo',
    image: require('../img/waldo.gif'),
    repo: 'https://github.com/crono628/wheres-waldo',
    live: 'https://waldo-ce529.web.app/',
  },
  {
    name: 'Weather Forecast',
    description:
      'This weather app is built with React, styled with MUI, and relies on an API from OpenWeatherMap. Prioritizing reusable components in this app produces consistently reliable and symetric results.',
    onLoad: 'weather',
    image: require('../img/weather.gif'),
    repo: 'https://github.com/crono628/new-weather-app',
    live: 'https://weather-4b046.web.app/',
  },
  {
    name: "Jenna's List",
    description:
      'My wife described what her dream to-do list would look like, so I built it for her. User authorization and the backend database took the lead on this Firebase served app. React Router is utilized for signing up and logging in.',
    onLoad: 'todo',
    image: require('../img/jennaslist.gif'),
    repo: 'https://github.com/crono628/react-to-do-list',
    live: 'https://www.jennaslist.app/#/login',
  },
  {
    name: 'Shopping Cart',
    description:
      'Time travel to when nobody beat The Wiz. This simple app showcases reusable components and a persistent shopping cart for the user to manipulate.',
    onLoad: 'cart',
    image: require('../img/thewiz.gif'),
    repo: 'https://github.com/crono628/cart',
    live: 'https://crono628.github.io/cart/',
  },
];

export { projectCollection };
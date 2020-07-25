import Hangman from '../img/Hangman.png';
import Weather from '../img/weather.png';
import Recipe from '../img/recipeapp.png';
import Playschool from '../img/playschool.png';
import Portfolio from '../img/portfolio.png';
import Excercise from '../img/excercisetracker.png';
const Sdata = [
  {
    imgsrc: Portfolio,
    title: 'Portfolio react Appilcation',
    info: 'This is a responsive portfolio website made with react.',
    link: '/home',
  },
  {
    imgsrc: Hangman,
    title: 'Hangman game',
    info: 'This is a hangman game where you need to guess a word. It is made completely in javascript.',
    link: 'https://poo-hangman-game.herokuapp.com/',
  },
  {
    imgsrc: Excercise,
    title: 'Excercise Tracker Application',
    info: 'This is a Excercise tracker which is made using MERN stack.',
    link: 'https://excercise-tracker-poo.herokuapp.com/',
  },
  {
    imgsrc: Recipe,
    title: 'Recipe Application',
    info:
      'This is recipe application made using javascript were data is stored in local storage.',
    link: 'https://poo-recipe.herokuapp.com/',
  },
  {
    imgsrc: Playschool,
    title: 'School website',
    info: 'This a basic school website made with bootstrap, html and css.',
    link: 'http://shradhaacademy.surge.sh/',
  },
  {
    imgsrc: Weather,
    title: 'Weather Application',
    info:
      'This is a Weather application which fetches data from darksky and mapbox.',
    link: 'https://weather-poo.herokuapp.com/ ',
  },
];
export default Sdata;

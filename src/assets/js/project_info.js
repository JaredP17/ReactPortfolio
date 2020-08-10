import remoteIsland from "../../assets/thumbnails/remote-island.png"
import memoryMaker from "../../assets/thumbnails/memory-maker.png"
import passwdGen from "../../assets/thumbnails/passwd-generator.png"
import weatherDash from "../../assets/thumbnails/weather-dashboard.png"
import NoteTaker from "../../assets/thumbnails/note-taker.png"

const projectInfo = [
  {
    title: "Remote Island",
    description:
      "This project was created to provide a solution to everyone's want to escape (from reality)! We created a website where the user can decide what type of vacation they want to take and be transported to a page with videos (some live) of their desired getaway.",
    repo: "https://github.com/JaredP17/gt-project-1",
    url: "https://jaredp17.github.io/gt-project-1/",
    image: remoteIsland,
  },
  {
    title: "Memory Maker",
    description: "Memory Maker is a full-stack web application created with the MVC paradigm. Memory Maker uses node.js with an express.js server, a mySQL database, a sequelize ORM, and handlebars.js as a view engine. The app features an interactive UI and responsive design.",
    repo: "https://github.com/JaredP17/Memory-Maker",
    url: "https://memory-maker.herokuapp.com/",
    image: memoryMaker,
  },
  {
    title: "Password Generator",
    description: "An application that generates a random password based on user selected criteria. This app features dynamically updated HTML/CSS powered by JavaScript and includes a clean and polished UI and is responsive.",
    repo: "https://github.com/JaredP17/PasswordGenerator",
    url: "https://jaredp17.github.io/PasswordGenerator/",
    image: passwdGen,
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard that features dynamically updated HTML and CSS and uses the OpenWeather API to retrieve weather data for cities. Type in a city and see the current and 5-Day forecasts. City searches are persistent.",
    repo: "https://github.com/JaredP17/gt-hw6-weather-dashboard",
    url: "https://jaredp17.github.io/gt-hw6-weather-dashboard/",
    image: weatherDash,
  },
  {
    title: "Note Taker",
    description: "An application that can be used to write, save, and delete notes. This application uses an express backend and saves/retrieves note data to/from a JSON file.",
    repo: "https://github.com/JaredP17/gt-hw-note-taker",
    url: "https://gt-hw-note-taker-jrp.herokuapp.com/",
    image: NoteTaker,
  },
];

export default projectInfo;

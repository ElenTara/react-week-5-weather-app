import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Odessa" />
        <footer>
          This project was coded by Elena Tarasenko and is{" "}
          <a
            href="https://github.com/ElenTara/react-week-5-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and hosted on
          <a
            href="https://vermillion-flan-52a3e0.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

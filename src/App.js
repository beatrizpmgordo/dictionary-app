import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={logo}
            className="SheCodes-logo img-fluid"
            alt="logo"
          />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by{" "}
            <a
              href="https://www.shecodes.io/graduates/93323-beatriz-gordo"
              target="_blank"
              rel="noreferrer"
            >
              Beatriz Gordo
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/beatrizpmgordo/dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              open sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://app.netlify.com/sites/shecodes-dictionaryapp/overview"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlifly
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;

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
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Beatriz Gordo</small>
        </footer>
      </div>
    </div>
  );
}

export default App;

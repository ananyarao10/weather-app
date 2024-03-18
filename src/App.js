import './App.css';
import Weather from './Weather';

function Header() {
  return (
    <header>
      <h1>Weather App</h1>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Weather />
    </div>
  );
}

export default App;
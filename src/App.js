import Navbar from "./components/navbar";
import Navigation from "./components/navigation";
import Departamentos from "./components/departamentos";
import Slider from "./components/slider";

import "./App.css"

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Navigation />
        <Departamentos />
      </header>
      <section className="slider-container">
        <div className="container">
          <Slider />
        </div>
      </section>
    </div>
  );
}

export default App;

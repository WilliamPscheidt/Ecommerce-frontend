import Navbar from "./components/navbar";
import Navigation from "./components/navigation";
import Departamentos from "./components/departamentos";
import Slider from "./components/slider";
import Produtos from "./components/produtos";

import "./App.css"

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Navigation />
        <Departamentos />
      </header>
      <section id="slider">
          <Slider />
      </section>
      <main>
        <Produtos />
      </main>
    </div>
  );
}

export default App;

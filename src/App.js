import Navbar from "./components/navbar";
import Navigation from "./components/navigation";
import Departamentos from "./components/departamentos";
import Slider from "./components/slider";
import Produtos from "./components/produtos";
import Footer from "./components/footer";

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
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

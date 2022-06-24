import Navbar from "./components/navbar";
import Navigation from "./components/navigation";
import Departamentos from "./components/departamentos";

import "./App.css"

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Navigation />
        <Departamentos />
      </header>
    </div>
  );
}

export default App;

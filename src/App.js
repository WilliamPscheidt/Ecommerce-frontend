import Container from "./components/container";
import Navbar from "./components/navbar";

import "./App.css"

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Container />
      </header>
    </div>
  );
}

export default App;

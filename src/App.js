import "./App.css";
import HomePage from "./Pages/HomePage";
import Services from "./Services/Services";
import Aboutus from "./Aboutus/Aboutus";

function App() {
  return (
    <div className="App">
      <HomePage />
      <div>
        <Services />
      </div>

      <Aboutus />
    </div>
  );
}

export default App;

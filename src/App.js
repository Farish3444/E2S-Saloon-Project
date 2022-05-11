import "./App.css";
import HomePage from "./Pages/HomePage";
import Services from "./Services/Services";
import Aboutus from "./Aboutus/Aboutus";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <HomePage />
      <div>
        <Services />
      </div>
      <div>
        <Aboutus />
      </div>
    </div>
  );
}

export default App;

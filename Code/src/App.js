// Files
import "./App.css";

// Components
import Heading from "./components/Heading";
import Modes from "./components/Modes";
import Counter from "./components/Counter";
import Sittings from "./components/Sittings";

// App JSX
const App = () => {
  return (
    <div className="App">
      <Heading />
      <Modes />
      <Counter />
      <Sittings />
    </div>
  );
};

export default App;

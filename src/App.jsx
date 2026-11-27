import "./App.css";
import Boxcomponent from "./boxes/boxes";
import { Symbol } from "./data";

function App() {
  return (
    <div>
      <h1>{Symbol.title}</h1>
      <p>{Symbol.subtitle}</p>
      <Boxcomponent />
    </div>
  );
}

export default App;

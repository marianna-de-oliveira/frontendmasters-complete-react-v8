import { createRoot } from "react-dom/client";
import Pet from "./Pet";

const App = () => {
  <div>
    <h1>Adopt-Me</h1>
    <Pet name="luna" animal="dog" breed="havanese" />
    <Pet name="eita" animal="não sei" breed="bicho" />
    <Pet name="ruffus" animal="gato" breed="vira-lata" />
  </div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

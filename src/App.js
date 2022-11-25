import Mermaid from "./Mermaid";
import SequenceExample from "./SequenceExample";
import RefreshExample from "./RefreshExample";
import './App.css';
import ClassExample from "./ClassExample";
import StateExample from "./StateExample";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Mermaid chart={SequenceExample} />
        <br>
        </br>
        <Mermaid chart={RefreshExample} />
        <br>
        </br>
        <Mermaid chart={ClassExample} />
      </header>
    </div>
  );
}

export default App;

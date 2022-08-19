import './App.css';
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./style/index.css";

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Header />
        <Home />
      </DndProvider>
    </div>
  );
}

export default App;

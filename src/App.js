import "./App.css";
import CardHome from "./components/card.js";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <div class="mainContainer">
        <div class="sidebar"></div>
        <div class="content">
            <div class="top"></div>
            <div class="bottom">
                <div class="bottom-left"></div>
                <div class="bottom-right"><CardHome></CardHome></div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;

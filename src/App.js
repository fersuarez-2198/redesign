import "./App.css";
import CardHome from "./components/card.js";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <div className="sidebar">Sidebar actual</div>
        <div className="content">
          <div className="top">Breadcrumb actual</div>
          <div className="bottom">
            <div className="bottom-left">Menú de asignatura actual</div>
            <div className="bottom-right">
              <CardHome></CardHome>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

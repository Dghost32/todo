import { useContext } from "react";
/* components */
import Main from "./components/Main";
import Alert from "./components/Alert";
/* context */
import AppContext from "./context/AppContext";
/* styles */
import "./App.css";
import "./styles/app-image.css";
import "./styles/alerts.css";

function App() {
  const { bgType } = useContext(AppContext);
  return (
    <div id="app" className={`app ${bgType}`}>
      <div className="app-image" />
      <Main />
      <Alert />
    </div>
  );
}

export default App;

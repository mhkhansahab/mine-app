import { FC } from "react";
import "./App.css";
import MuiTheme from "./theme";
import Home from "./pages/Home";

const App: FC = () => {
  return (
    <div className="App">
      <MuiTheme>
        <Home />
      </MuiTheme>
    </div>
  );
};

export default App;

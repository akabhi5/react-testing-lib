import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Application } from "./components/application/Application";
import { Skills } from "./components/skills/Skilss";
import { Counter } from "./components/counter/Counter";
import { AppProviders } from "./providers/AppProviders";
import { MuiMode } from "./components/mui/MuiMode";
import { CounterTwo } from "./components/counter-two/CounterTwo";

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Application /> */}
        {/* <Counter /> */}
        {/* <MuiMode /> */}
      </div>
    </AppProviders>
  );
}

export default App;

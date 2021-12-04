import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
// import Skills from "./Components/Skills";
// import Projects from "./Components/Projects";
// import Contact from "./Components/Contact";

function App() {
  return (
    <main className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        {/* <Route exact path="/" component={Projects} />
        <Route exact path="/" component={Skills} />
        <Route exact path="/" component={Contact} />  */}
      </Switch>
    </main>
  );
}

export default App;

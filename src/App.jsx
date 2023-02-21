import "./App.css";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contacts/Contact";
import Github from "./Components/Github/Github";

function App() {
 
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Skills />
      <Github   />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

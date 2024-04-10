import About from "./components/About";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";


export default function Home() {
  return (
    <main>
    <Navbar/>
    <Main/>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
    </main>
  );
}

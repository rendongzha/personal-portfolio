import { Fragment } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Welcome from "./components/Welcome";

function App() {
  return (
    <Fragment>
      <Navbar />
      <main>
        <Welcome />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;

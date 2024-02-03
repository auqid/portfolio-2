import Header from './components/Header';
import Main from './components/Main';
import './App.css';
//import Footer from './components/Footer';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Projects from './components/Projects'


function App() {
  return (
    <>
    <Header/>
    <Main/>
  {/* <Footer/> */}
  <Intro/>
  <Skills/>
  <Projects/>
    </>
  );
}

export default App;

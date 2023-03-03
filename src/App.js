import logo from './logo.svg';
import './App.css';
import Header from './compenents/header/header';
import Home from './compenents/home/home';
import navbar from './compenents/header/Navbar';
import About from './compenents/about/about';
import Resume from './compenents/resume/resume';

const App = () => {
  return (
    <div className="">
      
      <Header />
      <Home />
      <About />
      <Resume />
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Content from './components/Content';
import Footer from './components/Footer'
import Home from "./pages"
import About from './pages/about'
import Contact from './pages/contact'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (

    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Hero />
      <Content />
      <Footer />
    </>

  );
}

export default App;

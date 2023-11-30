import './App.css';
import Navbar from './components/Navbar';
import RequestProject from './components/RequestProject';
import Carousel from './components/Carousel';
import Aboutus from './components/Aboutus';
import Sponsors from './components/Sponsors';
import Achievement from './components/Achievement';
import Footer from './components/Footer';
import Doubts from './components/Doubts';
import Teams from './components/Teams';
import Batches from './components/Batches';
import Project from './components/Projects';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Router hashType='slash'>  {/*hashType='slash' */}
        <Route path="/" component={Navbar}/>
        <Route path="/" exact component={Carousel} />
        <Route path="/" exact component={Aboutus} />
        <Route path="/" exact component={Sponsors} />
        <Route path="/" exact component={Achievement} />
        <Route path="/" component={RequestProject} />
        <Route path="/" component={Doubts} />
        {/* <Route path="/team" component={Navbar} element={<Navbar highlight="btn-ylw"/>}/> */}
        <Route path="/team" exact component={Teams} />
        <Route path="/team" exact component={Batches} />
        <Route path="/project" exact component={Project} />
        <Route path="/blogs" exact component={Blog} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/" component={Footer} />
      </Router>
    </>
  );
}

export default App;

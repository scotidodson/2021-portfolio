import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Resume from './containers/Resume';
import Portfolio from './containers/Portfolio';
import Contact from './containers/Contact';
import Footer from './containers/Footer';

function App() {
  return (
    <Router>
      <div className='navBar'>
      </div>
      <nav className='navigation'>
        <ul>
            {/* <li>
              <Link to='/'>HOME</Link>
            </li> */}
            <li>
              <Link to='/portfolio'>WORK</Link>
            </li>
            <li>
              <Link to='/resume'>RESUME</Link> 
            </li>
            <li>
              <Link to='/about'>ABOUT</Link>  
            </li>
            <li>
              <Link to='/contact'>CONTACT</Link>
            </li>
        </ul>
      </nav>
      <div className='sd'>
            <span className='dodson'><Link to='/'>D</Link></span>
            <span className='scoti'><Link to='/'>S</Link></span>
        </div>
      <Switch>
        <Route path='/about'><About/></Route>
        <Route path='/resume'><Resume/></Route>
        <Route path='/portfolio'><Portfolio/></Route>
        <Route path='/contact'><Contact/></Route>
        <Route path='/'><Home/></Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
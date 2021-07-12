import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './containers/Home';
import Hero from './components/Hero';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
function App() {
  return (
    <Router>
      <nav className='navigation'>
        <div className='sd'>
            <span className='dodson'><Link to='/'>D</Link></span>
            <span className='scoti'><Link to='/'>S</Link></span>
        </div>
        <ul>
            {/* <li>
              <Link to='/'>HOME</Link>
            </li> */}
            <li><Link to='/about'>ABOUT</Link></li>
            <li><Link to='/portfolio'>WORK</Link></li>
            <li><Link to='/resume'>RESUME</Link></li>
            <li><Link to='/contact'>CONTACT</Link></li>
        </ul>
      </nav>
      <div className='pageContainer'>
        <Switch>
          <Route path='/about'><Hero/></Route>
          <Route path='/resume'><Resume/></Route>
          <Route path='/portfolio'><Portfolio/></Route>
          <Route path='/contact'><Contact/></Route>
          <Route path='/'><Home/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
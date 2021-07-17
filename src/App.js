import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import PageContainer from './containers/PageContainer';
import FourOhFour from './containers/FourOhFour';
// import ProjectPage from './components/ProjectPage';
// import {PORTFOLIO_DATA} from './data';
import logo from './assets/striped-penant-logo.PNG';

function App() {
  return (
    <Router>
      <nav className='navigation'>
        <Link to='/'>
          <img src={logo} alt="scoti dodson logo" className="navigation__logo" />
        </Link>
        <ul>
            <li><HashLink smooth to='#'>ABOUT</HashLink></li>
            <li><HashLink smooth to='#portfolio'>WORK</HashLink></li>
            <li><HashLink smooth to='#resume'>RESUME</HashLink></li>
            <li><HashLink smooth to='#contact'>CONTACT</HashLink></li>
        </ul>
      </nav>
        <Switch>
          <Route exact path='/'><PageContainer/></Route>
          <Route path='/'><FourOhFour/></Route>
        </Switch>
    </Router>
  );
}

export default App;
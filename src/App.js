import './style/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import PageContainer from './containers/PageContainer';
import FourOhFour from './containers/FourOhFour';
// import ProjectPage from './components/ProjectPage';
// import {PORTFOLIO_DATA} from './data';

function App() {
  return (
    <Router>
      <div className='nav'>
        <nav>
          <ul>
              <li><HashLink smooth to='#top'>ABOUT</HashLink></li>
              {/* <li><HashLink smooth to='#portfolio'>WORK</HashLink></li> */}
              <li><HashLink smooth to='#resume'>EXPERIENCE</HashLink></li>
              <li><HashLink smooth to='#contact'>CONTACT</HashLink></li>
          </ul>
        </nav>
      </div>
      <div id="top"></div>
        <Switch>
          {/* <Route path='/work/:id'><ProjectPage /></Route> */}
          <Route exact path='/'><PageContainer/></Route>
          <Route path='/'><FourOhFour/></Route>
        </Switch>
    </Router>
  );
}

export default App;
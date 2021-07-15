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
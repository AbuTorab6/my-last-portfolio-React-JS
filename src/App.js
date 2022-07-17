

import Hero from './component/Hero'
import Navigation from './component/Navigation'
import About from './component/About'
import Skill from './component/Skill';
import Certificate from './component/Certificate';
import Count from './component/Count';
import Project from './component/Project'
import AllProject from './component/AllProject'
import Contact from './component/Contact';
import Footer from './component/Footer';
import EveryPageTop from './component/EveryPageTop';
import NotFound from './component/NotFound';

import MyRouter from './router/MyRouter';

import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <MyRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;

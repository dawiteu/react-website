import { Fragment } from 'react';
import { BrowserRouter as Browser, Switch, Route} from 'react-router-dom'; 
import Navigation from "./components/Navigation";

import Home from './pages/Home';
import Gal1 from './pages/Gal1'; 
import Gal2 from './pages/Gal2';
import Services from './pages/Services'; 
import About from './pages/About'; 
import Contact from './pages/Contact'; 

function App() {
  return (
    <div className="container-fluid">
      <Browser>
        <Navigation />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/gallery1" component={Gal1} />
            <Route exact path="/gallery2" component={Gal2} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
        </Switch>
      </Browser>
    </div>
  );
}

export default App;

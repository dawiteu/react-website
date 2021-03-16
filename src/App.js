import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import Navigation from "./components/Navigation";


function App() {
  return (
    <Fragment>
      <Router>

        <Navigation />

        <Switch>

        </Switch>
      </Router>

      {/* <i className="fab fa-facebook-messenger"></i> */}

      
    </Fragment>
  );
}

export default App;

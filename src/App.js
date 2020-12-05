import Home from './pages/Home';
import FoodDelivery from './pages/FoodDelivery';
import NotFound from './pages/NotFound'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';


export default function App() {
  // pages with no routing
  // return (
  //   <>
  //     <Home />
  //     <FoodDelivery />
  //   </>
  // )
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/food-delivery">
          <FoodDelivery />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}

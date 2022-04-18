import Home from "./pages/Home";
import store from "./container/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfileDisplay from "./pages/ProfileDisplay";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/profile">
              <ProfileDisplay />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

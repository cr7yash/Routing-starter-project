import { Redirect, Route, Switch } from "react-router-dom";

import AllQuotes from "./Pages/AllQuotes";
import NewQuotes from "./Pages/NewQuotes";
import QuotesDetails from "./Pages/QuotesDetails";
function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/quotes" />
      </Route>
      <Route path="/quotes" exact>
        <AllQuotes />
      </Route>
      <Route path="/quotes/:quoteid">
        <QuotesDetails />
      </Route>
      <Route path="/new-quote" component={NewQuotes} />
    </Switch>
  );
}

export default App;

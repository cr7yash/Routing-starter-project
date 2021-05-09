import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import Layout from "./components/layout/Layout";

import AllQuotes from "./Pages/AllQuotes";
import NewQuotes from "./Pages/NewQuotes";
import QuotesDetails from "./Pages/QuotesDetails";

// const DebugRouter = ({ children }: { children: any }) => {
//   const { location } = useHistory();

//   console.log(
//     `Route: ${location.pathname}${location.search}, State: ${JSON.stringify(
//       location.state
//     )}`
//   );

//   return children;
// };
function App() {
  return (
    <Layout>
      <Switch>
        {/* <DebugRouter> */}
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
        {/* </DebugRouter> */}
      </Switch>
    </Layout>
  );
}

export default App;

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppContext from "./AppContext";
import { Title, Loading } from "./components";
import { Database } from "./interfaces/database";
import { Details, Home, Profile, Layout, NotFound } from "./views";

export default function App() {
  const [data, setData] = useState<Database | null>(null);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    if (!isLoading && !data) {
      setIsloading(true);
      fetch("/database.json")
        .then((d) => d.json())
        .then((response) => setData(response as Database))
        .catch((e) => console.error(e))
        .then(() =>
          setTimeout(() => {
            // this is to simulate a call in the real database instead of a local file
            setIsloading(false);
          }, 1000)
        );
    }
  }, [isLoading, data]);

  return (
    <AppContext.Provider value={data!}>
      {isLoading || !data ? (
        <div id="loading">
          <Title render="Loading..." />
          <Loading />
        </div>
      ) : (
        <Router>
          <Layout>
            <Title render={data?.site.title!} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/profile" exact component={Profile} />
              <Route path="/details/:id" exact component={Details} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </Router>
      )}
    </AppContext.Provider>
  );
}

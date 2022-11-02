import { Route, Switch, Redirect } from "react-router-dom";


import Header from "./components/ui/header";
import { Accessories, Blog, Catalog, Home, PlantCare } from "./layouts";

function App() {
  document.body.className = "transition-all bg-white dark:bg-main-black-body";
  return (
    <>
      <Header/>
      <Switch>
        {/* <Route path="/catalog/" component={PlantPage} /> */}
        <Route path="/accessories" component={Accessories} />
        <Route path="/plantcare" component={PlantCare} />
        <Route path="/blog" component={Blog} />
        {/* <Route path="/bag" component={ShoppingCart} /> */}
        {/* <Route path="/user" component={User} /> */}
        <Route path="/catalog/:plantId?" component={Catalog} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;

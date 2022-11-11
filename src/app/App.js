import { useState, useMemo } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/ui/header";
import { Accessories, Blog, Catalog, Home, PlantCare, User } from "./layouts";

function App() {
  document.body.className = "transition-all bg-white dark:bg-main-black-body";
  const [fixedHeader, setFixedHeader] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollDistance, setScrollDistance] = useState(0);

  useMemo(() => {
    window.onscroll = () => {
      setScrollDistance(window.scrollY);
      if ((scrollDistance > lastScrollTop || !scrollDistance) && fixedHeader) {
        setFixedHeader(false);
      } else if (scrollDistance < lastScrollTop && !fixedHeader) {
        setFixedHeader(true);
      }
      setLastScrollTop(scrollDistance);
    };
  }, [fixedHeader, lastScrollTop, scrollDistance]);
  return (
    <>
      <div
        className={`relative ${
          fixedHeader ? "top-[70px] lg:top-[107px]" : "top-0"
        }`}
      >
        <Header fixed={fixedHeader} />

        <Switch>
          <Route path="/accessories" component={Accessories} />
          <Route path="/plantcare" component={PlantCare} />
          <Route path="/blog" component={Blog} />
          {/* <Route path="/bag" component={ShoppingCart} /> */}
          <Route path="/user/:type?" component={User} />
          <Route path="/catalog/:plantId?" component={Catalog} />
          <Route path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </div>
    </>
  );
}

export default App;

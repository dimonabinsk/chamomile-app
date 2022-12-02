import { Typography } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/ui/header";
import { Accessories, Blog, Catalog, Home, PlantCare, User } from "./layouts";

function App() {
  const [fixedHeader, setFixedHeader] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
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
      <Typography
        as="div"
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
      </Typography>
    </>
  );
}

export default App;

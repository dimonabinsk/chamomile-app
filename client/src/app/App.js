import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/ui/header";
import {
  Accessories,
  Blog,
  Catalog,
  Home,
  Login,
  LogOut,
  PlantCare,
  User,
} from "./layouts";

import { AppLoader } from "./components/ui/hoc";
import { ProtectedRoute } from "./components/common";
import { BasketPage, LicensePage } from "./components/pages";


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
      <AppLoader>
        <div
          className={`relative ${
            fixedHeader ? "top-[70px] lg:top-[107px]" : "top-0"
          }`}
        >
          <Header fixed={fixedHeader} />
          <Switch>
            <ProtectedRoute path="/user/:userId?/:edit?" component={User} />
            <Route path="/accessories" component={Accessories} />
            <Route path="/plantcare" component={PlantCare} />
            <Route path="/blog" component={Blog} />
            <Route path="/basket" component={BasketPage} />
            <Route path="/login/:type?" component={Login} />
            <Route path="/logout" component={LogOut} />
            <Route path="/catalog/:plantId?" component={Catalog} />
            <Route path="/license" component={LicensePage} />
            <Route path="/" exact component={Home} />
            <Redirect to="/" />
          </Switch>
        </div>
      </AppLoader>
      <ToastContainer />
    </>
  );
}

export default App;

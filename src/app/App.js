import { Typography } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Button } from "@material-tailwind/react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/ui/header";
import {
  Accessories,
  Blog,
  Catalog,
  Home,
  PlantCare,
  User,
  LoadingData,
} from "./layouts";

function App() {
  const [fixedHeader, setFixedHeader] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollDistance, setScrollDistance] = useState(0);

  const notify = () =>
    toast.success("Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

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
          <Route path="/loading" component={LoadingData} />
          <Route path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </Typography>
      <Typography className="relative top-[1200px]">
        <Button size="md" color="amber" ripple={true} onClick={notify}>
          Notify!
        </Button>
        <ToastContainer />
      </Typography>
    </>
  );
}

export default App;

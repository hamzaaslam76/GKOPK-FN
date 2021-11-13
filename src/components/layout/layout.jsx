import React, { useEffect, useState } from "react";
import "./layout.css";
import Navbar from "../common/navbar/navbar";
import Home from "../home/home";
import { Affix, Layout as AntLayout } from "antd";
import { Route, Switch } from "react-router";
import gkopklogo from "../../images/Logo.png";
import Footer from "../common/footer/footer";
import About from "../about/about";
import MostRepeated from "../mostRepeated/mostRepeated";
function Layout() {
  const { Content } = AntLayout;
  const [navSelectedKey, setNavSelectedKey] = useState("0");
  const [isHamburger, setIsHamburger] = useState(false);

  useEffect(() => {
    setIsHamburger(window.innerWidth <= 970 ? true : false);
  }, []);

  window.addEventListener("resize", () => {
    setIsHamburger(window.innerWidth <= 970 ? true : false);
    console.log("ishamburger", isHamburger);
  });

  return (
    <AntLayout id="main-layout">
      <Affix>
        <Navbar
          img={gkopklogo}
          className={"black-navbar"}
          isHamburger={isHamburger}
        />
      </Affix>
      <Content>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/most-repeated" component={MostRepeated} />
          <Route path="/ongoing-event" component={MostRepeated} />
          <Route path="/categories" component={MostRepeated} />
          <Route path="/" component={Home} />
        </Switch>
      </Content>
      <Footer />
    </AntLayout>
  );
}
export default Layout;

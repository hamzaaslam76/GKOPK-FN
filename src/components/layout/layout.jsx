import React, { useEffect, useState } from  'react';
import './layout.css';
import Navbar from "../common/navbar/navbar";
import Home from '../home/home';
import { Affix , Layout as AntLayout} from 'antd';
import { Route, Switch } from 'react-router';
import gkopklogo from "../../images/Logo.png";
function Layout(){
    const {Content} = AntLayout;
    const [navSelectedKey, setNavSelectedKey] = useState("0");
    const [isHamburger, setIsHamburger] = useState(false);

    useEffect(() => {
        setIsHamburger(window.innerWidth <= 770 ? true : false);
    }, []);

    window.addEventListener('resize', () => {
        setIsHamburger(window.innerWidth <= 770 ? true : false);
        console.log("ishamburger", isHamburger);
    });

return(
<AntLayout id="main-layout">
            <Affix>
                <Navbar
                    img={gkopklogo}
                    className={"black-navbar"}
                    isHamburger={isHamburger}
                    navSelectedKey={navSelectedKey}
                    setNavSelectedKey={setNavSelectedKey}
                />
            </Affix>
            <Content>
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                    
                </Switch>
            </Content>
        </AntLayout>
);
}
export default Layout;
import React, { useState } from "react";
import { Menu, Button } from "antd";
import { Link } from "react-router-dom";
import { Header } from "antd/lib/layout/layout";
import { MenuUnfoldOutlined, CloseOutlined } from "@ant-design/icons";
import "./navbar.css";
function Navbar({ img, className, isHamburger, navSelectedKey, setNavSelectedKey }) {
  const handleMenuSelect = (value) => {
    setNavSelectedKey(value.key);
  };
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Header className={`header ${isHamburger ? "hamburger-menu" : ""} ${!collapsed ? "show-hamburger-menu" : ""}  ${className}`}>
      <div className="container">
        <div>
          <Link to="/">
            <img className="navbar-logo-img" src={img} />
          </Link>
        </div>
        {isHamburger &&
          <Button className="hamburger-menu-button" type="primary" onClick={() => { setCollapsed(!collapsed) }} style={{ marginBottom: 16, marginRight: 25 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : CloseOutlined)}
          </Button>
        }

        <div className={"hamburger-menu-div"}>
          {!collapsed && <div className="overlap-menu" onClick={() => { setCollapsed(!collapsed) }}></div>}
          <Menu
            theme="dark"
            mode={isHamburger ? "vertical" : "horizontal"}
            selectedKeys={navSelectedKey}
            className={`navbar-menu ${!collapsed ? "showmenu" : ""}`}
            onSelect={handleMenuSelect}
          >
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/about">About Us</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/ongoing-events">Ongoing Events</Link>
            </Menu.Item>
            <Menu.Item key="4">
            <Link to="/most-repeated">Most Repeated</Link>
            </Menu.Item>
            <Menu.Item key="5">
            <Link to="/past-papers">Past Papers</Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/essays">Essays</Link>
            </Menu.Item>
            <Menu.Item key="7">
              <Link to="/categories">Categories</Link>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </Header>
  );
}


export default Navbar;

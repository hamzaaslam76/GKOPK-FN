import React, { useState, useEffect } from "react";
import { Menu, Button, Drawer, Row, Col, Typography, Space } from "antd";
import { Link } from "react-router-dom";
import { Header } from "antd/lib/layout/layout";
import {
  MenuUnfoldOutlined,
  CloseOutlined,
  DownOutlined,
} from "@ant-design/icons";
import "./navbar.css";
import { useHistory } from "react-router";
import RiversImage from "../../../images/Rivers.png";
import DistrictsImage from "../../../images/District.png";
import MountainsImage from "../../../images/mountain.png";
import HistoryImage from "../../../images/Group 6.png";
import EnergyImage from "../../../images/ecosystem.png";
import AgricultureImage from "../../../images/agriculture.png";

import config from "../../../config";
import axios from "axios";
import { useDispatch } from "react-redux";
function Navbar({
  img,
  className,
  isHamburger,
  navSelectedKey,
  setNavSelectedKey,
}) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [collapsed, setCollapsed] = useState(true);
  const [drawerContent, setDrawerContent] = useState();
  const [drawerVisible, setDrawerVisible] = useState({
    title: "",
    visible: false,
  });
  const [imgs, setImgs] = useState([
    RiversImage,
    DistrictsImage,
    MountainsImage,
    HistoryImage,
    EnergyImage,
    AgricultureImage,
  ]);
  const handleMenuSelect = (value) => {
    setNavSelectedKey(value.key);
    switch (value.key) {
      case "6173c6b031c271202cfdcd78":
        history.push("/");
        break;
      case "6173c70031c271202cfdcd79":
        history.push("/about");
        break;
      case "6173d4f931c271202cfdcd7a":
        dispatch({
          type: "SET_STATE",
          payload: { id: value.key, title: "Ongoing Events" },
        });
        history.push("/ongoing-event");
        break;
      case "6173d51d31c271202cfdcd7b":
        dispatch({
          type: "SET_STATE",
          payload: { id: value.key, title: "Most Repeated" },
        });
        history.push("/most-repeated");
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    axios
      .get(`${config.url}category/menu`)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((err) => setCategories([]));
    return () => {};
  }, []);

  const setEssayDrawerContent = (cat) => {
    setDrawerContent(
      <Row>
        {cat &&
          cat.subMenu.length > 0 &&
          cat.subMenu.map((item) => (
            <Col span={12}>
              <p className="navigation-drawer-heading">{item.name}</p>
              <Menu
                className="navigation-drawer-list"
                mode="inline"
                //theme="dark"
                // inlineCollapsed={this.state.collapsed}
              >
                {item.subMenu.length > 0 &&
                  item.subMenu.map((sub) => (
                    <Menu.Item className="navigation-drawer-item" key={sub._id}>
                      {sub.name}
                    </Menu.Item>
                  ))}
              </Menu>
              {/* <ul className="navigation-drawer-list">
            <li className="navigation-drawer-item">
              Features of a Real Democracy
            </li>
            <li className="navigation-drawer-item">
              Emerging Power of Social Media
            </li>
            <li className="navigation-drawer-item">
              Is an Egalitarian Society Possible by Educating Masses?
            </li>
            <li className="navigation-drawer-item">Real Democracy</li>
            <li className="navigation-drawer-item">Social Media</li>
            <li className="navigation-drawer-item">Egalitarian Society</li>
            <li className="navigation-drawer-item">
              Features of a Real Democracy
            </li>
            <li className="navigation-drawer-item">
              Emerging Power of Social Media
            </li>
          </ul> */}
            </Col>
          ))}
        {/* <Col span={12}>
          <p className="navigation-drawer-heading">COMPLETE ESSAYS</p>
          <ul className="navigation-drawer-list">
            <li className="navigation-drawer-item">
              Emerging Power of Social Media
            </li>
            <li className="navigation-drawer-item">
              Is an Egalitarian Society Possible by Educating Masses?
            </li>
            <li className="navigation-drawer-item">
              Features of a Real Democracy
            </li>
          </ul>
        </Col> */}
      </Row>
    );
  };
  const handelItem = (value, name) => {
    console.log(value, name);
    setDrawerVisible(false);
    dispatch({
      type: "SET_STATE",
      payload: { id: value.key, title: name },
    });
    history.push("/categories");
  };
  const setCategoriesDrawerContent = (cat) => {
    setDrawerContent(
      <Row>
        <Col span={24}>
          <Row>
            {cat &&
              cat.subMenu.length > 0 &&
              cat.subMenu.map((item, index) => (
                <Col className="categories-drawer__col" span={6}>
                  <Menu
                    className="navigation-drawer-list"
                    mode="inline"
                    onClick={(e) => handelItem(e, item.name)}
                  >
                    <Menu.Item
                      className="navigation-drawer-item"
                      key={item._id}
                      title={item.name}
                    >
                      <img
                        src={imgs[index]}
                        className="categories-drawer__image"
                      />
                      <p className="categories-drawer__text">{item.name}</p>
                    </Menu.Item>
                  </Menu>
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
    );
  };

  const setPapersDrawerContent = (cat) => {
    setDrawerContent(
      <Row>
        <Col span={24}>
          <Row>
            {cat &&
              cat.subMenu.length > 0 &&
              cat.subMenu.map((item) => (
                <>
                  <Col span={6}>
                    <p className="navigation-drawer-heading">{item.name}</p>
                    <Menu
                      mode="inline"
                      className="navigation-drawer-list"
                      onClick={(e) => handelItem(e, item.name)}
                    >
                      {item.subMenu.length > 0 &&
                        item.subMenu.map((sub) => (
                          <Menu.Item
                            className="navigation-drawer-item"
                            key={sub._id}
                          >
                            {sub.name}
                          </Menu.Item>
                        ))}
                    </Menu>
                    {/* <ul className="navigation-drawer-list">
                      <li className="navigation-drawer-item">2019</li>
                      <li className="navigation-drawer-item">2020</li>
                      <li className="navigation-drawer-item">2021</li>
                    </ul> */}
                  </Col>
                </>
              ))}
            {/* <Col span={6}>
              <p className="navigation-drawer-heading">CURRENT AFFAIRS CSS</p>
              <ul className="navigation-drawer-list">
                <li className="navigation-drawer-item">2019</li>
                <li className="navigation-drawer-item">2020</li>
                <li className="navigation-drawer-item">2021</li>
              </ul>
            </Col>
            <Col span={6}>
              <p className="navigation-drawer-heading">PAKISTAN AFFAIRS CSS</p>
              <ul className="navigation-drawer-list">
                <li className="navigation-drawer-item">2019</li>
                <li className="navigation-drawer-item">2020</li>
                <li className="navigation-drawer-item">2021</li>
              </ul>
            </Col>
            <Col span={6}>
              <p className="navigation-drawer-heading">PMS KPK SCREENING</p>
              <ul className="navigation-drawer-list">
                <li className="navigation-drawer-item">2019</li>
                <li className="navigation-drawer-item">2020</li>
                <li className="navigation-drawer-item">2021</li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row>
            <Col span={6}>
              <p className="navigation-drawer-heading">ISLAMIC STUDIES CSS</p>
              <ul className="navigation-drawer-list">
                <li className="navigation-drawer-item">2019</li>
                <li className="navigation-drawer-item">2020</li>
                <li className="navigation-drawer-item">2021</li>
              </ul>
            </Col>
            <Col span={6}>
              <p className="navigation-drawer-heading">INSPECTOR FBR</p>
              <ul className="navigation-drawer-list">
                <li className="navigation-drawer-item">2019</li>
                <li className="navigation-drawer-item">2020</li>
                <li className="navigation-drawer-item">2021</li>
              </ul>
            </Col>

            <Col span={6}>
              <p className="navigation-drawer-heading">AD MOD</p>
              <ul className="navigation-drawer-list">
                <li className="navigation-drawer-item">2019</li>
                <li className="navigation-drawer-item">2020</li>
                <li className="navigation-drawer-item">2021</li>
              </ul>
            </Col> */}
          </Row>
        </Col>
      </Row>
    );
  };

  const getDrawersContent = (cat) => {
    switch (cat._id) {
      case "6173d5af31c271202cfdcd7d":
        setEssayDrawerContent(cat);
        break;
      case "6173d59631c271202cfdcd7c":
        setPapersDrawerContent(cat);
        break;
      case "6173d63331c271202cfdcd7e":
        setCategoriesDrawerContent(cat);
        break;
      default:
    }
  };

  const onDrawerLinkClick = (cat) => {
    if (drawerVisible.title == cat._id) {
      setDrawerVisible({ title: "", visible: false });
    } else {
      setDrawerVisible({ title: cat._id, visible: true });
      getDrawersContent(cat);
    }
  };

  return (
    <Header
      className={`header ${isHamburger ? "hamburger-menu" : ""} ${
        !collapsed ? "show-hamburger-menu" : ""
      }  ${className}`}
    >
      <div className="container">
        <div>
          <Link to="/">
            <img className="navbar-logo-img" src={img} />
          </Link>
        </div>
        {isHamburger && (
          <Button
            className="hamburger-menu-button"
            type="primary"
            onClick={() => {
              setCollapsed(!collapsed);
            }}
            style={{ marginBottom: 16, marginRight: 25 }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : CloseOutlined
            )}
          </Button>
        )}

        <div className={"hamburger-menu-div"}>
          {!collapsed && (
            <div
              className="overlap-menu"
              onClick={() => {
                setCollapsed(!collapsed);
              }}
            ></div>
          )}
          <Menu
            theme="dark"
            mode={isHamburger ? "vertical" : "horizontal"}
            selectedKeys={navSelectedKey}
            className={`navbar-menu ${!collapsed ? "showmenu" : ""}`}
            onSelect={handleMenuSelect}
          >
            {categories &&
              categories.length > 0 &&
              categories.map((cat) => (
                <>
                  {cat.subMenu && cat["subMenu"].length === 0 ? (
                    <Menu.Item
                      className="navbar-item"
                      key={cat._id}
                      onClick={() => {
                        setDrawerVisible(false);
                      }}
                    >
                      {cat.name}
                    </Menu.Item>
                  ) : (
                    <Menu.Item
                      className="navbar-item"
                      key={cat._id}
                      onClick={() => {
                        onDrawerLinkClick(cat);
                      }}
                    >
                      {cat.name}
                      <DownOutlined />
                    </Menu.Item>
                  )}
                </>
              ))}

            {/* <Menu.Item
              key="2"
              onClick={() => {
                setDrawerVisible({ title: "", visible: false });
              }}
            >
              <Link to="/about">About Us</Link>
            </Menu.Item>
            <Menu.Item
              key="3"
              onClick={() => {
                setDrawerVisible({ title: "", visible: false });
              }}
            >
              <Link to="/ongoing-events">Ongoing Events</Link>
            </Menu.Item>
            <Menu.Item
              key="4"
              onClick={() => {
                setDrawerVisible({ title: "", visible: false });
              }}
            >
              <Link to="/most-repeated">Most Repeated</Link>
            </Menu.Item>
            <Menu.Item
              key="5"
              onClick={() => {
                onDrawerLinkClick("paper");
              }}
            >
              <Link to="/past-papers">
                Past Papers
                <DownOutlined />
              </Link>
            </Menu.Item>
            <Menu.Item
              key="6"
              onClick={() => {
                onDrawerLinkClick("essay");
              }}
            >
              <Link to="/essays">
                Essays
                <DownOutlined />
              </Link>
            </Menu.Item>
            <Menu.Item
              key="7"
              onClick={() => {
                onDrawerLinkClick("category");
              }}
            >
              <Link to="/categories">
                Categories
                <DownOutlined />
              </Link>
            </Menu.Item> */}
          </Menu>
        </div>

        <Drawer
          className="navigation-drawer categories-drawer"
          placement={"top"}
          destroyOnClose={true}
          closable={false}
          onClose={() => {
            setDrawerVisible({ title: "", visible: false });
          }}
          visible={drawerVisible.visible}
          key={"catgoriesdrawer"}
        >
          {drawerContent}
        </Drawer>
      </div>
    </Header>
  );
}

export default Navbar;

import React, { useState, useEffect } from "react";
import { Menu, Button, Drawer, Row, Col, Typography, Space } from "antd";
import { Link } from "react-router-dom";
import { Header } from "antd/lib/layout/layout";
import {
  MenuUnfoldOutlined,
  CloseOutlined,
  DownOutlined,
  UpOutlined,
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
import { useDispatch, useSelector } from "react-redux";
function Navbar({ img, className, isHamburger }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [collapsed, setCollapsed] = useState(true);
  const { navSelectedKey, drawersOpen } = useSelector(
    (state) => state.navBarReducer
  );
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
    setCollapsed(true);

    dispatch({ type: "SET_KEY", payload: { key: value.key } });
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
  useEffect(() => {
    if (drawersOpen) {
      const data = categories.filter((item) => item._id === navSelectedKey);
      onDrawerLinkClick(data[0]);
    }
  }, [drawersOpen]);
  const setEssayDrawerContent = (cat) => {
    setDrawerContent(
      <Row>
        {cat &&
          cat.subMenu.length > 0 &&
          cat.subMenu.map((item) => (
            <Col xs={24} sm={12}>
              <p className="navigation-drawer-heading">{item.name}</p>
              <Menu
                className="navigation-drawer-list"
                mode="inline"
                onClick={(e) => handleEssay(e, item.name)}
              >
                {item.subMenu.length > 0 &&
                  item.subMenu.map((sub) => (
                    <Menu.Item className="navigation-drawer-item" key={sub._id}>
                      {sub.name}
                    </Menu.Item>
                  ))}
              </Menu>
            </Col>
          ))}
      </Row>
    );
  };
  const handleEssay = (value, name) => {
    setDrawerVisible(false);
    dispatch({
      type: "SET_STATE",
      payload: { id: value.key, title: name },
    });
    history.push("/essay");
  };
  const handelItem = (value, name) => {
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
      <Row className="papers-drawer-body">
        <Col span={24}>
          <Row>
            {cat &&
              cat.subMenu.length > 0 &&
              cat.subMenu.map((item) => (
                  <Col span={6}>
                    <p className="navigation-drawer-heading">{item.name}</p>
                    <Menu
                      mode="inline"
                      className="navigation-drawer-list"
                      onClick={(e) => handelItem(e, item.name)}
                    >
                      {item.subMenu.length > 0 &&
                        item.subMenu.map((sub,index) => {
                          if(index < 3){
                            return (<Menu.Item
                              className="navigation-drawer-item"
                              key={sub._id}
                            >
                              {sub.name}
                            </Menu.Item>)
                          }
                          if(index > 3){
                            return (<Menu.Item
                              className="navigation-drawer-item"
                              key={sub._id}
                            >
                              {sub.name}
                            </Menu.Item>)
                          }
                          if(index == 3){
                            return <p className="navigation-drawer-item show-more-button">Show more</p>
                          }

  })}
                    </Menu>
                  </Col>
              ))}
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
      dispatch({ type: "SET_KEY", payload: { key: cat._id } });
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
                      {drawerVisible.visible ? (
                        <UpOutlined />
                      ) : (
                        <DownOutlined />
                      )}
                    </Menu.Item>
                  )}
                </>
              ))}
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

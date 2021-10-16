import React, { useState } from "react";
import { Menu, Button, Drawer, Row, Col, Typography, Space } from "antd";
import { Link } from "react-router-dom";
import { Header } from "antd/lib/layout/layout";
import { MenuUnfoldOutlined, CloseOutlined, DownOutlined } from "@ant-design/icons";
import "./navbar.css";
import RiversImage from "../../../images/Rivers.png";
import DistrictsImage from "../../../images/District.png";
import MountainsImage from "../../../images/mountain.png";
import AgricultureImage from "../../../images/agriculture.png";
import HistoryImage from "../../../images/Group 6.png";
import EnergyImage from "../../../images/ecosystem.png";

function Navbar({ img, className, isHamburger, navSelectedKey, setNavSelectedKey }) {
  const handleMenuSelect = (value) => {
    setNavSelectedKey(value.key);
  };
  const [collapsed, setCollapsed] = useState(true);
  const [drawerVisible, setDrawerVisible] = useState({title : "", visible : false});
  const [drawerContent, setDrawerContent] = useState();

  const setEssayDrawerContent = () =>{
    setDrawerContent( <Row>
      <Col span={12}>
        <p className="navigation-drawer-heading">
          ESSAY OUTLINES
        </p>
        <ul className="navigation-drawer-list">
          <li className="navigation-drawer-item">Features of a Real Democracy</li>
          <li className="navigation-drawer-item">Emerging Power of Social Media</li>
          <li className="navigation-drawer-item">Is an Egalitarian Society Possible by Educating Masses?</li>
          <li className="navigation-drawer-item">Real Democracy</li>
          <li className="navigation-drawer-item">Social Media</li>
          <li className="navigation-drawer-item">Egalitarian Society</li>
          <li className="navigation-drawer-item">Features of a Real Democracy</li>
          <li className="navigation-drawer-item">Emerging Power of Social Media</li>
        </ul>
      </Col>
      <Col span={12}>
      <p className="navigation-drawer-heading">
          COMPLETE ESSAYS
        </p>
      <ul className="navigation-drawer-list">
          <li className="navigation-drawer-item">Emerging Power of Social Media</li>
          <li className="navigation-drawer-item">Is an Egalitarian Society Possible by Educating Masses?</li>
          <li className="navigation-drawer-item">Features of a Real Democracy</li>
          
        </ul>
      </Col>
    </Row>
)
  }

  const setCategoriesDrawerContent = () => {
    setDrawerContent( 
       <Row>
      <Col span={24}>
        <Row>
          <Col className="categories-drawer__col" span={6}>
            <img src={RiversImage} className="categories-drawer__image"/><p className="categories-drawer__text">Rivers of Pakistan</p>
          </Col>
          <Col className="categories-drawer__col" span={6}>
          <img src={DistrictsImage} className="categories-drawer__image"/><p className="categories-drawer__text">Districts of Pakistan</p>
          </Col>
          <Col className="categories-drawer__col" span={6}>
          <img src={MountainsImage} className="categories-drawer__image"/><p className="categories-drawer__text">Mountains of Pakistan</p>
          </Col>
          <Col className="categories-drawer__col" span={6}>
          <img src={HistoryImage} className="categories-drawer__image"/><p className="categories-drawer__text">History</p>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row>
        <Col className="categories-drawer__col" span={6}>
          <img src={EnergyImage} className="categories-drawer__image"/><p className="categories-drawer__text">Energy Sector</p>
        </Col>
        <Col className="categories-drawer__col" span={6}>
          <img src={AgricultureImage} className="categories-drawer__image"/><p className="categories-drawer__text">Agriculture Sector</p>
          </Col>
        </Row>
         
      </Col>
    </Row>
)
  }

 const setPapersDrawerContent = () =>{
  setDrawerContent(<Row>
    <Col span={24}>
      <Row>
        <Col span={6}>
        <p className="navigation-drawer-heading">
        ENGLISH PRECIS CSS
      </p>
    <ul className="navigation-drawer-list">
        <li className="navigation-drawer-item">2019</li>
        <li className="navigation-drawer-item">2020</li>
        <li className="navigation-drawer-item">2021</li>
        
      </ul>
        </Col>
        <Col span={6}>
        <p className="navigation-drawer-heading">
        CURRENT AFFAIRS CSS
      </p>
    <ul className="navigation-drawer-list">           
         <li className="navigation-drawer-item">2019</li>
        <li className="navigation-drawer-item">2020</li>
        <li className="navigation-drawer-item">2021</li>
        
      </ul>
        </Col>
        <Col span={6}>
        <p className="navigation-drawer-heading">
        PAKISTAN AFFAIRS CSS
      </p>
    <ul className="navigation-drawer-list">
    <li className="navigation-drawer-item">2019</li>
        <li className="navigation-drawer-item">2020</li>
        <li className="navigation-drawer-item">2021</li>
        
      </ul>
        </Col>
        <Col span={6}>
        <p className="navigation-drawer-heading">
        PMS KPK SCREENING
      </p>
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
      <p className="navigation-drawer-heading">
        ISLAMIC STUDIES CSS
      </p>
    <ul className="navigation-drawer-list">
    <li className="navigation-drawer-item">2019</li>
        <li className="navigation-drawer-item">2020</li>
        <li className="navigation-drawer-item">2021</li>
        
      </ul>
      </Col>
      <Col span={6}>
      <p className="navigation-drawer-heading">
        INSPECTOR FBR
      </p>
    <ul className="navigation-drawer-list">
    <li className="navigation-drawer-item">2019</li>
        <li className="navigation-drawer-item">2020</li>
        <li className="navigation-drawer-item">2021</li>
        
      </ul>
        </Col>

        <Col span={6}>
      <p className="navigation-drawer-heading">
        AD MOD
      </p>
    <ul className="navigation-drawer-list">
    <li className="navigation-drawer-item">2019</li>
        <li className="navigation-drawer-item">2020</li>
        <li className="navigation-drawer-item">2021</li>
        
      </ul>
        </Col>
      </Row>
       
    </Col>
  </Row>)
  }

 const getDrawersContent = (drawerName) =>{
   debugger;
    switch(drawerName){
      case 'essay':
        setEssayDrawerContent();
        break;
      case 'paper':
        setPapersDrawerContent();
        break;
      case 'category':
        setCategoriesDrawerContent();
        break;
        default :
    }
 }

 const onDrawerLinkClick = (title) => {
   debugger;
if(drawerVisible.title == title){
  setDrawerVisible({title : "", visible : false});
}else{
  setDrawerVisible({title : title, visible : true}); getDrawersContent(title);
}
 }


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
              <Link to="/" onClick={() => {setDrawerVisible(false)}}>Home</Link>
            </Menu.Item>
            <Menu.Item key="2" onClick={() => {setDrawerVisible({title : "", visible : false})}}>
              <Link to="/about">About Us</Link>
            </Menu.Item>
            <Menu.Item key="3" onClick={() => {setDrawerVisible({title : "", visible : false})}}>
              <Link to="/ongoing-events">Ongoing Events</Link>
            </Menu.Item>
            <Menu.Item key="4" onClick={() => {setDrawerVisible({title : "", visible : false})}}>
            <Link to="/most-repeated">Most Repeated</Link>
            </Menu.Item>
            <Menu.Item key="5" onClick={() => {onDrawerLinkClick('paper')}}>
            <Link to="/past-papers">Past Papers<DownOutlined /></Link>
            </Menu.Item>
            <Menu.Item key="6" onClick={() => {onDrawerLinkClick('essay')}}>
              <Link to="/essays">Essays<DownOutlined /></Link>
            </Menu.Item>
            <Menu.Item key="7" onClick={() => {onDrawerLinkClick('category')}}>
              <Link to="/categories">Categories<DownOutlined /></Link>
            </Menu.Item>
          </Menu>
        </div>

        {/* <Drawer
        className="navigation-drawer"
          placement={"top"}
          closable={false}
          onClose={() => {setEssayDrawerVisible(false)}}
          visible={essayDrawerVisible}
          key={"essaydrawer"}
        >
        </Drawer> */}

        <Drawer
        className="navigation-drawer categories-drawer"
          placement={"top"}
          destroyOnClose={true}
          closable={false}
          onClose={() => {setDrawerVisible({title : "", visible : false})}}
          visible={drawerVisible.visible}
          key={"catgoriesdrawer"}
        >
          {drawerContent}
                </Drawer>

        {/* <Drawer
        className="navigation-drawer"
          placement={"top"}
          destroyOnClose={true}
          closable={false}
          onClose={() => {setPapersDrawerVisible(false)}}
          visible={papersDrawerVisible}
          key={"papersdrawer"}
        >
          </Drawer> */}
        </div>
    </Header>
  );
}


export default Navbar;

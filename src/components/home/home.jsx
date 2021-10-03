import { Button, Card, Col, Input, Row,List, Avatar  } from 'antd';
import React from 'react';
import "./home.css";
import {SearchOutlined} from "@ant-design/icons";
import PrimaryCard from '../common/card/primary/primary-card';
import mostRepeatedImage from "../../images/MostRepeated.png";
import pastPapersImage from "../../images/Past Papers.png";
import essayOutlineImage from "../../images/Essay Outlines.png";
import completeEssayImage from "../../images/Complete Essays.png";
import ecosystemImage from "../../images/ecosystem.png";
import riversImage from "../../images/Rivers.png";
import districtImage from "../../images/District.png";
import mountainImage from "../../images/mountain.png";
import historyImage from "../../images/Group 6.png";
import SecondaryCard from '../common/card/secondary/secondary-card';
function Home(){
    
const { Search } = Input;

const onSearch = value => console.log(value);

const data = [
   {
     title: 'When did New Zealand Cricket Team decide to cancel the tour?',
     description : ''
   },
   {
     title: 'Ant Design Title 2',
   },
   {
     title: 'Ant Design Title 3',
   },
   {
     title: 'Ant Design Title 4',
   },
 ];

return(
<>
<div id="home-page">

    <section id="home-page__hero-section">
    <div className="container">
        <div className="home-page__hero-section-content">
        <p className="home-page__hero-section-heading">Free <span className="home-page__hero-section-heading-highlight">Test Prep</span> Resources To Help You Study</p>
        <Input placeholder={"Find your next test & start preparing!"} className="home-page__hero-section-content-input" addonBefore={<SearchOutlined />} addonAfter={<Button className="home-page__hero-section-content-button">Search</Button>} />
        </div>
        <Row gutter={15} className="home-page__hero-section-card-container" >
            <Col xs={6}>
         <PrimaryCard image={mostRepeatedImage} title={"Most Repeated Q/A"}/>
            </Col>
            <Col xs={6}>
         <PrimaryCard image={pastPapersImage} title={"Past Papers"}/>
            </Col>
            <Col xs={6}>
         <PrimaryCard image={essayOutlineImage} title={"Essay Outlines"}/>
            </Col>
            <Col xs={6}>
         <PrimaryCard image={completeEssayImage} title={"Complete Essays"}/>
            </Col>
        </Row>
        </div>
    </section>
    <section id="home-page__ongoing-events-section">
       <div className="container home-page__ongoing-events-section-container">
          
         <p className="home-page__ongoing-events-section-heading">Ongoing Events</p>
         <List
         className="home-page__ongoing-events-section-list"
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item className="home-page__ongoing-events-section-list-item">
        <List.Item.Meta
          avatar={<Avatar src={ecosystemImage} />}
          title={item.title}
          description="Show Answer"
        />
      </List.Item>
    )}
  />
       </div>
    </section>
    <section id="learn-about-pakistan-section">
       <div className="container">
          <p className="learn-about-pakistan-section-heading">
             Learn About <span className="learn-about-pakistan-section-heading-highlight">Pakistan</span>
          </p>
          <p className="learn-about-pakistan-section-sub-heading">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
          </p>
          <Row gutter={15} className="learn-about-pakistan-section-card-container" >
            <Col xs={6}>
         <SecondaryCard image={riversImage} title={"Rivers"} description={"25"}/>
            </Col>
            <Col xs={6}>
         <SecondaryCard image={districtImage} title={"Districts"} description={"25"}/>
            </Col>
            <Col xs={6}>
         <SecondaryCard image={mountainImage} title={"Mountains/Ranges"} description={"25"}/>
            </Col>
            <Col xs={6}>
         <SecondaryCard image={historyImage} title={"History"} description={"25"}/>
            </Col> 
        </Row>

        <Row gutter={15} className="learn-about-pakistan-section-card-container" >
            <Col xs={6}>
         <SecondaryCard image={riversImage} title={"Rivers"} description={"25"}/>
            </Col>
            <Col xs={6}>
         <SecondaryCard image={districtImage} title={"Districts"} description={"25"}/>
            </Col>
            <Col xs={6}>
         <SecondaryCard image={mountainImage} title={"Mountains/Ranges"} description={"25"}/>
            </Col>
            <Col xs={6}>
         <SecondaryCard image={historyImage} title={"History"} description={"25"}/>
            </Col> 
        </Row>
       </div>
    </section>
    <section id="any-questions-section">
       <div className="container any-questions-section-container">
          <p className="any-questions-section-heading">Any Questions?</p>
          <p className="any-questions-section-text">
          “The important thing is not to stop questioning. Curiosity has its own reason for existence.” - Einstein
          </p>
          <p className="any-questions-section-text">Email your queries at <strong>gkpk.net@gmail.com</strong></p>
       </div>
    </section>
</div>
</>
)
}

export default Home;
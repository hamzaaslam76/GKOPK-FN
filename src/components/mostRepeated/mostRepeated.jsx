import { Col, List, Row } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React, { useState } from "react";
import ecosystemImage from "../../images/ecosystem.png";
import "./mostRepeated.css";

function MostRepeated (){

    const [answerKey, setAnswerKey] = useState([]);
    const data = [
        {
          question: 'Question 1',
          key : "1",
          answer : "helllo this is answer 1"
        },
        {
           question: 'Question 2',
          key : "2",
          answer : "helllo this is answer 2"
        },
        {
           question: 'Question 3',
          key : "3",
          answer : "helllo this is answer 3"
        },
        {
           question: 'Question 4',
          key : "4",
          answer : "helllo this is answer 4"
        },
      ];
     
      const hideAnswer= (item) => {
        setAnswerKey(answerKey.filter(key => key != item.key));
      }
     
      const showAnswer=(item) => {
        setAnswerKey([...answerKey,item.key])
      }
     
      const getAnswer =  (item) => {
         if(answerKey.findIndex(key => key == item.key) != -1 ){
           return(
              <div><span className="list-item-answer">{item.answer}</span><br/>
        <span className="list-item-link-button" onClick={() => {hideAnswer(item)}}>
              Hide answer
              </span>
              </div>
           )
         }else{
            return(<span onClick={() => {showAnswer(item)}} className="list-item-link-button">
               Show answer
               </span>
               )
         }
      }
     


return(
    <div id="about">
            <div className="about-header">
                <div className="container">
                    <p className="about-header__heading">
                    Most Repeated Questions
                    </p>
                </div>
            </div>
            <div className="most-repeated-content">

                {/* <section id="home-page__ongoing-events-section"> */}
       <div className="container most-repeated__ongoing-events-section-container">
          
         {/* <p className="home-page__ongoing-events-section-heading">Ongoing Events</p> */}
         <List
         className="home-page__ongoing-events-section-list"
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item className="home-page__ongoing-events-section-list-item most-repeated-list-item">
        <List.Item.Meta
          avatar={<Avatar src={ecosystemImage} />}
          title={item.question}
          description={getAnswer(item)}
        />
      </List.Item>
    )}
  />
       </div>
    {/* </section> */}
                </div>
        </div>
);
}

export default MostRepeated;
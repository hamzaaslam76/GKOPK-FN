import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { Col, List, Row } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React, { useState, useEffect } from "react";
import ecosystemImage from "../../images/ecosystem.png";
import "./mostRepeated.css";
import { useSelector } from "react-redux";
import config from "../../config";
import axios from "axios";
import CustomPagination from "../common/pagination/pagination";
function MostRepeated() {
  const { parentId, title } = useSelector((state) => state.common);
  const [answerKey, setAnswerKey] = useState([]);
  const [question, setQuestion] = useState([]);
  const [page, setPage] = useState(1);
  const [totalRecord, setTotalRecord] = useState(0);
  useEffect(() => {
    axios
      .get(`${config.url}questions/category?id=${parentId}&page=${page}`)
      .then((res) => {
        setQuestion(res.data.questions);
        setTotalRecord(res.data.totalRecord);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {};
  }, [parentId, page]);
  const data = [
    {
      question: "Question 1",
      key: "1",
      answer: "helllo this is answer 1",
    },
    {
      question: "Question 2",
      key: "2",
      answer: "helllo this is answer 2",
    },
    {
      question: "Question 3",
      key: "3",
      answer: "helllo this is answer 3",
    },
    {
      question: "Question 4",
      key: "4",
      answer: "helllo this is answer 4",
    },
  ];

  const hideAnswer = (item) => {
    setAnswerKey(answerKey.filter((key) => key != item._id));
  };

  const showAnswer = (item) => {
    setAnswerKey([...answerKey, item._id]);
  };

  const getAnswer = (item) => {
    if (answerKey.findIndex((key) => key == item._id) != -1) {
      return (
        <div>
          <span className="list-item-answer">{item.answer}</span>
          <br />
          <span
            className="list-item-link-button"
            onClick={() => {
              hideAnswer(item);
            }}
          >
            <EyeInvisibleOutlined /> Hide answer
          </span>
        </div>
      );
    } else {
      return (
        <span
          onClick={() => {
            showAnswer(item);
          }}
          className="list-item-link-button"
        >
          <EyeOutlined /> Show answer
        </span>
      );
    }
  };
  const handlePagination = (page, pageSize) => {
    setPage(page);
    console.log("page", page, "pageSize", pageSize);
  };
  return (
    <div id="about">
      <div className="about-header">
        <div className="container">
          <p className="about-header__heading">{title}</p>
        </div>
      </div>
      <div className="most-repeated-content">
        {/* <section id="home-page__ongoing-events-section"> */}
        <div className="container most-repeated__ongoing-events-section-container">
          {/* <p className="home-page__ongoing-events-section-heading">Ongoing Events</p> */}
          <List
            className="home-page__ongoing-events-section-list"
            itemLayout="horizontal"
            dataSource={question}
            renderItem={(item) => (
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
        <CustomPagination
          className="align-right"
          handlePagination={handlePagination}
          currentPage={page}
          totalRecords={totalRecord}
        />
      </div>
    </div>
  );
}

export default MostRepeated;

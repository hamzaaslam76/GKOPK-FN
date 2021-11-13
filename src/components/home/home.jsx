import { Button, Card, Col, Input, Row, List, Avatar } from "antd";
import React, { useState, useEffect, useLayoutEffect } from "react";
import "./home.css";
import { SearchOutlined } from "@ant-design/icons";
import PrimaryCard from "../common/card/primary/primary-card";
import mostRepeatedImage from "../../images/MostRepeated.png";
import pastPapersImage from "../../images/Past Papers.png";
import essayOutlineImage from "../../images/Essay Outlines.png";
import completeEssayImage from "../../images/Complete Essays.png";
import ecosystemImage from "../../images/ecosystem.png";
import riversImage from "../../images/Rivers.png";
import districtImage from "../../images/District.png";
import mountainImage from "../../images/mountain.png";
import historyImage from "../../images/Group 6.png";
import EnergyImage from "../../images/ecosystem.png";
import AgricultureImage from "../../images/agriculture.png";
import SecondaryCard from "../common/card/secondary/secondary-card";
import axios from "axios";
import config from "../../config";
import CustomPagination from "../common/pagination/pagination";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
function Home() {
  const { Search } = Input;
  const [answerKey, setAnswerKey] = useState([]);
  const [question, setQuestion] = useState([]);
  const [page, setPage] = useState(1);
  const [totalRecord, setTotalRecord] = useState(0);
  const [categories, setCategories] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

  const [imgs, setImgs] = useState([
    riversImage,
    districtImage,
    mountainImage,
    historyImage,
    EnergyImage,
    AgricultureImage,
  ]);
  useLayoutEffect(() => {
    axios
      .get(`${config.url}category/menu`)
      .then((response) => {
        setCategories(
          response.data.filter(
            (item) => item._id === "6173d63331c271202cfdcd7e"
          )
        );
      })
      .catch((err) => setCategories([]));
    axios
      .get(
        `${config.url}questions/category?id=6173d4f931c271202cfdcd7a&page=${1}`
      )
      .then((res) => {
        setQuestion(res.data.questions);
        setTotalRecord(res.data.totalRecord);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {};
  }, []);

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
            Hide answer
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
          Show answer
        </span>
      );
    }
  };
  const handlePagination = (page) => {
    setPage(page);
  };
  const handleCardData = async (cat) => {
    await dispatch({
      type: "SET_STATE",
      payload: {
        id: cat._id,
        title: cat.name,
      },
    });
    await dispatch({
      type: "SET_KEY",
      payload: { key: "6173d63331c271202cfdcd7e" },
    });
    history.push("/categories");
  };
  return (
    <>
      <div id="home-page">
        <section id="home-page__hero-section">
          <div className="container">
            <div className="home-page__hero-section-content">
              <p className="home-page__hero-section-heading">
                Free{" "}
                <span className="home-page__hero-section-heading-highlight">
                  Test Prep
                </span>{" "}
                Resources To Help You Study
              </p>
              <Input
                placeholder={"Find your next test & start preparing!"}
                className="home-page__hero-section-content-input"
                addonBefore={<SearchOutlined />}
                addonAfter={
                  <Button className="home-page__hero-section-content-button">
                    Search
                  </Button>
                }
              />
            </div>
            <Row
              gutter={[16, 16]}
              className="home-page__hero-section-card-container"
            >
              <Col xs={12} sm={6}>
                <PrimaryCard
                  image={mostRepeatedImage}
                  title={"Most Repeated Q/A"}
                  path={"/most-repeated"}
                  id={"6173d51d31c271202cfdcd7b"}
                />
              </Col>
              <Col xs={12} sm={6}>
                <PrimaryCard
                  image={pastPapersImage}
                  title={"Past Papers"}
                  id={"6173d59631c271202cfdcd7c"}
                />
              </Col>
              <Col xs={12} sm={6}>
                <PrimaryCard
                  image={essayOutlineImage}
                  title={"Essay Outlines"}
                  id={"6173d5af31c271202cfdcd7d"}
                />
              </Col>
              <Col xs={12} sm={6}>
                <PrimaryCard
                  image={completeEssayImage}
                  title={"Complete Essays"}
                  id={"6173d5af31c271202cfdcd7d"}
                />
              </Col>
            </Row>
          </div>
        </section>
        <section id="home-page__ongoing-events-section">
          <div className="container home-page__ongoing-events-section-container">
            <p className="home-page__ongoing-events-section-heading">
              Ongoing Events
            </p>
            <List
              className="home-page__ongoing-events-section-list"
              itemLayout="horizontal"
              dataSource={question}
              renderItem={(item) => (
                <List.Item className="home-page__ongoing-events-section-list-item">
                  <List.Item.Meta
                    avatar={<Avatar src={ecosystemImage} />}
                    title={item.question}
                    description={getAnswer(item)}
                  />
                </List.Item>
              )}
            >
              {" "}
              <CustomPagination
                className="align-right"
                handlePagination={handlePagination}
                currentPage={page}
                totalRecords={totalRecord}
              />
            </List>
          </div>
        </section>
        <section id="learn-about-pakistan-section">
          <div className="container">
            <p className="learn-about-pakistan-section-heading">
              Learn About{" "}
              <span className="learn-about-pakistan-section-heading-highlight">
                Pakistan
              </span>
            </p>
            <p className="learn-about-pakistan-section-sub-heading">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            </p>
            <Row
              gutter={[16, 16]}
              justify={"center"}
              className="learn-about-pakistan-section-card-container"
            >
              {categories[0] &&
                categories[0].subMenu.map((cat, index) => (
                  <Col
                    className="gutter-row"
                    xs={11}
                    sm={6}
                    onClick={() => handleCardData(cat)}
                  >
                    <SecondaryCard
                      image={imgs[index]}
                      title={cat.name}
                      // description={"25"}
                    />
                  </Col>
                ))}
              {/* <Col className="gutter-row" xs={11} sm={6}>
                <SecondaryCard
                  image={districtImage}
                  title={"Districts"}
                  description={"25"}
                />
              </Col>
              <Col className="gutter-row" xs={11} sm={6}>
                <SecondaryCard
                  image={mountainImage}
                  title={"Mountains/Ranges"}
                  description={"25"}
                />
              </Col>
              <Col className="gutter-row" xs={11} sm={6}>
                <SecondaryCard
                  image={historyImage}
                  title={"History"}
                  description={"25"}
                />
              </Col>
              <Col className="gutter-row" xs={11} sm={6}>
                <SecondaryCard
                  image={riversImage}
                  title={"Rivers"}
                  description={"25"}
                />
              </Col>
              <Col className="gutter-row" xs={11} sm={6}>
                <SecondaryCard
                  image={districtImage}
                  title={"Districts"}
                  description={"25"}
                />
              </Col>
              <Col className="gutter-row" xs={11} sm={6}>
                <SecondaryCard
                  image={mountainImage}
                  title={"Mountains/Ranges"}
                  description={"25"}
                />
              </Col>
              <Col className="gutter-row" xs={11} sm={6}>
                <SecondaryCard
                  image={historyImage}
                  title={"History"}
                  description={"25"}
                />
              </Col> */}
            </Row>
          </div>
        </section>
        <section id="any-questions-section">
          <div className="container any-questions-section-container">
            <p className="any-questions-section-heading">Any Questions?</p>
            <p className="any-questions-section-text">
              “The important thing is not to stop questioning. Curiosity has its
              own reason for existence.” - Einstein
            </p>
            <p className="any-questions-section-text">
              Email your queries at <strong>gkpk.net@gmail.com</strong>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;

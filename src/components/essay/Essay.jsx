import { Col, Row } from "antd";
import React, { useState, useEffect } from "react";
import "../about/about.css";
import { useSelector } from "react-redux";
import config from "../../config";
import axios from "axios";
function Essay() {
  const [question, setQuestion] = useState();
  const { parentId, title } = useSelector((state) => state.common);

  useEffect(() => {
    axios
      .get(`${config.url}questions/category?id=${parentId}&page=1`)
      .then((res) => {
        debugger;
        setQuestion(res.data.questions[0]);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {};
  }, [parentId]);

  return (
    <div id="about">
      <div className="about-header">
        <div className="container">
          <p className="about-header__heading">{title}</p>
        </div>
      </div>
      <div className="about-content">
        <div className="container">
          <Row className="about-content__col-text" justify={"space-between"}>
            <div
              dangerouslySetInnerHTML={{ __html: question && question.essay }}
            />
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Essay;

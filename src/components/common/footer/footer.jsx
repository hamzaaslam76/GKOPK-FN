import { Col, Row, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { useDispatch } from "react-redux";
function Footer() {
  const dispatch = useDispatch();
  return (
    <div id="gkopk-footer">
      <div className="container">
        <Row align={"middle"} justify={"space-between"}>
          <Col xs={13} className="copyright-col">
            Copyright @GKOPK 2021 All Rights Reserved
          </Col>
          <Col xs={10} sm={8} className="footer-nav-col">
            <Link
              to="/about"
              onClick={() => {
                dispatch({
                  type: "SET_KEY",
                  payload: { key: "6173c70031c271202cfdcd79" },
                });
              }}
            >
              About
            </Link>
            <Link
              to="/privacy"
              onClick={() => {
                dispatch({
                  type: "SET_KEY",
                  payload: { key: "" },
                });
              }}
            >
              Privacy{"&"}Terms
            </Link>
            {/* <Link>Terms</Link> */}
            <Link
              to="/contacts"
              onClick={() => {
                dispatch({
                  type: "SET_KEY",
                  payload: { key: "" },
                });
              }}
            >
              Contacts
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default Footer;

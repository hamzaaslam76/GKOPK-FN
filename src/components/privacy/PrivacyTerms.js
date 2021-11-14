import { Row } from "antd";
import React from "react";
import "../about/about.css";

function PrivacyTerms() {
  return (
    <div id="about">
      <div className="about-header">
        <div className="container">
          <p className="about-header__heading">Privacy{"&"}Terms</p>
        </div>
      </div>
      <div className="about-content">
        <div className="container">
          <Row className="about-content__col-text" justify={"space-between"}>
            <h2>Copyright </h2>
            <p class="title">
              General Knowledge of Pakistan or gkopk.com holds the right to
              property of all the information presented on the website. Any
              information on the platform may not be reproduced or redistributed
              in any shape or form. We respect copyrights, trademarks and
              intellectual property of others. If anyone finds any data,
              information or content that violates someone’s intellectual
              property rights, please contact us with all necessary evidence so
              that we can authenticate the right to property.
            </p>
            <h2>Disclaimer </h2>
            <p class="title">
              All information made available on the platform currently is the
              responsibility of the author of that message who is the
              administrator. Any incorrect answer to any question should be
              highlighted by writing an email to us. We do not seek any personal
              information from the users. Moreover, we encourage visitors to the
              website to report any objectionable message in gkpk.net@gmail.com.
              This forum is not monitored 24/7.
            </p>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default PrivacyTerms;

import { Col, Row, Space } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.css";

function Footer(){
return(
    <div id="gkopk-footer">
<div className="container">
<Row align={"middle"} justify={"space-between"}>
        <Col xs={8} className="copyright-col">
        Copyright @GKOPK 2021 All Rights Reserved
        </Col>
        <Col xs={8} className="footer-nav-col">
                <Link>About</Link>
                <Link>Privacy</Link>
                <Link>Terms</Link>
                <Link>Contacts</Link>
        </Col>
        </Row>
</div>
    </div>
);
}
export default Footer;
import React from "react";
import { Row, Col } from "antd";

const items = [
  {
    key: "1",
    icon: <i className="fas fa-chart-pie"></i>,
    title: "High Performance",
    content:
      "Elevate your game with high-performance technology. Enjoy seamless, efficient and powerful experiences.",
  },
  {
    key: "2",
    icon: <i className="fas fa-desktop"></i>,
    title: "Flat Design",
    content:
      "Simplify your aesthetic with flat design. Clean, modern, and minimal design elements for a fresh look.",
  },
  {
    key: "3",
    icon: <i className="fas fa-database"></i>,
    title: "Simplified Workflow",
    content:
      "Streamline your work with our intuitive and efficient workflow solution. Get more done, faster and with ease.",
  },
];

function AppAbout() {
  return (
    <div id="about" className="block aboutBlock">
      <div className=" container-fluid container-fluid">
        <div className="titleHolder">
          <h2>About US</h2>
          <p> lorem sit msdsk, aow sof weis wj </p>
        </div>
        <div className="contentHolder">
          <p>
            es, woer as hee twee joar an t Occidental College studeerdn. Noa
            twee joar gung hee noar Niej-York, woer as hee verdan studeerdn an
            de Columbia Universiteit. Hee studeerdn of in 1983 op politikologie
            en Boetnlaandse Betrekkingn. Noa zinne studie deed hee oonderzeukn
            bie de New York Public Interest Group. In 1985 verhuusdn hee noar
            Chicago woer as hee projektn deed in oarmere buurtn.
          </p>
        </div>
        <Row gutter={[16, 16]}>
          {items.map((item) => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppAbout;

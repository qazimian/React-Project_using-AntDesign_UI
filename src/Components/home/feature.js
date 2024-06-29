import { Row, Col, Card } from "antd";
import React from "react";

import image1 from "../../assets/images/advanced-option.jpg";
import image2 from "../../assets/images/easy-customise.jpg";
import image3 from "../../assets/images/great-support.jpg";
import image4 from "../../assets/images/clean-design.jpg";
import image5 from "../../assets/images/modern-design.jpg";
import image6 from "../../assets/images/unlimited-features.jpg";

const { Meta } = Card;

function AppFeature() {
  return (
    <div id="feature" className=" block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2> Key Features & Benefits </h2>
          <p>
            However Emmet completions will not show up
          </p>
        </div>
        <Row gutter={[16, 16]}>
          <Col md={{span:8}}>
            <Card hoverable cover={<img alt="example" src={image1} />}>
              <Meta title="Modern Design" description="www.instagram.com" />
            </Card>
          </Col>
          <Col md={{span:8}}>
            <Card hoverable cover={<img alt="example" src={image2} />}>
              <Meta title="Clean & Elegant" description="www.instagram.com" />
            </Card>
          </Col>
          <Col md={{span:8}}>
            <Card hoverable cover={<img alt="example" src={image3} />}>
              <Meta title="Great Support" description="www.instagram.com" />
            </Card>
          </Col>
          <Col span={8}>
            <Card hoverable cover={<img alt="example" src={image4} />}>
              <Meta title="Easy to Customise" description="www.instagram.com" />
            </Card>
          </Col>
          <Col span={8}>
            <Card hoverable cover={<img alt="example" src={image5} />}>
              <Meta
                title="Unlimited Features"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card hoverable cover={<img alt="example" src={image6} />}>
              <Meta title="Advanced Options" description="www.instagram.com" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default AppFeature;

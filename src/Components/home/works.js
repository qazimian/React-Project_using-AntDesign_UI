import React, { useState } from "react";
import { Button, Modal } from "antd";

function AppWorks() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="works" className="block worksBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h1>How it Works </h1>
          <p>Cards usually cooperate with grid column layout in overview </p>
        </div>
        <div className="contentHolder">
          <Button type="primary" onClick={showModal}>
            <i className="fas fa-play"></i>
          </Button>
        </div>
        <Modal
          title="What If Explanation"
          visible={isModalOpen}
          footer={null}
          onCancel={handleCancel}
        >
          <iframe
            title="WooCommerce Tutorial"
            width="100%"
            height="350"
            src="https://www.youtube.com/embed/j1aZAX_yTjI?si=fw-NLlCPd647DogS"
          ></iframe>
        </Modal>
      </div>
    </div>
  );
}

export default AppWorks;

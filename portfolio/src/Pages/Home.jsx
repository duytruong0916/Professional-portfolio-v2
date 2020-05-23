import React from "react";
import { Row, Col } from "react-bootstrap";

function Home() {
  return (
    <div>
      <div className="home-wrapper">
        <Row>
          <Col xs={12} md={6}>
            <div className="p-md-5 p-4">
              <div class="hello-message-1 text-white">Hi, I'm Duy,</div>
              <div class="hello-message-2 text-white">
                a web developer specialized in
              </div>
              <div class="hello-message-3">
                front-end development.
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>

          </Col>
        </Row>
      </div>
      
    </div>
  );
}

export default Home;

import React from "react";
import profile from "../assets/profile.png";
import { Row, Col } from "react-bootstrap";

const Version_1 = () => (
  <div className="w-100">
    <Row>
      <Col xs={12} md={6} className="d-flex align-items-center">
        <div className="p-md-5 p-4 w-100">
          <div class="hello-message-1 text-white">Hi, I'm Duy,</div>
          <div class="hello-message-2 text-white">
            {" "}
            a web developer specialized in
          </div>
          <div class="hello-message-3">front-end development.</div>
          <div className="text-center mt-5">
            <button
              className="button-link link-2"
              onClick={() => scrollToRef(projectRef)}
            >
              <span>View My Work</span>
              <span className="ml-3">
                <i
                  class="fa fa-long-arrow-right rotate-arrow"
                  aria-hidden="true"
                ></i>
              </span>
            </button>
          </div>
        </div>
      </Col>
      <Col xs={12} md={6}>
        <div className="text-center py-md-5 d-none d-md-block">
          <img src={profile} className="w-75" />
        </div>
      </Col>
    </Row>
  </div>
);
export default Version_1;

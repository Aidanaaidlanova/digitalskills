import React from "react";
import { Nav, NavItem, Row, Col, Container } from "reactstrap";
import { Link } from "react-router-dom";
import logo2 from "../assets/icon/image 64.png";

import "../styles/main.css";

const Example = () => {
  return (
    <div className="footer overflow-hidden">
      <Nav vertical>
        <Container>
          <Row className={"justify-content-between"}>
            <Col md={3} className="margin col-4">
              <NavItem>
                <Link to={"/about"} className={"text-light"}>
                  <p className={"mb-1"}>О проекте</p>
                </Link>
              </NavItem>
              <NavItem>
                <Link to={"/all-news"} className={"text-light"}>
                  <p className={"mb-1"}>Новости</p>
                </Link>
              </NavItem>
              <NavItem>
                <Link to={"/lessons"} className={"text-light"}>
                  <p className={"mb-1"}>Курсы</p>
                </Link>
              </NavItem>
              <NavItem>
                <Link to={"/contacts"} className={"text-light"}>
                  <p className={"mb-1"}>Контакты</p>
                </Link>
              </NavItem>
            </Col>
            <Col md={3} className="margin2 col-4">
              <NavItem className={"mb-5"}>
                <p className={"mb-1"}>
                  <img alt={"logo"} src={logo2} />
                </p>
              </NavItem>
            </Col>
            <Col md={3} className="margin text-left text-md-right">
              <NavItem>
                <p className={"mb-1"}>+996708453423 </p>
              </NavItem>
              <NavItem>
                <p className={"mb-md-1 mb-3"}>+996510212345</p>
              </NavItem>
              <NavItem>
                <p className={"mb-1"}>digitalskills.kg@mail.ru </p>
              </NavItem>
            </Col>
            <Col md={12} className={"text-center footer-copyright mt-2 mt-md-1"}>
              <p className={"mb-0"}>Разработано Neobis 2019</p>
              <p className={"mb-3"}>Copyright © 2019 Neobis</p>
            </Col>
          </Row>
        </Container>
      </Nav>
    </div>
  );
};

export default Example;

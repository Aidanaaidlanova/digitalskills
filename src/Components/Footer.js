import React,{useState,useEffect} from "react";
import { Nav, NavItem, Row, Col, Container } from "reactstrap";
import { Link } from "react-router-dom";
import logo2 from "../assets/icon/image 64.png";
import { useTranslation } from "react-i18next";
import API from "../API"


import "../styles/main.css";

const Example = () => {
  const { t } = useTranslation();
  const [contact,setContact] = useState([])

  useEffect(() => {
    API.getContact()
      .then(res => setContact(res.data))
      .catch(e => console.error(e))
  }, []);

  return (
    <div className="footer overflow-hidden">
      <Nav vertical>
        <Container>
          <Row className={"justify-content-between"}>
            <Col md={3} className="margin col-4">
              <NavItem>
                <Link to={"/about"} className={"text-light"}>
                  <p className={"mb-1"}>{t("aboutProject")}</p>
                </Link>
              </NavItem>
              <NavItem>
                <Link to={"/all-news"} className={"text-light"}>
                  <p className={"mb-1"}>{t("news")}</p>
                </Link>
              </NavItem>
              <NavItem>
                <Link to={"/lessons"} className={"text-light"}>
                  <p className={"mb-1"}>{t("lessons")}</p>
                </Link>
              </NavItem>
              <NavItem>
                <Link to={"/contacts"} className={"text-light"}>
                  <p className={"mb-1"}>{t("contact")}</p>
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
              {contact.length > 0 ? contact.map(item => (
                <NavItem>
                  <p className={"mb-1"}>{item.value}</p>
                </NavItem>
              )) : ""}
             
             
            </Col>
            <Col md={12} className={"text-center footer-copyright mt-2 mt-md-1"}>
              <p className={"mb-0"}>{t("neobis")} 2020</p>
              <p className={"mb-3"}>Copyright © 2020 Neobis</p>
            </Col>
          </Row>
        </Container>
      </Nav>
    </div>
  );
};

export default Example;

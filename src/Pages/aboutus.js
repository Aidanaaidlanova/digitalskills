import React, { useState,useEffect } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import API from "../API";
import HtmlParser from "react-html-parser";
import "../styles/main.css";
import map from "../assets/img/kg-07 1.png";
import Spiner from "./../Components/spiner";
import { useTranslation } from "react-i18next";


const Aboutus = () => {
  const [data, setData] = useState({});
  const { t } = useTranslation();


 
  useEffect(() => {
    document.title = "О проекте";
    API.getDataAboutUs()
      .then(res => setData(res.data))
      .catch(e => console.error(e));
  }, []);

  
    return (
      <div className="wrapper">
        <Header />
        <Container>
          <Row>
            <Col className="col-lg-6 col-12 ">
              <p
                className={
                  "h1 text-uppercase  text-lg-left text-center mt-5 mb-3"
                }
              >
                {t("aboutProject")}
              </p>
              <p className={"text-about px-4 px-lg-0 mb-lg-5 mb-1"}>
                {data && data.payload ? (
                  HtmlParser(data.payload)
                ) : (
                  <Spiner />
                )}
              </p>
            </Col>
            <Col className="map col-lg-6 col-12">
              <img className="img-fluid" src={map} />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }

export default Aboutus;

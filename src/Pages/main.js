import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../styles/main.css";
import { Container, Row, Col } from "reactstrap";
import logo2 from "../assets/icon/image 64.png";
import blockphoto from "../assets/img/block-photo.png";
import blockphoto2 from "../assets/img/block-photo2.png";
import Card from "../Components/card";
import TeacherCard from "../Components/teacher_card";
import API from "../API";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Spiner from "../Components/spiner";

const Main = () => {
  const [lessons, setLessons] = useState([]);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    API.getAllLessons(0, 3)
      .then(res => setLessons(res.data))
      .catch(e => console.error(e));

    API.allTeachers(0, 3)
      .then(res => setTeachers(res.data))
      .catch(e => console.error(e));
  }, []);

  const { t } = useTranslation();

  return (
    <div className={"w-100 overflow-hidden"}>
      <Header />
      <div className="mainphoto mb-5 pb-md-5 pt-md-5">
        <Container>
          <Row>
            <Col md={12} className={"pt-4 pb-4 pb-md-5 pt-md-5"}>
              <img
                src={logo2}
                alt={"logo"}
                className={"mb-2 mb-md-5 main-page-heading-img-logo"}
              />
              <p className={"text-light h1 main-page-heading-title"}>
                {t("digitalTitle")}
                <br />
                {t("digitalSubTitle")}
              </p>
              <p
                className={"text-light mb-2 mb-md-4 main-page-heading-subtitle"}
              >
                {t("digitalSubtitle")}
              </p>
              <Link
                to={"/lessons"}
                className="mainbutton d-flex justify-content-center align-items-center text-decoration-none"
              >
                {t("moreDetails")}
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className={"mb-5"}>
          <Col
            md={6}
            className={
              "mb-5 d-flex justify-content-center flex-column order-2 order-sm-1 pl-0 pr-0 pr-sm-2"
            }
          >
            <Col
              md={10}
              className={"d-flex justify-content-center flex-column"}
            >
              <p className={"h2 main-page-heading-text d-none d-sm-block"}>
                {t("ourMission")}
              </p>
              <p className={"text-muted main-page-text"}>
                {t("ourMisionText")}
              </p>
            </Col>
          </Col>

          <Col
            md={6}
            className={
              "mb-5 pl-0 order-sm-2 order-1 d-flex justify-content-end pr-0 pr-sm-2"
            }
          >
            <Col md={10}>
              <p className={"h2 main-page-heading-text d-sm-none"}>
                {t("ourMission")}
              </p>
              <img src={blockphoto} className={"img-fluid"} alt="" />
            </Col>
          </Col>

          <Col md={6} className={"pl-0 mt-5 order-sm-3 order-3"}>
            <Col md={10}>
              <p className={"h2 main-page-heading-text d-sm-none"}>
                {t("ourObjectiveTitle")}
              </p>
              <img src={blockphoto2} className={"img-fluid"} alt="" />
            </Col>
          </Col>

          <Col
            md={6}
            className={
              "d-flex justify-content-center flex-column align-items-end mt-5 order-4 order-sm-4"
            }
          >
            <Col
              md={10}
              className={"d-flex justify-content-center flex-column"}
            >
              <p className={"h2 main-page-heading-text d-none d-sm-block"}>
                {t("ourObjectiveTitle")}
              </p>
              <p className={"text-muted main-page-text"}>
                {t("ourObjectiveText")}
              </p>
            </Col>
          </Col>
        </Row>
      </Container>

      <div className="photo2 d-flex align-items-end mt-5">
        <Container>
          <p className={"h1 text-light mb-3 mb-sm-5 banner2"}>
            {t("digitalTitle")}
            <br />
            {t("digitalSubTitle")}
          </p>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col
              md={12}
              className={
                "d-flex justify-content-center justify-content-lg-between align-items-center my-5 flex-wrap"
              }
            >
              <p className={"h1 mb-3"}>{t("ourLessons")}</p>

              <div className={"d-inline-block"}>
                <Link to="/lessons">
                  <button className="lessons_button">{t("allLessons")}</button>
                </Link>
              </div>
            </Col>

            {lessons && lessons.data ? (
              lessons.data.map((item, idx) => {
                return (
                  <Col className={"mt-3"} sm={12} md={4} key={idx}>
                    <Card key={idx} {...item} />
                  </Col>
                );
              })
            ) : (
              <Spiner />
            )}
          </Row>
        </Container>

        <Container>
          <Row className="mb-5">
            <Col
              md={12}
              className={
                "d-flex justify-content-center justify-content-lg-between align-items-center my-5 flex-wrap"
              }
            >
              <p className={"h1 mb-3"}>{t("teachers")}</p>
              <div className={"d-inline-block"}>
                <Link to="/all-teachers">
                  <button className="lessons_button">{t("allTeachers")}</button>
                </Link>
              </div>
            </Col>

            {teachers && teachers.data ? (
              teachers.data.map((item, idx) => {
                return <TeacherCard {...item} key={idx} />;
              })
            ) : (
              <Spiner />
            )}
          </Row>
        </Container>
        <Footer />
      </div>
    </div>
  );
};
export default Main;

import React from "react";
import { Link } from "react-router-dom";
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


class Main extends React.Component {
  
  state = {
    lessons: {},
    news: {},
    teachers: {}
  };

  componentDidMount() {
    API.getAllLessons(0, 3)
      .then(res =>
        this.setState({
          lessons: res.data
        })
      )
      .catch(e => console.error(e));

    API.allTeachers(0, 3)
      .then(res =>
        this.setState({
          teachers: res.data
        })
      )
      .catch(e => console.error(e));
  }

  render() {

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
                  ЦИФРОВОЙ Я - ЦИФРОВОЙ КЫРГЫЗСТАН{" "}
                  <br className={"d-none d-sm-inline-block"} />
                  СТАНЬ ЦИФРОВЫМ!
                </p>
                <p
                  className={
                    "text-light mb-2 mb-md-4 main-page-heading-subtitle"
                  }
                >
                  Digi Skills - это платформа для получения цифровых <br />
                  навыках для всех регионов страны совершенно <br />
                  бесплатно
                </p>
                <Link
                  to={"/lessons"}
                  className="mainbutton d-flex justify-content-center align-items-center text-decoration-none"
                >
                  Смотреть все
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
                  Наша миссия
                </p>
                <p className={"text-muted main-page-text"}>
                  Предоставить возможность каждому кыргызстанцу приобрести
                  минимальные цифровые навыки, а также определиться с
                  профессиональной ориентацией в области информационных
                  технологий
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
                  Наша миссия
                </p>
                <img src={blockphoto} className={"img-fluid"} alt="" />
              </Col>
            </Col>

            <Col md={6} className={"pl-0 mt-5 order-sm-3 order-3"}>
              <Col md={10}>
                <p className={"h2 main-page-heading-text d-sm-none"}>
                  Цель проекта
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
                  Цель проекта
                </p>
                <p className={"text-muted main-page-text"}>
                  Объединить все имеющиеся разработки государственного и
                  частного сектора, а также донорских проектов по направлению
                  «Цифровые навыки и компетенции» для удобства пользования
                  гражданами. Граждане в свою очередь по технологии «единого
                  окна» смогут на единой площадке получить требуемую информацию
                  по интересующей теме в области информационных технологий.
                </p>
              </Col>
            </Col>
          </Row>
        </Container>

        <div className="photo2 d-flex align-items-end mt-5">
          <Container>
            <p className={"h1 text-light mb-3 mb-sm-5 banner2"}>
              ЦИФРОВОЙ Я - ЦИФРОВОЙ КЫРГЫЗСТАН
              <br />
              СТАНЬ ЦИФРОВЫМ!
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
                <p className={"h1"}>Наши уроки</p>

                <div className={"d-inline-block"}>
                  <Link to="/lessons">
                    <button className="lessons_button">Все уроки</button>
                  </Link>
                </div>
              </Col>

              {this.state.lessons && this.state.lessons.data ? (
                this.state.lessons.data.map((item, idx) => {
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
                  "d-flex  justify-content-center justify-content-lg-between my-5 flex-wrap"
                }
              >
                <p className={"h1"}>Преподаватели</p>
                <div className={"d-inline-block"}>
                  <Link to="/all-teachers">
                    <button className="lessons_button">
                      Все преподаватели
                    </button>
                  </Link>
                </div>
              </Col>

              {this.state.teachers && this.state.teachers.data ? (
                this.state.teachers.data.map((item, idx) => {
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
  }
}
export default Main;

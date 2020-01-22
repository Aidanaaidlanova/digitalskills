import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import moment from "moment";
import "moment/locale/ru";
import API from "../API";
import "../styles/course.css";
import "../styles/main.css";
import Spiner from "../Components/spiner";

class Course extends React.Component {
  state = {
    lesson: {},
    teacher: {}
  };

  componentDidMount() {
    API.getCourse(this.props.match.params.id)
      .then(res => {
        this.setState({
          lesson: res.data
        });
        API.getTeacherData(this.state.lesson.teacher_id)
          .then(res => {
            this.setState({
              teacher: res.data
            });
          })
          .catch(e => console.error(e));
        
      })
      .then(() => {
        document.title = this.state.lesson.name;
      })
      .catch(e => console.error(e));
      
  }

  render() {
    const {
      name,
      category_name,
      language,
      description,
      start,
      image,
      registration_link,
      id
    } = this.state.lesson;
    return (
      <div className="wrapper">
        <Header />
        {this.state.lesson && this.state.lesson.name ? (
          <Container>
            <Row className={"mt-5"}>
              <Col
                md={6}
                className={"text-md-left text-center d-flex flex-column "}
              >
                <p className={"header-course"}>{name}</p>
                <p className={"teacher-archive mt-4"}>
                  <span className={"text-muted "}>Язык: </span>
                  <b className="courses-blue-color">
                    {language === "ru" ? "Русский" : "Кыргызский"}
                  </b>
                </p>
                <p className={"teacher-archive"}>
                  <span className={"text-muted"}>Категория: </span>
                  <b className="courses-blue-color">{category_name}</b>
                </p>
                <Row className="text-center  text-md-left pr-md-5 mt-4">
                  <div className={"col-md my-2"}>
                    <Link
                      to={`/lesson/${id}`}
                      className="coursebutton d-flex align-items-center justify-content-center text-decoration-none"
                    >
                      Открыть курс
                    </Link>
                  </div>
                  {this.state.lesson.isOnline ? (
                    <div className={"col-md  my-2"}>
                      <a
                        href={registration_link}
                        target={"_blank"}
                        className="coursebutton2 d-flex align-items-center justify-content-center"
                      >
                        Регистрация
                      </a>
                    </div>
                  ) : (
                    ""
                  )}
                </Row>
              </Col>
              <Col className="my-2" md={6}>
                <img className="img-fluid" src={image} alt={"banner"} />
              </Col>
            </Row>

            <Row>
              <Col className="col-12 col-md-7 ">
                <h5 className="course-title  text-lg-left text-center">
                  Описание курса
                </h5>
                <p className="course-about mt-4 text-left  ">{description}</p>
              </Col>
              {this.state.lesson.isOnline == true ? (
                <Col className="col-md-auto col-4 mx-2 mt-5 mx-lg-5">
                  <div className="block py-4 px-5">
                    <p className="details-course">Детали онлайн урока</p>
                    <p className="DET">
                      Дата:{" "}
                      <span className="date_course">
                      {" "}
                        {moment(start).format("Do MMMM YYYY")}
                      </span>
                    </p>
                    <p className="DET">
                      Время:{" "}
                      <span className="date_course">
                        {" "}
                        {moment(start).format("LT")}{" "}
                      </span>
                    </p>
                  </div>
                </Col>
              ) : (
                ""
              )}
            </Row>
            <div className="mt-5 mb-2">
              <p className={"teacher text-lg-left text-center"}>
                {" "}
                Преподаватель{" "}
              </p>
            </div>
            <Row
              className={
                "row justify-content-around align-items-center teacher-info"
              }
            >
              <Col md={3}>
                <img
                  src={this.state.teacher.image}
                  className={"img-fluid rounded-pill"}
                  alt={"teacher"}
                />
              </Col>
              <Col className={"col-12 mt-2 col-lg-7 text-lg-left text-center"}>
                <p className={"teacher-title my-2 "}>
                  {this.state.teacher.name} {this.state.teacher.surname}
                </p>
                <p className={"teacher-subtitler my-3"}>
                  {this.state.teacher.position}
                </p>
                <p className={"course-about text-lg-left text-center"}>
                  {this.state.teacher.about}
                </p>
                <p className="course-about text-lg-left text-center my-3">

                  Язык препадования:{" "}

                  <b>
                    {this.state.teacher.language === "ru"
                      ? "Русский"
                      : "Кыргызский"}
                  </b>
                </p>
              </Col>
            </Row>
            <Col className={"col-12 my-5"}>
              <Link className="text-decoration-none" to={`/lesson/${id}`}>
                <button className="d-flex justify-content-center align-center m-auto teacher-page-btn">
                  открыть курс
                </button>
              </Link>
            </Col>
          </Container>
        ) : (
          <Spiner />
        )}

        <Footer />
      </div>
    );
  }
}
export default Course;

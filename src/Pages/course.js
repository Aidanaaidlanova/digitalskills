import React, { useState, useEffect } from "react";
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
import { useTranslation } from "react-i18next";


const Course = props => {
  const [lesson, setLesson] = useState({});
  const [teacher, setTeacher] = useState({});
  const { t } = useTranslation();

  const getTeacher = (teacher_id) => {
    API.getTeacherData(teacher_id)
      .then(res => setTeacher(res.data))
      .catch(e => console.error(e));
    document.title = lesson.name !== undefined ? lesson.name :"Digital Skills" ;
  };

  useEffect(() => {
    API.getCourse(props.match.params.id)
      .then(res => {
        setLesson(res.data);
        getTeacher(res.data.teacher_id)
      })
      .catch(e => console.error(e));
  }, []);

  // useEffect(() => {
  //
  // }, [lesson.teacher_id]);

  const {
    name,
    category_name,
    language,
    description,
    start,
    image,
    registration_link,
    id
  } = lesson;
  return (
    <div className="wrapper">
      <Header />
      {lesson && lesson.name ? (
        <Container>
          <Row className={"mt-5"}>
            <Col
              md={6}
              className={"text-md-left text-center d-flex flex-column "}
            >
              <p className={"header-course"}>{name}</p>
              <p className={"teacher-archive mt-4"}>
                <span className={"text-muted "}>{t("language")}: </span>
                <b className="courses-blue-color">
                  {language === "ru" ? "Русский" : "Кыргызский"}
                </b>
              </p>
              <p className={"teacher-archive"}>
                <span className={"text-muted"}>{t("category")}: </span>
                <b className="courses-blue-color">{category_name}</b>
              </p>
              <Row className="text-center  text-md-left pr-md-5 mt-4">
                <div className={"col-md my-2"}>
                  <Link
                    to={`/lesson/${id}`}
                    className="coursebutton d-flex align-items-center justify-content-center text-decoration-none"
                  >
                    {t("openCourse")}
                  </Link>
                </div>
                {lesson.isOnline ? (
                  <div className={"col-md  my-2"}>
                    <a
                      href={registration_link}
                      target={"_blank"}
                      className="coursebutton2 d-flex align-items-center justify-content-center"
                    >
                      {t("registration")}
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
                {t("descriptionCourse")}
              </h5>
              <p className="course-about mt-4 text-left  ">{description}</p>
            </Col>
            {lesson.isOnline ? (
              <Col className="col-md-auto col-4 mx-2 mt-5 mx-lg-5">
                <div className="block py-4 px-5">
                  <p className="details-course">{t("onlineCourseDetails")}</p>
                  <p className="DET ">
                    {t("date")}{" "}
                    <span className="date_course">
                      {" "}
                      {moment(start).format("Do MMMM YYYY")}
                    </span>
                  </p>
                  <p className="DET">
                    {t("time")}{" "}
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
              {t("teachers")}{" "}
            </p>
          </div>
          <Row
            className={
              "row justify-content-around align-items-center teacher-info"
            }
          >
            <Col md={3}>
              <img
                src={teacher.image}
                className={"img-fluid rounded-pill"}
                alt={"teacher"}
              />
            </Col>
            <Col className={"col-12 mt-2 col-lg-7 text-lg-left text-center"}>
              <p className={"teacher-title my-2 "}>
                {teacher.name} {teacher.surname}
              </p>
              <p className={"teacher-subtitler my-3"}>{teacher.position}</p>
              <p className={"course-about text-lg-left text-center"}>
                {teacher.about}
              </p>
              <p className="course-about text-lg-left text-center my-3">
                {t("teachinglanguage")}{" "}
                <b>{teacher.language === "ru" ? "Русский" : "Кыргызский"}</b>
              </p>
            </Col>
          </Row>
          <Col className={"col-12 my-5"}>
            <Link className="text-decoration-none" to={`/lesson/${id}`}>
              <button className="d-flex justify-content-center align-center m-auto teacher-page-btn">
                {t("openCourse")}
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
};

export default Course;

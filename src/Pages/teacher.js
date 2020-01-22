import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import CardItem from "../Components/card";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import API from "../API";
import Spiner from "../Components/spiner";

const TeacherPage = ({ match }) => {
  const [data, setData] = useState([]);
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    API.getTeacherData(match.params.id)
      .then(res => setData(res.data))
      .catch(e => console.error(e));
    API.getLessonsOfTeacher(match.params.id)
      .then(res => setLessons(res.data))
      .catch(e => console.error(e));
  }, []);

  const { name, surname, position, about, image, language } = data;

  return (
    <div className="wrapper">
      <Header />
      {data && data.name ? (
        <Container>
          <Row className={"mt-5"}>
            <Col md={4} className={"text-center"}>
              <img
                src={image}
                className={"img-fluid rounded-pill"}
                alt={"teacher"}
              />
            </Col>
            <Col
              md={7}
              className={"ml-md-5 d-flex flex-column justify-content-center"}
            >
              <p className={"h2 teacher-page my-2"}>
                {name} {surname}
              </p>
              <p className={"teacher-page teacher-subtitle my-3"}>{position}</p>
              <p className={"teacher-archive"}>{about}</p>
              <p className="my-3">
                Язык преподования:{" "}
                <b>{language === "ru" ? "Русский" : "Кыргызский"}</b>
              </p>
            </Col>
            <Col
              md={12}
              className={
                "d-flex justify-content-around mt-3 flex-wrap mt-5 pt-5"
              }
            >
              {lessons.data && lessons.data.length
                ? lessons.data.map((item, idx) => {
                    return (
                      <Col md={4} key={idx} className="mb-5">
                        <CardItem {...item} />
                      </Col>
                    );
                  })
                : ""}
            </Col>
          </Row>
        </Container>
      ) : (
        <Spiner />
      )}
      <Footer />
    </div>
  );
};

export default TeacherPage;

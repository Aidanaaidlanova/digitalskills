import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Container, Row, Col, Button } from "reactstrap";
import API from "../API";
import Spiner from "../Components/spiner";
import TeacherCard from "../Components/teacher_card";
import { useTranslation } from "react-i18next";


const AllTeacher = () => {
  const [page, setPage] = useState(0);
  const [allTeachers, setAllTeachers] = useState([]);
  const { t } = useTranslation();

  let count = 6;

  useEffect(() => {
    document.title = "Все учителя";
    API.allTeachers(page, count)
      .then(res => {
        setAllTeachers(res.data);
      })
      .catch(e => console.error(e));
  }, [page]);
  const createPage = () => {
    let buttons = [],
      pages = Math.ceil(allTeachers.total / count);
    for (let i = 0; i < pages; i++) {
      buttons.push(
        <Button
          key={i}
          className={
            i === page
              ? "paginationActiveButton shadow all-lessons-pagination all-lessons-pagination-inactive rounded-0 mr-3"
              : "shadow all-lessons-pagination all-lessons-pagination-active rounded-0 mr-3 bg-white"
          }
          color={"faded"}
          onClick={() => setPage(i)}
        >
          {i + 1}
        </Button>
      );
    }
    return buttons;
  };

  return (
    <div className="wrapper">
      <Header />
      <Container>
        <Row>
          <Col
            md={12}
            className={
              "d-flex justify-content-lg-between align-items-center mt-5 mb-3 flex-wrap justify-content-center"
            }
          >
            <p className={"h1 text-uppercase"}>{t("allTeachers")}</p>
          </Col>
          <Col
            md={12}
            className={"d-flex justify-content-around mt-3 flex-wrap mb-5"}
          >
            {allTeachers && allTeachers.data ? (
              allTeachers.data.map((item, idx) => {
                return <TeacherCard key={idx} {...item} />;
              })
            ) : (
              <Spiner />
            )}
          </Col>
          <div className={"w-50 mx-auto text-center mb-5"}>
            {allTeachers && allTeachers.total > count ? createPage() : null}
          </div>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default AllTeacher;

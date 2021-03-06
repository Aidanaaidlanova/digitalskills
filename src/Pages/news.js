import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import HtmlParser from "react-html-parser";
import API from "../API";
import Spiner from "../Components/spiner";
import moment from "moment";
import { useTranslation } from "react-i18next";

const News = ({ match }) => {
  const [data, setData] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    API.getOneNews(match.params.id, "ru")
      .then(res => setData(res.data))
      .catch(e => console.error(e));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <Container>
        <Row className={"d-flex justify-content-center mt-5"}>
          {data && data.id ? (
            <>
              <Col md={8}>
                <p className={"h1"}>{data.title}</p>
                <div className={"w-100 d-flex justify-content-between my-3"}>
                  <p className="text-muted">
                    {moment(data.pub_date).format("Do MMMM YYYY")}
                  </p>
                  <p className={"text-muted"}>
                    {data.views} {t("views")}
                  </p>
                </div>
              </Col>
              <Col md={8}>
                <img src={data.image} className={"img-fluid"} alt={"a girl"} />
              </Col>
              <Col md={8}>
                <p className={"mt-3 news-content"}>
                  {HtmlParser(data.description)}
                </p>
              </Col>
              <Col md={8}>
                <Link
                  className={"news_custom-link mt-5 mb-5 d-inline-block"}
                  to={"/all-news"}
                >
                  {t("comeBack")}
                </Link>
              </Col>
            </>
          ) : (
            <Spiner />
          )}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default News;

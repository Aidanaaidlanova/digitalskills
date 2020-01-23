import React, { useEffect, useState } from "react";
import { Card, Col, Row, CardTitle, CardText, CardImg } from "reactstrap";
import moment from "moment";
import "moment/locale/ru";
import "../styles/components_style.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const News_card = ({ title, image, views, pub_date, id }) => {
  const [filterTitle, setFilterTitle] = useState("");
  const { t } = useTranslation();


  useEffect(() => {
    if (title.length > 40) setFilterTitle(title.substring(0, 40));
    else setFilterTitle(title);
  }, []);

  return (
    <div>
      
      <Link to={`/news/${id}`} className={"text-decoration-none text-dark"}>
        <div
          className={"col-12 col-lg-6 d-flex mb-3 shadow rounded "}
          style={{ maxWidth: "552px", minHeight: "140px" }}
        >
          <Row>
            <Col className={"px-0 col-12 col-lg-6"}>
              <img
                className={"img-fluid w-100  rounded"}
                src={image}
                alt="img"
              />
            </Col>
            <Col
              className={
                "d-flex justify-content-between flex-column p-4 col-12 col-lg-6"
              }
            >
             <CardTitle className="news_title text-dark mb-0">{filterTitle}</CardTitle>
            <CardText className={"d-flex justify-content-between align-items-center mt-4"}>
              <small className="text-muted">{views} {t("views")}</small>
              <small className="ml-2">
                <p className="text-muted">{moment(pub_date).format("Do MMMM YYYY")}</p>
              </small>
            </CardText>
            </Col>
          </Row>
        </div>
      </Link>
    </div>
  );
};

export default News_card;

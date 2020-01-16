import React from 'react';
import {
  Card, CardText, CardBody,
  Button,
  Media,
  Col
} from 'reactstrap';
import {Link} from 'react-router-dom';

const TeacherCard = ({id,image,name,surname,position,language,about}) => {
  return (
    <Col md={4}>
      <Card className = {"border-0 shadow mb-3"}
            style={{height: '500px'}}>
        <Media className={"d-flex align-items-center justify-content-center pr-3 pl-3 pt-3 pb-0"}>
          <Media object src={image} className={"rounded-pill teacher-card-image"}  alt="Generic placeholder image" />
          <Media body>
            <Media heading className={"mb-1 pl-3 teacher-card-name"}>{name} {surname}</Media>
            <p className={"text-muted mb-0 pl-3 teacher-card-who"}>{position}</p>
          </Media>
        </Media>
        <CardBody>
          <CardText className={"text-muted teacher-card-about-text"}>{about}</CardText>
          <p>Язык преподования: <b>{language === "ru" ? "Русский" : "Кыргызский"}</b></p>
          <div className={"w-100 d-flex justify-content-center main-card-button-pos"}>
            <Link to={`/teacher/${id}`} className={"mx-auto d-inline-block mb-3"}>
              <Button color={"faded"} tag={"span"} className={"card_custom_button rounded-0 btn btn-faded d-flex justify-content-center align-items-center"}>
                <b>Подробнее</b>
              </Button>
            </Link>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TeacherCard;
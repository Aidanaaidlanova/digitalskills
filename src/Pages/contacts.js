import React from "react";
import {
  Container,
  Row,
  Col,
  Media,
  Button,
  Form,
  FormGroup,
  Input
} from "reactstrap";
import settingImage from "../assets/icon/image 42.png";
import askImage from "../assets/icon/image 43.png";
import lampImage from "../assets/icon/image 44.png";
import phoneImage from "../assets/icon/image 45.png";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Swal from "sweetalert2";
import API from "./../API";

const ContactBodyItem = ({ image, body, className }) => {
  return (
    <Media className={className}>
      <Media
        object
        src={image}
        alt="Generic placeholder image"
        className={"mr-3 mt-auto mb-auto"}
      />
      <Media body className={"mt-auto mb-auto"}>
        {body}
      </Media>
    </Media>
  );
};

const Contacts = () => {
  const postData = e => {
    e.preventDefault();
    let formData = new FormData(e.target),
      data = {};

    formData.forEach(function(value, key) {
      data[key] = value;
    });

    let target = e.target;
    API.postData("api/comments/", data)
      .then(response => {
        if (response.status === 201 || response.status === 200) {
          Swal.fire({
            width: 500,
            height: 500,
            showConfirmButton: true,
            icon: "success",
            title: "Ваша заявка успешно отправлена!",
            timer: 2000,
            confirmButtonColor: "#32B482"
          });
          target.reset();
        } else {
          Swal.fire({
            text: "Проверьте данные!",
            width: 500,
            height: 500,
            showConfirmButton: true,
            confirmButtonColor: "#32B482"
          });
        }
      })
      .catch(error => {
        Swal.fire({
          text: error,
          width: 500,
          height: 500,
          showConfirmButton: true,
          confirmButtonColor: "#32B482"
        });
      });
  };

  return (
    <div className="wrapper">
      <Header />
      <Container>
        <Row>
          <Col md={12} className={"mt-5"}>
            <p className={"h1 text-uppercase"}>контакты</p>
          </Col>
          <Col md={5}>
            <b className={"mt-4 d-inline-block contacts-subtitle mb-3"}>
              Пишите нам, если
            </b>
            <ContactBodyItem
              image={settingImage}
              body={
                "У вас есть вопросы по использованию возможностей нашего проекта"
              }
            />
            <ContactBodyItem
              image={askImage}
              body={"Нужна помощь с регистрацией"}
              className={"mt-3"}
            />
            <ContactBodyItem
              image={lampImage}
              body={"У вас есть идеи по улучшению нашего проекта"}
              className={"mt-3 dots-father"}
            />
            <b className={"mt-5 d-inline-block contacts-subtitle mb-3"}>
              Звоните
            </b>
            <Media>
              <Media
                object
                src={phoneImage}
                alt="Generic placeholder image"
                className={"mr-3 mt-auto mb-auto"}
              />
              <Media body className={"mt-auto mb-auto"}>
                <p className={"mb-1"}>+996708453423</p>
                <p className={"mb-0"}>+996510212345</p>
              </Media>
            </Media>
            <p className={"mt-4 mb-4"}>
              <b>Digitalskills.kg@mail.ru</b>
            </p>
          </Col>
          <Col md={7} className={"d-flex justify-content-center"}>
            <Form
              className={"contacts-form contacts-form p-4 mb-4"}
              onSubmit={postData}
            >
              <FormGroup>
                <p className={"text-center w-75 mx-auto contacts-subtitle"}>
                  МЫ ОТКРЫТЫ К ОБЩЕНИЮ И ГОТОВЫ ОТВЕТИТЬ НА ВСЕ ВАШИ ВОПРОСЫ
                </p>
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  name="name"
                  placeholder="Имя"
                  required
                  className={
                    "border-top-0 border-left-0 border-right-0 rounded-0 bg-faded shadow-none contacts-form__input mb-4"
                  }
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="+996"
                  pattern="^\(?\+([9]{2}?[6])\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{3})$"
                  required
                  className={
                    "border-top-0 border-left-0 border-right-0 rounded-0 bg-faded shadow-none contacts-form__input mb-4"
                  }
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type={"textarea"}
                  name="text"
                  placeholder="Ваш вопрос"
                  required
                  className={
                    "border-top-0 border-left-0 border-right-0 rounded-0 bg-faded shadow-none contacts-form__input contacts-form__textarea mb-4"
                  }
                />
              </FormGroup>
              <div className="w-100 d-flex justify-content-center">
                <Button
                  className={
                    "rounded-0 pl-5 pr-5 contacts-form__button text-light mt-4"
                  }
                  color={"faded"}
                >
                  Отправить
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Contacts;

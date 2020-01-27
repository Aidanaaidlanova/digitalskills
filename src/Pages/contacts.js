import React ,{useState,useEffect} from "react";
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
import { useTranslation } from "react-i18next";


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
            title: `${t("succesRequest")}`,
            timer: 2000,
            confirmButtonColor: "#2D5199"
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
  const { t } = useTranslation();
  const [contact, setContact] = useState({})

  useEffect(() => {
    API.getContact()
      .then(res => setContact(res.data))
      .catch(e => console.error(e))
  }, []);


  return (
    <div className="wrapper">
      <Header />
      <Container>
        <Row>
          <Col md={12} className={"mt-5"}>
            <p className={"h1 text-uppercase"}>{t("contact")}</p>
          </Col>
          <Col md={5}>
            <b className={"mt-4 d-inline-block contacts-subtitle mb-3"}>
              {t("writeUs")}
            </b>
            <ContactBodyItem image={settingImage} body={t("questions")} />
            <ContactBodyItem
              image={askImage}
              body={t("registrationHelp")}
              className={"mt-3"}
            />
            <ContactBodyItem
              image={lampImage}
              body={t("ideasForImprovement")}
              className={"mt-3 dots-father"}
            />
            <b className={"mt-5 d-inline-block contacts-subtitle mb-3"}>
              {t("call")}
            </b>
            <Media>
              <Media
                object
                src={phoneImage}
                alt="Generic placeholder image"
                className={"mr-3 mt-auto mb-auto"}
              />
              <Media body className={"mt-auto mb-auto"}>
                {contact.length > 0
                  ? contact.map(item =>
                      item.type === "phone" ? (
                        <p className={"mb-1"}>{item.value}</p>
                      ) : (
                        ""
                      )
                    )
                  : ""}
              </Media>
            </Media>
           
               <div className="my-4">
              {contact.length > 0
                ? contact.map(item =>
                  item.type === "email" ? (
                    <b> <p className="my-1" >{item.value}</p></b>
                  ) : (
                      ""
                    )
                )
                : ""}
               </div>
             
          </Col>
          <Col md={7} className={"d-flex justify-content-center"}>
            <Form
              className={"contacts-form contacts-form p-4 mb-4"}
              onSubmit={postData}
            >
              <FormGroup>
                <p
                  className={
                    "text-center w-75 mx-auto contacts-subtitle text-uppercase"
                  }
                >
                  {t("openForCommunication")}
                </p>
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  name="name"
                  placeholder={t("name")}
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
                  placeholder={t("yourQuestion")}
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
                  {t("send")}
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

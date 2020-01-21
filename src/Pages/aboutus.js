import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import API from "../API";
import HtmlParser from "react-html-parser";
import "../styles/main.css";
import map from "../assets/img/kg-07 1.png";
import Spiner from "./../Components/spiner";

class Aboutus extends Component {
  state = {
    data: {}
  };

  componentDidMount() {
    document.title = "О проекте";
    API.getDataAboutUs()
      .then(res => this.setState({ data: res.data }))
      .catch(e => console.error(e));
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Container>
          <Row>
            <Col className="col-lg-6 col-12 ">
              <p
                className={
                  "h1 text-uppercase head-text text-lg-left text-center mt-5"
                }
              >
                О ПРОЕКТЕ
              </p>
              <p className={"text-about px-4 px-lg-0 mb-lg-5 mb-1"}>
                {this.state.data && this.state.data.payload ? (
                  HtmlParser(this.state.data.payload)
                ) : (
                  <Spiner />
                )}
              </p>
            </Col>
            <Col className="map col-lg-6 col-12">
              <img className="img-fluid" src={map} />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
export default Aboutus;

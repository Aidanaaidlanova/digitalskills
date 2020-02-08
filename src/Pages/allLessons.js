import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  Container,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";
import Card from "../Components/card";
import API from "../API";
import Spiner from "../Components/spiner";
import { useTranslation } from "react-i18next";

const AllLessons = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState(0);
  const [choice, setChoice] = useState(`${t("all")}`);
  const [choiceID, setChoiceID] = useState(0);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(false);
  const count = 6;

  useEffect(() => {
    document.title = "Все курсы";
    API.getCategory()
      .then(res => setCategory(res.data))
      .catch(e => console.error(e));
  }, []);

  useEffect(() => {
    API.getAllLessons(page, count)
      .then(res => {
        setData(res.data);
        console.log(res.data);
        setLoading(true);
      })
      .catch(e => console.error(e));
  }, [page]);

  useEffect(() => {
    API.getCategoryLessons(choiceID, page, count)
      .then(res => {
        setCategoryData(res.data);
        setLoading(true);
      })
      .catch(e => console.error(e));
  }, [page, choiceID]);

  let result;
  if (choice === "Все" || choice === "Бардык сабактар") {
    result = data;
  } else {
    result = categoryData;
  }

  const createPage = () => {
    let buttons = [],
      pages = Math.ceil(result.total / count);
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
          onClick={() => {
            setPage(i);
            setLoading(false);
          }}
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
              "d-flex justify-content-lg-between align-items-center my-5 flex-wrap justify-content-center"
            }
          >
            <p className={"h1 text-uppercase"}>{t("allLessons")}</p>

            <div className={"d-inline-block"} style={{ minWidth: "220px" }}>
              <UncontrolledDropdown>
                <DropdownToggle
                  className={
                    "w-100 shadow-none rounded-0 border-dark d-flex justify-content-between align-items-center"
                  }
                  color={"fade"}
                  caret
                >
                  {choice}
                </DropdownToggle>
                <DropdownMenu className={"border-0 rounded-0 shadow w-100"}>
                  <DropdownItem
                    key={0}
                    onClick={e => {
                      setChoice(e.target.innerText);
                    }}
                    className={"dropdown-item-custom"}
                  >
                    {t("all")}
                  </DropdownItem>
                  {category &&
                    category.map((item, idx) => {
                      return (
                        <DropdownItem
                          key={idx}
                          onClick={e => {
                            setChoice(e.target.innerText);
                            setChoiceID(item.id);
                            setPage(0);
                            setLoading(false);
                          }}
                          className={"dropdown-item-custom"}
                        >
                          {item.name}
                        </DropdownItem>
                      );
                    })}
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </Col>
          <Col
            md={12}
            className={"d-flex justify-content-around mt-3 flex-wrap mb-5"}
          >
            {console.log(result)}
            {loading && result.data && result ? (
              loading ? (
                result.data.map((item, idx) => {
                  return (
                    <Col key={idx} md={4} className="mb-3">
                      <Card {...item} />
                    </Col>
                  );
                })
              ) : (
                "s"
              )
            ) : (
              <Spiner />
            )}
          </Col>
          <div className={"w-50 mx-auto text-center mb-5"}>
            {result && result.total > count ? createPage() : null}
          </div>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default AllLessons;

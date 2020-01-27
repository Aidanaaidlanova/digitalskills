import React, { useState, useEffect } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from "reactstrap";
import "../styles/lesson.css";
import closeIcon from "../assets/icon/x.png";
import { Link } from "react-router-dom";
import API from "../API";
import LessonSidebar from "./lesson_sidebar";
import "../styles/lesson.css";
const LessonHeader = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    API.getCourse(props.MatchParamsId)
      .then(res => setData(res.data))
      .catch(e => console.log(e));
  }, []);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="header lesson-header" light expand="md">
      <Link to="/lessons">
        <div className="ml-4 mr-5">
          <img src={closeIcon} alt="close icon" />
        </div>
      </Link>
      <NavbarBrand tag={"div"}>
        <div className="lesson-header-title">
          {data && data.name ? data.name : ""}
        </div>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />

      <Collapse isOpen={isOpen} className=" my-4 " navbar>
        <div className="lesson-header-collapse">
          {props.sortData.length > 0
            ? props.sortData.map((data, index) => (
                <LessonSidebar
                  id={data.id}
                  title={data.title}
                  number={data.number}
                  setSelect={props.setSelect}
                  select={props.select}
                  index={index}
                key={data.id}
                />
              ))
            : ""}
        </div>
      </Collapse>
    </Navbar>
  );
};

export default LessonHeader;

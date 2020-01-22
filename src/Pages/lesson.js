import React, { useState, useEffect } from "react";
import API from "../API";
import ReactHtmlParser from "react-html-parser";
import LessonSidebar from "../Components/lesson_sidebar";
import LessonHeader from "../Components/lesson_header";
import { Link } from "react-router-dom";
import Spiner from "../Components/spiner";
const Lesson = ({ match }) => {
  const [data, setData] = useState({});
  const [sortData, setSortData] = useState({});
  const [select, setSelect] = useState(0);

  useEffect(() => {
    API.getLesson(match.params.id)
      .then(res => setData(res.data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    const newData =
      data.length > 0
        ? data.sort((a, b) => {
            return a.number - b.number;
          })
        : "";
    setSortData(newData);
  }, [data]);

  const scrollTop = () => {
    window.scroll({
      top: 0,
      left: 0
    });
  };
  const nextBtnClicked = () => {
    setSelect(select + 1);
    scrollTop();
  };
  const prevBtnClicked = () => {
    
    setSelect(select - 1);
    scrollTop();
  };
  return (
    <div className="wrapper container-lg-fluid">
      <LessonHeader
        MatchParamsId={match.params.id}
        title={data.length > 0 ? data[0].title : ""}
        sortData={sortData}
        setSelect={setSelect}
        select={select}
      />
      {data.length > 0 ? (
        <div className="col-12 row mx-1 mx-lg-0 mt-2 mt-lg-5 ">
          <div className="col-3 ml-2 lesson-sidebar-wrapper">
            <div className="lesson-sidebar-block">
              {sortData.length > 0
                ? sortData.map((data, index) => (
                    <LessonSidebar
                      id={data.id}
                      title={data.title}
                      number={data.number}
                      setSelect={setSelect}
                      select={select}
                      index={index}
                    />
                  ))
                : ""}
            </div>
          </div>
          <div className="lesson-content-block col-md-12 col-lg-8 mx-lg-4  shadow  mb-5">
            {sortData.length > 0 ? (
              <div className="mt-4" key={sortData[select].id}>
                {ReactHtmlParser(sortData[select].content)}
              </div>
            ) : (
              ""
            )}
            {sortData.length > 0 ? (
              <div>
                {select > 0 ? (
                  <button
                    className="lesson-prev-btn"
                    onClick={() => prevBtnClicked()}
                  >
                    Назад
                  </button>
                ) : (
                  ""
                )}
                {select < sortData.length - 1 ? (
                  <button
                    className=" lesson-next-btn"
                    onClick={() => nextBtnClicked()}
                  >
                    Вперед
                  </button>
                ) : (
                  <Link to="/lessons">
                    <button className=" lesson-next-btn bg-success">
                      Завершить
                    </button>
                  </Link>
                )}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <Spiner />
      )}
    </div>
  );
};

export default Lesson;

import React from 'react';
import {Switch,Route,BrowserRouter} from 'react-router-dom';
import AllLessons from "./Pages/allLessons";
import Main from "./Pages/main";
import "./style.css";
import News from "./Pages/news";
import TeacherPage from "./Pages/teacher";
import Contacts from "./Pages/contacts";
import Aboutus from "./Pages/aboutus";
import AllNews from "./Pages/allNews";
import Course from "./Pages/course";
import Lesson from './Pages/lesson';
import AllTeacher from './Pages/allTeacher';

function App() {
  if (!localStorage.getItem("language")) {
    localStorage.setItem("language", "ru");
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Main} />
          <Route exact path={"/lessons"} component={AllLessons} />
          <Route exact path={"/news/:id"} component={News} />
          <Route exact path={"/all-news"} component={AllNews} />
          <Route exact path={"/teacher/:id"} component={TeacherPage} />
          <Route exact path={"/contacts"} component={Contacts} />
          <Route exact path={"/about"} component={Aboutus} />
          <Route exact path={"/course/:id"} component={Course} />
          <Route exact path={"/lesson/:id"} component={Lesson} />
          <Route exact path={"/all-teachers"} component={AllTeacher}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import Axios from "axios";

if (window.location.pathname === "/admin") {
  window.location.href = "/admin/";
}

const http = Axios.create({ baseURL: "https://digiskills.kg/" });
let lang = localStorage.getItem("language");

export default {
  getAllLessons: (page, count) =>
    http.get(`api/course/courses/?lang=${lang}&page=${page}&count=${count}`),
  getCategory: () => http.get(`api/course/categories/?lang=${lang}`),

  getCategoryLessons: (id, page, count) =>
    http.get(
      `api/course/courses/?category_id=${id}&lang=${lang}&page=${page}&count=${count}`
    ),
  getTeacherData: id => http.get(`api/course/teachers/${id}/?lang=${lang}`),
  getLessonsOfTeacher: id => http.get(`api/course/courses/?teacher_id=${id}`),
  getAllNews: (page, count) =>
    http.get(`api/news/?lang=${lang}&page=${page}&count=${count}`),
  getOneNews: id => http.get(`api/news/${id}?lang=${lang}`),
  getCourse: id => http.get(`api/course/courses/${id}`),
  allTeachers: (page, count) =>
    http.get(
      `https://digiskills.kg/api/course/teachers/?lang=${lang}&page=${page}&count=${count}`
    ),

  getLesson: id => http.get(`api/course/programs/?course_id=${id}`),
  getDataAboutUs: () => http.get(`api/aboutus/?lang=${lang}`),
  getContact: () => http.get(`api/contacts`),
  postData: (url, data) => http.post(url, data)
};

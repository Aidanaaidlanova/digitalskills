import Axios from "axios";

const http = Axios.create({ baseURL: "https://digiskills.kg/"});
let lang = localStorage.getItem("language");
lang = lang ? lang : "ru";

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
  allTeachers: () =>
    http.get(`https://digiskills.kg/api/course/teachers/?lang=${lang}`),
  getLesson: id => http.get(`api/course/programs/?course_id=${id}`),
  getDataAboutUs: () =>
    http.get(`https://digiskills.kg/api/aboutus/?lang=${lang}`),
  postData: (url, data) => http.post(url, data)
};

import React,{useEffect,useState} from 'react';
import {Container,Row,Col} from 'reactstrap';
import CardItem from '../Components/card';
import teacher from '../assets/img/ns_8 1.png';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import API from '../API';

const TeacherPage = props => {

  const [data,setData] = useState([]);

  useEffect(() => {
      API.getTeacherData(props.match.params.id)
        .then(res => setData(res.data))
        .catch(e => console.error(e))
  },[]);

  const {name,surname,position,about,image,language} = data;

  return (
    <div>
    <Header/>
    <Container>
      <Row className={"mt-5"}>
        <Col md={4} className={"text-center"}>
          <img src={image} className={"img-fluid rounded-pill"} alt={"teacher"}/>
        </Col>
        <Col md={7} className={"ml-md-5 d-flex flex-column justify-content-center"}>
          <p className={"h2 teacher-page"}>{name} {surname}</p>
          <p className={"teacher-page teacher-subtitle"}>{position}</p>
          <p className={"teacher-archive"}>{about}</p>
          <p>Язык преподования: <b>{language === 'ru' ? "Русский" : "Кыргызский"}</b></p>
        </Col>
        <Col md={12} className={"d-flex justify-content-around mt-3 flex-wrap mt-5 pt-5"}>
          {[1,1,1,1,1,1].map((item,idx) => {
            return <CardItem key={idx}/>
          })}
        </Col>
      </Row>
    </Container>
    <Footer/>
      </div>
  )
};

export default TeacherPage;
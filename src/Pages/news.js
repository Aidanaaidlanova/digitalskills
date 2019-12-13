import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import img from '../assets/img/Full-of-ideas-Young-female-graphic-designer-Stock-Photo1 2.png';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const News = () => {

  return (
    <div>
    <Header/>
    <Container>
      <Row className={"d-flex justify-content-center mt-5"}>
        <Col md={8}>
          <p className={"h1"}>15 декабря состоится онлайн митап по электронной коммерции</p>
          <div className={"w-100 d-flex justify-content-between"}>
            <b>1 декабря 2019</b>
            <p className={"text-muted"}>100 просмотров</p>
          </div>
        </Col>
        <Col md={8}>
          <img src={img} className={"img-fluid"} alt={"a girl"}/>
        </Col>
        <Col md={8}>
          <p className={"mt-3"}>
            Сегодня мы становимся свидетелями беспрецедентного развития цифровых технологий и их воздействия на экономический рост, государственное управление, качество услуг, способы ведения бизнеса и образ жизни людей. Наступает четвертая индустриальная революция, где технологии трансформируют традиционные сектора экономики, большие данные становятся новым цифровым золотом и искусственный интеллект значительно повышает производительность труда. Перед нами открываются совершенно новые возможности. Требованием настоящего времени является оперативная реакция и консолидация ресурсов для форсированного развития. Наша страна приняла Национальную стратегию развития Кыргызской Республики на 2018-2040 годы, где были обозначены контуры цифровой трансформации страны. Данная концепция дополняет и расширяет программу цифровой трансформации, определяет структуру, систему управления и основы процесса цифровизации страны. Для того чтобы получить цифровые дивиденды от цифровизации нашего общества, следует немедленно заложить прочный фундамент, который состоит из нецифровых факторов. Данные факторы включают в себя такие важные для развития элементы, как строительство современных и адаптивных государственных институтов, инвестиции в человеческий капитал, создание гибких механизмов разработки и обновления нормативной правовой базы, поощрение научно-исследовательской деятельности и инноваций в бизнесе, консолидация деловой среды, которые станут локомотивом роста экономики. Цифровая трансформация во всех сферах жизни требует привития в обществе культуры открытых коммуникаций, обмена знаниями и совместного творчества. Необходимо начать широкомасштабную образовательную и просветительскую работу среди широких слоев населения, особенно в сельской местности, для разъяснения возможностей и преимуществ использования цифровых технологий.
          </p>
        </Col>
        <Col md={8}>
          <a className={"news_custom-link mt-5 mb-5 d-inline-block"} href={"/"}>Вернуться назад</a>
        </Col>
      </Row>
    </Container>
    <Footer/>
      </div>
  )
};

export default News;
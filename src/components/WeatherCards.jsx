import WeatherCard from "../components/WeatherCard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function WeatherCards(props) {

    //Maps each data element to a card and returns it
    return (
        <>
        <Row>
          {props.data.map((data, index) => (
          <Col sx sm md lg xl xxl={3}>
            <WeatherCard city={data.name} temp ={data.main.temp} condition={data.weather[0].description} wind={data.wind.speed} humidity={data.main.humidity} id={index} delete={props.delete}/>
          </Col>
        ))}
        </Row>
        </>
      );

}

export default WeatherCards
import WeatherCard from "../components/WeatherCard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function WeatherCards(props) {

    return (
        <>
        <Row>
          {props.data.map((data, index) => (
          <Col sx sm md lg xl xxl={3}>
            <WeatherCard city={data.name} temp ={data.main.temp} condition={data.weather.description} wind={data.wind.speed} humidity={data.main.humidity} id={index} delete={props.delete}/>
          </Col>
        ))}
        </Row>
        </>
      );

}

export default WeatherCards
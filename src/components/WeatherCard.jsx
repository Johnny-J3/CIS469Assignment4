import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function WeatherCards(props) {

    return (
        <>
          <Card className ="wCard">
          <Card.Body>
                <Card.Title>{props.city}</Card.Title>
                <Card.Text>
                Temperature: {props.temp}<br/>
                Weather Condition: {props.condition}<br/>
                Wind Speed: {props.wind}<br/>
                Humidity: {props.humidity}<br/>
                </Card.Text>
                <Button variant="primary" onClick={() => props.delete(props.id)}>Delete</Button>
            </Card.Body>
          </Card>
        </>
      );

}

export default WeatherCards
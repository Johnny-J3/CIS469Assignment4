import "../bootstrap.min.css"
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import WeatherCards from "../components/WeatherCards";

function WeatherApp() {

  //Text in the search bar
  const [barText, setBarText] = useState(""); 

  //State used in the actual searching
  const [searchTerm, setSearchTerm] = useState("");

  //Holds the data that will go in the cards
  const [weatherData, setWeatherData] = useState([]);

  //True if the search failed and an error should show
  const [error, setError] = useState(false);

  //Code from assignment instructions
  useEffect(() => {
      const API_KEY = '372cb361f672d3edb1be82d05b118543';
      const API_Page = `https://api.openweathermap.org`
      const API_URL = `${API_Page}/data/2.5/weather?q=${searchTerm}&appid=${API_KEY}`;

      //The search should not be an error
      setError(false);
      
      const fetchData = async () => {
        try {
          const response = await fetch(API_URL);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setWeatherData([...weatherData, data]);
        } catch (error) {
          console.error('Error fetching weather data:', error);

          //Alert the user on the page of the error
          setError(true);
        }
      };
      if (searchTerm) {
        fetchData();
      }
  }, [searchTerm]);

  //updates whenever text is changed
  const handleInputChange = (event) => {
      setBarText(event.target.value);
  };

  //Calls whenever search is submitted
  const handleSearch = () =>{
      setSearchTerm(barText);
      setBarText("");
  }

  //remove the item from the list if deleted
  const handleDelete = (id) =>{
    setWeatherData([
      ...weatherData.slice(0, id),
      ...weatherData.slice(id + 1)
    ]);
  }

  //Returns the page formatting in bootstrap components
  return (
    <>
      <Container className="outer" fluid>
        <h1>Weather App</h1>
        {error ? <p key = {0} className="searchError">There was an error with the search. Make sure the city name is valid and your internet is stable.</p> : null}
          <Row className="searchRow">
            <Col sx sm md lg xl xxl={3} className="leftLabelCon"><label className="searchLabel" htmlFor="searchbox">Search a City:</label></Col>
            <Col sx sm md lg xl xxl={6}><input id="searchbox" className="mainEntry" style={{width:'100%'}} type="text" value={barText} onChange={handleInputChange} /></Col>
            <Col sx sm md lg xl xxl={3} className="searchButtonCon"><Button onClick={handleSearch}>Search</Button></Col>
          </Row>
        <Container fluid>
          <WeatherCards data={weatherData} delete={handleDelete}/>
        </Container>
      </Container>
    </>
  )
  }
  
  export default WeatherApp
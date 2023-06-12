import {
  InputGroup,
  Input,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [resto, setResto] = useState([]);
  const [saisie, setSaisie] = useState("");

  useEffect(() => {
    if (saisie.length > 0) {
      axios
        .get(`http://localhost:8081/api/restaurant?nom=${saisie}`)
        .then((response) => {
          setResto(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [saisie]);

  const handleSaisieChange = (event) => {
    setSaisie(event.target.value);
  };

  console.log(saisie);

  return (

    <div>
      <div className="d-flex justify-content-center">
        <InputGroup className="rounded-pill input-group-sm form-control me-2 mt-5 rounded-pill w-50" style={{ minWidth: '20%' }}>
          <Input
            placeholder="Quick Search"
            type="text"
            value={saisie}
            onChange={handleSaisieChange}
          />
        </InputGroup>
      </div>
  
      {resto.length > 0 && (
        <div className="row">
          {resto.map((restaurant) => (
            <div key={restaurant.id} className="col-4 mb-4 mt-3">
              <Card>
                <CardBody>
                  <CardTitle className="textbold">{restaurant.nom}</CardTitle>
                  <CardSubtitle className="text">{restaurant.adresse}</CardSubtitle>
                  <Link to={`/restaurant/${restaurant.id}`}>
                    <Button>Details</Button>
                  </Link>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
  
}

export default Home;

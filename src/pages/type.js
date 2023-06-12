import { useParams } from "react-router";
import {
  InputGroup,
  Input,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Label,
  FormGroup,
} from "reactstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./type.css";

export default function Type() {
  const [resto, setResto] = useState([]);
  const [saisie, setSaisie] = useState("");
  const [type, setType] = useState({});
  const { id } = useParams();
  const [prix, setPrix] = useState("");
  const [showResto, setShowResto] = useState(false);

  const fetchRestaurants = () => {
    axios
      .get(`http://localhost:8081/api/restaurant?type=${type.nom}`)
      .then((response) => {
        setResto(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8081/api/type/${id}`)
      .then((resp) => {
        setType(resp.data);
      })
      .catch((error) => {
        console.error(error);
      });

    if (showResto) {
      fetchRestaurants();
    }

    else if (prix !== "" || saisie.length > 0) {
      axios
        .get(
          `http://localhost:8081/api/restaurant?nom=${saisie}&type=${type.nom}&prix=${prix}`
        )
        .then((respo) => {
          setResto(respo.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    else if (prix !== "" || saisie.length == 0) {
      
      axios
        .get(
          `http://localhost:8081/api/restaurant?type=${type.nom}&prix=${prix}`
        )
        .then((respo) => {
          setResto(respo.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    if (prix === "" || saisie.length > 0) {
      
      axios
        .get(
          `http://localhost:8081/api/restaurant?nom=${saisie}&type=${type.nom}`
        )
        .then((respo) => {
          setResto(respo.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    else {
      setResto([]);
    }
  }, [showResto, saisie, type, prix]);

  const handleSaisieChange = (event) => {
    setSaisie(event.target.value);
  };

  const handlePrixChange = (event) => {
    setPrix(event.target.value);
  };

  const handleClickChange = (event) => {
    setSaisie(event.target.value);
  };

  return (
    <div className="ml-5 mr-5">
      <h5 className="d-flex justify-content-center mt-3 mb-4 ">
        Restaurants {type.nom} dans Paris
      </h5>
      <div>
        <Card className="p-1 mx-5 my-1">
          <CardBody>
            <InputGroup className="rounded-pill input-group-sm rounded-pill input-group-sm form-control me-2 rounded-pill w-50">
              <Input
                placeholder="Rechercher un restaurant par son nom"
                type="text"
                value={saisie}
                onChange={handleSaisieChange}
              />
              <Button onClick={() => setShowResto(true)}>
                Afficher tous les restaurants
              </Button>
            </InputGroup>
            <div className="p-3 mx-2 my-1">
              <div className="textlight">Filtrer par prix</div>
              <FormGroup check>
                <Label check>
                  <Input type="radio" value="e" onChange={handlePrixChange} />€
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" value="ee" onChange={handlePrixChange} />
                  €€
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" value="eee" onChange={handlePrixChange} />
                  €€€
                </Label>
              </FormGroup>
            </div>
          </CardBody>
        </Card>
      </div>

      {resto.length > 0 && (
        <div className="row p-3 mx-2 my-1">
          {resto.map((restaurant) => (
            <div key={restaurant.id} className="col-4 mb-4 mt-3">
              <Card>
                <CardBody>
                  <CardTitle className="textbold">{restaurant.nom}</CardTitle>
                  <CardSubtitle className="text">
                    {restaurant.adresse}
                  </CardSubtitle>
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

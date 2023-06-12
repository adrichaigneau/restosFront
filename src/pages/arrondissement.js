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

export default function Arr() {
  const [resto, setResto] = useState([]);
  const [saisie, setSaisie] = useState("");
  const [arr, setArr] = useState({});
  const { id } = useParams();
  const [prix, setPrix] = useState("");
  const [prixs, setPrixs] = useState([]);
  const [selectedPrix, setSelectedPrix] = useState("");
  const parsedArr = parseInt(arr.numero, 10);
  const [showResto, setShowResto] = useState(false);

  const fetchRestaurants = () => {
      axios
        .get(
          `http://localhost:8081/api/restaurant?arr=${parsedArr}`
        )
        .then((response) => {
          setResto(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }

  useEffect(() => {
    axios
      .get(`http://localhost:8081/api/arrondissement/${id}`)
      .then((resp) => {
        setArr(resp.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(`http://localhost:8081/api/prix`)
      .then((resp) => {
        setPrixs(resp.data);
      })
      .catch((error) => {
        console.error(error);
      });

    if (showResto) {
      fetchRestaurants();
    }

    else if (prix !== "" && saisie.length > 0) {

      axios
        .get(
          `http://localhost:8081/api/restaurant?nom=${saisie}&arr=${parsedArr}&prix=${prix}`
        )
        .then((respo) => {
          setResto(respo.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    else if (prix !== "" && saisie.length == 0) {
      
      axios
        .get(
          `http://localhost:8081/api/restaurant?arr=${parsedArr}&prix=${prix}`
        )
        .then((respo) => {
          setResto(respo.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    if (prix === "" && saisie.length > 0) {
      
      axios
        .get(
          `http://localhost:8081/api/restaurant?nom=${saisie}&arr=${parsedArr}`
        )
        .then((respo) => {
          setResto(respo.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [showResto, saisie, parsedArr, prix]);

  const handleSaisieChange = (event) => {
    setSaisie(event.target.value);
  };

  const handlePrixChange = (event) => {
    setPrix(event.target.value);
  };

  return (
    <div className="ml-5 mr-5">
      <h5 className="d-flex justify-content-center mt-3 mb-4 ">
        Restaurants dans le {arr.numero}e arrondissement
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
              {prixs.map((prix) => {
                return (
                  <FormGroup check key={prix.categorie}>
                    <Label check>
                      <Input
                        type="radio"
                        value={prix.categorie}
                        checked={selectedPrix === prix.categorie}
                        onChange={handlePrixChange}
                      />
                      {prix.categorie === "e" && "€"}
                      {prix.categorie === "ee" && "€€"}
                      {prix.categorie === "eee" && "€€€"}
                    </Label>
                  </FormGroup>
                );
              })}
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

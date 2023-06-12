import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

function Restaurant() {
  const [resto, setResto] = useState({});
  const [avis, setAvis] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8081/api/restaurant/${id}`)
      .then((response) => {
        console.log(response.data);
        setResto(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(`http://localhost:8081/api/avis?resto=${id}`)
      .then((response) => {
        console.log(response.data);
        setAvis(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="row px-3">
        <div className="col-4 mb-4 mt-3">
          <Card style={{ backgroundColor: "#f8f9fa" }}>
            <CardBody>
              <CardTitle tag="h5" style={{ fontWeight: "bold" }}>
                {resto.nom}
              </CardTitle>
              <CardSubtitle>{resto.adresse}</CardSubtitle>
              <CardSubtitle>{resto.tel}</CardSubtitle>
              <CardSubtitle>{resto.type && resto.type.nom}</CardSubtitle>
              <CardSubtitle>
                {resto.prix && resto.prix.categorie === "e" ? (
                  <h6>&euro;</h6>
                ) : null}
                {resto.prix && resto.prix.categorie === "ee" ? (
                  <h6>&euro;&euro;</h6>
                ) : null}
                {resto.prix && resto.prix.categorie === "eee" ? (
                  <h6>&euro;&euro;&euro;</h6>
                ) : null}
              </CardSubtitle>
              <Link to={`/avis/${id}`}>
                <Button>Laisser un avis</Button>
              </Link>
            </CardBody>
          </Card>
        </div>
      </div>

      <div className="row px-3">
        {avis.map((avis) => (
          <div key={avis.id} className="col-4 mb-4 mt-3">
            <Card style={{ backgroundColor: "#000000" }}>
              <CardSubtitle className="px-3 py-3" style={{ color: "#FAFAFA" }}>
                {avis.theme?.nom}
              </CardSubtitle>
              <CardBody>
                <CardTitle
                  tag="h5"
                  style={{ fontWeight: "bold", color: "#FAFAFA" }}
                >
                  par {avis.surnom}
                </CardTitle>
                <CardSubtitle style={{ color: "#FAFAFA" }}>
                  {avis.texte}
                </CardSubtitle>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Restaurant;

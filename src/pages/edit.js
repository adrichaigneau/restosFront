import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

export default function Edit() {
  const [arrs, setArrs] = useState([]);
  const [types, setTypes] = useState([]);
  const [prixs, setPrixs] = useState([]);
  const [arr, setArr] = useState({});
  const [type, setType] = useState({});
  const [prix, setPrix] = useState({});

  const [formData, setFormData] = useState({
    nom: "",
    adresse: "",
    tel: "",
    type: "",
    prix: "",
    arr: "",
  });
  const [texte, setTexte] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8081/api/type`)
      .then((response) => {
        setTypes(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const parsedType = parseInt(formData.type, 10);
    axios
      .get(`http://localhost:8081/api/type/${parsedType}`)
      .then((response) => {
        setType(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8081/api/prix`)
      .then((response) => {
        setPrixs(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const parsedPrix = parseInt(formData.prix, 10);
    axios
      .get(`http://localhost:8081/api/prix/${parsedPrix}`)
      .then((response) => {
        setPrix(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8081/api/arrondissement`)
      .then((response) => {
        setArrs(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const parsedArr = parseInt(formData.arr, 10);
    axios
      .get(`http://localhost:8081/api/arrondissement/${parsedArr}`)
      .then((response) => {
        setArr(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestData = {
      nom: formData.nom,
      adresse: formData.adresse,
      tel: formData.tel,
      type: types.find((ty) => ty.id === Number(formData.type)),
      prix: prixs.find((pr) => pr.id === Number(formData.prix)),
      arr: arrs.find((arr) => arr.id === Number(formData.arr)),
    };

    const jsonData = JSON.stringify(requestData);

    console.log(jsonData);

    axios
      .post("http://localhost:8081/api/restaurant", jsonData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        setTexte("Le restaurant a bien été enregistré");
      })
      .catch((error) => {
        console.error(error.response);
        setTexte("Erreur");
      });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className="d-flex justify-content-center">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="username">Nom</Label>
          <Input
            type="text"
            name="nom"
            id="nom"
            placeholder="Entrez le nom du restaurant"
            onChange={(event) => {
              setFormData({ ...formData, nom: event.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="username">Adresse</Label>
          <Input
            type="text"
            name="adresse"
            id="adresse"
            placeholder="Entrez l'adresse du restaurant"
            onChange={(event) => {
              setFormData({ ...formData, adresse: event.target.value });
            }}
          />
          <FormGroup>
            <Label for="username">Tel</Label>
            <Input
              type="text"
              name="tel"
              id="tel"
              placeholder="Entrez le téléphone du restaurant"
              onChange={(event) => {
                setFormData({ ...formData, tel: event.target.value });
              }}
            />
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label for="theme">Type</Label>
          <Input
            type="select"
            name="type"
            id="type"
            onChange={(event) => {
              setFormData({ ...formData, type: event.target.value });
            }}
          >
            <option value="">Sélectionnez un type</option>
            {types.map((type) => (
              <option key={type.id} value={type.id}>
                {type.nom}
              </option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="theme">Prix</Label>
          <Input
            type="select"
            name="prix"
            id="prix"
            onChange={(event) => {
              setFormData({ ...formData, prix: event.target.value });
            }}
          >
            <option value="">Sélectionnez une catégorie de prix</option>
            {prixs.map((prix) => {
              if (prix.categorie === "e")
                return (
                  <option key={prix.id} value={prix.id}>
                    &euro;
                  </option>
                );
              if (prix.categorie === "ee")
                return (
                  <option key={prix.id} value={prix.id}>
                    &euro;&euro;
                  </option>
                );
              if (prix.categorie === "eee")
                return (
                  <option key={prix.id} value={prix.id}>
                    &euro;&euro;&euro;
                  </option>
                );
            })}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="theme">Arrondissement</Label>
          <Input
            type="select"
            name="arr"
            id="arr"
            onChange={(event) => {
              setFormData({ ...formData, arr: event.target.value });
            }}
          >
            <option value="">
              Sélectionnez l'arrondissement du restaurant
            </option>
            {arrs.map((arr) => (
              <option key={arr.id} value={arr.id}>
                {arr.numero}
              </option>
            ))}
          </Input>
        </FormGroup>
        <Button type="submit">Valider</Button>
      </Form>
    </div>
  );
}

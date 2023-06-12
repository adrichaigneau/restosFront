import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

export default function Avis() {
  const { id } = useParams();
  const [themes, setThemes] = useState([]);
  const [theme, setTheme] = useState({});
  const [resto, setResto] = useState({});

  const [formData, setFormData] = useState({
    surnom: "",
    texte: "",
    restaurant: id,
    theme: "",
  });
  const [texte, setTexte] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8081/api/theme`)
      .then((response) => {
        setThemes(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const parsedTheme = parseInt(formData.theme, 10);
    axios
      .get(`http://localhost:8081/api/theme/${parsedTheme}`)
      .then((response) => {
        setTheme(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const parsedResto = parseInt(formData.restaurant, 10);
    axios
      .get(`http://localhost:8081/api/restaurant/${parsedResto}`)
      .then((response) => {
        setResto(response.data);
        console.log(parsedResto)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

  const requestData = {
    surnom: formData.surnom,
    texte: formData.texte,
    restaurant: resto,
    theme: themes.find((th)=> th.id === Number(formData.theme)),
  };

  const jsonData = JSON.stringify(requestData);

  console.log(jsonData);

    axios
      .post("http://localhost:8081/api/avis", jsonData, {
        headers: {
        "Content-Type": "application/json"
      },})
      .then((response) => {
        console.log(response.data);
        console.log(formData);
        setTexte("L'avis a bien été enregistré");
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
    <div className=" d-flex justify-content-center">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="username">Surnom</Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="Entrez votre nom d'utilisateur"
            onChange={(event) => {
              setFormData({ ...formData, surnom: event.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="theme">Theme</Label>
          <Input
            type="select"
            name="theme"
            id="theme"
            onChange={(event) => {
              setFormData({ ...formData, theme: event.target.value });
            }}
          >
            <option value="">Sélectionnez un thème</option>
            {themes.map((theme) => (
              <option key={theme.id} value={theme.id}>
                {theme.nom}
              </option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="texte">Texte</Label>
          <Input
            type="textarea"
            name="texte"
            id="texte"
            rows={6}
            placeholder="Ecrivez votre avis ici"
            onChange={(event) => {
              setFormData({ ...formData, texte: event.target.value });
            }}
          />
        </FormGroup>
        <Button type="submit">Valider</Button>
      </Form>
    </div>
  );
}

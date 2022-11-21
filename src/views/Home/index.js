import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import "./styles.css";

//Material Components
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField/";
import Button from "@material-ui/core/Button";

//General Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  cusMarginTop: {
    paddingTop: "100px",
    backgroundImage: `url(https://landing.shopper.com.br/img/eda073f5d7e6ebd9b97261a85254f4ff.png)`,
    backgroundSize: "contain",
    backgroundPositionY: "-10%",
    minHeight: "100vh",
  },
  cusMarginLeft: {
    marginLeft: "20px",
    marginRight: "20px",
    marginBottom: "10px",
  },
  rootGrid: {
    flexGrow: 1,
  },
  cusTitle: {
    color: "#1F1F1F",
  },
  cusSubTitle: {
    color: "#1F1F1F",
    fontSize: "12px",
    marginTop: "-10px",
  },
}));

function Home() {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!name || !day || !hour) {
      alert("Preencha corretamente.");
      return;
    }

    const transaction = {
      id: generateID(),
      name: name,
      day: day,
      hour: hour,
    };
    console.log(transaction);
    //Aqui vou chamar API no futuro

    setName("");
    setDay("");
    setHour("");
  };

  return (
    <div>
      <Header />
      <Container maxWidth="lg" className={classes.cusMarginTop}>
        <div className={classes.cusMarginLeft}>
          <h2 className={classes.cusTitle}> Registrar uma consulta</h2>
          <p className={classes.cusSubTitle}>
            {" "}
            Insira todos os dados e agende consultas.
          </p>
          <Divider />
          <div className="center">
            <TextField 
              id="name" 
              label="Nome" 
              variant="outlined" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              type="date"
              className="date"
              id="date"
              variant="outlined"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            />

            <TextField
              type="time"
              className="hour"
              id="hour"
              variant="outlined"
              value={hour}
              onChange={(e) => setHour(e.target.value)}
            />

            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "20px" }}
              onClick={handleSave}
            >
              Enviar
            </Button>
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
}

export default Home;

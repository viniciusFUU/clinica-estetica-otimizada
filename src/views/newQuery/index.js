import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Container from "@material-ui/core/Container";
import { Divider } from "@material-ui/core";
import TextField from "@material-ui/core/TextField/";
import "./styles.css";

const NewQuery = () => {
  const [date, setDate] = useState(new Date());
  const patients = [
    {
      id: 1,
      name: "Vinicius",
      day: "10/10/2022",
      hour: "10:30",
    },
    {
      id: 2,
      name: "Bianca",
      day: "11/10/2022",
      hour: "10:30",
    },
    {
      id: 3,
      name: "Gabriel",
      day: "12/10/2022",
      hour: "10:30",
    },
  ];

  return (
    <>
      <div>
        <Header />
        <Container maxWidth="lg" className="schedulePage-container">
          <div className="center">
            <h2 className="title"> Horários Disponíveis</h2>
            <p className="subTitle"> Visualizar Horários Disponíveis.</p>
            <TextField
              type="date"
              className="date"
              id="date"
              variant="outlined"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <Divider />
            <table>
              <thead>
                <tr>
                  <td></td>
                  <td>Horário disponivel</td>
                </tr>
              </thead>
              <tbody>
                {patients.map((row) => {
                  return (
                    <tr>
                      <td></td>
                      <td>{row.hour}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default NewQuery;

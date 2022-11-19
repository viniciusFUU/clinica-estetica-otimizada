import React, {useState} from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Container from "@material-ui/core/Container";
import { Divider } from "@material-ui/core";
import "./styles.css";

const SchedulePage = () => {
    const patients = [
        {
            id: 1,
            name: "Vinicius",
            day: "10/10/2022",
            hour: "10:30"
        },
        {
            id: 2,
            name: "Bianca",
            day: "11/10/2022",
            hour: "10:30"
        },
        {
            id: 3,
            name: "Gabriel",
            day: "12/10/2022",
            hour: "10:30"
        },
    ]
    
  return (
    <>
      <div>
        <Header />
        <Container maxWidth="lg" className="schedulePage-container">
          <div className="center">
            <h2 className="title"> Visualizar consultas</h2>
            <p className="subTitle"> Visualizar consultar.</p>
            <Divider />
            <table>
                <thead>
                    <tr>
                        <td>Nome do Paciente</td>
                        <td>Dia da Consulta</td>
                        <td>Hora da Consulta</td>
                    </tr>
                </thead>
                <tbody>
                    {patients.map(row => {
                        return(
                            <tr>
                                <td>{row.name}</td>
                                <td>{row.day}</td>
                                <td>{row.hour}</td>
                            </tr>
                        )
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

export default SchedulePage;

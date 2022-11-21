import React, {useState} from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Container from "@material-ui/core/Container";
import { Divider } from "@material-ui/core";
import "../schedulePage/styles.css";

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
            <p className="subTitle"> Área para visualizar e excluir consultas.</p>
            <Divider />
            <table>
                <thead className="thead-container">
                    <tr className="tr-container">
                        <td className="list1">Nome do Paciente</td>
                        <td className="list1">Dia da Consulta</td>
                        <td className="list1">Hora da Consulta</td>
                    </tr>
                </thead>
                <tbody className="tbody-container">
                    {patients.map(row => {
                        return(
                            <tr>
                                <td className="list2">{row.name}</td>
                                <td className="list2">{row.day}</td>
                                <td className="list2">{row.hour}</td>
                                <button type="submite">X</button>
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

import Card from "react-bootstrap/Card";
import AccordionHome from "./accordion";

function CardHome() {
  return (
    <Card className="cardHome">
      <Card.Body>
        <Card.Title>
          <strong> Módulo 1 - </strong>
          U1. Actividad de aprendizaje para RA1:Tarea. Rediseño de una página
          web existente
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <strong>Disponible:</strong> 8 de jul en 0:00 - 27 de jul en 23:59
        </Card.Subtitle>
        <div></div>
        <AccordionHome></AccordionHome>
        <button className="sendHomework"/> 
         
      </Card.Body>
    </Card>
  );
}

export default CardHome;

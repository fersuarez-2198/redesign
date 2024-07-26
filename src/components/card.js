import Card from "react-bootstrap/Card";
import AccordionHome from "./accordion";

function CardHome() {
  return (
    <div className="containerCard">
      <h1>
        <strong>Asignatura:</strong> Diseño Web
      </h1>

      <Card className="cardHome">
        <div className="accordionImage">
          <img
            src="https://umb.instructure.com/courses/58388/files/9635463/preview"
            alt="Imagen del curso"
          ></img>
        </div>
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
          <button className="sendHomework">Entregar Tarea</button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardHome;

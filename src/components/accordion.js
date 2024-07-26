import Accordion from "react-bootstrap/Accordion";
import ImgRubrica from "../assets/rubrica.png"
function AccordionHome() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          Tiempo requerido para el desarrollo de la actividad
        </Accordion.Header>
        <Accordion.Body>
          <li>
            Revisar &nbsp;
            <a href="https://umb.instructure.com/courses/58388/pages/plan-de-actividades-de-aprendizaje" target="_blank" rel="noreferrer">
               Plan de formación y Cronograma de Actividades
            </a>
          </li>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          ¿Qué competencias desarrollará a través de esta actividad?
        </Accordion.Header>
        <Accordion.Body>
          <li> Comprender los principios de diseño UI/UX.</li>
          <li>
            Aplicar conceptos de diseño web para mejorar la experiencia del
            usuario.
          </li>
          <li>Desarrollar habilidades en HTML y CSS.</li>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>¿Qué debe hacer? (paso a paso)</Accordion.Header>
        <Accordion.Body>
          <li>
            Selección del sitio web: Elija una página web existente que
            considere que necesita mejoras en su diseño.
          </li>
          <li>
            Análisis del sitio web: Realice un análisis detallado del diseño
            actual del sitio web, identificando aspectos que podrían mejorarse
            en términos de UI/UX.
          </li>
          <li>
            Propuesta de rediseño: Desarrolle una propuesta de rediseño que
            incluya bocetos o wireframes mostrando los cambios sugeridos.
          </li>
          <li>
            Implementación: Utilizando HTML y CSS, FIGMA, entre otros,
            implemente el rediseño propuesto en una nueva página web.
          </li>
          <li>
            Pruebas y ajustes: Realice pruebas de usabilidad y ajuste el diseño
            según sus comentarios.
          </li>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>¿Qué debe entregar? (entregable)</Accordion.Header>
        <Accordion.Body>
          <li>
            Un informe que incluya el análisis del sitio web original, la
            propuesta de rediseño y los resultados de las pruebas de usabilidad.
          </li>
          <li>
            El código fuente del rediseño implementado en HTML y CSS o el link
            con acceso libre para poder visualizar los wireframes realizados.
          </li>

          <p>
            El documento debe contener las características de un trabajo de
            curso basado en normas APA. Debe ser completo y muy bien sustentado
            Por favor NO copiar de internet. En cada trabajo se evaluara que el
            contenido sea de la autoría del estudioso.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          ¿A qué recursos acudir para el desarrollo de la actividad? (recursos)
        </Accordion.Header>
        <Accordion.Body>
          <li>
            Libros y artículos: "Don't Make Me Think" de Steve Krug, "The
            Elements of User Experience" de Jesse James Garrett.
          </li>
          <li>Herramientas de diseño: Figma, Adobe XD.</li>
          <li>
            
            Recursos en línea: MDN Web Docs para HTML y CSS, sitios de
            referencia como Awwwards y Behance para inspiración.
          </li>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>
          Rúbrica de evaluación
        </Accordion.Header>
        <Accordion.Body>
          <img src={ImgRubrica} alt="" className="rubrica"></img>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionHome;

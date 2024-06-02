import NavBar from "./NavBar";
import Footer from "./Footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Contactos() {
  return (
    <>
      <NavBar />
      <h2 className="text-center mt-5">Cuentanos, ¿En que podemos ayudar?</h2>
      <Form className="text-center mt-5">
        <Form.Group className="mb-3 w-90" controlId="formBasicEmail">
          <Form.Label>Correo:</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3 w-90" controlId="formBasicPassword">
          <Form.Label>Descripción</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Button variant="danger" type="submit">
          Enviar
        </Button>
      </Form>
      <Footer numero={"2"} pagina={"Contacto"} />
    </>
  );
}

export default Contactos;

import logo from "./logo.svg";
import "./App.css";
// import Button from "react-bootstrap/Button";
// import Image from "react-bootstrap/Image";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Form from "react-bootstrap/Form";
import {
  Button,
  Image,
  Container,
  Nav,
  Navbar,
  Form,
  Row,
  Col,
} from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#features">Projects</Nav.Link>
            <Nav.Link href="#contactMe">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container id="about">
        <Image
          src="https://avatars.githubusercontent.com/u/91927252?v=4"
          alt="Nathan Moes selfie"
          className=""
          thumbnail={true}
          roundedCircle={true}
        ></Image>
        <p>
          I am a PSU student with my bachlors of science in comuter science. I
          will be continuing on to my masters in the fall of 2024. I am
          interested in fullstack developemnt, android/ios developemnt and
          ai/ml. I have worked on many small projects related to webdevelopment
          and am currently working on more. With the same being said for android
          and ai/ml projects. As well as some small python projects. Most
          recently I worked on creating a web application that allows for users
          to search for gifs using the giphy api, and to display the current
          most treding gifs on a seperate tab.{" "}
        </p>
      </Container>
      <br />
      <Container>
        <Row>
          <Col>
            <p>
              <b>Gif search (TypeScript, React, Ionic)</b>
              <br />
              Created a website using the Giphy api to search for gifs by query,
              and to view popular/trending gifs hosted on the giphy database.
            </p>
            <p>
              <b>PSU Walk-tober (TypeScript, React, Ionic, Firebase)</b>
              <br />
              Worked with a team to create a replacement for the current
              walk-tober system. As the current system is based on chalenge
              runer, and lacks many features as well as visual refinement.
            </p>
            <p>
              <b>Something else</b>
              <br />
              More info
            </p>
          </Col>
        </Row>
      </Container>
      <br />
      <Container className="box-size" id="contactMe">
        <Row>
          <Col>
            <Form className="">
              <h2>Contact Me</h2>
              <Form.Group
                className="mb-3 form-input"
                controlId="formBasicEmail"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your name" />
              </Form.Group>

              <Form.Group
                className="mb-3 form-input"
                controlId="formBasicPassword"
              >
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Your email" />
              </Form.Group>
              <Form.Group
                className="mb-3 form-input"
                controlId="formBasicCheckbox"
              >
                <Form.Control
                  type="text"
                  as="textarea"
                  placeholder="enter optional message"
                  className="pb-5"
                ></Form.Control>
              </Form.Group>
              <Button variant="primary" type="submit" className="">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <br />
    </>
  );
}

export default App;

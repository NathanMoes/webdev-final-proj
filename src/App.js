import logo from "./logo.svg";
import "./App.css";
import { Button } from "bootstrap";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#features">Projects</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
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
    </>
  );
}

export default App;

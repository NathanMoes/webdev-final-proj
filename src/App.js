import logo from "./logo.svg";
import "./App.css";
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
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5ZgVH3fnbx8XZC9LEgDhe_fWTN9BXb7Q",
  authDomain: "personalpage-65cf1.firebaseapp.com",
  projectId: "personalpage-65cf1",
  storageBucket: "personalpage-65cf1.appspot.com",
  messagingSenderId: "223575020791",
  appId: "1:223575020791:web:11122c13efe901920aaff2",
  measurementId: "G-M4R29S861E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <>
      <div className="d-flex justify-content-center mx-0 my-0 main px-0 py-0 bg-dark">
        <Container className="m-0 main-content p-0">
          <Navbar bg="dark" variant="dark" sticky="top">
            <Container className="d-flex flex-row justify-content-start">
              <Navbar.Brand href="#home">Home</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contactMe">Contact</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Container id="about" className="mt-3">
            <Row>
              <Col sm="12" md="12" lg="6">
                <Image
                  src="https://avatars.githubusercontent.com/u/91927252?v=4"
                  alt="Nathan Moes selfie"
                  className="mx-0 pfp"
                  thumbnail={true}
                  roundedCircle={true}
                ></Image>
              </Col>
              <Col sm="12" md="12" lg="6">
                <p className="mt-5 ml-5 bio">
                  I am a PSU student with my bachelors of science in computer
                  science. I will be continuing on to my masters in the fall of
                  2024. I am interested in fullstack development, android/ios
                  development and ai/ml. I have worked on many small projects
                  related to web-development and am currently working on more.
                  With the same being said for android and ai/ml projects. As
                  well as some small python projects. Most recently I worked on
                  creating a web application that allows for users to search for
                  gifs using the giphy api, and to display the current most
                  trending gifs on a separate tab.
                </p>
              </Col>
            </Row>
          </Container>

          <br />
          <Container>
            <Row>
              <Col>
                <b>
                  <p className="ed">Education</p>
                </b>
              </Col>
            </Row>
            <Row className="mx-3">
              <Col>
                <p className="ed-school">
                  Portland State University
                  <br />
                  <small className="ed-school-desc">
                    Bachelor of Science, Computer Science 3.69 GPA Winter 2023
                  </small>
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <b>
                  <p className="ed">Programming Languages</p>
                </b>
              </Col>
            </Row>
            <Row className="mx-3">
              <Col>
                <p className="lang-list">C/C++</p>
                <p className="lang-list">Python</p>
                <p className="lang-list">Java</p>
                <p className="lang-list">Javascript/TypeScript</p>
                <p className="lang-list">HTML/XML/CSS</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <b>
                  <p className="ed">CS Courses I've enjoyed</p>
                </b>
              </Col>
            </Row>
            <Row className="mx-3">
              <Col>
                <p className="">CS 447p Computer Graphics</p>
              </Col>
            </Row>
            <Row className="mx-3">
              <Col>
                <p className="">CS 410P ADV programming in Java</p>
              </Col>
            </Row>
            <Row className="mx-3">
              <Col>
                <p className="">CS 441 Artificial Intelligence</p>
              </Col>
            </Row>
            <Row className="mx-3">
              <Col>
                <p className="">CS 445 Machine learning</p>
              </Col>
            </Row>
            <Row className="mx-3">
              <Col>
                <p className="">CS 463 Intro to Web development</p>
              </Col>
            </Row>
          </Container>
          <br />
          <Container id="projects">
            <Row>
              <Col>
                <p>
                  <b>
                    Gif search (TypeScript, React, Ionic){" "}
                    <a href="https://github.com/NathanMoes/mood-me-demo-app">
                      <i class="fa-brands fa-github"></i>
                    </a>
                  </b>
                  <br />
                  <small className="mx-3">
                    <a href="https://moodmedemo-549cd.web.app/tab1">
                      Created a website using the Giphy api to search for gifs
                      by query, and to view popular/trending gifs hosted on the
                      giphy database.
                    </a>
                  </small>
                </p>
                <p>
                  <b>
                    PSU Walk-tober (TypeScript, React, Ionic, Firebase){" "}
                    <a href="https://github.com/psu-software-engineering-capstone/walktober">
                      <i class="fa-brands fa-github"></i>
                    </a>
                  </b>
                  <br />
                  <small className="mx-3">
                    <a href="https://psuwalktober.web.app/">
                      Worked with a team to create a replacement for the current
                      walk-tober system. As the current system is based on
                      challenge runner, and lacks many features as well as
                      visual refinement.
                    </a>
                  </small>
                </p>

                <p>
                  <b>
                    Housing price predictor{" "}
                    <a href="https://github.com/NathanMoes/CS445_group_project_housing">
                      <i class="fa-brands fa-github"></i>
                    </a>
                  </b>
                  <br />
                  <small className="mx-3">
                    Worked on a group project to predict housing prices based on
                    a some sample data. Done with multiple methods reflected in
                    ML.
                  </small>
                </p>
              </Col>
            </Row>
          </Container>
          <br />
          <Container className="box-size" id="contactMe">
            <Row>
              <Col>
                <Form className="border p-4 border-white rounded">
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
                    <Form.Label>Your Message</Form.Label>
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
          <footer>
            <Container className="mb-4">
              <hr />
              <Row>
                <p className="mx-3">© 2023 Nathan Moes</p>
              </Row>
              <Row className="footer-content">
                <Col>
                  <a href="https://www.linkedin.com/in/nathan-moes-569759209/">
                    <i class="fa-brands fa-linkedin fa-2xl mx-3"></i>
                  </a>
                  <a href="https://github.com/NathanMoes">
                    <i class="fa-brands fa-github fa-2xl mx-3"></i>
                  </a>
                  <a href="mailto:nathanmoes7@gmail.com">
                    <i class="fa-solid fa-envelope fa-2xl mx-3"></i>
                  </a>
                </Col>
              </Row>
            </Container>
          </footer>
        </Container>
      </div>
    </>
  );
}

export default App;

/* 
I am Nathan Moes, a current undergrad student at PSU majoring in Computer Science. In my time at PSU I have been fortunate enough to have taken many courses on programming, logic, and software engineering. Though, what stood out most to me was web development. Largely for its vast use in many different industries. I have worked with a small team at PSU for my computer science capstone to create a web based application to replace the current system in place for the walk-tober event. The event is an initiative to try and get people more active and to form communities. That is why I worked together with my team to create features to allow for greater communication between participants, and make the design of the application more interactive/visually appealing. My passion for web development extends beyond just professional, as I dedicate much of my time to learning as much as I can including new frameworks to build on my knowledge.
*/

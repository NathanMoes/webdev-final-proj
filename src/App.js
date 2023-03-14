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
import { useState, useEffect } from "react";
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setStars([...document.getElementsByClassName("rating__star")]);
  }, []);

  const executeRating = () => {
    const starClassActive = "rating__star fas fa-star";
    const starClassInactive = "rating__star far fa-star";
    const starsLength = stars.length;
    let i;
    stars.map((star) => {
      star.onclick = () => {
        i = stars.indexOf(star);

        if (star.className === starClassInactive) {
          for (i; i >= 0; --i) stars[i].className = starClassActive;
        } else {
          for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
        }
      };
    });
  };

  const resetHandler = (ev) => {
    ev.preventDefault();
    document.querySelector("#contact-form").reset();
  };

  const submitHandler = (ev) => {
    const emailBody = document.querySelector("#input-body");
    const name = document.querySelector("#input-name");
    const email = document.querySelector("#input-email");
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let validEmail = regex.test(String(email.value).toLowerCase());
    if (String(name.value).length < 7) {
      alert("Please enter a name for the form, including first and last.");
      ev.preventDefault();
      return;
    }
    if (!validEmail) {
      alert("Invalid email. Please enter a valid email address.");
      ev.preventDefault();
      return;
    }
    if (String(emailBody.value).length < 50) {
      alert(
        "please enter at least 50 characters for your message, and try again."
      );
      ev.preventDefault();
      return;
    }
    ev.preventDefault();
    document.querySelector("#contact-form").reset();
  };

  const submitHandlerAutoFillEmail = (ev) => {
    ev.preventDefault();
    const emailBody = document.querySelector("#input-body");
    const name = document.querySelector("#input-name");
    window.open(
      `mailto:nathanmoes7@gmail.com?subject=ContactForm-${name.value}&body=${emailBody.value}`
    );
    document.querySelector("#contact-form").reset();
  };

  return (
    <>
      <div className="d-flex justify-content-center mx-0 my-0 main px-0 py-0 bg-dark">
        <Container className="m-0 main-content p-0">
          <Navbar bg="dark" variant="dark" sticky="top">
            <Container className="d-flex flex-row justify-content-start">
              <Nav className="me-auto">
                <Nav.Link href="#about" className="unique">
                  About
                </Nav.Link>
                <Nav.Link href="#projects" className="unique">
                  Projects
                </Nav.Link>
                <Nav.Link href="#contactMe" className="unique">
                  Contact
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Container id="about" className="mt-3">
            <h1 className="header-name">Nathan Moes</h1>
            <Row>
              <Col sm="12" md="12" lg="6" className="pfp-image">
                <Image
                  src="https://avatars.githubusercontent.com/u/91927252?v=4"
                  alt="A selfie of Nathan Moes smiling with glasses on and a nice blue shirt"
                  className="mx-0 pfp"
                  thumbnail={true}
                  roundedCircle
                ></Image>
              </Col>
              <Col sm="12" md="12" lg="6">
                <p className="mt-5 ml-5 bio">
                  I am Nathan Moes, a current undergrad student at PSU majoring
                  in Computer Science. In my time at PSU I have been fortunate
                  enough to have taken many courses on programming, logic, and
                  software engineering. Though, what stood out most to me was
                  web development. Largely for its vast use in many different
                  industries. I have worked with a small team at PSU for my
                  computer science capstone to create a web based application to
                  replace the current system in place for the walk-tober event.
                  The event is an initiative to try and get people more active
                  and to form communities. That is why I worked together with my
                  team to create features to allow for greater communication
                  between participants, and make the design of the application
                  more interactive/visually appealing. My passion for web
                  development extends beyond just professional, as I dedicate
                  much of my time to learning as much as I can including new
                  frameworks to build on my knowledge.
                </p>
              </Col>
            </Row>
          </Container>

          <br />
          <Container>
            <Row>
              <Col>
                <b>
                  <h2 className="ed">Education</h2>
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
                  <h2 className="ed">Programming Languages</h2>
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
                  <h2 className="ed">CS Courses I've enjoyed</h2>
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
            <h2 className="ed mb-0" id="projects-title">
              Projects
            </h2>
            <br />
            <Row className="mx-2">
              <Col>
                <p>
                  <b>
                    Gif search (TypeScript, React, Ionic){" "}
                    <a
                      href="https://github.com/NathanMoes/mood-me-demo-app"
                      aria-label="GitHub repo Gif search"
                    >
                      <i className="fa-brands fa-github"></i>
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
                    <a
                      href="https://github.com/psu-software-engineering-capstone/walktober"
                      aria-label="GitHub repo for PSU walk-tober event"
                    >
                      <i className="fa-brands fa-github"></i>
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
                    <a
                      href="https://github.com/NathanMoes/CS445_group_project_housing"
                      aria-label="GitHub repo for housing price predictor"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </b>
                  <br />
                  <small className="mx-3">
                    Worked on a group project to predict housing prices based on
                    a some sample data. Done with multiple methods reflected in
                    ML.
                  </small>
                </p>

                <p>
                  <b>
                    Twitter like application{" "}
                    <a
                      href="https://github.com/NathanMoes/twiter-clone"
                      aria-label="GitHub repo for twitter like app"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </b>
                  <br />
                  <small className="mx-3">
                    Working on a small application that resembles twitter. It
                    uses mongoDB to store information for the application,
                    including user info, tweets, etc. Backend is build on
                    node.js and express. Front end is built on Ionic, and
                    react.js.
                  </small>
                </p>
              </Col>
            </Row>
          </Container>
          <br />
          <hr></hr>
          <br />
          <Container className="box-size" id="contactMe">
            <Row>
              <Col>
                <Form
                  className="border p-4 border-white rounded"
                  id="contact-form"
                >
                  <h2>Contact Me</h2>
                  <Form.Group className="mb-3 form-input">
                    <Form.Label htmlFor="input-name">Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Your name"
                      id="input-name"
                      onChange={(ev) => {
                        setName(ev.target.value);
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3 form-input">
                    <Form.Label htmlFor="input-email">Email:</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Your email"
                      id="input-email"
                      onChange={(ev) => {
                        setEmail(ev.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 form-input">
                    <Form.Label htmlFor="input-body">Your Message</Form.Label>
                    <Form.Control
                      type="text"
                      as="textarea"
                      placeholder="enter optional message"
                      className="pb-5"
                      id="input-body"
                      onChange={(ev) => {
                        setEmailBody(ev.target.value);
                      }}
                    ></Form.Control>
                  </Form.Group>
                  <div className="d-flex">
                    <Button
                      variant="primary"
                      type="submit"
                      className=""
                      onClick={submitHandler}
                    >
                      Submit
                    </Button>
                    <Button
                      variant="primary"
                      type="submit"
                      className="mx-3"
                      onClick={submitHandlerAutoFillEmail}
                    >
                      Send as Email
                    </Button>
                    <Button
                      variant="primary"
                      type="reset"
                      className="mx-0 btn-danger"
                      onClick={resetHandler}
                    >
                      Reset
                    </Button>
                  </div>
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
                  <a
                    href="https://www.linkedin.com/in/nathan-moes-569759209/"
                    aria-label="LinkedIn"
                  >
                    <i className="fa-brands fa-linkedin fa-2xl mx-3"></i>
                  </a>
                  <a href="https://github.com/NathanMoes" aria-label="GitHub">
                    <i className="fa-brands fa-github fa-2xl mx-3"></i>
                  </a>
                  <a href="mailto:nathanmoes7@gmail.com" aria-label="Email">
                    <i className="fa-solid fa-envelope fa-2xl mx-3"></i>
                  </a>
                </Col>
                <Col>
                  <div
                    className="star-rating mx-5 mt-2"
                    onClick={executeRating}
                    id="stars-rating-system"
                    aria-label="star rating"
                  >
                    rate this site
                    <i class="rating__star far fa-star"></i>
                    <i class="rating__star far fa-star"></i>
                    <i class="rating__star far fa-star"></i>
                    <i class="rating__star far fa-star"></i>
                    <i class="rating__star far fa-star"></i>
                  </div>
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

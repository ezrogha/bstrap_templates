import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Card,
  Collapse,
  ProgressBar,
  CardDeck,
  Form,
  InputGroup
} from "react-bootstrap";
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaHome,
  FaGraduationCap,
  FaEnvelope,
  FaFolderOpen,
  FaCloud,
  FaUser,
  FaPencilAlt
} from "react-icons/fa";

import styles from "./index.module.scss";
import ProfileImg from "./img/image9.jpg";

export default () => {
  const [homeOpen, setHomeOpen] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <div>
      <Container>
        <header>
          <Row className="no-gutters">
            <Col md="5" lg="4">
              <Image src={ProfileImg} width="100%" height="100%" />
            </Col>
            <Col md="7" lg="8">
              <div>
                <div className="p-5 bg-dark text-white">
                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <h1 className="display-4">Roghashin Timbiti</h1>
                    <FaTwitter fontSize="18" />
                    <FaGithub fontSize="18" />
                    <FaLinkedin fontSize="18" />
                    <FaFacebook fontSize="18" />
                  </div>
                </div>

                <div className="bg-light text-dark p-4 lead text-muted">
                  Experienced Full Stack Javascript Developer
                </div>

                <div id={styles.portItems} className=" text-center text-white">
                  <div
                    className="p-4 bg-primary"
                    onClick={() => {
                      setHomeOpen(!homeOpen);
                      setResumeOpen(false);
                      setWorkOpen(false);
                      setContactOpen(false);
                    }}
                    aria-controls="home"
                    aria-expanded={homeOpen}
                  >
                    <FaHome size="32" />
                    <span className="d-none d-sm-block">Home</span>
                  </div>

                  <div
                    className="p-4 bg-success"
                    onClick={() => {
                      setResumeOpen(!resumeOpen);
                      setHomeOpen(false);
                      setWorkOpen(false);
                      setContactOpen(false);
                    }}
                    aria-controls="resume"
                    aria-expanded={resumeOpen}
                  >
                    <FaGraduationCap size="32" />
                    <span className="d-none d-sm-block">Resume</span>
                  </div>

                  <div
                    className="p-4 bg-warning"
                    onClick={() => {
                      setWorkOpen(!workOpen);
                      setResumeOpen(false);
                      setHomeOpen(false);
                      setContactOpen(false);
                    }}
                    aria-controls="work"
                    aria-expanded={workOpen}
                  >
                    <FaFolderOpen size="32" />
                    <span className="d-none d-sm-block">Work</span>
                  </div>

                  <div
                    className="p-4 bg-danger"
                    onClick={() => {
                      setContactOpen(!contactOpen);
                      setResumeOpen(false);
                      setHomeOpen(false);
                      setWorkOpen(false);
                    }}
                    aria-controls="contact"
                    aria-expanded={contactOpen}
                  >
                    <FaEnvelope size="32" />
                    <span className="d-none d-sm-block">Contact</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </header>

        <div>
          {/* HOME */}
          <Collapse in={homeOpen}>
            <div className={styles.collapsible}>
              <Card.Body className="bg-primary py-5 text-white">
                <h2>Welcome To My Page</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nihil, ut!
                </p>
              </Card.Body>

              <Card.Body className="py-5">
                <h3>My Skills</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Delectus ea excepturi officia quisquam atque eos.
                </p>
                <hr />
                <h4>HTML</h4>
                <ProgressBar
                  variant="success"
                  now="90"
                  animated
                  className="mb-3"
                />

                <h4>CSS3</h4>
                <ProgressBar
                  variant="success"
                  now="80"
                  animated
                  className="mb-3"
                />

                <h4>Javascript</h4>
                <ProgressBar
                  variant="success"
                  now="70"
                  animated
                  className="mb-3"
                />

                <h4>Python</h4>
                <ProgressBar
                  variant="success"
                  now="60"
                  animated
                  className="mb-3"
                />

                <h4>Swift</h4>
                <ProgressBar
                  variant="success"
                  now="50"
                  animated
                  className="mb-3"
                />
              </Card.Body>
            </div>
          </Collapse>

          {/* RESUME */}
          <Collapse in={resumeOpen}>
            <div className={styles.collapsible}>
              <Card.Body className="bg-success py-5 text-white">
                <h2>My Resume</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nihil, ut!
                </p>
              </Card.Body>

              <Card.Body className="py-5">
                <h4>Where Have I Worked?</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque similique saepe inventore rem vitae esse.
                </p>
                <CardDeck>
                  <Card>
                    <Card.Body>
                      <Card.Title>Andela</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolor, magnam.
                      </Card.Text>
                      <p className="p-2 mb-2 bg-dark text-white">
                        Position: Full Stack Developer
                      </p>
                      <p className="p-2 mb-2 bg-dark text-white">
                        Phone: (555) 555-5555
                      </p>
                    </Card.Body>
                    <Card.Footer>
                      <h6>Dates: 2019 - 2020</h6>
                    </Card.Footer>
                  </Card>

                  <Card>
                    <Card.Body>
                      <Card.Title>Flux Holdings</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolor, magnam.
                      </Card.Text>
                      <p className="p-2 mb-2 bg-dark text-white">
                        Position: Full Stack Developer
                      </p>
                      <p className="p-2 mb-2 bg-dark text-white">
                        Phone: (555) 555-5555
                      </p>
                    </Card.Body>
                    <Card.Footer>
                      <h6>Dates: 2017 - 2018</h6>
                    </Card.Footer>
                  </Card>

                  <Card>
                    <Card.Body>
                      <Card.Title>D-veloperMedia</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolor, magnam.
                      </Card.Text>
                      <p className="p-2 mb-2 bg-dark text-white">
                        Position: Full Stack Developer
                      </p>
                      <p className="p-2 mb-2 bg-dark text-white">
                        Phone: (555) 555-5555
                      </p>
                    </Card.Body>
                    <Card.Footer>
                      <h6>Dates: 2016 - 2017</h6>
                    </Card.Footer>
                  </Card>
                </CardDeck>
              </Card.Body>
            </div>
          </Collapse>

          {/* WORK */}
          <Collapse in={workOpen}>
            <div className={styles.collapsible}>
              <Card.Body className="bg-warning py-5 text-white">
                <h2>My Work</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nihil, ut!
                </p>
              </Card.Body>
              <Card.Body className="py-5">
                <h4>What Have I Built?</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque similique saepe inventore rem vitae esse.
                </p>
                <Row className="no-gutters">
                  <Col md="3">
                    <Image fluid src="https://unsplash.it/600.jpg?image=242" />
                  </Col>
                  <Col md="3">
                    <Image fluid src="https://unsplash.it/600.jpg?image=243" />
                  </Col>
                  <Col md="3">
                    <Image fluid src="https://unsplash.it/600.jpg?image=244" />
                  </Col>
                  <Col md="3">
                    <Image fluid src="https://unsplash.it/600.jpg?image=255" />
                  </Col>
                </Row>
                <Row className="no-gutters">
                  <Col md="3">
                    <Image fluid src="https://unsplash.it/600.jpg?image=256" />
                  </Col>
                  <Col md="3">
                    <Image fluid src="https://unsplash.it/600.jpg?image=247" />
                  </Col>
                  <Col md="3">
                    <Image fluid src="https://unsplash.it/600.jpg?image=248" />
                  </Col>
                  <Col md="3">
                    <Image fluid src="https://unsplash.it/600.jpg?image=249" />
                  </Col>
                </Row>
              </Card.Body>
            </div>
          </Collapse>

          {/* CONTACT */}
          <Collapse in={contactOpen}>
            <div className={styles.collapsible}>
              <Card.Body className="bg-danger py-5 text-white">
                <h2>Contact</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nihil, ut!
                </p>
              </Card.Body>
              <Card.Body className="py-5">
                <h4>Get In Touch</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque similique saepe inventore rem vitae esse.
                </p>
                <Form>
                  <Form.Group>                    
                      <InputGroup size="lg" className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text
                            id="name"
                            className="bg-danger text-white"
                          >
                            <FaUser fontSize="20" />
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          className="bg-dark text-white"
                          placeholder="Name"
                          aria-label="name"
                          aria-describedby="name"
                        />
                      </InputGroup>                    
                  </Form.Group>
                  <Form.Group>                    
                      <InputGroup size="lg" className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text
                            id="email"
                            className="bg-danger text-white"
                          >
                            <FaEnvelope fontSize="20" />
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          className="bg-dark text-white"
                          placeholder="Email"
                          aria-label="email"
                          aria-describedby="email"
                        />
                      </InputGroup>                    
                  </Form.Group>
                  <Form.Group>                    
                      <InputGroup size="lg" className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text
                            id="message"
                            className="bg-danger text-white"
                          >
                            <FaPencilAlt fontSize="20" />
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          as="textarea"
                          className="bg-dark text-white"
                          placeholder="Message"
                          aria-label="message"
                          aria-describedby="message"
                        />
                      </InputGroup>                    
                  </Form.Group>
                  <Button variant="danger" size="lg" block>Submit</Button>
                </Form>
              </Card.Body>
            </div>
          </Collapse>
        </div>

        <footer className="p-5 bg-dark text-white">
          <Row>
            <Col md="6">
              <Button variant="outline-light">
                <FaCloud size="18" /> Download Resume
              </Button>
            </Col>
          </Row>
        </footer>
      </Container>
    </div>
  );
};

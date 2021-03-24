import React from "react";
import { Col, Image, Card } from "react-bootstrap";

export default ({ count, title, author, bottomCardTheme = "bg-light text-dark", smallText="text-muted" }) => {
  return (
    <Col md="4">
      <Card className="mb-4">
        <Image
          src={`https://source.unsplash.com/random/30${count}x200`}
          alt="Blog"
          className="w-100"
        />
        <Card.Body>
          <Card.Title>
            <h4>Bog Post {title}</h4>
          </Card.Title>
          <small className="text-muted">Written by {author} on 20.0{count}.19</small>
          <hr />
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
            facilis, sequi excepturi, quisquam, dignissimos molestiae dicta
            dolore dolores quas vel sunt placeat tempora expedita suscipit.
            Magni vel iusto mollitia exercitationem.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className={`py-3 ${bottomCardTheme}`}>
        <blockquote className="card-body">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
            amet tenetur vel quam atque est?
          </p>
          <footer className="blockquote-footer">
            <small className={smallText}>
              {" "}
              Someone Famous in Source Title
            </small>
          </footer>
        </blockquote>
      </Card>
    </Col>
  );
};

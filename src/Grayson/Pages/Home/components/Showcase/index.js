import React from "react";
import { Carousel, Button } from "react-bootstrap";

import Showcase1 from "../../../../images/others/jonatan-pie-h8nxGssjQXs-unsplash.jpg";
import Showcase2 from "../../../../images/others/rosie-fraser-1L71sPT5XKc-unsplash.jpg";
import Showcase3 from "../../../../images/others/viktor-juric-O9G6VbqWAy4-unsplash.jpg";

import styles from './index.module.scss'

export default function index() {
  return (
    <Carousel>
      <Carousel.Item className={styles.carouselItem}>
        <img className="d-block w-100" src={Showcase3} alt="First slide" />
        <Carousel.Caption className="d-none d-sm-block mb-5 text-right">
          <h3 className="display-3">Heading One</h3>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            aperiam vel ullam deleniti reiciendis ratione quod aliquid inventore
            vero perspiciatis.
          </p>
          <Button size="lg" variant="danger">
            Sign Up Now
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.carouselItem}>
        <img className="d-block w-100" src={Showcase1} alt="Third slide" />

        <Carousel.Caption className="d-none d-sm-block mb-5">
          <h3 className="display-3">Heading Two</h3>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            aperiam vel ullam deleniti reiciendis ratione quod aliquid inventore
            vero perspiciatis.
          </p>
          <Button size="lg" variant="primary">
            Learn More
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.carouselItem}>
        <img className="d-block w-100" src={Showcase2} alt="Third slide" />

        <Carousel.Caption className="d-none d-sm-block mb-5 text-right">
          <h3 className="display-3">Heading Three</h3>
          <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aperiam vel ullam deleniti reiciendis ratione quod aliquid inventore vero perspiciatis.</p>
          <Button size="lg" variant="success">Learn More</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

import React from 'react'
import { Carousel, Button } from 'react-bootstrap'
import Showcase3 from '../../../../images/image3.jpg'

export default () => {
  return (
    <Carousel.Item>
        <img
          className="d-block w-100"
          src={Showcase3}
          alt="First slide"
        />
        <Carousel.Caption className="d-none d-sm-block mb-5">
          <h3 className="display-3">Heading One</h3>
          <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aperiam vel ullam deleniti reiciendis ratione quod aliquid inventore vero perspiciatis.</p>
          <Button size="lg" variant="danger">Sign Up Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
  )
}

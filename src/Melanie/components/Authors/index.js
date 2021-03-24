import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './index.module.scss'
import AuthorsItem from './components/AuthorsItem'

import Person1 from '../../img/person1.jpg'
import Person2 from '../../img/person2.jpg'
import Person3 from '../../img/person3.jpg'
import Person4 from '../../img/person4.jpg'

export default () => {
  return (
    <section id={styles.authors} className="my-5 text-center">
      <Container id="authors">
        <Row>
          <Col>
            <div id={styles.meet} className="mb-5">
              <h1 className="mb-3">
                Meet The Authors
              </h1>
              <p className="mb-3 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum numquam aperiam dolores a porro!</p>
            </div>
          </Col>
        </Row>

        <Row>
          <AuthorsItem name="Susan Williams" avatar={Person1} position="Lead Writer" />
          <AuthorsItem name="Grace Smith" avatar={Person2} position="Co-Writer" />
          <AuthorsItem name="John Doe" avatar={Person3} position="Editor" />
          <AuthorsItem name="Kevin Swanson" avatar={Person4} position="Designer" />
        </Row>
      </Container>
    </section>
  )
}

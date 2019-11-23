import React from 'react'

import { Container, Col, Row } from 'reactstrap'
import FridgeButton from '/imports/ui/components/home/fridge-button'

import { Link } from 'react-router-dom'

import Paths from '/imports/routes/paths';

const Home = () => (
  <Container>
    <h1 className="text-center p-4">Fridge Till</h1>
    <Row>
      <Col>
        <Link to={Paths.build.contents()}>
          <FridgeButton/>
        </Link>
      </Col>
      <Col>
        <h3 className="text-center align-self-center">Coming Soon</h3>
      </Col>
    </Row>
  </Container>
)

export default Home

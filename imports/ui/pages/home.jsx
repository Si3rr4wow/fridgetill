import React from 'react'

import { Container, Col, Row } from 'reactstrap'
import FridgeButton from '/imports/ui/components/home/fridge-button'
import StockButton from '/imports/ui/components/home/stock-button'

import { Link } from 'react-router-dom'

import Paths from '/imports/routes/paths';

const Home = () => (
  <Container>
    <h1 className="text-center p-4">Fridge Till</h1>
    <Row>
      <Col>
        <Link style={{ textDecoration: 'none' }} to={Paths.build.contents()}>
          <FridgeButton/>
        </Link>
      </Col>
      <Col>
        <Link style={{ textDecoration: 'none' }} to={Paths.build.contents()}>
          <StockButton/>
        </Link>
      </Col>
    </Row>
  </Container>
)

export default Home

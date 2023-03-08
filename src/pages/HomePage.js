import React from 'react'
import { Container,Row } from 'reactstrap'
import SubHeader from '../components/SubHeader'

const HomePage = () => {
  return (
    <Container>
        <SubHeader current='Home' detail={true} />
        <Row>

        </Row>
    </Container>
  )
}

export default HomePage
import React from 'react'
import { Container,Row } from 'reactstrap'
import SubHeader from '../components/SubHeader'
import Slider from '../components/Slider'
import Images from '../utils/images'

const HomePage = () => {
  return (
    <Container>
        <SubHeader current='Home' detail={true} />
        <Row>
          <Slider images={Images} />
        </Row>
    </Container>
  )
}

export default HomePage
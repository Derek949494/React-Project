import React from 'react'
import { Container, Row } from 'reactstrap'
import ProductSlider from '../components/ProductSlider';
import SubHeader from '../components/SubHeader';


const MenuPage = () => {
  return (
    <Container>
        <SubHeader current='Menu' detail={true} />
        <Row>
           <ProductSlider />
        </Row>
    </Container>
  )
}

export default MenuPage
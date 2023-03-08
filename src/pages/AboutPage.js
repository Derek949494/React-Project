import { Col, 
         Row, 
         Container, 
         Card, 
         CardBody, 
         CardHeader 
        } from "reactstrap";
import SubHeader from "../components/SubHeader";


const AboutPage = () => {
  return (
    <Container>
        <SubHeader current='About Us' detail={true} />
        <Row className='row-content'>
            <Col sm='6'>
                <h3>Get to know us</h3>
                <p>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
            </Col>
            <Col sm='6'>
                <Card>
                    <CardHeader className=' bg-success text-white'>
                        <h3>Facts about us</h3>
                    </CardHeader>
                    <CardBody>
                    <dl className='row'>
                                <dt className='col-6'>Founded</dt>
                                <dd className='col-6'>July 22, 1994</dd>
                                <dt className='col-6'>No. of Coffees served this year</dt>
                                <dd className='col-6'>2563</dd>
                                <dt className='col-6'>No. of Employees</dt>
                                <dd className='col-6'>10</dd>
                                <dt className='col-6'>No. of smiles </dt>
                                <dd className='col-6'>too many to count</dd>
                            </dl>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card className='bg-light mt-3'>
                    <CardBody>
                        <blockquote className='blockquote'>
                            <p>blah blah blah blah blah blah blah blah blah something funny blah</p>
                            <footer className="blockquote-footer"> blah blah blah blah blah blah blah blah blah</footer>
                        </blockquote>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <Row className='row-content'>
            <Col xs='12'>
                <h3>Local Partners</h3>
            </Col>
        </Row>
    </Container>
  )
}

export default AboutPage
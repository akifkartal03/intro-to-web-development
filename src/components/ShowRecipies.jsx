import React from 'react';
import {
    Button,
    Card,
    CardImg,
    CardText,
    CardBody,
    Col,
    Container,
    Row
} from 'reactstrap';
const Album = ({ recipies }) => {
    return (
        <div className="recipies">
            <Container>
                <Row>
                    {recipies.map((recipie, index) => {
                        return (
                            <Col md="4" key={index}>
                                <Card className="mb-4 box-shadow">
                                    <CardImg
                                        top
                                        width="180" 
                                        height="250"
                                        src="https://i.ibb.co/x6ZdLxZ/Sandwich.png"
                                    />
                                    <CardBody className="text-center">
                                        {/*THERE WILL AN item OBJECT IN DATABASE AND IT WILL BE PRINTED IN HERE*/}
                                        <CardText><strong >Sandwich</strong></CardText>

                                        <div className="d-flex justify-content-between align-items-center">
                                            <Button
                                                href="#"
                                                variant = "outline-dark"
                                                color="secondary"
                                                size="lg"
                                                block
                                            >
                                            <strong>Show</strong>
                                            </Button>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default Album;

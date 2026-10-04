import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from "reactstrap"

const UserPage=()=>{
    return (<Container>
        <h3>Users</h3>
        <Row>
            <Col>
            <Card>
                <CardBody>
                    <img src="" alt="user-profile-img"/>
                    <CardTitle tag='h5'>
                        Full name
                    </CardTitle>
                    <CardText>Email</CardText>
                </CardBody>
            </Card>
            </Col>
        </Row>
    </Container>)
}

export default UserPage;
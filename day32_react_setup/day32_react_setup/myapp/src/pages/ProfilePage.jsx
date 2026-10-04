import { Col, Container, Row } from "reactstrap"

const ProfilePage=()=>{

    return(<Container>
        <Row>
            <Col md={4}>
            <img src="" alt="Profile" />
            </Col>
            <Col md={8}>
                <h3>Full name</h3>
                <p><strong>Email:</strong>email@gmail.com</p>
                <p><strong>Username:</strong>user name</p>
            </Col>
        </Row>
    </Container>)
}

export default ProfilePage;
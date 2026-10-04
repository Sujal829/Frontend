import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardBody, CardTitle, Col, Container, Form, FormGroup, Input, Label, Row, Spinner } from 'reactstrap';
import { authStart, logout } from '../redux/slices/authSlice';

const Login = () => {
    const dispatch = useDispatch();
    const { loading, error, user, isAuthenticated } = useSelector(state => state.auth);

    const [state, setState] = useState({
        username: '',
        password: ''
    });

    const handleChange = ({ target }) => {
        setState({
            ...state,
            [target.name]: target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(async(dispatchInner)=>{
            dispatchInner(authStart())
            setTimeout(()=>{
                dispatchInner(logout())
            },1000)
        })
    }
    return (
        <Container>
            <Row className='justify-content-center'>
                <Col md={6}>
                    <Card>
                        <CardBody>
                            <CardTitle tag='h4'>Login</CardTitle>
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label for='username'>User Name</Label>
                                    <Input id='username' name='username' value={state.username} onChange={handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for='passwd'>Password</Label>
                                    <Input type='password' id='passwd' name='password' value={state.password} onChange={handleChange} />
                                </FormGroup>
                                <Button >
                                    {loading ? <Spinner size='sm' /> : 'Login'}
                                </Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardBody, CardTitle, Col, Container, Form, FormGroup, Input, Label, Row, Spinner } from 'reactstrap';
import { authFailure, authStart, authSuccess, logout } from '../redux/slices/authSlice';
import { api, axiosAuth } from '../services/axiosInstance';
import { clearTokens, saveTokens } from '../utlis/helpers';
// import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
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
    const handleSubmit = async(e) => {
        e.preventDefault(); // form basc reload behaviour is prevented
        const {username, password} = state;
        dispatch(async(dispatchInner)=>{
            dispatchInner(authStart());
            try {
                let res;
                try {
                    res = await axiosAuth.post('/auth/login',{username, password,expiresInMins: 10})
                } catch (err) {
                    res = await axiosAuth.post('/auth/login',{username, password,expiresInMins: 10})
                }
                const {accessToken, refreshToken} = res.data;
                saveTokens(accessToken, refreshToken);

                const profile = await api.get('/auth/me');
                dispatchInner(authSuccess({user: profile}))
                // navigate('/')
            } catch (err) {
                console.log(err);
                const message = err?.response?.data?.message || err?.message || 'Login Failed';
                dispatchInner(authFailure(message));
                clearTokens();
            }
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
                                {error && <div className='text-danger mt-2'>{error}</div>}
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;
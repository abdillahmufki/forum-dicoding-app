import { Box, Button, FormControl, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Layout2 from '../../components/Layout/Layout2';
import { useLoginMutation } from '../../states/features/users';
import { useGlobalContext } from '../../context';
import { useAuthContext } from '../../context/auth';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

    const defaultState = {
        email: "",
        password: "",
    }
    const [state, setState] = useState(defaultState);
    const [errorText, setErrorText] = useState(defaultState);
    const { setAuth } = useAuthContext();
    const navigate = useNavigate();

    const handleInputText = (e) => {
        const { value, name } = e.target;
        setState((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const [login, { isSuccess, isLoading }] = useLoginMutation();
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (state.email === "") {
            setErrorText((prev) => ({
                ...prev,
                email: "Email tidak boleh kosong"
            }));
        } else {
            setErrorText((prev) => ({
                ...prev,
                email: ""
            }));
        }

        if (state.password === "") {
            setErrorText((prev) => ({
                ...prev,
                password: "Password tidak boleh kosong"
            }));
        } else {
            setErrorText((prev) => ({
                ...prev,
                password: ""
            }));
        }

        try {
            const res = await login({
                email: state.email,
                password: state.password
            });
            if (res.data.status === "success") {
                const token = res?.data?.data?.token;
                setAuth(token);
                navigate("/");
                alert("login berhasil")
            }
        } catch (error) {
            alert('gagal login');
        }

    }

    return (
        <Layout2>
            <section style={{ display: "block", margin: 'auto', width: 60 + "%" }}>
                <div className='title' style={{ textAlign: "center" }}>Login</div>
                <FormControl
                    // sx={{ width: "60%" }}
                    fullWidth
                >
                    <Box mb={3}>
                        <TextField
                            fullWidth
                            name='email'
                            label='Email'
                            variant='outlined'
                            size='small'
                            error={errorText.email === "" ? false : true}
                            helperText={errorText.email}
                            value={state.email}
                            onChange={handleInputText}
                        />
                    </Box>
                    <Box mb={3}>
                        <TextField
                            fullWidth
                            type='password'
                            name='password'
                            label='Password'
                            variant='outlined'
                            size='small'
                            error={errorText.password === "" ? false : true}
                            helperText={errorText.password}
                            value={state.password}
                            onChange={handleInputText}
                        />
                    </Box>
                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        className='primaryBtn'
                        onClick={handleSubmit}
                    >
                        Masuk
                    </Button>
                </FormControl>

                <div>
                    Belum punya akun ? <span><Link to="/register">Register</Link></span>
                </div>

            </section>
        </Layout2>
    )
}

export default Login
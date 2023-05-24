import { Box, Button, FormControl, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Layout2 from '../../components/Layout/Layout2';
import { useLoginMutation, useRegisterMutation } from '../../states/features/users';
import { useGlobalContext } from '../../context';
import { useAuthContext } from '../../context/auth';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const defaultState = {
    name: "",
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
  const [register, { isSuccess, isLoading }] = useRegisterMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (state.name === "") {
      setErrorText((prev) => ({
        ...prev,
        name: "Nama tidak boleh kosong"
      }));
    } else {
      setErrorText((prev) => ({
        ...prev,
        name: ""
      }));
    }

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
      const res = await register({
        name: state.name,
        email: state.email,
        password: state.password
      });
      if (res.data.status === "success") {
        navigate("/login");
        alert("register berhasil")
      }
    } catch (error) {
      alert('gagal register');
    }

  }

  return (
    <Layout2>
      <section style={{ display: "block", margin: 'auto', width: 60 + "%" }}>
        <div className='title' style={{ textAlign: "center" }}>Register</div>
        <FormControl
          // sx={{ width: "60%" }}
          fullWidth
        >
          <Box mb={3}>
            <TextField
              fullWidth
              name='name'
              label='Name'
              variant='outlined'
              size='small'
              error={errorText.name === "" ? false : true}
              helperText={errorText.name}
              value={state.name}
              onChange={handleInputText}
            />
          </Box>
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
            Register
          </Button>
        </FormControl>

        <div>
          Sudah punya akun ? <span><Link to="/login">Login</Link></span>
        </div>

      </section>
    </Layout2>
  )
}

export default Register
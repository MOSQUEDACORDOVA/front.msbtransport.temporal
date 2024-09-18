import React, { useState } from "react";
import axios from "axios"; // Importar axios
import { toast, ToastContainer } from 'react-toastify'; // Importar react-toastify
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

const LoginView = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Inicializar useNavigate para redirección

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    try {
      const response = await axios.post('https://production.backend.msbtransport.mosquedacordova.com/api/login', {
        email: username,
        password: password,
      });

      // Manejo de la respuesta de éxito
      const token = response.data.access_token;
      const user = response.data.user;

      // Aquí puedes almacenar el token en el localStorage o en un contexto global
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);

      // Mostrar notificación de éxito
      toast.success('Login successful! Redirecting...');

      // Redirigir a la página de transport-list
      setTimeout(() => {
        navigate('/transport-list'); // Usar navigate para redirigir
      }, 2000); // Espera 2 segundos antes de redirigir

    } catch (error) {
      // Manejo de errores
      if (error.response && error.response.data.errors) {
        // Mostrar mensaje de error específico del backend
        console.log(error.response.data.errors)
        const errorMessage = error.response.data.errors.email[0] || 'Invalid credentials, please try again.';
        toast.error(errorMessage); // Mostrar notificación de error
      } else {
        const generalError = 'An error occurred. Please try again later.';
        toast.error(generalError); // Mostrar notificación de error
      }
    }
  };

  return (
    <>
      {/*login-area start*/}
      <div className='login-area'>
        <div className='container p-sm-0'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title text-center'>
                <h4 className='subtitle'>LOGIN</h4>
                <h2 className='title'>Welcome Back</h2>
                <p className='content'>
                  Please enter your username and password to log in.
                </p>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6'>
              <div className='login-form-inner'>
                <form onSubmit={handleLogin}>
                  <div className='form-group mb-4'>
                    <label htmlFor='username'>Email</label>
                    <input
                      type='email'
                      className='form-control'
                      id='username'
                      placeholder='Enter your email'
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className='form-group mb-4'>
                    <label htmlFor='password'>Password</label>
                    <input
                      type='password'
                      className='form-control'
                      id='password'
                      placeholder='Enter your password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button type='submit' className='btn btn-base w-100'>
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*login-area end*/}

      {/* Toast Container para mostrar notificaciones */}
      <ToastContainer />
    </>
  );
};

export default LoginView;
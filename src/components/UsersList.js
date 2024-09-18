import React, { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from 'axios';

const urlBack = 'https://production.backend.msbtransport.mosquedacordova.com'; // URL base del backend

const UsersList = () => {
  const [users, setUsers] = useState([]); // Initialize as an empty array
  const [searchTerm, setSearchTerm] = useState('');
  const [newUser, setNewUser] = useState({
    id: null,
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const [isEditMode, setIsEditMode] = useState(false);

  const closeModalRef = useRef(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${urlBack}/api/users`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      console.log(response.data, "res")
      const usersData = Array.isArray(response.data.data) ? response.data.data : []; // Ensure response is an array
      console.log(usersData, "usersData")
      setUsers(usersData);
    } catch (error) {
      toast.error('Error fetching users: ' + (error.response?.data?.message || 'Unknown error'));
    }
  };

  const handleChange = (event) => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
  };

  const handleAddUserClick = () => {
    setNewUser({
      id: null,
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    });
    setIsEditMode(false);
  };

  const handleEditUserClick = (user) => {
    setNewUser({ ...user, password: '', password_confirmation: '' });
    setIsEditMode(true);
  };

  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para controlar el botón

  const handleAddUser = async (event) => {
    event.preventDefault();
    setIsSubmitting(true); // Bloquear el botón

    try {
      const response = await axios.post(`${urlBack}/api/register`, {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
        password_confirmation: newUser.password_confirmation,
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });

      setUsers([...users, response.data.user]);
      toast.success('User added successfully!');
      setNewUser({ id: null, name: '', email: '', password: '', password_confirmation: '' });
      fetchUsers();
      closeModalRef.current.click(); // Cerrar el modal
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        // Mostrar los errores de validación
        Object.keys(error.response.data.errors).forEach((key) => {
          error.response.data.errors[key].forEach((message) => {
            toast.error(message);
          });
        });
      } else {
        toast.error('Unknown error occurred while adding user.');
      }
    } finally {
      setIsSubmitting(false); // Habilitar el botón nuevamente
    }
  };

  const handleEditUser = async (event) => {
    event.preventDefault();
    setIsSubmitting(true); // Bloquear el botón al iniciar la solicitud
  
    try {
      const response = await axios.put(`${urlBack}/api/users/${newUser.id}`, {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password, // Puedes eliminar este campo si no deseas cambiar la contraseña
        password_confirmation: newUser.password_confirmation, // Solo si deseas confirmar la contraseña
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
  
      console.log(response, "updating user");
      toast.success('User updated successfully!');
      setNewUser({ id: null, name: '', email: '', password: '', password_confirmation: '' });
      fetchUsers(); // Refrescar la lista de usuarios
      closeModalRef.current.click(); // Cerrar el modal
    } catch (error) {
      console.log(error, "error updating user");
  
      if (error.response && error.response.data && error.response.data.errors) {
        // Mostrar errores de validación
        Object.keys(error.response.data.errors).forEach((key) => {
          error.response.data.errors[key].forEach((message) => {
            toast.error(message);
          });
        });
      } else {
        toast.error('Unknown error occurred while updating user.');
      }
    } finally {
      setIsSubmitting(false); // Habilitar el botón después de la solicitud
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`${urlBack}/api/users/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });

      setUsers(users.filter((user) => user && user.id !== id));
      toast.error('User deleted successfully!');
    } catch (error) {
      toast.error('Error deleting user: ' + (error.response?.data?.message || 'Unknown error'));
    }
  };

  const closeModal = () => {
    if (closeModalRef.current) {
      closeModalRef.current.click();
    }
  };

  const filteredUsers = Array.isArray(users) ? users.filter((user) =>
    user && (user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email?.toLowerCase().includes(searchTerm.toLowerCase()))
  ) : [];

  return (
    <>
      {/* Users List Area Start */}
      <div className='users-list-area mb-auto'>
        <div className='px-2 px-lg-4'>
          <div className='row justify-content-center'>
            <div className='col-lg-10'>
              <div className='section-title text-center'>
                <h4 className='subtitle'>USER LIST</h4>
                <h2 className='title mb-3'>Manage Your Users</h2>
                <div className='input-group mb-3'>
                  <button
                    className='btn btn-base m-0'
                    data-bs-toggle='modal'
                    data-bs-target='#addUserModal'
                    onClick={handleAddUserClick}
                  >
                    Add User
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-10'>
              <div className='table-responsive'>
                <table className='table table-hover table-bordered'>
                  <thead className='table-dark'>
                    <tr>
                      <th scope='col'>Name</th>
                      <th scope='col'>Email</th>
                      <th scope='col'>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((user) => (
                      <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                          <button
                            className='btn btn-warning me-2'
                            data-bs-toggle='modal'
                            data-bs-target='#addUserModal'
                            onClick={() => handleEditUserClick(user)}
                          >
                            <FaEdit />
                          </button>
                          <button
                            className='btn btn-danger'
                            onClick={() => handleDeleteUser(user.id)}
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para agregar/editar usuario */}
      <div className='modal fade' id='addUserModal' tabIndex='-1' aria-labelledby='addUserModalLabel' aria-hidden='true'>
        <div className='modal-dialog modal-lg'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='addUserModalLabel'>{isEditMode ? 'Edit User' : 'Add New User'}</h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
                ref={closeModalRef}
              ></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={isEditMode ? handleEditUser : handleAddUser}>
                <div className='row'>
                  <div className='col-md-6 mb-3'>
                    <label htmlFor='name' className='form-label'>Name</label>
                    <input
                      type='text'
                      className='form-control'
                      id='name'
                      name='name'
                      value={newUser.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className='col-md-6 mb-3'>
                    <label htmlFor='email' className='form-label'>Email</label>
                    <input
                      type='email'
                      className='form-control'
                      id='email'
                      name='email'
                      value={newUser.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                {!isEditMode && (
                  <>
                    <div className='row'>
                      <div className='col-md-6 mb-3'>
                        <label htmlFor='password' className='form-label'>Password</label>
                        <input
                          type='password'
                          className='form-control'
                          id='password'
                          name='password'
                          value={newUser.password}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className='col-md-6 mb-3'>
                        <label htmlFor='password_confirmation' className='form-label'>Confirm Password</label>
                        <input
                          type='password'
                          className='form-control'
                          id='password_confirmation'
                          name='password_confirmation'
                          value={newUser.password_confirmation}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </>
                )}
                <button type='submit' className='btn btn-base' disabled={isSubmitting}>
                  {isSubmitting ? 'Saving...' : isEditMode ? 'Save Changes' : 'Save User'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Container para notificaciones */}
      <ToastContainer />
    </>
  );
};

export default UsersList;

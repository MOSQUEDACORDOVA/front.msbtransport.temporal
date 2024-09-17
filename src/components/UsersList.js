import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import {
  FaEdit,
  FaTrash,
} from "react-icons/fa";  

const UsersList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John', lastName: 'Doe', dni: '12345678', email: 'john.doe@example.com', userType: 'Admin' },
    { id: 2, name: 'Jane', lastName: 'Smith', dni: '87654321', email: 'jane.smith@example.com', userType: 'User' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [newUser, setNewUser] = useState({
    id: null,
    name: '',
    lastName: '',
    dni: '',
    email: '',
    userType: '',
  });

  const [isEditMode, setIsEditMode] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleChange = (event) => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
  };

  const handleAddUserClick = () => {
    setNewUser({
      id: null,
      name: '',
      lastName: '',
      dni: '',
      email: '',
      userType: '',
    });
    setIsEditMode(false);
  };

  const handleEditUserClick = (user) => {
    setNewUser(user);
    setIsEditMode(true);
  };

  const handleAddUser = (event) => {
    event.preventDefault();
    setUsers([...users, { id: users.length + 1, ...newUser }]);
    toast.success('User added successfully!');
    setNewUser({ id: null, name: '', lastName: '', dni: '', email: '', userType: '' });
  };

  const handleEditUser = (event) => {
    event.preventDefault();
    setUsers(users.map((u) => (u.id === newUser.id ? newUser : u)));
    toast.success('User updated successfully!');
    setNewUser({ id: null, name: '', lastName: '', dni: '', email: '', userType: '' });
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    toast.error('User deleted successfully!');
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.dni.includes(searchTerm)
  );

  return (
    <>
      {/* Users List Area Start */}
      <div className='users-list-area mb-auto'>
        <div className='container p-sm-0'>
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
                {/* Tabla responsive utilizando clases de Bootstrap */}
                <table className='table table-hover table-bordered'>
                  <thead className='table-dark'>
                    <tr>
                      <th scope='col'>Name</th>
                      <th scope='col'>Last Name</th>
                      <th scope='col'>DNI</th>
                      <th scope='col'>Email</th>
                      <th scope='col'>Type User</th>
                      <th scope='col'>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((user) => (
                      <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.lastName}</td>
                        <td>{user.dni}</td>
                        <td>{user.email}</td>
                        <td>{user.userType}</td>
                        <td>
                          <button
                            className='btn btn-warning me-2'
                            data-bs-toggle='modal'
                            data-bs-target='#addUserModal'
                            onClick={() => handleEditUserClick(user)}
                          >
                            <FaEdit /> {/* Icono de edición */}
                          </button>
                          <button
                            className='btn btn-danger'
                            onClick={() => handleDeleteUser(user.id)}
                          >
                            <FaTrash /> {/* Icono de eliminación */}
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
              <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={isEditMode ? handleEditUser : handleAddUser}>
                <div className='row'>
                  <div className='col-md-6 mb-3'>
                    <label htmlFor='name' className='form-label'>
                      Name
                    </label>
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
                    <label htmlFor='lastName' className='form-label'>
                      Last Name
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='lastName'
                      name='lastName'
                      value={newUser.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6 mb-3'>
                    <label htmlFor='dni' className='form-label'>
                      DNI
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='dni'
                      name='dni'
                      value={newUser.dni}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className='col-md-6 mb-3'>
                    <label htmlFor='email' className='form-label'>
                      Email
                    </label>
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
                <div className='row'>
                  <div className='col-md-6 mb-3'>
                    <label htmlFor='userType' className='form-label'>
                      Type User
                    </label>
                    <select
                      className='form-select'
                      id='userType'
                      name='userType'
                      value={newUser.userType}
                      onChange={handleChange}
                      required
                    >
                      <option value=''>Select Type</option>
                      <option value='Admin'>Admin</option>
                      <option value='User'>User</option>
                    </select>
                  </div>
                </div>
                <button type='submit' className='btn btn-base' data-bs-dismiss="modal">
                  {isEditMode ? 'Save Changes' : 'Save User'}
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

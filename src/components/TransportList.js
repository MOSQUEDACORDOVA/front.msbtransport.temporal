import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaEdit, FaTrash, FaTruck } from "react-icons/fa";
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { useNavigate } from 'react-router-dom';

const DeliveryForm = () => {
  const urlBack = 'https://production.backend.msbtransport.mosquedacordova.com';
  const navigate = useNavigate();
  const [deliveries, setDeliveries] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [isEditMode, setIsEditMode] = useState(false);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toTimeString().slice(0, 5); // HH:MM format
  };

  // Define the initial state for a new delivery
  const initialDeliveryState = {
    id: null,
    date: new Date().toISOString().split('T')[0],
    arrivee: getCurrentTime(),
    depart: '',
    duree: '00:00',
    arrets: '',
    plaque: '',
    camion: '',
    chauffeur: '',
    territoire: '',
    initial: '',
    final: '',
    parcour: '',
    cycle: '',
    quar: '',
  };

  // Define the initial state for clients
  const initialClientsState = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    client_code: '',
    num_du_client: '',
    hr_arrivee: getCurrentTime(),
    hr_depart: '',
    nom_imprime: '',
    ref: '',
    retour_marchandise: '',
    factures: Array.from({ length: 5 }, (_, j) => ({
      id: j + 1,
      code_feature: '',
      colis: '',
    })),
  }));

  const [newDelivery, setNewDelivery] = useState(initialDeliveryState);
  const [clients, setClients] = useState(initialClientsState);    

  // Handle change for client fields
  const handleClientChange = (e, clientIndex) => {
    const { name, value } = e.target;
    setClients((prevClients) => {
      const updatedClients = [...prevClients];
      updatedClients[clientIndex][name] = value;
      return updatedClients;
    });
  };
  
  const handleFactureChange = (e, clientIndex, factureIndex) => {
    const { name, value } = e.target;
    setClients((prevClients) => {
      const updatedClients = [...prevClients];
      updatedClients[clientIndex].factures[factureIndex][name] = value;
      return updatedClients;
    });
  };

  const dateOptions = {
    dateFormat: "Y-m-d",
  };

  const timeOptions = {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true,
  };

  useEffect(() => {
    fetchDeliveries();
  }, []);

  const fetchDeliveries = async () => {
    try {
        const response = await axios.get(`${urlBack}/api/delivery`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });

        console.log(response.data.data, "get");
        const deliveriesData = response.data.data;

        // Mapear las entregas para incluir clientes y facturas asociadas
        const formattedDeliveries = deliveriesData.map((delivery) => {
            // Iterar sobre los clientes y sus características
            const clients = delivery.clients.map((client) => {
                return {
                    ...client,
                    // Mapear las facturas del cliente
                    factures: client.features.map((feature) => ({
                        id_feature: feature.id_feature,
                        code_feature: feature.code_feature,
                        colis: feature.colis,
                    })),
                };
            });

            return {
                ...delivery,
                clients, // Asignar el array de clientes formateado
            };
        });

        setDeliveries(formattedDeliveries);
    } catch (error) {
        console.error('Error fetching deliveries:', error);
        if (error.response && error.response.status === 401) {
            toast.error('Session expired.');
            navigate('/login');
        } else {
            toast.error('Error loading deliveries');
        }
    }
  };
 

  const handleChange = (event) => {
    const { name, value, dataset } = event.target;
    if (dataset.clientIndex !== undefined) {
      const clientIndex = dataset.clientIndex;
      const newClients = [...newDelivery.clients];

      if (dataset.factureIndex !== undefined) {
        const factureIndex = dataset.factureIndex;
        newClients[clientIndex].factures[factureIndex][name] = value;
      } else {
        newClients[clientIndex][name] = value;
      }

      setNewDelivery((prevDelivery) => ({ ...prevDelivery, clients: newClients }));
    } else {
      if (['arrets', 'initial', 'final', 'parcour', 'cycle'].includes(name)) {
        if (!/^\d*$/.test(value)) return;
        setNewDelivery((prevDelivery) => ({ ...prevDelivery, [name]: value === '' ? '' : parseInt(value) }));
      } else {
        setNewDelivery((prevDelivery) => ({ ...prevDelivery, [name]: value }));
      }
    }
  };

  const handleTimeChange = (field, time) => {
    const formattedTime = time instanceof Date ? time.toTimeString().slice(0, 5) : time;
    setNewDelivery((prev) => {
      const updatedDelivery = { ...prev, [field]: formattedTime };
      calculateDuration(updatedDelivery.arrivee, updatedDelivery.depart);
      return updatedDelivery;
    });
  };

  const calculateDuration = (arrivee, depart) => {
    if (arrivee && depart) {
      const arriveeTime = new Date(`1970-01-01T${arrivee}:00`);
      const departTime = new Date(`1970-01-01T${depart}:00`);
      
      // Cambiamos la condición para que el arrivee sea menor que el depart
      if (arriveeTime < departTime) {
        const diffMs = departTime - arriveeTime; // Invertimos la resta
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        setNewDelivery((prev) => ({
          ...prev,
          duree: `${diffHours}:${diffMinutes < 10 ? '0' : ''}${diffMinutes}`,
        }));
      } else {
        setNewDelivery((prev) => ({ ...prev, duree: '00:00' }));
      }
    } else {
      setNewDelivery((prev) => ({ ...prev, duree: '00:00' }));
    }
  };  

  const handleAddDeliveryClick = () => {
    setNewDelivery(initialDeliveryState);
    setClients(initialClientsState);   
    setIsEditMode(false);
    setCurrentStep(1);
  };

  const closeModal = () => {
    document.querySelector('#addDeliveryModal .btn-close').click();
  };

  const handleAddDelivery = async (event) => {
    event.preventDefault();
    const deliveryData = {
      ...newDelivery,
      arrets: parseInt(newDelivery.arrets),
      initial: parseInt(newDelivery.initial),
      final: parseInt(newDelivery.final),
      parcour: parseInt(newDelivery.parcour),
      cycle: parseInt(newDelivery.cycle),
      clients: clients.map((client) => ({
        ...client,
        client_code: client.client_code,
        num_du_client: client.num_du_client,
        hr_arrivee: client.hr_arrivee,
        hr_depart: client.hr_depart,
        nom_imprime: client.nom_imprime,
        ref: client.ref,
        retour_marchandise: client.retour_marchandise,
        factures: client.factures.map((facture) => ({
          ...facture,
          code_feature: facture.code_feature,
          colis: facture.colis,
        })),
      })),
    };
  
    try {
      const response = await axios.post(`${urlBack}/api/delivery`, deliveryData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      console.log(response, "add response");
      toast.success('Delivery added successfully!');
      fetchDeliveries();
      handleAddDeliveryClick();
      closeModal();
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        Object.keys(error.response.data.errors).forEach((key) => {
          error.response.data.errors[key].forEach((message) => {
            toast.error(message); // Muestra cada mensaje de error de validación
          });
        });
      } else {
        toast.error('Error adding delivery');
      }
    }
  };  

  const handleEditDeliveryClick = (delivery) => {
    // Configurar los datos del delivery
    setNewDelivery({
      ...delivery,
      arrets: delivery.arrets.toString(),
      initial: delivery.initial.toString(),
      final: delivery.final.toString(),
      parcour: delivery.parcour.toString(),
      cycle: delivery.cycle.toString(),
    });
  
    const updatedClients = Array.from({ length: 6 }, (_, i) => {
      const clientData = delivery.clients ? delivery.clients[i] : null; // Tomar los datos del cliente si existen
      return {
        id: i + 1,
        client_code: clientData?.client_code || '',
        num_du_client: clientData?.num_du_client || '',
        hr_arrivee: clientData?.hr_arrivee || '',
        hr_depart: clientData?.hr_depart || '',
        nom_imprime: clientData?.nom_imprime || '',
        ref: clientData?.ref || '',
        retour_marchandise: clientData?.retour_marchandise || '',
        factures: Array.from({ length: 5 }, (__, j) => {
          const factureData = clientData?.factures ? clientData.factures[j] : null; // Tomar los datos de la factura si existen
          return {
            id: j + 1,
            code_feature: factureData?.code_feature || '',
            colis: factureData?.colis || '',
          };
        }),
      };
    });

    setClients(updatedClients);
    setIsEditMode(true);
    setCurrentStep(1);
  };

  const handleEditDelivery = async (event) => {
    event.preventDefault();
  
    const deliveryData = {
      ...newDelivery,
      arrets: parseInt(newDelivery.arrets),
      initial: parseInt(newDelivery.initial),
      final: parseInt(newDelivery.final),
      parcour: parseInt(newDelivery.parcour),
      cycle: parseInt(newDelivery.cycle),
      clients: clients.map(client => ({
        ...client,
        factures: client.factures.map(facture => ({
          code_feature: facture.code_feature,
          colis: facture.colis,
        })),
      })),
    };
  
    try {
      const response = await axios.put(`${urlBack}/api/delivery/${newDelivery.id}`, deliveryData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      console.log(response, "updated");
  
      toast.success('Delivery updated successfully!');
      fetchDeliveries();
      handleAddDeliveryClick();
      closeModal();
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        Object.keys(error.response.data.errors).forEach((key) => {
          error.response.data.errors[key].forEach((message) => {
            toast.error(message); // Muestra cada mensaje de error de validación
          });
        });
      } else {
        toast.error('Error updating delivery');
      }
    }
  };

  const handleDeleteDelivery = async (id) => {
    try {
      await axios.delete(`${urlBack}/api/delivery/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      toast.error('Delivery deleted successfully!');
      fetchDeliveries();
    } catch (error) {
      console.error('Error deleting delivery:', error);
      toast.error('Error deleting delivery');
    }
  };

  const validateStep = (step) => {
    // Validar Step 1
    if (step === 1) {
      const {
        date,
        arrivee,
        depart,
        arrets,
        plaque,
        camion,
        chauffeur,
        territoire,
        initial,
        final,
        parcour,
        cycle,
        quar
      } = newDelivery;
  
      // Verificar si algún campo está vacío
      if (
        !date || !arrivee || !depart || !arrets || !plaque || !camion ||
        !chauffeur || !territoire || !initial || !final || !parcour ||
        !cycle || !quar
      ) {
        toast.error('Please fill in all required fields in Step 1.');
        return false;
      }
  
      // Validaciones adicionales si es necesario (ej: fechas coherentes)
      if (new Date(arrivee) > new Date(depart)) {
        toast.error('Arrivee time cannot be later than Depart time.');
        return false;
      }
    }
  
    // Validar Step 2
    if (step === 2) {
      const client1 = clients[0]; // El primer cliente es obligatorio
  
      // Validar los campos obligatorios del primer cliente
      if (
        !client1.client_code || !client1.num_du_client || !client1.hr_arrivee ||
        !client1.hr_depart || !client1.nom_imprime || !client1.ref
      ) {
        toast.error('Please fill in all required fields for Client 1.');
        return false;
      }
  
      // Validar los campos de otros clientes opcionales
      for (let i = 1; i < clients.length; i++) {
        const client = clients[i];
        if ((client.client_code || client.num_du_client) && (
          !client.hr_arrivee || !client.hr_depart || !client.nom_imprime || !client.ref
        )) {
          toast.error(`Please complete all fields for Client ${i + 1}.`);
          return false;
        }
      }
  
      // Validar las facturas (factures) de cada cliente
      clients.forEach((client, index) => {
        if (client.factures) {
          client.factures.forEach((facture, factureIndex) => {
            if (facture.code_feature && !facture.colis) {
              toast.error(`Please complete all fields for Facture ${factureIndex + 1} of Client ${index + 1}.`);
              return false;
            }
          });
        }
      });
    }
  
    // Si todas las validaciones pasaron, retornamos true
    return true;
  };  

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prevStep) => Math.min(prevStep + 1, 2));
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleStepChange = (step) => {
    if (validateStep(currentStep)) {
      setCurrentStep(step);
    }
  };

  return (
    <>
      {/* Delivery List Area Start */}
      <div className='transport-list-area mb-auto'>
        <div className='px-2 px-lg-4'>
          <div className='row justify-content-center'>
            <div className='col-12'>
              <div className='section-title text-center'>
                <h4 className='subtitle'>DELIVERY LIST</h4>
                <h2 className='title mb-3'>Manage Deliveries</h2>
                <div className='input-group mb-3'>
                  <button
                    className='btn btn-base m-0'
                    data-bs-toggle='modal'
                    data-bs-target='#addDeliveryModal'
                    onClick={handleAddDeliveryClick}
                  >
                    Add Delivery
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-12'>
              <div className='table-responsive'>
                <table className='table table-hover table-bordered'>
                  <thead className='table-dark'>
                    <tr>
                      <th scope='col'>Date</th>
                      <th scope='col'>Arrivée</th>
                      <th scope='col'>Départ</th>
                      <th scope='col'>Durée</th>
                      <th scope='col'>Arrêts</th>
                      <th scope='col'>Plaque</th>
                      <th scope='col'>Camion</th>
                      <th scope='col'>Chauffeur</th>
                      <th scope='col'>Territoire</th>
                      <th scope='col'>Initial</th>
                      <th scope='col'>Final</th>
                      <th scope='col'>Parcour</th>
                      <th scope='col'>Cycle</th>
                      <th scope='col'>Quar</th>
                      {/* <th scope='col'>Client</th> */}
                      <th scope='col'>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deliveries.map((delivery) => (
                      <tr key={delivery.id}>
                        <td className='no-wrap-cell'>{delivery.date}</td>
                        <td className='no-wrap-cell'>{delivery.arrivee}</td>
                        <td className='no-wrap-cell'>{delivery.depart}</td>
                        <td className='no-wrap-cell'>{delivery.duree}</td>
                        <td className='no-wrap-cell'>{delivery.arrets}</td>
                        <td className='no-wrap-cell'>{delivery.plaque}</td>
                        <td>{delivery.camion}</td>
                        <td>{delivery.chauffeur}</td>
                        <td>{delivery.territoire}</td>
                        <td className='no-wrap-cell'>{delivery.initial}</td>
                        <td className='no-wrap-cell'>{delivery.final}</td>
                        <td className='no-wrap-cell'>{delivery.parcour}</td>
                        <td className='no-wrap-cell'>{delivery.cycle}</td>
                        <td className='no-wrap-cell'>{delivery.quar}</td>
                        {/* <td>{delivery.id_user}</td> */}
                        <td>
                          <div className='d-flex'>
                            <button
                              className='btn btn-warning me-2'
                              data-bs-toggle='modal'
                              data-bs-target='#addDeliveryModal'
                              onClick={() => handleEditDeliveryClick(delivery)}
                            >
                              <FaEdit />
                            </button>
                            <button
                              className='btn btn-danger'
                              onClick={() => handleDeleteDelivery(delivery.id)}
                            >
                              <FaTrash />
                            </button>
                          </div>
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

      {/* Modal for adding/editing delivery */}
      <div className='modal fade modalPers' id='addDeliveryModal' tabIndex='-1' aria-labelledby='addDeliveryModalLabel' aria-hidden='true'>
        <div className='modal-dialog modal-xl'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='addDeliveryModalLabel'>{isEditMode ? 'Edit Delivery' : 'Add New Delivery'}</h5>
              <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
            </div>
            <div className='modal-body'>
              {/* Stepper Navigation */}
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className={`nav-link ${currentStep === 1 ? 'active' : ''}`} onClick={() => handleStepChange(1)}>Step 1</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className={`nav-link ${currentStep === 2 ? 'active' : ''}`} onClick={() => handleStepChange(2)}>Step 2</button>
                </li>
              </ul>

              <form onSubmit={isEditMode ? handleEditDelivery : handleAddDelivery}>
                {/* Step 1: Entrepot Fields */}
                {currentStep === 1 && (
                  <div className='row'>
                    <div className='col-md-6 col-lg-4 mb-3'>
                      <label htmlFor='date' className='form-label'>Date</label>
                      <Flatpickr
                        className='form-control'
                        id='date'
                        name='date'
                        value={newDelivery.date}
                        options={{ ...dateOptions, defaultDate: new Date() }}
                        onChange={([date]) => setNewDelivery((prev) => ({ ...prev, date: date.toISOString().split('T')[0] }))}
                        required
                      />
                    </div>
                    <div className='col-12'></div>
                    <div className='col-md-6 col-lg-4 mb-3'>
                      <label htmlFor='arrivee' className='form-label'>Arrivée</label>
                      <Flatpickr
                        className='form-control'
                        id='arrivee'
                        name='arrivee'
                        value={newDelivery.arrivee}
                        options={timeOptions}
                        onChange={([time]) => handleTimeChange('arrivee', time)}
                        required
                      />
                    </div>
                    <div className='col-md-6 col-lg-4 mb-3'>
                      <label htmlFor='depart' className='form-label'>Départ</label>
                      <Flatpickr
                        className='form-control'
                        id='depart'
                        name='depart'
                        value={newDelivery.depart}
                        options={timeOptions}
                        onChange={([time]) => handleTimeChange('depart', time)}
                        required
                      />
                    </div>
                    <div className='col-md-6 col-lg-4 mb-3'>
                      <label htmlFor='duree' className='form-label'>Durée</label>
                      <input
                        type='text'
                        className='form-control'
                        id='duree'
                        name='duree'
                        value={newDelivery.duree}
                        disabled
                      />
                    </div>
                    <div className='col-12 text-center'>
                      <FaTruck className="text-secondary" />
                    </div>
                    {/* More Fields */}
                    <div className='col-md-6 mb-3'>
                      <label htmlFor='arrets' className='form-label'>Arrets</label>
                      <input
                        type='text'
                        className='form-control'
                        id='arrets'
                        name='arrets'
                        value={newDelivery.arrets}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className='col-md-6 mb-3'>
                      <label htmlFor='plaque' className='form-label'>Plaque</label>
                      <input
                        type='text'
                        className='form-control'
                        id='plaque'
                        name='plaque'
                        value={newDelivery.plaque}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className='col-md-6 col-lg-4 mb-3'>
                      <label htmlFor='camion' className='form-label'>Camion</label>
                      <input
                        type='text'
                        className='form-control'
                        id='camion'
                        name='camion'
                        value={newDelivery.camion}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className='col-md-6 col-lg-4 mb-3'>
                      <label htmlFor='chauffeur' className='form-label'>Chauffeur</label>
                      <input
                        type='text'
                        className='form-control'
                        id='chauffeur'
                        name='chauffeur'
                        value={newDelivery.chauffeur}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className='col-md-6 col-lg-4 mb-3'>
                      <label htmlFor='territoire' className='form-label'>Territoire</label>
                      <input
                        type='text'
                        className='form-control'
                        id='territoire'
                        name='territoire'
                        value={newDelivery.territoire}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className='col-12 text-center'>
                      <p className='text-center fw-bolder mb-0'>Kilometrage</p>
                    </div>
                    <div className='col-md-6 col-lg-4 mb-3'>
                      <label htmlFor='initial' className='form-label'>Initial</label>
                      <input
                        type='text'
                        className='form-control'
                        id='initial'
                        name='initial'
                        value={newDelivery.initial}
                        onChange={handleChange}
                        inputMode='numeric'
                        pattern='\d*'
                        required
                      />
                    </div>
                    <div className='col-md-6 col-lg-4 mb-3'>
                      <label htmlFor='final' className='form-label'>Final</label>
                      <input
                        type='text'
                        className='form-control'
                        id='final'
                        name='final'
                        value={newDelivery.final}
                        onChange={handleChange}
                        inputMode='numeric'
                        pattern='\d*'
                        required
                      />
                    </div>
                    <div className='col-md-6 col-lg-4 mb-3'>
                      <label htmlFor='parcour' className='form-label'>Parcour</label>
                      <input
                        type='text'
                        className='form-control'
                        id='parcour'
                        name='parcour'
                        value={newDelivery.parcour}
                        onChange={handleChange}
                        inputMode='numeric'
                        pattern='\d*'
                        required
                      />
                    </div>
                    <div className='col-md-6 mb-3'>
                      <label htmlFor='cycle' className='form-label'>Cycle</label>
                      <input
                        type='text'
                        className='form-control'
                        id='cycle'
                        name='cycle'
                        value={newDelivery.cycle}
                        onChange={handleChange}
                        inputMode='numeric'
                        pattern='\d*'
                        required
                      />
                    </div>
                    <div className='col-md-6 mb-3'>
                      <label htmlFor='quar' className='form-label'>Quar</label>
                      <select
                        className='form-select'
                        id='quar'
                        name='quar'
                        value={newDelivery.quar}
                        onChange={handleChange}
                        required
                      >
                        <option value=''>Select Quar</option>
                        <option value='AM'>AM</option>
                        <option value='PM'>PM</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 2: Client Fields */}
                {currentStep === 2 && (
                  <div className='row mb-3'>
                    {/* Accordions for clients and invoices */}
                    <div className="accordion" id="accordionClients">
                      {clients.map((client, index) => (
                        <div className="accordion-item" key={`client-${client.id}`}>
                          <h2 className="accordion-header" id={`headingClient${index + 1}`}>
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#collapseClient${index + 1}`}
                              aria-expanded="true"
                              aria-controls={`collapseClient${index + 1}`}
                            >
                              {`Client ${index + 1}`}{index > 0 && ' (Optional)'}
                            </button>
                          </h2>
                          <div
                            id={`collapseClient${index + 1}`}
                            className="accordion-collapse collapse"
                            aria-labelledby={`headingClient${index + 1}`}
                            data-bs-parent="#accordionClients"
                          >
                            <div className="accordion-body">
                              {/* Client fields inside accordion */}
                              <div className='row'>
                                {/* Client fields */}
                                <div className='col-md-6 mb-3'>
                                  <label htmlFor={`client_code_${index + 1}`} className='form-label'>Client Code</label>
                                  <input
                                    type='text'
                                    className='form-control'
                                    id={`client_code_${index + 1}`}
                                    name="client_code"
                                    value={client.client_code}
                                    onChange={(e) => handleClientChange(e, index)}
                                    required={index === 0}
                                  />
                                </div>
                                <div className='col-md-6 mb-3'>
                                  <label htmlFor={`num_du_client_${index + 1}`} className='form-label'>Nom Du Client</label>
                                  <input
                                    type='text'
                                    className='form-control'
                                    id={`num_du_client_${index + 1}`}
                                    name="num_du_client"
                                    value={client.num_du_client}
                                    onChange={(e) => handleClientChange(e, index)}
                                    required={index === 0}
                                  />
                                </div>
                                {/* Otros campos del cliente */}
                                <div className='col-md-6 mb-3'>
                                  <label htmlFor={`hr_arrivee_${index + 1}`} className='form-label'>Hr Arrivée</label>
                                  <Flatpickr
                                    className='form-control'
                                    id={`hr_arrivee_${index + 1}`}
                                    name="hr_arrivee"
                                    value={client.hr_arrivee}
                                    options={{ enableTime: true, noCalendar: true, dateFormat: "H:i" }}
                                    onChange={([time]) => handleClientChange({ target: { name: 'hr_arrivee', value: time } }, index)}
                                    required={index === 0}
                                  />
                                </div>
                                <div className='col-md-6 mb-3'>
                                  <label htmlFor={`hr_depart_${index + 1}`} className='form-label'>Hr Départ</label>
                                  <Flatpickr
                                    className='form-control'
                                    id={`hr_depart_${index + 1}`}
                                    name="hr_depart"
                                    value={client.hr_depart}
                                    options={{ enableTime: true, noCalendar: true, dateFormat: "H:i" }}
                                    onChange={([time]) => handleClientChange({ target: { name: 'hr_depart', value: time } }, index)}
                                    required={index === 0}
                                  />
                                </div>
                                {/* Receptor Section */}
                                <div className='col-md-6 col-lg-4 mb-3'>
                                  <label htmlFor={`nom_imprime_${index + 1}`} className='form-label'>Nom Imprimé</label>
                                  <input
                                    type='text'
                                    className='form-control'
                                    id={`nom_imprime_${index + 1}`}
                                    name="nom_imprime"
                                    value={client.nom_imprime}
                                    onChange={(e) => handleClientChange(e, index)}
                                  />
                                </div>
                                <div className='col-md-6 col-lg-4 mb-3'>
                                  <label htmlFor={`ref_${index + 1}`} className='form-label'>Réf</label>
                                  <input
                                    type='text'
                                    className='form-control'
                                    id={`ref_${index + 1}`}
                                    name="ref"
                                    value={client.ref}
                                    onChange={(e) => handleClientChange(e, index)}
                                    required={index === 0}
                                  />
                                </div>
                                <div className='col-md-6 col-lg-4 mb-3'>
                                  <label htmlFor={`retour_marchandise_${index + 1}`} className='form-label'>Retour Marchandise</label>
                                  <select
                                    className='form-select'
                                    id={`retour_marchandise_${index + 1}`}
                                    name="retour_marchandise"
                                    value={client.retour_marchandise}
                                    onChange={(e) => handleClientChange(e, index)}
                                  >
                                    <option value=''>Select</option>
                                    <option value='Co'>Co</option>
                                    <option value='Df'>Df</option>
                                    <option value='PN'>PN</option>
                                  </select>
                                </div>
                                {/* Invoice Accordions */}
                                <div className="accordion mt-3" id={`accordionFactures${index + 1}`}>
                                  {client.factures.map((facture, factureIndex) => (
                                    <div className="accordion-item" key={`facture-${index + 1}-${factureIndex + 1}`}>
                                      <h2 className="accordion-header" id={`headingFacture${index + 1}-${factureIndex + 1}`}>
                                        <button
                                          className="accordion-button collapsed"
                                          type="button"
                                          data-bs-toggle="collapse"
                                          data-bs-target={`#collapseFacture${index + 1}-${factureIndex + 1}`}
                                          aria-expanded="false"
                                          aria-controls={`collapseFacture${index + 1}-${factureIndex + 1}`}
                                        >
                                          {`Facture ${factureIndex + 1}`} {factureIndex > 0 && '(Optional)'}
                                        </button>
                                      </h2>
                                      <div
                                        id={`collapseFacture${index + 1}-${factureIndex + 1}`}
                                        className="accordion-collapse collapse"
                                        aria-labelledby={`headingFacture${index + 1}-${factureIndex + 1}`}
                                        data-bs-parent={`#accordionFactures${index + 1}`}
                                      >
                                        <div className="accordion-body">
                                          <div className='row'>
                                            <div className='col-md-6 mb-3'>
                                              <label htmlFor={`facture_${index + 1}_${factureIndex + 1}`} className='form-label'>Facture</label>
                                              <input
                                                type='text'
                                                className='form-control'
                                                id={`facture_${index + 1}_${factureIndex + 1}`}
                                                name="code_feature"
                                                value={facture.code_feature}
                                                onChange={(e) => handleFactureChange(e, index, factureIndex)}
                                              />
                                            </div>
                                            <div className='col-md-6 mb-3'>
                                              <label htmlFor={`colis_${index + 1}_${factureIndex + 1}`} className='form-label'>Colis</label>
                                              <input
                                                type='text'
                                                className='form-control'
                                                id={`colis_${index + 1}_${factureIndex + 1}`}
                                                name="colis"
                                                value={facture.colis}
                                                onChange={(e) => handleFactureChange(e, index, factureIndex)}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className='d-flex justify-content-between mt-4'>
                  {currentStep > 1 && (
                    <button type='button' className='btn btn-secondary' onClick={handlePreviousStep}>
                      Previous
                    </button>
                  )}
                  {currentStep < 2 ? (
                    <button 
                      type='button' 
                      className='btn btn-primary ms-auto' 
                      onClick={(event) => {
                        event.preventDefault();
                        handleNextStep();
                    }}>
                      Next
                    </button>
                  ) : (
                    <button type='submit' className='btn btn-success ms-auto'>
                      {isEditMode ? 'Save Changes' : 'Save Delivery'}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Container for notifications */}
      <ToastContainer />
    </>
  );
};

export default DeliveryForm;

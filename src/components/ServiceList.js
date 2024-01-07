// ServiceList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ServiceList() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/services/')
      .then(response => {
        setServices(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <ul>
        {services.map(service => (
          <li key={service.id}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceList;

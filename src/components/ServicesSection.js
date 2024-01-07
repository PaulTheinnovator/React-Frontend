import React from 'react';
import '../styles/main.css';
import ServiceList from './ServiceList';  // Import the ServiceList component

function ServicesSection() {
  return (
    <section className="services">
      <div className="services-content">
        <h2>Our Services</h2>
        {/* Display the ServiceList component here */}
        <ServiceList />
        {/* The rest of your content */}
        <div className="service-item">
          <h3>Data Analytics</h3>
          <p>Unlock valuable insights from your data using advanced analytics.</p>
        </div>
        <div className="service-item">
          <h3>Machine Learning</h3>
          <p>Implement predictive models and automate decision-making processes.</p>
        </div>
        <div className="service-item">
          <h3>Natural Language Processing</h3>
          <p>Enable machines to understand and respond to human language.</p>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

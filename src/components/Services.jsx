import React from 'react';
import { FaDumbbell, FaHeartbeat, FaRunning } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaDumbbell className="w-7 h-7" />,
      title: "Personal Training",
      description: "One-on-one training sessions tailored to your specific goals and needs."
    },
    {
      icon: <FaHeartbeat className="w-7 h-7" />,
      title: "Nutrition Planning",
      description: "Custom meal plans and nutritional guidance to support your fitness journey."
    },
    {
      icon: <FaRunning className="w-7 h-7" />,
      title: "Group Fitness",
      description: "High-energy group sessions that make working out fun and engaging."
    }
  ];

  return (
    <div name="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

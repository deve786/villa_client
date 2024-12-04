import React from 'react';
import { 
  FaHome, 
  FaKey, 
  FaTools, 
  FaPalette, 
  FaBuilding, 
  FaClipboardList 
} from 'react-icons/fa';

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 p-6 border border-gray-100">
    <div className="flex items-center space-x-4 mb-4">
      {icon}
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ServicesPage = () => {
  const services = [
    {
      icon: <FaKey className="w-10 h-10 text-blue-600" />,
      title: 'Rental & Resale',
      description: 'Specialized in efficient rental and resale services for residential, commercial, and industrial properties. We leverage our extensive network to connect property owners and seekers seamlessly.'
    },
    {
      icon: <FaTools className="w-10 h-10 text-green-600" />,
      title: 'After Sale Services',
      description: 'Comprehensive support including repairs, maintenance, and periodic inspections of electrical, plumbing fixtures, lifts, and firefighting equipment. We ensure smooth transition until the resident\'s association takes over.'
    },
    {
      icon: <FaHome className="w-10 h-10 text-indigo-600" />,
      title: 'Home Loans',
      description: 'Arrange home loans from leading Housing Finance Institutions with minimal involvement. Benefit from pre-approved project financing, competitive interest rates, and flexible schemes for both NRIs and RIs.'
    },
    {
      icon: <FaPalette className="w-10 h-10 text-purple-600" />,
      title: 'Interior Designs',
      description: 'Transform your property with our creative design services. From modern minimalism to classic elegance, our skilled designers bring your vision to life with functional and aesthetic solutions.'
    },
    {
      icon: <FaBuilding className="w-10 h-10 text-red-600" />,
      title: 'Architectural Designs',
      description: 'Innovative architectural solutions combining sustainability and functionality. We deliver bespoke designs for residential, commercial, and industrial projects, ensuring each structure is a masterpiece of design excellence.'
    },
    {
      icon: <FaClipboardList className="w-10 h-10 text-orange-600" />,
      title: 'Project Management Consultancy',
      description: 'Cultivate enduring partnerships with consistent progress updates and comprehensive financial statements. We go beyond project delivery to build trust and transparency with our clients.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Our Services
          </h1>
          <p className="mt-3 max-w-3xl mx-auto text-xl text-gray-500 sm:mt-4">
            At Absolute, we are committed to providing end-to-end solutions for all your property and construction needs. 
            Our comprehensive range of services is designed to make your journey in real estate seamless and rewarding.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
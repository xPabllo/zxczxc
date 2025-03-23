import React from 'react';

const About = () => {
  return (
    <div name="about" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 mb-4">
              With over 10 years of experience in personal training, I've helped hundreds of clients achieve their fitness goals. 
              Whether you're looking to lose weight, build muscle, or improve your overall health, I'm here to guide you every 
              step of the way.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Certified Personal Trainer (NASM)</li>
              <li>Nutrition Specialist</li>
              <li>Former Professional Athlete</li>
              <li>Specialized in Weight Loss and Muscle Building</li>
            </ul>
          </div>
          <div className="bg-blue-600 h-64 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default About;

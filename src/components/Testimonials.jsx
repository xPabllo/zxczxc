import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Working with FitLife has been life-changing. I've lost 30 pounds and feel stronger than ever!",
      role: "Client - 6 months"
    },
    {
      name: "Mike Thompson",
      text: "The personalized approach and constant support made all the difference in achieving my fitness goals.",
      role: "Client - 1 year"
    },
    {
      name: "Emily Davis",
      text: "Best investment in myself! The nutrition guidance along with training has transformed my lifestyle.",
      role: "Client - 3 months"
    }
  ];

  return (
    <div name="testimonials" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg">
              <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

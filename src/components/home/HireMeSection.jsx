"use client"
// components/HireMe.js
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HireMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    budget: '',
    contactMethod: '',
    deadline: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here
  };

  return (
    <div className='bg-green-50 p-8'>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-[1100px] mx-auto mt-10"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Hire Me</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:space-x-4"> 
          <div className='flex flex-col w-full gap-5 sm:gap-0 sm:w-1/2'>

        <div>
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        
        <div>
          <label htmlFor="budget" className="block text-gray-700 font-semibold mb-2">
            Budget
          </label>
          <input
            type="text"
            name="budget"
            id="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        
        <div>
          <label htmlFor="deadline" className="block text-gray-700 font-semibold mb-2">
            Project Deadline
          </label>
          <input
            type="date"
            name="deadline"
            id="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        </div>
        
        <div className='flex flex-col w-full mt-5 sm:mt-0  gap-5 sm:gap-0  sm:w-1/2'>
       
        <div className='sm:flex-1'>
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full h-[80%] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            rows="4"
            required
          />
        </div>
        {/* <div>
          <label htmlFor="contactMethod" className="block text-gray-700 font-semibold mb-2">
            Preferred Contact Method
          </label>
          <select
            name="contactMethod"
            id="contactMethod"
            value={formData.contactMethod}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>
        </div> */}
        <div>
          <label htmlFor="file" className="block text-gray-700 font-semibold mb-2">
            Attach File
          </label>
          <input
            type="file"
            name="file"
            id="file"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-800 transition-colors duration-300"
        >
          Send Message
        </motion.button>
      
      </form>
    </motion.div>
    </div>
  );
}

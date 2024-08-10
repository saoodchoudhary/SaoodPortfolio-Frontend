"use client"
// components/HireMe.js
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeContactMe, SaveContactMe } from '../../../store/contactMe';
import Image from 'next/image';

export default function HireMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const dispatch = useDispatch();
  const contactMe = useSelector((state) => state.contactMe);
  const loading = contactMe.loading;

  console.log("cont", contactMe)
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(SaveContactMe(formData));
    // Add form submission logic here
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    // Remove the success message after 8 seconds
    setTimeout(() => {
      dispatch(removeContactMe());
    }, 8000);

  };

  return (
    <div className='p-8'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-[1100px] mx-auto"
      >
        <h2 className="text-3xl font-semibold text-green-700 text-center mb-8">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-6">

          <div className='flex flex-col sm:flex-row justify-center items-center gap-5'>

            <div className='hidden sm:block'>
              <div className='relative  w-[340px] h-[350px] lg:w-[500px] lg:h-[500px]'>
                <Image src={"/images/contact.jpg"} fill alt="contact" />
              </div>
              {/* <div className='text-center text-[12px]'>Image by <a target='_blank' href="https://www.freepik.com/free-vector/customer-support-flat-illustration_12983847.htm#query=contact%20us&position=1&from_view=keyword&track=ais_user&uuid=ef951839-2e3d-4ad2-9469-793c22f8d581">Freepik</a></div>*/}
              <div>
                {/* <div className='bg-black text-white rounded-'>

                  <h5>Email</h5>
                  <div><a href='MailTo:saoodchoudhary9@gmail.com'>saoodchoudhary9@gmail.com</a> </div>
                </div> */}
              </div>

            </div>
            <div className="flex flex-col flex-1 gap-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-[4px] focus:outline-none focus:ring-1 focus:ring-green-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-[4px] focus:outline-none focus:ring-1 focus:ring-green-600"
                  required
                />
              </div>


              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-[80%] px-4 py-2 border rounded-[4px] focus:outline-none focus:ring-1 focus:ring-green-600"
                  rows="4"
                  required
                />
              </div>

              {contactMe.error && <div className="text-red-500 text-sm">{contactMe.error}</div>}
              {contactMe.contactMe && <div className="text-green-500 text-sm">Message Sent Successfully</div>}


              {loading ?
                <div className="flex justify-center items-center">
                  <div className="w-6 h-6 border-2 border-t-[4px] border-green-700 rounded-full animate-spin"></div>
                </div>
                : <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded-[4px] font-semibold hover:bg-green-800 transition-colors duration-300"
                >
                  Send Message
                </motion.button>
              }
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type SubmitStatus = 'success' | 'error' | null;

const Nav: React.FC = () => {
  const [showModel, setShowModel] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Close modal after 2 seconds
        setTimeout(() => {
          setShowModel(false);
          setSubmitStatus(null);
        }, 2000);
      } else {
        setSubmitStatus('error');
        console.error('Error:', result.error);
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowModel(false);
    setSubmitStatus(null);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <nav className="max-w-6xl mx-auto px-4 sm:px-8 md:px-8 my-3 flex justify-between items-center">
        <div>
          <Link href="/">
            <p className="font-xl text-gray-800 font-medium text-xl cursor-pointer">Ayushman</p>
          </Link>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => setShowModel(true)}
        >
          <p className="font-light text-xl border-2 border-black px-4 py-1 rounded-md text-white bg-gray-800 cursor-pointer">
            Contact Me
          </p>
        </motion.div>
      </nav>

      {showModel && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 backdrop-blur-sm  bg-opacity-50 flex justify-center items-center z-50"
        >
          <div className="bg-gray-50 p-6 rounded-xl lg:w-full w-90 md:w-full max-w-md shadow-2xl">
            <div className="flex justify-between items-center my-5">
              <h2 className="text-2xl font-medium mb-4">Contact Form</h2>
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                aria-label="Close"
                onClick={closeModal}
              >
                ×
              </button>
            </div>

            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                Message sent successfully! Thank you for contacting me.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                Failed to send message. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
                disabled={isSubmitting}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
                disabled={isSubmitting}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none"
                rows={4}
                required
                disabled={isSubmitting}
              />
              <div className="flex justify-end">
                <motion.button
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Nav;
import React, { useEffect, useRef, useState, useContext } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Briefcase, Github, Instagram, Linkedin, Locate, LocateFixed, LocateIcon, Mail, MailIcon, Twitter, User } from "lucide-react";
import ContactItem from "./ContactItem";
import SocialLink from "./SocialLink";
import { ThemeContext } from "../App";


function ContactSection() {
  const { darkMode } = useContext(ThemeContext);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);
  

  // Observer for animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  // Form handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await axios.post(import.meta.env.VITE_API, formData); // update this URL
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      toast.error("Failed to send message. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <ToastContainer position="top-center" />
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="h-1 w-20 mx-auto rounded bg-indigo-500" />
            <p className={`mt-6 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Have a project in mind or just want to say hello? Reach out!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Card */}
            <div className={`rounded-xl p-8 shadow-lg transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-50 text-gray-900 border-gray-300'}`}
                    />
                  </div>
                  <div>
                    <label className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-50 text-gray-900 border-gray-300'}`}
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry"
                    className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-50 text-gray-900 border-gray-300'}`}
                  />
                </div>
                <div className="mb-6">
                  <label className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Your Message</label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Hello, I’d like to discuss..."
                    className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-50 text-gray-900 border-gray-300'}`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : darkMode
                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                        : 'bg-indigo-500 hover:bg-indigo-600 text-white'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Info Card */}
            <div className={`rounded-xl p-8 shadow-lg h-full transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className={`mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm always open to new opportunities or freelance work.
              </p>
              <div className="space-y-6">
                <ContactItem icon={<Mail size={20} />} title="Email" value="shravanpadale1@gmail.com" darkMode={darkMode} />
                <ContactItem icon={<User size={20} />} title="Phone" value="+91 7757088366" darkMode={darkMode} />
                <ContactItem icon={<LocateFixed size={20} />} title="Location" value="Pune, Maharashtra" darkMode={darkMode} />
              </div>
              <div className="mt-10">
                <h4 className="font-medium mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <SocialLink icon={<Github size={20} />} link={"https://github.com/Shravan-Padale771"} darkMode={darkMode} />
                  <SocialLink icon={<Linkedin size={20} />} link={"https://www.linkedin.com/in/shravan-padale771/"} darkMode={darkMode} />
                  <SocialLink icon={<Instagram size={20} />} link={"https://www.instagram.com/shravan_padale177/"} darkMode={darkMode} />
                  <SocialLink icon={<MailIcon size={20} />} link={"mailto:shravanpadale1@gmail.com"} darkMode={darkMode} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

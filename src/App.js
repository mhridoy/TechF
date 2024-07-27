import React, { useState, useEffect } from 'react';
import { Monitor, Code, HelpCircle, ArrowRight, ChevronRight, Menu, X, Facebook, Twitter, Instagram, Globe, Check, Star, Phone, Mail, MapPin } from 'lucide-react';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <header className={`fixed w-full z-50 transition-all duration-300 ${scrollPosition > 50 ? 'bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg' : 'bg-transparent'}`}>
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">TechFalconer</h1>
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                {['Home', 'Services', 'About', 'Contact'].map((item) => (
                    <li key={item}>
                      <a href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-blue-400 transition duration-300">{item}</a>
                    </li>
                ))}
              </ul>
            </nav>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </header>

        {isMenuOpen && (
            <div className="fixed inset-0 z-40 bg-black bg-opacity-90 flex items-center justify-center">
              <nav>
                <ul className="text-center">
                  {['Home', 'Services', 'About', 'Contact'].map((item) => (
                      <li key={item} className="my-4">
                        <a href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-2xl text-gray-300 hover:text-blue-400 transition duration-300">{item}</a>
                      </li>
                  ))}
                </ul>
              </nav>
            </div>
        )}

        <main>
          <section id="home" className="relative h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" alt="Tech background" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black opacity-60"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl">
                <h2 className="text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
                  Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Digital Presence</span>
                </h2>
                <p className="text-2xl text-gray-300 mb-8 animate-fade-in-up animation-delay-200">Empowering businesses with cutting-edge IT solutions and unparalleled support</p>
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition duration-300 transform hover:scale-105 shadow-lg animate-fade-in-up animation-delay-400">
                  Discover Our Expertise
                </button>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
          </section>

          <section id="services" className="py-24 bg-gray-900">
            <div className="container mx-auto px-4">
              <h3 className="text-4xl font-bold mb-16 text-center">Our Core Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  { icon: Monitor, title: "IT Support", description: "24/7 technical support to keep your systems running smoothly." },
                  { icon: Code, title: "Software Solutions", description: "Custom software development tailored to your business needs." },
                  { icon: HelpCircle, title: "Strategic Consulting", description: "Expert advice to optimize your IT infrastructure and processes." }
                ].map((service, index) => (
                    <div key={index} className="bg-gradient-to-br from-blue-800 to-purple-800 p-8 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition duration-300 transform hover:scale-105 shadow-xl">
                      <service.icon className="text-blue-400 w-16 h-16 mb-6" />
                      <h4 className="text-2xl font-semibold mb-4">{service.title}</h4>
                      <p className="text-gray-300 mb-6">{service.description}</p>
                      <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                        Learn More <ChevronRight className="ml-2" />
                      </a>
                    </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Tech office" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-90"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl">
                <h3 className="text-4xl font-bold mb-6">Experience the Future of IT</h3>
                <p className="text-xl mb-8 text-gray-300">Discover how our innovative solutions can transform your business and propel you ahead of the competition.</p>
                <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 flex items-center shadow-lg">
                  Schedule a Demo <ArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </section>

          <section id="about" className="py-24 bg-gray-900">
            <div className="container mx-auto px-4">
              <h3 className="text-4xl font-bold mb-16 text-center">Why Choose TechFalconer?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Team" className="rounded-lg shadow-2xl" />
                </div>
                <div>
                  {[
                    "Expert team with decades of experience",
                    "Cutting-edge technologies and methodologies",
                    "Tailored solutions for your unique needs",
                    "Commitment to excellence and client satisfaction"
                  ].map((item, index) => (
                      <div key={index} className="flex items-center mb-6">
                        <Check className="text-green-500 mr-4" />
                        <p className="text-lg">{item}</p>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="container mx-auto px-4 text-center">
              <h3 className="text-4xl font-bold mb-12">What Our Clients Say</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { name: "John Doe", company: "Tech Innovators", quote: "TechFalconer transformed our IT infrastructure, boosting our productivity by 40%." },
                  { name: "Jane Smith", company: "Global Solutions", quote: "Their software solutions are unparalleled. We've seen a significant ROI since partnering with them." },
                  { name: "Mike Johnson", company: "Future Systems", quote: "The strategic consulting we received was game-changing for our business growth." }
                ].map((testimonial, index) => (
                    <div key={index} className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-filter backdrop-blur-lg">
                      <p className="text-lg mb-4">"{testimonial.quote}"</p>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-300">{testimonial.company}</p>
                      <div className="flex justify-center mt-4">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="text-yellow-400 w-5 h-5" />
                        ))}
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="py-24 bg-gray-900">
            <div className="container mx-auto px-4 text-center">
              <h3 className="text-4xl font-bold mb-6">Ready to Soar with TechFalconer?</h3>
              <p className="text-xl mb-8 max-w-2xl mx-auto">Let's discuss how we can elevate your business with our cutting-edge IT expertise and tailored solutions.</p>
              <button className="bg-white text-purple-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 inline-flex items-center shadow-lg">
                Get in Touch <ArrowRight className="ml-2" />
              </button>
            </div>
          </section>
        </main>

        <footer className="bg-gray-900 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">About Us</h4>
                <p className="text-gray-400">TechFalconer is your partner in digital transformation, providing top-tier IT solutions and support.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {['Home', 'Services', 'About', 'Contact'].map((item) => (
                      <li key={item}>
                        <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-blue-400 transition duration-300">{item}</a>
                      </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Contact</h4>
                <ul className="text-gray-400 space-y-2">
                  <li className="flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    <a href="tel:+8801714942062" className="hover:text-blue-400 transition duration-300">+880 1714-942062</a>
                  </li>
                  <li className="flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    <a href="mailto:admin@techfalconer.com" className="hover:text-blue-400 transition duration-300">admin@techfalconer.com</a>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    Dhaka, Bangladesh
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {[Facebook, Twitter, Instagram, Globe].map((Icon, index) => (
                      <a key={index} href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                        <Icon size={24} />
                      </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-400">&copy; 2024 TechFalconer. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
  );
};

export default HomePage;
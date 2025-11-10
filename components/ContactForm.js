'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    businessType: '',
    orderQuantity: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Info */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Start Your B2B Partnership
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of retail stores and import companies offering YOUYIMEI products
            </p>

            {/* Benefits */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">Competitive Pricing</h3>
                  <p className="text-gray-600">Volume discounts and flexible payment terms for long-term partners</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">Reliable Supply</h3>
                  <p className="text-gray-600">Consistent product quality and availability with fast shipping</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">Marketing Support</h3>
                  <p className="text-gray-600">Product materials, images, and promotional content provided</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-600">
                  <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@youyimei.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Available upon request</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Response within 24 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Partnership Information</h3>

            {submitted && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                Thank you! We will contact you within 24 hours.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Your Company Name"
                />
              </div>

              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Name *
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  required
                  value={formData.contactName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                  Country *
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Your Country"
                />
              </div>

              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">
                  Business Type *
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  required
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                >
                  <option value="">Select Business Type</option>
                  <option value="retail">Retail Store</option>
                  <option value="import">Import Company</option>
                  <option value="distributor">Distributor</option>
                  <option value="online">Online Store</option>
                  <option value="clinic">Medical/Beauty Clinic</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="orderQuantity" className="block text-sm font-medium text-gray-700 mb-1">
                  Expected Order Quantity
                </label>
                <select
                  id="orderQuantity"
                  name="orderQuantity"
                  value={formData.orderQuantity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                >
                  <option value="">Select Quantity Range</option>
                  <option value="100-500">100-500 units</option>
                  <option value="500-1000">500-1,000 units</option>
                  <option value="1000-5000">1,000-5,000 units</option>
                  <option value="5000+">5,000+ units</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Tell us about your business and requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Submit Partnership Request
              </button>

              <p className="text-sm text-gray-500 text-center">
                We respect your privacy and will never share your information
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

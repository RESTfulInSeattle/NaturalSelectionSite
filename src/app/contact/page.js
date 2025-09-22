export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Ready to make your event unforgettable? Let's discuss your needs.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Quick Contact */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Contact Information</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Phone */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <a 
                href="tel:206-851-0003" 
                className="text-2xl font-bold text-black hover:text-gray-700 transition-colors"
              >
                206-851-0003
              </a>
              <p className="text-sm text-gray-600 mt-2">Call or text for immediate response</p>
            </div>

            {/* Email */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a 
                href="mailto:info@naturalselectiondeejaying.com" 
                className="text-lg text-black hover:text-gray-700 transition-colors break-all"
              >
                info@naturalselectiondeejaying.com
              </a>
              <p className="text-sm text-gray-600 mt-2">Detailed inquiries welcome</p>
            </div>

            {/* Location */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Service Area</h3>
              <p className="text-lg font-semibold text-black">Seattle, WA</p>
              <p className="text-sm text-gray-600 mt-2">Serving the greater Seattle area and beyond</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Send Us a Message</h2>
          <form className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                Service Interest
              </label>
              <select
                id="serviceType"
                name="serviceType"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              >
                <option value="">Select a service...</option>
                <option value="dj-services">DJ Services</option>
                <option value="wedding">Wedding DJ</option>
                <option value="corporate">Corporate Event</option>
                <option value="mastering">Audio Mastering</option>
                <option value="music-licensing">Music Licensing</option>
                <option value="consultation">Acoustical Consultation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2">
                Event Date (if applicable)
              </label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="venue" className="block text-sm font-medium text-gray-700 mb-2">
                Venue/Location
              </label>
              <input
                type="text"
                id="venue"
                name="venue"
                placeholder="Event venue or city"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder="Tell us about your event, music preferences, timeline, budget range, or any specific requirements..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Service Areas */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Service Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Seattle", "Bellevue", "Redmond", "Kirkland",
              "Bothell", "Everett", "Tacoma", "Renton",
              "Kent", "Federal Way", "Lynnwood", "Edmonds"
            ].map((city, index) => (
              <div key={index} className="text-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="text-lg font-semibold text-gray-900">{city}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6">
            Serving the greater Seattle metropolitan area. Travel to other locations available - contact for details.
          </p>
        </div>

        {/* Response Time */}
        <div className="bg-black text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Quick Response Guaranteed</h2>
          <p className="text-lg text-gray-300 mb-6">
            We typically respond to inquiries within 24 hours. For urgent requests, call or text directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:206-851-0003" 
              className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              📞 Call Now
            </a>
            <a 
              href="sms:206-851-0003" 
              className="inline-block border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors duration-200"
            >
              💬 Text Message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
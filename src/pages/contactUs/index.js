
function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <div className="mt-8 space-y-6">
              <div className="flex items-start">
               
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">Address</p>
                  <p className="mt-1 text-gray-600">
                    Tc 42/3423(1), Nidhi<br />
                    Nethaji Nagar, Poojappura<br />
                    Trivandrum – 695012<br />
                    Kerala, India
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">Phone</p>
                  <p className="mt-1 text-gray-600">
                    Land: <a href="tel:+914714613390" className="hover:text-indigo-600">0471 461339</a>
                  </p>
                  <p className="text-gray-600">
                    Mobile: <a href="tel:+919895110060" className="hover:text-indigo-600">+91 989 511 0060</a>
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">Email</p>
                  <a href="mailto:contact@example.com" className="mt-1 text-gray-600 hover:text-indigo-600">
                    contact@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">Business Hours</p>
                  <p className="mt-1 text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 md:mt-0">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.8793589314586!2d76.97271!3d8.524722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb5c1288ed91%3A0x7e93554d2532da61!2sPoojappura%2C%20Thiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1624916827965!5m2!1sen!2sin"
                className="w-full h-[400px]"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
import React from 'react'

function About() {
  return (
    <div className="min-h-screen bg-gray-50">
    <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">About Absolute Builders</h1>
          
          <div className="space-y-6 text-gray-600">
            <p>
              Absolute Builders is a Private Limited Company dedicated to excellence in construction. 
              Our sales and marketing team comprises several highly experienced and skilled professionals 
              who ensure the highest standards of service delivery.
            </p>

            <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
              <p className="font-medium">
                We closely monitor and regulate every stage of the construction process, 
                ensuring complete client satisfaction. Our commitment and values are never compromised.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">Our Strength</h2>
            <p>
              The secret of Absolute Builders' success lies in our diverse team of highly skilled 
              professionals. We understand that having these experts on staff is crucial for delivering 
              exceptional results in every project we undertake.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800">Modern Technology</h2>
            <p>
              We possess state-of-the-art equipment and technology, including advanced modeling 
              software and innovative tech solutions. By embracing modern technology, we help our 
              clients step into the future with their new projects.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800">Safety First</h2>
            <p>
              Our unwavering commitment to safety is admired and valued by our clients. This 
              dedication to maintaining the highest safety standards sets us apart in the industry.
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
  )
}

export default About
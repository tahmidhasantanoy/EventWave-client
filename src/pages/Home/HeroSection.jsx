const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            A better way to manage your events
          </h1>
          <ul className="list-none space-y-2 mb-8 text-lg text-gray-700">
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✓</span>
              Find hotels and venues
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✓</span>
              Plan and promote your event
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✓</span>
              Engage your attendees
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✓</span>
              Capture leads and track ROI
            </li>
          </ul>
          <div className="flex justify-center lg:justify-start space-x-4">
            <button className="btn btn-primary">Explore the platform</button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center h-screen">
          <div className="relative group">
            <img
              src="../../../public/images/hero.jpg"
              alt="Fancy"
              className="w-96 h-96 object-cover border-8 border-blue-500 shadow-lg transform transition-transform duration-500 group-hover:scale-105"
              style={{
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% ",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

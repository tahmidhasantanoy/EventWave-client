const CustomerSupport = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center h-screen bg-white p-4 lg:p-10">
      <div className="flex-1 flex justify-center items-center p-4 lg:p-10">
        <div className="bg-white p-6 lg:p-10 rounded-lg  text-center max-w-md w-full">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-orange-500">24/7</span> at your service
          </h2>
          <p className="mb-6 text-gray-600">
            <span className="text-primary">EventWave</span> is the only webinar platform with live 24/7 expert support
            and services anytime you need them.
          </p>
          <div className="flex justify-center space-x-2 lg:space-x-4 mb-6">
            <img
              className="w-8 h-8 lg:w-12 lg:h-12 rounded-full"
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="user1"
            />
            <img
              className="w-8 h-8 lg:w-12 lg:h-12 rounded-full"
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="user2"
            />
            <img
              className="w-8 h-8 lg:w-12 lg:h-12 rounded-full"
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="user3"
            />
            <img
              className="w-8 h-8 lg:w-12 lg:h-12 rounded-full"
              src="https://randomuser.me/api/portraits/women/4.jpg"
              alt="user4"
            />
            <img
              className="w-8 h-8 lg:w-12 lg:h-12 rounded-full"
              src="https://randomuser.me/api/portraits/men/5.jpg"
              alt="user5"
            />
          </div>
          <button className="bg-orange-500 text-white py-2 px-4 rounded-full">
            Talk to sales
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center bg-white h-64 lg:h-full">
        <div className="relative">
          <img
            className="rounded-full w-48 h-48 lg:w-96 lg:h-96"
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="support"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="bg-white rounded-full p-2 lg:p-5 shadow-lg">
              <div className="w-10 h-10 lg:w-20 lg:h-20 rounded-full bg-orange-100 flex items-center justify-center">
                <img
                  className="w-8 h-8 lg:w-16 lg:h-16 rounded-full"
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="support"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;

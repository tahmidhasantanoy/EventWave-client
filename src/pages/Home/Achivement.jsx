/* eslint-disable react/no-unescaped-entities */
const achivementImg1 = "https://i.ibb.co/v4vkhBX/achivement1.jpg"
const achivementImg2 = "https://i.ibb.co/r32kPYb/achivement2-2.jpg"
const Achivement = () => {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-6">7M+ events managed</h2>
        <blockquote className="text-lg italic text-gray-600 mb-4">
          "We have a great partnership with Cvent. Cvent is our primary
          registration tool for virtual, hybrid, and in-person meetings, and is
          our one-stop shop."
        </blockquote>
        <p className="text-gray-800 font-bold">Heather L.</p>
        <p className="text-gray-600">Walmart</p>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 relative">
        {/*  */}

        <div className=".bg-gray-100 flex items-center justify-center min-h-screen relative">
          <div className="absolute bg-red-400 w-24 h-24 rounded-full -top-10 -left-10 z-0"></div>
          <div className="absolute bg-yellow-400 w-24 h-24 rounded-full -bottom-10 -right-10 z-0"></div>
          <div className="relative bg-white rounded-lg shadow-lg p-6 z-10">
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <img
                  src={achivementImg1}
                  alt="Tablet"
                  className="rounded-lg shadow-md w-48 h-48"
                />
              </div>
              <div className="mt-4">
                <img
                  src={achivementImg2}
                  alt="Registration"
                  className="rounded-lg shadow-md w-96 h-48"
                />
              </div>
            </div>
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default Achivement;

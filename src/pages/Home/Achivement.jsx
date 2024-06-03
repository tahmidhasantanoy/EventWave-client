

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
        <img
          src="https://via.placeholder.com/400"
          alt="Event Image"
          className="rounded-lg shadow-lg mb-4"
        />
        <img
          src="https://via.placeholder.com/200"
          alt="Agenda"
          className="rounded-lg shadow-lg absolute top-4 left-10 w-24 h-24"
        />
        <img
          src="https://via.placeholder.com/300"
          alt="Engagement over time"
          className="rounded-lg shadow-lg absolute bottom-0 right-0 w-32 h-32"
        />
      </div>
    </div>
  );
};

export default Achivement;

import  { useState } from 'react';

const PlanYourTrip = () => {
  const [preferences, setPreferences] = useState({
    purpose: '',
    duration: '',
    budget: '',
    dining: '',
    activities: '',
  });

  const handleChange = (e) => {
    setPreferences({ ...preferences, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(preferences);
  };

  return (
    <div className=" min-h-screen bg-gray-100 flex flex-col">
     
      {/* Main Content */}
      <main className="mt-20 flex-1 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Plan Your Custom Weekend Experience
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Purpose of Visit */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Purpose of Visit</label>
              <select
                name="purpose"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="">Select...</option>
                <option value="Romantic Getaway">Romantic Getaway</option>
                <option value="Group Trip">Group Trip</option>
                <option value="Solo Adventure">Solo Adventure</option>
              </select>
            </div>

            {/* Duration of Stay */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Duration of Stay</label>
              <select
                name="duration"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="">Select...</option>
                <option value="1 Day">1 Day</option>
                <option value="2 Days">2 Days</option>
                <option value="3 Days">3 Days</option>
              </select>
            </div>

            {/* Budget */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Budget (USD)</label>
              <input
                type="number"
                name="budget"
                onChange={handleChange}
                placeholder="Enter your budget"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Dining Preferences */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Dining Preferences</label>
              <select
                name="dining"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="">Select...</option>
                <option value="Fine Dining">Fine Dining</option>
                <option value="Casual Dining">Casual Dining</option>
                <option value="Vegetarian Options">Vegetarian Options</option>
              </select>
            </div>

            {/* Activities */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Activity Preferences</label>
              <select
                name="activities"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="">Select...</option>
                <option value="Sports Events">Sports Events</option>
                <option value="Live Concerts">Live Concerts</option>
                <option value="Sightseeing">Sightseeing</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default PlanYourTrip;

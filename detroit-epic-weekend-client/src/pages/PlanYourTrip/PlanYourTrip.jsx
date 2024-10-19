import { useState } from 'react';
import { Button } from 'flowbite-react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../components/Variants/variants';

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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-20">
      <motion.div
        className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full"
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        animate="show"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Plan Your Custom Weekend Experience
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Grid Layout for Desktop and Single Column for Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Purpose of Visit */}
            <div>
              <label className="block text-gray-700 mb-2">Purpose of Visit</label>
              <select
                name="purpose"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              >
                <option value="">Select...</option>
                <option value="Romantic Getaway">Romantic Getaway</option>
                <option value="Group Trip">Group Trip</option>
                <option value="Solo Adventure">Solo Adventure</option>
              </select>
            </div>

            {/* Duration of Stay */}
            <div>
              <label className="block text-gray-700 mb-2">Duration of Stay</label>
              <select
                name="duration"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              >
                <option value="">Select...</option>
                <option value="1 Day">1 Day</option>
                <option value="2 Days">2 Days</option>
                <option value="3 Days">3 Days</option>
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-gray-700 mb-2">Budget (USD)</label>
              <input
                type="number"
                name="budget"
                onChange={handleChange}
                placeholder="Enter your budget"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              />
            </div>

            {/* Dining Preferences */}
            <div>
              <label className="block text-gray-700 mb-2">Dining Preferences</label>
              <select
                name="dining"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              >
                <option value="">Select...</option>
                <option value="Fine Dining">Fine Dining</option>
                <option value="Casual Dining">Casual Dining</option>
                <option value="Vegetarian Options">Vegetarian Options</option>
              </select>
            </div>
          </div>

          {/* Activities Preferences (Full Width) */}
          <div className="w-full">
            <label className="block text-gray-700 mb-2">Activity Preferences</label>
            <select
              name="activities"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            >
              <option value="">Select...</option>
              <option value="Sports Events">Sports Events</option>
              <option value="Live Concerts">Live Concerts</option>
              <option value="Sightseeing">Sightseeing</option>
            </select>
          </div>

          {/* Submit Button */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            animate="show"
            className="flex justify-center mt-6"
          >
            <Button size="lg" gradientDuoTone="pinkToOrange" type="submit" className="w-full">
              Submit
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default PlanYourTrip;

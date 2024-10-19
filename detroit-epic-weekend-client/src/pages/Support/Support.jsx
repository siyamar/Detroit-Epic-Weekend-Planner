// import React from 'react'

// export default function Support() {
//   return (
//     <div className='min-h-screen pt-20'>
//        <h1 className='font-bold text-3xl text-center'>Comming Soon!!!</h1>
//     </div>
//   )
// }
import React from "react";
import { Card, Button, Accordion } from "flowbite-react";
import { motion } from "framer-motion";

const Support = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 md:pt-20">
      {/* Support Header */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          We're Here to Help
        </h1>
        <p className="text-lg text-gray-600">
          If you have any questions, feel free to reach out or browse through our FAQ section.
        </p>
      </motion.div>

      {/* Support Contact Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Support Form */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>

            <Button gradientDuoTone="pinkToOrange" size="lg" type="submit">
              Send Message
            </Button>
          </form>
        </Card>

        {/* Contact Details */}
        <Card className="p-6 flex flex-col justify-center text-center">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-sm text-gray-600 mb-6">
            Need immediate help? Feel free to reach us via phone or email. Our support team is here 24/7.
          </p>
          <p className="text-lg font-bold text-gray-900">+1 234 567 890</p>
          <p className="text-sm text-gray-600">support@detroitweekend.com</p>
        </Card>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Accordion alwaysOpen>
          <Accordion.Panel>
            <Accordion.Title>What is Detroit Epic Weekend?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-600">
                Detroit Epic Weekend is an AI-powered platform that helps users plan personalized weekend trips in Detroit, offering recommendations for dining, entertainment, lodging, and activities.
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>How can I modify my itinerary?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-600">
                You can easily adjust your itinerary by logging into your account and accessing the "My Trips" section. There, you'll be able to make changes on the go.
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>How do I contact support?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-600">
                You can reach our support team by filling out the form above, or contacting us via phone or email. We are available 24/7.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </motion.div>
    </div>
  );
};

export default Support;


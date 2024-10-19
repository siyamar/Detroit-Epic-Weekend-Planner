// import React from 'react'

// export default function Bolg() {
//   return (
//     <div className='min-h-screen pt-20'>
//       <h1 className='font-bold text-3xl text-center'>Comming Soon!!!</h1>
//     </div>
//   )
// }

// import React from 'react';

// const Blog = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-20">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Image Section */}
//         <div className="h-full">
//           <img
//             src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
//             alt="Blog Post"
//             className="w-full h-full object-cover rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Text Section */}
//         <div className="flex flex-col justify-center">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">
//             Exploring the Best of Detroit
//           </h2>
//           <p className="text-lg text-gray-700 mb-6">
//             Discover the hidden gems of Detroit with this guide to the city's
//             vibrant culture, food, and entertainment scenes. Whether you're
//             looking for a weekend getaway or an adventure-packed trip, Detroit
//             has it all!
//           </p>
//           <a
//             href="#"
//             className="text-pink-500 font-semibold hover:text-pink-600 transition-colors duration-200"
//           >
//             Read More
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;

// import React from 'react';

// const Blog = () => {
//   const blogPosts = [
//     {
//       title: "Exploring the Heart of Detroit",
//       description:
//         "Join us on an exciting journey through Detroit's most iconic locations. From the soulful music scene to the vibrant art murals, there’s something for every traveler.",
//       imageUrl:
//         "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
//       link: "#",
//     },
//     {
//       title: "A Culinary Journey",
//       description:
//         "Detroit's food culture is thriving. From hidden gems to fine dining, we bring you the ultimate guide to savoring every flavor the city has to offer.",
//       imageUrl:
//         "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
//       link: "#",
//     },
//     {
//       title: "Our Success Story",
//       description:
//         "With over 500 satisfied travelers, our travel agency has helped create countless memories. Join the hundreds who trust us to plan their Detroit adventures.",
//       imageUrl:
//         "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
//       link: "#",
//     },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 md:pt-20">
//       {blogPosts.map((post, index) => (
//         <div
//           key={index}
//           className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center}`}
//         >
//           {/* Image Section */}
//           <div className="w-full">
//             <img
//               src={post.imageUrl}
//               alt={post.title}
//               className="object-cover rounded-lg shadow-lg"
//             />
//           </div>

//           {/* Text Section */}
//           <div className="flex flex-col justify-center">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               {post.title}
//             </h2>
//             <p className="text-lg text-gray-700 mb-6">{post.description}</p>
//             <a
//               href={post.link}
//               className="text-pink-500 font-semibold hover:text-pink-600 transition-colors duration-200"
//             >
//               Read More
//             </a>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Blog;

import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const blogPosts = [
    {
      title: "Exploring the Heart of Detroit",
      description:
        "Join us on an exciting journey through Detroit's most iconic locations. From the soulful music scene to the vibrant art murals, there’s something for every traveler.",
      imageUrl:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      link: "#",
    },
    {
      title: "A Culinary Journey",
      description:
        "Detroit's food culture is thriving. From hidden gems to fine dining, we bring you the ultimate guide to savoring every flavor the city has to offer.",
      imageUrl:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      link: "#",
    },
    {
      title: "Our Success Story",
      description:
        "With over 500 satisfied travelers, our travel agency has helped create countless memories. Join the hundreds who trust us to plan their Detroit adventures.",
      imageUrl:
        "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
      link: "#",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:pt-20 space-y-12">
      {blogPosts.map((post, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
            index % 2 === 1 ? 'md:flex-row-reverse' : ''
          }`}
        >
          {/* Image Section */}
          <div className="w-full">
            <motion.img
              src={post.imageUrl}
              alt={post.title}
              className="object-cover rounded-lg shadow-lg w-full h-64 md:h-full"
              whileHover={{ scale: 1.05 }}
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center space-y-4">
            <motion.h2
              className="text-4xl font-bold text-gray-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {post.title}
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {post.description}
            </motion.p>
            <motion.a
              href={post.link}
              className="text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Read More
            </motion.a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Blog;

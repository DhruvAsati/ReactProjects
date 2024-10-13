import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaDownload } from 'react-icons/fa';

const ImageGrid = ({ images, favorites, toggleFavorite, openModal }) => {
  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {images.map((image) => (
        <motion.div
          key={image.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden relative group transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          whileHover={{ y: -5 }}
          onClick={() => openModal({ ...image, urls: { ...image.urls, modal: image.urls.regular } })}
        >
          <img
            src={image.urls.small}
            alt={image.alt_description}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute top-0 left-0 p-2 bg-black bg-opacity-50 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p>{new Date(image.created_at).toLocaleString()}</p>
            <p>{image.location?.name || 'Location not available'}</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <p className="text-white font-semibold text-lg">{image.user.name}</p>
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(image);
                }}
                className="text-white focus:outline-none transform transition-transform duration-300 hover:scale-110"
              >
                <FaHeart className={`text-2xl ${favorites.includes(image.id) ? "text-red-500" : "text-white"}`} />
              </button>
              <a
                href={image.links.download}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white focus:outline-none transform transition-transform duration-300 hover:scale-110"
                onClick={(e) => e.stopPropagation()}
              >
                <FaDownload className="text-2xl" />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ImageGrid;

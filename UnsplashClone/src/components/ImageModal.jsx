import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaDownload, FaTimes } from 'react-icons/fa';

const ImageModal = ({ image, isOpen, onClose, toggleFavorite, favorites }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-lg p-4 w-full max-w-3xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{image.user.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes size={24} />
          </button>
        </div>
        <div className="flex-grow overflow-auto">
          <img src={image.urls.regular} alt={image.alt_description} className="w-full h-auto rounded-lg mb-4" />
        </div>
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => toggleFavorite(image)}
            className="flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full transition-colors duration-300"
          >
            <FaHeart className={favorites.includes(image.id) ? "text-red-500" : "text-gray-600"} />
            <span>{favorites.includes(image.id) ? "Remove from Favorites" : "Add to Favorites"}</span>
          </button>
          <a
            href={image.links.download}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors duration-300"
          >
            <FaDownload />
            <span>Download</span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ImageModal;

import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import Background3D from './components/Background3D';
import ImageGrid from './components/ImageGrid';
import ImageModal from './components/ImageModal';
import Login from './components/Login';

const Home = ({ query, setQuery, images, loading, favorites, toggleFavorite, handleSubmit, openModal }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="mb-12">
        <div className="relative flex items-center max-w-3xl mx-auto">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for images..."
            className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          />
          <button
            type="submit"
            className="absolute right-2 top-2 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
          >
            <FaSearch className="text-xl" />
          </button>
         
        </div>
      </form>
      {loading ? (
        <p className="text-center text-gray-600 text-xl">Loading...</p>
      ) : (
        <ImageGrid images={images} favorites={favorites} toggleFavorite={toggleFavorite} openModal={openModal} />
      )}
    </>
  );
};

const Favorites = ({ favorites, images, toggleFavorite, openModal }) => {
  const favoriteImages = images.filter(image => favorites.includes(image.id));
  return (
    <>
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Favorite Images</h2>
      <ImageGrid images={favoriteImages} favorites={favorites} toggleFavorite={toggleFavorite} openModal={openModal} />
    </>
  );
};

const Layout = () => {
  const location = useLocation();
  return (
    <div className="min-h-screen">
      <header className="bg-white bg-opacity-80 shadow-md backdrop-blur-md">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Unsplash Clone</h1>
          <nav>
            <Link to="/" className="text-gray-600 hover:text-gray-900 mr-6 text-lg font-medium transition-colors duration-300">Home</Link>
            
            <Link to="/favorites" className="text-gray-600 hover:text-gray-900 text-lg font-medium transition-colors duration-300">Favorites</Link>
            <Login />
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="bg-gray-800 bg-opacity-80 text-white py-8 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Unsplash Clone. All rights reserved. Made by @Dhruv Asati.</p>
        </div>
      </footer>
    </div>
  );
};

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [modalImage, setModalImage] = useState(null);

  const accessKey = 'IQHXGsxPHqb2YBvfdgFENYwJhiKnCSdEkp5skKSjTsE';

  useEffect(() => {
    fetchRandomImages();
    loadFavorites();
  }, []);

  const fetchRandomImages = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?count=12`,
        {
          headers: {
            Authorization: `Client-ID ${accessKey}`,
          },
        }
      );
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Error fetching random images:', error);
    }
    setLoading(false);
  };

  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&per_page=12`,
        {
          headers: {
            Authorization: `Client-ID ${accessKey}`,
          },
        }
      );
      const data = await response.json();
      setImages(data.results);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchImages();
  };

  const loadFavorites = () => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  };

  const toggleFavorite = (image) => {
    const newFavorites = favorites.includes(image.id)
      ? favorites.filter((id) => id !== image.id)
      : [...favorites, image.id];
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home
            query={query}
            setQuery={setQuery}
            images={images}
            loading={loading}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            handleSubmit={handleSubmit}
            openModal={openModal}
          />
        },
        {
          path: "favorites",
          element: <Favorites
            favorites={favorites}
            images={images}
            toggleFavorite={toggleFavorite}
            openModal={openModal}
          />
        }
      ]
    }
  ]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <Background3D />
      </div>
      <RouterProvider router={router} />
      <ImageModal
        image={modalImage}
        isOpen={!!modalImage}
        onClose={closeModal}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
      />
    </>
  );
};

export default App;
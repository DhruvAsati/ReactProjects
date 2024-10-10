import React, { useState } from 'react';

const App = () => {
  const [prompt, setPrompt] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const accessKey = 'IQHXGsxPHqb2YBvfdgFENYwJhiKnCSdEkp5skKSjTsE';

  const query = async (searchQuery) => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${searchQuery}&per_page=4`,
      {
        headers: {
          Authorization: `Client-ID ${accessKey}`,
        },
      }
    );
    const result = await response.json();
    return result;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await query(prompt);
      if (result.results && result.results.length > 0) {
        setImages(result.results.map(img => img.urls.regular));
      } else {
        console.error('No images found.');
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 flex flex-col items-center justify-center p-4 text-white">
      <h1 className="text-4xl font-extrabold mb-10">Unsplash Image Search</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg mb-8">
        <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden border-b-4 border-purple-600">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 p-4 leading-tight focus:outline-none text-xl"
            type="text"
            placeholder="Enter a search query..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            className="flex-shrink-0 bg-purple-600 hover:bg-purple-800 text-white py-3 px-6 rounded-full text-xl transition-all duration-300 ease-in-out"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      {images.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src={image}
                alt={`Generated ${index + 1}`}
                className="w-full h-60 object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;

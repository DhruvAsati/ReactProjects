import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { FaCopy } from 'react-icons/fa';

const App = () => {
  const [translatedText, setTranslatedText] = useState('');
  const [text, setText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('auto');
  const [targetLanguage, setTargetLanguage] = useState('en');
  const [languageOptions, setLanguageOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [detectedLanguage, setDetectedLanguage] = useState('');
  const translatedTextRef = useRef(null);

  useEffect(() => {
    axios.get('https://text-translator2.p.rapidapi.com/getLanguages', {
      headers: {
        'X-RapidAPI-Key': 'eb21e44cc2msh4a3fca7bbd0cce9p168bf3jsn554d57d77ee9',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
      }
    }).then(response => {
        const options = [
          { value: 'auto', label: 'Auto Detect' },
          ...response.data.data.languages.map(lang => ({
            value: lang.code,
            label: lang.name
          }))
        ];
        setLanguageOptions(options);
      })
      .catch(error => console.error('Error fetching languages:', error));
  }, []);

  function handleTranslate() {
    setIsLoading(true);
    setDetectedLanguage('');
    const encodedParams = new URLSearchParams();
    encodedParams.set('source_language', sourceLanguage);
    encodedParams.set('target_language', targetLanguage);
    encodedParams.set('text', text);

    const options = {
      method: 'POST',
      url: 'https://text-translator2.p.rapidapi.com/translate',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'eb21e44cc2msh4a3fca7bbd0cce9p168bf3jsn554d57d77ee9',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
      },
      data: encodedParams,
    };

    axios.request(options)
      .then(response => {
        const translatedText = response.data.data.translatedText;
        setTranslatedText(translatedText);
        if (sourceLanguage === 'auto') {
          setDetectedLanguage(response.data.data.detectedSourceLanguage);
        }
      })
      .catch(error => console.error('Error translating text:', error))
      .finally(() => setIsLoading(false));
  }

  const handleCopy = () => {
    if (translatedTextRef.current) {
      const range = document.createRange();
      range.selectNodeContents(translatedTextRef.current);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand('copy');
      alert('Copied successfully');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-4 sm:p-8">
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 text-center">Universal Translator</h1>
      <div className="w-full max-w-2xl bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-6 sm:p-8">
        <textarea
          className="w-full p-4 rounded-lg bg-white bg-opacity-50 focus:bg-opacity-70 transition-all duration-300 mb-4 resize-none"
          placeholder="Enter text here"
          rows="4"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <select
            className="flex-1 p-3 rounded-lg bg-white bg-opacity-50 focus:bg-opacity-70 transition-all duration-300"
            onChange={(e) => setSourceLanguage(e.target.value)}
            value={sourceLanguage}
          >
            {languageOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          <select
            className="flex-1 p-3 rounded-lg bg-white bg-opacity-50 focus:bg-opacity-70 transition-all duration-300"
            onChange={(e) => setTargetLanguage(e.target.value)}
            value={targetLanguage}
          >
            {languageOptions.filter(option => option.value !== 'auto').map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
        <button
          className="w-full p-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:from-green-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all duration-300 mb-6 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleTranslate}
          disabled={isLoading || !text}
        >
          {isLoading ? 'Translating...' : 'Translate'}
        </button>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">Translated Text:</h2>
          <div className="bg-white bg-opacity-50 p-4 rounded-lg min-h-[100px] relative">
            <p className="text-gray-800" ref={translatedTextRef}>
              {translatedText || 'Your translated text will appear here'}
            </p>
            {translatedText && (
              <button
                onClick={handleCopy}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                title="Copy to clipboard"
              >
                <FaCopy />
              </button>
            )}
          </div>
          {detectedLanguage && (
            <p className="text-white mt-2">Detected language: {detectedLanguage}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
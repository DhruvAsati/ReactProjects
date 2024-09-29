import React, { useState } from 'react';
import { data } from './Constant';

const App = () => {
  const [paragraphs, setParagraphs] = useState(0);
  const [generatedText, setGeneratedText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(paragraphs);

    if (!amount || amount < 1) {
      alert('⚠️ Oops! Please enter a valid number of paragraphs. 📝');
      return;
    }
    if (amount > 5) {
      alert('🚫 Maximum number of paragraphs is 5. 📏 Let\'s keep it short and sweet!');
      return;
    }
    
    setGeneratedText(data.slice(0, amount));
  };

  return (
    <>
      <div className='container'>
        <h1>
          Tired of boring lorem ipsum!
        </h1>
        <p>
          Generate realistic and engaging text content with Lorem Ipsum Generator.
        </p>
        <form className='input-text' onSubmit={handleSubmit}>
          <label htmlFor="paragraphs">Number of paragraphs:</label>
          <input 
            type="text" 
            placeholder="Enter number of paragraphs" 
            id='numPara' 
            value={paragraphs} 
            onChange={(e) => setParagraphs(e.target.value)} 
          />
          <button type="submit" className='btn'>Generate Text</button>
        </form>
        <article>
          {
            generatedText.map((text, index) => (
              <p key={index}>{text}</p>
            ))
          }
        </article>
      </div>
    </>
  );
}

export default App;

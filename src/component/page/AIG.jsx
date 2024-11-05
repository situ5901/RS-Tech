import axios from 'axios';
import { useState } from 'react';
import './AIG.css';

const AIG = () => {
  const [text, setText] = useState('');
  const [generating, setGenerating] = useState(false);
  const [image, setImage] = useState(null);

  const invokeUrl = 'http://localhost:3001/AI-generate';

  const generateImage = async () => {
    const payload = {
      "text_prompts": [
        { "text": text, "weight": 1 },
        { "text": "", "weight": -1 }
      ],
      "cfg_scale": 5,
      "sampler": "K_EULER_ANCESTRAL",
      "seed": 0,
      "steps": 25
    };

    try {
      setGenerating(true);
      setImage(null);
      const res = await axios.post(invokeUrl, payload);
      const imageData = res.data.artifacts[0].base64;
      setImage(`data:image/jpeg;base64,${imageData}`);
    } catch (error) {
      console.error("Error generating image: ", error);
    } finally {
      setGenerating(false);
    }
  };

  const handleInput = (e) => {
    setText(e.target.value);
  };

  return (
    <div className='aig-container'>
      <header className="aig-header">
        
        <h1>AI Image Generator</h1>
      </header>
      <main className="aig-main">
        <div className="aig-input-container">
          <input
            type="text"
            value={text}
            onChange={handleInput}
            placeholder='Describe your image...'
          />
          <button onClick={generateImage} disabled={generating}>
            {generating ? 'Generating...' : 'Generate'}
          </button>
        </div>
        <div className='aig-image-container'>
          {generating ? (
            <div className='loading'>Loading...</div>
          ) : image ? (
            <>
              <img className='generated-image' src={image} alt="Generated" style={{ width: '200px', height: '200px' }} />

            </>
          ) : (
            <div className='placeholder-container'>
              <img
                className='placeholder-image'
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTt53wrPQRInkv2Gx7bILYmsHI2M2K-p49gQ&s"
                alt="Placeholder"
              />
              <div className='placeholder-text'>
                Your generated image will appear here.
              </div>
            </div>
          )}
        </div>
      </main>
      <footer className="aig-footer">
        <a
          href={image}
          download={`generated-image.jpeg`} // Name of the downloaded file
          style={{ marginTop: '10px', display: 'inline-block' }}
        >
          <button
            type="button"
            className="btn btn-warning"
            style={{ padding: '5px 36px', fontSize: '12px' }}
          >
            Download
          </button>
        </a>
        <br /><br />
        <p>Powered by RS-Tech</p>
      </footer>
    </div>
  );
};

export default AIG;

import { useState } from 'react'
import './App.css'
import { generateCaption } from './models/api';

export function App() {
  const [imgSrc, setImgSrc] = useState(null);
  const [caption, setCaption] = useState("<Caption>");

  async function addCaption() {
    setCaption("Generating caption...");

    const caption = await generateCaption(imgSrc);

    setCaption(caption[0]['generated_text']);
  }

  return (
    <>
      <h1>Caption Generator</h1>

      <div className="url-form" >
        <input onChange={(e) => setImgSrc(e.target.value)}></input>
        <button onClick={addCaption}>Generate</button>
      </div>

      <div className='caption-image'>
        <img src={imgSrc} height={200}></img>
        <span>{caption}</span>
      </div>
    </>
  )
}
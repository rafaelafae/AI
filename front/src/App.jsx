import { useState } from 'react'
import './App.css'
import { generateCaption, translate } from './models/api';

export function App() {
  const [imgSrc, setImgSrc] = useState(null);
  const [captionEN, setCaptionEN] = useState("<Caption>");
  const [captionPB, setCaptionPB] = useState("<Legenda>");

  async function addCaption() {
    setCaptionEN("Generating caption...");

    // const captionEN = await generateCaption(imgSrc);
    // setCaptionEN(captionEN[0]['generated_text']);

    setCaptionPB("Traduzindo legenda...");

    const captionPB = await translate(captionEN)
    setCaptionPB(captionPB[0]['tranlated_text']);
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
        <span>{captionEN}</span>
        <span>{captionPB}</span>
      </div>
    </>
  )
}
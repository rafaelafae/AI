import { useEffect, useRef, useState } from 'react'
import './App.css'
import { generateCaption, translate, convertToAudio } from './models/api.js';

export function App() {
  const [imgSrc, setImgSrc] = useState(null);
  const [captionEN, setCaptionEN] = useState("<Caption>");
  const [captionPB, setCaptionPB] = useState("<Legenda>");
  const [audioSrc, setAudioSrc] = useState(null);

  const captionAudio = useRef();

  async function addCaption() {
    setCaptionEN("Generating caption...");
    const captionEN = await generateCaption(imgSrc);
    setCaptionEN(captionEN[0]['generated_text']);

    setCaptionPB("Traduzindo legenda...");
    const captionPB = await translate(captionEN)
    setCaptionPB(captionPB[0]['translation_text']);

    const audioEndpoint = await convertToAudio(captionPB);
    const audioSrc = `http://localhost:5000${audioEndpoint[0]['url']}`;
    setAudioSrc(audioSrc);
  }

  useEffect(() => {
    if (captionAudio.current && audioSrc) {
      captionAudio.current.pause();
      captionAudio.current.load();
      captionAudio.current.play();
    }
  }, [audioSrc]);

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
        <audio controls ref={captionAudio}>
          <source src={audioSrc} />
        </audio>
      </div>
    </>
  )
}
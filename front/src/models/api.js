import { ImageCaptioner } from "./ImageCaptioner.js";

export async function generateCaption(imgSrc) {
    return ImageCaptioner.generateCaption(imgSrc);
}

export async function translate(captionEN) {
    return fetch("http://localhost:3000/translate", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "text": captionEN[0]["generated_text"] })
    }).then(resp => resp.json());
}

export async function convertToAudio(captionPB) {
    return fetch("http://localhost:5000/text-to-audio", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "text": captionPB[0]["translation_text"] })
    }).then(resp => resp.json());
}
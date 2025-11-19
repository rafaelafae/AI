import { ImageCaptioner } from "./ImageCaptioner";

export async function generateCaption(imgSrc) {
    return ImageCaptioner.generateCaption(imgSrc);
}

export async function translate(captionEN) {
    return fetch("http://localhost:3000/translate", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "text": captionEN })
    }).then(resp => resp.json());
}
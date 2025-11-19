import { ImageCaptioner } from "./ImageCaptioner";

export async function generateCaption(imgSrc) {
    return ImageCaptioner.generateCaption(imgSrc);
}
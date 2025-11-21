import { Translator } from "./Translator.js";

export async function translate(textEN) {
    return Translator.translate(textEN);
}
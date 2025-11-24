from transformers import AutoProcessor, BarkModel

def pipeline(model_name):
    processor = AutoProcessor.from_pretrained(model_name) # Processor
    model = BarkModel.from_pretrained(model_name) # Model
    sample_rate = model.generation_config.sample_rate  # Define sample rate

    def pipe(text): # Inner function - Input
        model_input = processor(text, voice_preset="v2/pt_speaker_8") # Process input text
        audio = model.generate(**model_input) # Generate audio
        return audio, sample_rate # Return generated audio and sample rate - Output
    
    return pipe

class TextToAudio:
    def __init__(self):
        model_name = "suno/bark-small"
        self.pipe = pipeline(model_name)

    def convert(self, text):
        return self.pipe(text)
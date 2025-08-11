// js/speech.js

const SpeechManager = {
    voices: [],
    isSfxEnabled: true, // For other sounds you might add later
    
    // This function initializes the speech system.
    // It's important because getting voices can be asynchronous.
    init() {
        return new Promise((resolve) => {
            const loadVoices = () => {
                this.voices = window.speechSynthesis.getVoices();
                if (this.voices.length > 0) {
                    if (AppConfig.mode === 'development') {
                        console.log("Speech voices loaded:", this.voices);
                    }
                    resolve();
                }
            };

            // The 'voiceschanged' event fires when the voice list is ready.
            window.speechSynthesis.onvoiceschanged = loadVoices;
            // For some browsers, the list is ready immediately.
            loadVoices();
        });
    },

    // The main function to make the app speak.
    speak(text, lang) {
        if (!text || !this.isSfxEnabled) return;

        // Create a new speech utterance.
        const utterance = new SpeechSynthesisUtterance(text);
        
        // Find a suitable voice for the requested language.
        let selectedVoice = null;
        if (lang === 'en-US') {
            selectedVoice = this.voices.find(voice => voice.lang.startsWith('en') && voice.name.includes('Google'));
        } else if (lang === 'ur-PK') {
            selectedVoice = this.voices.find(voice => voice.lang === 'ur-PK');
        } else if (lang === 'ar-SA') {
            selectedVoice = this.voices.find(voice => voice.lang === 'ar-SA');
        }

        // Use a default voice if a specific one isn't found.
        utterance.voice = selectedVoice || this.voices.find(voice => voice.lang.startsWith(lang.substring(0, 2)));

        if (!utterance.voice) {
            if (AppConfig.mode === 'development') {
                console.warn(`No voice found for language: ${lang}. Using default.`);
            }
        }
        
        utterance.lang = lang;
        utterance.rate = 0.9; // Slightly slower for clarity.
        utterance.pitch = 1.1;

        // Make it speak!
        window.speechSynthesis.speak(utterance);
    },
    
    // Kept for future sound effects (e.g., correct/incorrect sounds)
    toggleSfx() {
        this.isSfxEnabled = !this.isSfxEnabled;
        return this.isSfxEnabled;
    }
};

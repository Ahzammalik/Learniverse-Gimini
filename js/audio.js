// js/audio.js

const AudioManager = {
    sfxPool: [],
    maxSfx: 10,
    voicePlayer: new Audio(),
    musicPlayer: new Audio(),
    isMusicEnabled: false, // Music OFF by default
    isSfxEnabled: true,

    init() {
        for (let i = 0; i < this.maxSfx; i++) { this.sfxPool.push(new Audio()); }
        this.musicPlayer.src = 'assets/audio/music/happy-background.mp3'; // Provide your background music file
        this.musicPlayer.loop = true;
        this.musicPlayer.volume = 0.3;
    },

    playVoice(path) {
        if (!path || !this.isSfxEnabled) return;
        this.voicePlayer.src = path;
        this.voicePlayer.play().catch(e => console.error("Voice playback error:", e));
    },

    playSfx(path) {
        if (!path || !this.isSfxEnabled) return;
        const player = this.sfxPool.find(p => p.paused);
        if (player) {
            player.src = path;
            player.play().catch(e => console.error("SFX playback error:", e));
        }
    },

    toggleMusic() {
        this.isMusicEnabled = !this.isMusicEnabled;
        if (this.isMusicEnabled) {
            this.musicPlayer.play().catch(e => console.error("Music playback error:", e));
        } else {
            this.musicPlayer.pause();
        }
        return this.isMusicEnabled;
    },
    
    toggleSfx() {
        this.isSfxEnabled = !this.isSfxEnabled;
        return this.isSfxEnabled;
    }
};

AudioManager.init();

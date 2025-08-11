// js/state.js

const AppState = {
    progress: {}, // Will be populated by load()

    // Load progress from localStorage, or create a new profile
    load() {
        const savedState = localStorage.getItem('lingoLeapState');
        if (savedState) {
            this.progress = JSON.parse(savedState);
        } else {
            // Default progress for a new player
            this.progress = {
                math: 1,
                learned: {
                    english: [],
                    urdu: [],
                    arabic: []
                }
            };
        }
    },

    save() {
        localStorage.setItem('lingoLeapState', JSON.stringify(this.progress));
    },

    completeLevel(category) {
        if (this.progress[category]) {
            this.progress[category]++;
            this.save();
            // AdManager.logAction(); // Uncomment when ads are implemented
        }
    },
    
    markAsLearned(category, itemLetter) {
        if (this.progress.learned[category] && !this.progress.learned[category].includes(itemLetter)) {
            this.progress.learned[category].push(itemLetter);
            this.save();
        }
    },

    isLearned(category, itemLetter) {
        return this.progress.learned[category] ? this.progress.learned[category].includes(itemLetter) : false;
    }
};

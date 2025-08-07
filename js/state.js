// js/state.js

const AppState = {
    // Default state for a new user
    progress: {
        math: 1,
        urdu: 1,
        arabic: 1,
    },
    
    // Load progress from localStorage when the app starts
    load() {
        const savedState = localStorage.getItem('lingoLeapState');
        if (savedState) {
            this.progress = JSON.parse(savedState);
        }
    },
    
    // Save the current progress to localStorage
    save() {
        localStorage.setItem('lingoLeapState', JSON.stringify(this.progress));
    },
    
    // Function to call when a level is completed
    completeLevel(category) {
        if (this.progress[category]) {
            this.progress[category]++;
            this.save();
        }
    },
    
    // Check if a specific level is unlocked
    isUnlocked(category, level) {
        return this.progress[category] >= level;
    }
};

// In js/state.js -> completeLevel()
// Log an action every time a level is completed
completeLevel(category) {
    if (this.progress[category]) {
        this.progress[category]++;
        this.save();
        AdManager.logAction(); // <-- ADD THIS LINE
    }
}

// In js/router.js -> handleRouteChange()
// Check if an ad should be shown when navigating back to the home screen
handleRouteChange() {
    const path = window.location.hash.slice(1) || '/';
    
    // Check if we are navigating TO the home screen
    if (path === '/') {
        AdManager.showAdIfNeeded(); // <-- ADD THIS CHECK
    }

    // ... rest of the function
}

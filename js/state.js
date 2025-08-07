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

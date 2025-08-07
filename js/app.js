// js/app.js

// The main entry point of the LingoLeap application
document.addEventListener('DOMContentLoaded', () => {
    console.log("LingoLeap Application Initializing...");

    // 1. Load the user's progress from storage
    AppState.load();
    console.log("User progress loaded:", AppState.progress);

    // 2. Initialize the router to handle navigation
    Router.init();
    console.log("Router initialized.");
    
    console.log("LingoLeap is ready! Current time in Karachi:", new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Karachi' }));
});

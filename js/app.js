// js/app.js

document.addEventListener('DOMContentLoaded', async () => {
    if (AppConfig.mode === 'development') {
        console.log("LingoLeap Application Initializing...");
    }

    // 1. IMPORTANT: Initialize the Speech Manager and wait for voices to load
    await SpeechManager.init();

    // 2. Load the user's progress from storage
    AppState.load();
    if (AppConfig.mode === 'development') {
        console.log("User progress loaded:", AppState.progress);
    }
    
    // 3. Initialize the router to handle navigation
    Router.init();
    if (AppConfig.mode === 'development') {
        console.log("Router initialized. LingoLeap is ready!");
    }
});

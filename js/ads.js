// js/ads.js

const AdManager = {
    // How many actions before an ad is shown
    ACTIONS_UNTIL_AD: 3,
    
    // Counter for user actions
    actionCounter: 0,

    // Placeholder for the native AdMob plugin
    // In a real app, you would import this from Capacitor
    AdMob: {
        prepareInterstitial: async (config) => console.log(`[AdMob] Preparing Ad: ${config.adId}`),
        showInterstitial: async () => console.log(`[AdMob] Showing Interstitial Ad!`),
    },
    
    // Call this function every time the user completes a significant action (e.g., a level)
    logAction() {
        this.actionCounter++;
        console.log(`Ad action count: ${this.actionCounter}`);
        if (this.actionCounter >= this.ACTIONS_UNTIL_AD) {
            // Pre-load the ad so it's ready when we need it
            this.AdMob.prepareInterstitial({ adId: 'your-interstitial-ad-unit-id' });
        }
    },

    // Call this function at a natural break point (e.g., returning to home)
    showAdIfNeeded() {
        if (this.actionCounter >= this.ACTIONS_UNTIL_AD) {
            this.AdMob.showInterstitial();
            // Reset the counter after showing the ad
            this.actionCounter = 0;
        }
    }
};

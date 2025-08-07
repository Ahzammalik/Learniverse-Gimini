// js/router.js

const Router = {
    appContainer: document.getElementById('app'),

    routes: {
        '/': 'renderHome',
        '/english': 'renderEnglishModule',
        '/english/:letter': 'renderEnglishLetterDetail',
        '/math': 'renderMathModule',
        '/poems': 'renderPoemsModule',
        '/poems/:index': 'renderPoemDetail',
        '/urdu': 'renderComingSoon',
        '/arabic': 'renderComingSoon',
    },

    init() {
        window.addEventListener('hashchange', () => this.handleRouteChange());
        this.handleRouteChange(); // Handle initial load
    },

    handleRouteChange() {
        const path = window.location.hash.slice(1) || '/';
        let handlerName = null;
        let params = null;

        // 1. Check for a direct match first (e.g., '/', '/english')
        if (this.routes[path]) {
            handlerName = this.routes[path];
        } 
        // 2. If no direct match, check for a parameterized route (e.g., '/english/:letter')
        else {
            for (const route in this.routes) {
                if (route.includes(':')) {
                    const routeParts = route.split('/');
                    const pathParts = path.split('/');
                    
                    if (routeParts.length === pathParts.length) {
                        const match = routeParts.every((part, i) => {
                            if (part.startsWith(':')) {
                                params = pathParts[i]; // Capture the parameter
                                return true;
                            }
                            return part === pathParts[i];
                        });

                        if (match) {
                            handlerName = this.routes[route];
                            break; // Found a match, stop looking
                        }
                    }
                }
            }
        }

        this.render(handlerName, params, path);
    },

    render(handlerName, params, path) {
        if (handlerName) {
            // Special case for 'Coming Soon' to pass the module name
            if (handlerName === 'renderComingSoon') {
                const moduleName = path.split('/')[1];
                this.appContainer.innerHTML = UI[handlerName](moduleName);
            } else {
                this.appContainer.innerHTML = UI[handlerName](params);
            }
        } else {
            // Fallback to home view if no route is matched
            console.error(`No route found for path: ${path}`);
            this.appContainer.innerHTML = UI.renderHome();
        }

        // Show ad if returning to home
        if (path === '/') {
            // Assuming AdManager is globally available or imported
            // AdManager.showAdIfNeeded(); 
        }
    }
};

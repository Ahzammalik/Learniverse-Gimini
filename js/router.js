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
        '/urdu': 'renderUrduModule',
        '/arabic': 'renderArabicModule',
        '/settings': 'renderSettingsView',
    },

    init() {
        window.addEventListener('hashchange', () => this.handleRouteChange());
        this.handleRouteChange(); // Handle initial load
    },

    handleRouteChange() {
        const path = window.location.hash.slice(1) || '/';
        let handlerName = null;
        let params = null;

        if (this.routes[path]) {
            handlerName = this.routes[path];
        } else {
            for (const route in this.routes) {
                if (route.includes(':')) {
                    const routeParts = route.split('/');
                    const pathParts = path.split('/');
                    if (routeParts.length === pathParts.length) {
                        const match = routeParts.every((part, i) => {
                            if (part.startsWith(':')) {
                                params = pathParts[i];
                                return true;
                            }
                            return part === pathParts[i];
                        });
                        if (match) {
                            handlerName = this.routes[route];
                            break;
                        }
                    }
                }
            }
        }
        this.render(handlerName, params, path);
    },

    render(handlerName, params) {
        if (handlerName && typeof UI[handlerName] === 'function') {
            this.appContainer.innerHTML = UI[handlerName](params);
        } else {
            this.appContainer.innerHTML = UI.renderHome();
        }
    }
};

// js/router.js

const Router = {
    // The main container where content will be rendered
    appContainer: document.getElementById('app'),

    // Define the routes and what they should render
    routes: {
        '/': 'renderHome',
        '/english': 'renderEnglishModule',
        '/english/:letter': 'renderEnglishLetterDetail',
        '/math': 'renderComingSoon',
        '/urdu': 'renderComingSoon',
        '/arabic': 'renderComingSoon', // For the locked module
    },

    // Initialize the router
    init() {
        // Listen for changes in the URL hash
        window.addEventListener('hashchange', () => this.handleRouteChange());
        // Handle the initial page load
        this.handleRouteChange();
    },

    // The main logic to handle route changes
    handleRouteChange() {
        const path = window.location.hash.slice(1) || '/'; // Get path from hash, default to '/'
        let handler;
        let params = null;

        // Check for parameterized routes (e.g., /english/:letter)
        const potentialRoute = Object.keys(this.routes).find(route => {
            const routeParts = route.split('/');
            const pathParts = path.split('/');
            if (routeParts.length !== pathParts.length) return false;

            const match = routeParts.every((part, i) => {
                return part.startsWith(':') || part === pathParts[i];
            });

            if (match) {
                // Extract params
                routeParts.forEach((part, i) => {
                    if (part.startsWith(':')) {
                        params = pathParts[i]; // Simple case for one param
                    }
                });
            }
            return match;
        });

        if (potentialRoute) {
            handler = this.routes[potentialRoute];
            this.render(handler, params, path);
        } else {
            // Fallback to home if route not found
            this.render('renderHome');
        }
    },
    
    render(handlerName, params, path) {
        if (typeof UI[handlerName] === 'function') {
            // Special cases for coming soon pages
            if (handlerName === 'renderComingSoon') {
                const moduleName = path.split('/')[1]; // e.g., 'math' from '/math'
                this.appContainer.innerHTML = UI[handlerName](moduleName);
            } else {
                this.appContainer.innerHTML = UI[handlerName](params);
            }
        } else {
            console.error(`Handler ${handlerName} not found in UI module.`);
            this.appContainer.innerHTML = '<h1>Error: Page not found</h1>';
        }
    }
};


// In js/ui.js - Add these new functions

renderPoemsModule() {
    const poemsHTML = LingoLeapData.poems.map((poem, index) =>
        `<a href="#/poems/${index}" class="list-item">${poem.title}</a>`
    ).join('');

    return `
        <div class="view">
            <div class="view-header"><a href="#/" class="back-button">‹</a><h1>Kids Poems</h1></div>
            <div class="view-content">${poemsHTML}</div>
        </div>
    `;
},

renderPoemDetail(index) {
    const poem = LingoLeapData.poems[index];
    if (!poem) return `<div>Poem not found!</div>`;

    // The <pre> tag preserves the line breaks from the poem text
    return `
        <div class="view">
            <div class="view-header"><a href="#/poems" class="back-button">‹</a><h1>${poem.title}</h1></div>
            <div class="view-content poem-detail-view">
                <h3>${poem.title}</h3>
                <p class="author">by ${poem.author}</p>
                <pre class="poem-text">${poem.text}</pre>
                <a href="${poem.filePath}" download class="button-primary">Download Poem</a>
            </div>
        </div>
    `;
},

// In js/ui.js -> renderEnglishLetterDetail() - Add a play sound button
// Inside the .letter-detail-view div:
<button onclick="playSound('${item.sound}')" class="button-primary">Play Sound 🔊</button>

// Add a helper function at the top of js/ui.js
function playSound(soundFile) {
    // This simple function creates and plays an audio element.
    // In a real app, you'd have a more robust audio manager.
    if(soundFile) {
        const audio = new Audio(soundFile);
        audio.play().catch(e => console.error("Error playing sound:", e));
    } else {
        console.warn("No sound file specified.");
    }
}
// In js/router.js -> routes
'/poems': 'renderPoemsModule',
'/poems/:index': 'renderPoemDetail',

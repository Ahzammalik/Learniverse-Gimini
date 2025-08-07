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

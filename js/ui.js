// js/ui.js

const UI = {
    renderHome() {
        return `
            <div class="view">
                <div class="view-header"><h1>LingoLeap</h1></div>
                <div class="view-content">
                    <div class="home-grid">
                        <a href="#/english" class="module-card" id="english"><div class="icon">🍎</div><h2>English Alphabet</h2></a>
                        <a href="#/math" class="module-card" id="math"><div class="icon">🔢</div><h2>Math Mountain</h2></a>
                        <a href="#/urdu" class="module-card" id="urdu"><div class="icon">🇵🇰</div><h2>Urdu Ki Duniya</h2></a>
                        <a href="#/arabic" class="module-card locked" id="arabic"><div class="icon">🕋</div><h2>Arabic Safari</h2></a>
                    </div>
                </div>
            </div>
        `;
    },

    renderEnglishModule() {
        const lettersHTML = LingoLeapData.english.map(item => 
            `<a href="#/english/${item.letter}" class="letter-card">${item.letter}</a>`
        ).join('');

        return `
            <div class="view">
                <div class="view-header">
                    <a href="#/" class="back-button">‹</a>
                    <h1>English Alphabet</h1>
                </div>
                <div class="view-content">
                    <div class="alphabet-grid">${lettersHTML}</div>
                </div>
            </div>
        `;
    },
    
    renderEnglishLetterDetail(letter) {
        const item = LingoLeapData.english.find(d => d.letter === letter);
        if (!item) return `<div>Letter not found!</div>`; // Error handling

        return `
            <div class="view">
                <div class="view-header">
                    <a href="#/english" class="back-button">‹</a>
                    <h1>${item.word}</h1>
                </div>
                <div class="view-content letter-detail-view">
                    <h2>${item.letter}</h2>
                    <img src="${item.image}" alt="${item.word}">
                    <p>${item.word}</p>
                </div>
            </div>
        `;
    },
    
    // Add renderMathModule, renderUrduModule etc. here later
    renderComingSoon(moduleName) {
        return `
             <div class="view">
                <div class="view-header">
                    <a href="#/" class="back-button">‹</a>
                    <h1>Coming Soon!</h1>
                </div>
                <div class="view-content" style="text-align:center; padding-top: 50px;">
                    <h2>The ${moduleName} module is under construction!</h2>
                    <p style="font-size: 4rem; margin-top: 20px;">🏗️</p>
                </div>
            </div>
        `;
    }
};


// In js/ui.js -> renderHome()
// Add this line inside the <div class="home-grid">
<a href="#/poems" class="module-card" style="border-color: #E91E63; color: #E91E63;"><div class="icon">📜</div><h2>Kids Poems</h2></a>
// In js/ui.js

renderMathModule() {
    const userLevel = AppState.progress.math;
    const problem = generateMathProblem(userLevel);
    
    // Generate multiple choice options, one of which is the correct answer
    let options = [problem.answer];
    while (options.length < 4) {
        const wrongAnswer = problem.answer + (Math.floor(Math.random() * 10) - 5) + 1;
        if (wrongAnswer > 0 && !options.includes(wrongAnswer)) {
            options.push(wrongAnswer);
        }
    }
    // Shuffle the options
    options.sort(() => Math.random() - 0.5);

    const optionsHTML = options.map(opt => 
        `<button class="math-option" onclick="checkMathAnswer(${opt}, ${problem.answer})">${opt}</button>`
    ).join('');

    return `
        <div class="view">
            <div class="view-header"><a href="#/" class="back-button">‹</a><h1>Math Mountain - Level ${userLevel}</h1></div>
            <div class="view-content math-view">
                <div id="math-problem-box">${problem.question}</div>
                <div class="math-options-grid">${optionsHTML}</div>
                <div id="math-feedback"></div>
            </div>
        </div>
    `;
},

// Add this helper function to handle the logic
function checkMathAnswer(selected, correct) {
    const feedbackEl = document.getElementById('math-feedback');
    if (selected === correct) {
        feedbackEl.innerHTML = '<span style="color:green;">Correct! 🎉</span>';
        AppState.completeLevel('math'); // Increase level
        // Automatically load the next problem after a short delay
        setTimeout(() => Router.handleRouteChange(), 1500);
    } else {
        feedbackEl.innerHTML = '<span style="color:red;">Try Again! 🤔</span>';
    }
}

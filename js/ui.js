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

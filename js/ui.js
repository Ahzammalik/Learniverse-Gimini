// js/ui.js

// --- Global UI Helper Functions ---
function playSound(soundFile) {
    if(soundFile) {
        const audio = new Audio(soundFile);
        audio.play().catch(e => console.error("Error playing sound:", e));
    } else {
        if (AppConfig.mode === 'development') console.warn("No sound file specified.");
    }
}

function showParentalLock() {
    if (!document.getElementById('parental-lock-modal')) {
         document.body.insertAdjacentHTML('beforeend', UI.renderParentalLockModal());
    }
}

function checkParentalLock() {
    const answerInput = document.getElementById('math-answer');
    const answer = answerInput.value;
    if (parseInt(answer) === window.correctAnswer) {
        window.location.hash = '/settings';
        document.getElementById('parental-lock-modal').remove();
    } else {
        alert('Incorrect. Please try again.');
        answerInput.value = '';
    }
}

function toggleMusic(button) {
    const isEnabled = AudioManager.toggleMusic();
    button.textContent = isEnabled ? 'ON' : 'OFF';
}
function toggleSfx(button) {
    const isEnabled = AudioManager.toggleSfx();
    button.textContent = isEnabled ? 'ON' : 'OFF';
}
function resetProgress() {
    if (confirm('Are you sure you want to erase all progress? This cannot be undone.')) {
        localStorage.removeItem('lingoLeapState');
        AppState.load();
        window.location.hash = '/';
        window.location.reload();
    }
}

function checkMathAnswer(selected, correct) {
    const feedbackEl = document.getElementById('math-feedback');
    if (selected === correct) {
        feedbackEl.innerHTML = '<span style="color:green;">Correct! 🎉</span>';
        AppState.completeLevel('math');
        AudioManager.playSfx('assets/audio/sfx/correct.mp3');
        setTimeout(() => Router.handleRouteChange(), 1500);
    } else {
        feedbackEl.innerHTML = '<span style="color:red;">Try Again! 🤔</span>';
        AudioManager.playSfx('assets/audio/sfx/incorrect.mp3');
    }
}


// --- Main UI Rendering Object ---
const UI = {
    renderHome() {
        return `
            <div class="view home-view">
                <div class="home-header">
                    <h1>LingoLeap</h1>
                    <p>Let's start our adventure!</p>
                    <div class="settings-button" onclick="showParentalLock()">⚙️</div>
                </div>
                <div class="landscape-container">
                    <div class="sky">
                        <div class="sun"></div><div class="cloud cloud1"></div><div class="cloud cloud2"></div>
                    </div>
                    <div class="ground">
                        <a href="#/english" class="landscape-button" id="home-english"><img src="https://www.svgrepo.com/show/443733/apple-tree.svg" alt="English"><span>English<br>Garden</span></a>
                        <a href="#/math" class="landscape-button" id="home-math"><img src="https://www.svgrepo.com/show/424842/mountain-peak-rock.svg" alt="Math"><span>Math<br>Mountain</span></a>
                        <a href="#/urdu" class="landscape-button" id="home-urdu"><img src="https://www.svgrepo.com/show/457492/building.svg" alt="Urdu"><span>Urdu<br>Duniya</span></a>
                        <a href="#/poems" class="landscape-button" id="home-poems"><img src="https://www.svgrepo.com/show/493399/book-closed.svg" alt="Poems"><span>Kids<br>Poems</span></a>
                        <a href="#/arabic" class="landscape-button" id="home-arabic" style="bottom: 40%; right: 5%;"><img src="https://www.svgrepo.com/show/372778/mosque.svg" alt="Arabic"><span>Arabic<br>Safari</span></a>
                    </div>
                </div>
            </div>
        `;
    },

    renderEnglishModule() {
        const lettersHTML = LingoLeapData.english.map(item => {
            const isLearnedClass = AppState.isLearned('english', item.letter) ? 'learned' : '';
            return `<a href="#/english/${item.letter}" class="letter-card ${isLearnedClass}">${item.letter}</a>`;
        }).join('');
        return `<div class="view"><div class="view-header"><a href="#/" class="back-button">‹</a><h1>English Alphabet</h1></div><div class="view-content"><div class="alphabet-grid">${lettersHTML}</div></div></div>`;
    },

    renderEnglishLetterDetail(letter) {
        const item = LingoLeapData.english.find(d => d.letter === letter);
        if (!item) return `<div>Letter not found!</div>`;
        AppState.markAsLearned('english', item.letter);
        AudioManager.playVoice(item.sound);
        return `<div class="view"><div class="view-header"><a href="#/english" class="back-button">‹</a><h1>${item.word}</h1></div><div class="view-content letter-detail-view"><h2>${item.letter}</h2><img src="${item.image}" alt="${item.word}"><p>${item.word}</p><button onclick="AudioManager.playVoice('${item.sound}')" class="button-primary">Play Sound 🔊</button></div></div>`;
    },
    
    renderUrduModule() {
        const lettersHTML = LingoLeapData.urdu.map(item => {
            const isLearnedClass = AppState.isLearned('urdu', item.letter) ? 'learned' : '';
            return `<div class="letter-card urdu ${isLearnedClass}" onclick="AudioManager.playVoice('${item.sound}'); AppState.markAsLearned('urdu', '${item.letter}'); this.classList.add('learned');">${item.letter}</div>`;
        }).join('');
        return `<div class="view"><div class="view-header"><a href="#/" class="back-button">‹</a><h1>Urdu Huroof</h1></div><div class="view-content"><div class="alphabet-grid urdu-grid">${lettersHTML}</div></div></div>`;
    },

    renderArabicModule() {
        const lettersHTML = LingoLeapData.arabic.map(item => {
            const isLearnedClass = AppState.isLearned('arabic', item.letter) ? 'learned' : '';
            return `<div class="letter-card arabic ${isLearnedClass}" onclick="AudioManager.playVoice('${item.sound}'); AppState.markAsLearned('arabic', '${item.letter}'); this.classList.add('learned');">${item.letter}</div>`;
        }).join('');
        return `<div class="view"><div class="view-header"><a href="#/" class="back-button">‹</a><h1>Arabic Alphabets</h1></div><div class="view-content"><div class="alphabet-grid arabic-grid">${lettersHTML}</div></div></div>`;
    },

    renderMathModule() {
        const userLevel = AppState.progress.math;
        const problem = generateMathProblem(userLevel);
        let options = [problem.answer];
        while (options.length < 4) {
            const wrongAnswer = problem.answer + (Math.floor(Math.random() * 9) - 4);
            if (wrongAnswer >= 0 && !options.includes(wrongAnswer)) { options.push(wrongAnswer); }
        }
        options.sort(() => Math.random() - 0.5);
        const optionsHTML = options.map(opt => `<button class="math-option" onclick="checkMathAnswer(${opt}, ${problem.answer})">${opt}</button>`).join('');
        return `<div class="view"><div class="view-header"><a href="#/" class="back-button">‹</a><h1>Math Mountain - Level ${userLevel}</h1></div><div class="view-content math-view"><div id="math-problem-box">${problem.question}</div><div class="math-options-grid">${optionsHTML}</div><div id="math-feedback"></div></div></div>`;
    },

    renderPoemsModule() {
        const poemsHTML = LingoLeapData.poems.map((poem, index) => `<a href="#/poems/${index}" class="list-item">${poem.title}</a>`).join('');
        return `<div class="view"><div class="view-header"><a href="#/" class="back-button">‹</a><h1>Kids Poems</h1></div><div class="view-content">${poemsHTML}</div></div>`;
    },

    renderPoemDetail(index) {
        const poem = LingoLeapData.poems[index];
        if (!poem) return `<div>Poem not found!</div>`;
        return `<div class="view"><div class="view-header"><a href="#/poems" class="back-button">‹</a><h1>${poem.title}</h1></div><div class="view-content poem-detail-view"><h3>${poem.title}</h3><p class="author">by ${poem.author}</p><pre class="poem-text">${poem.text}</pre></div></div>`;
    },
    
    renderParentalLockModal() {
        const num1 = Math.floor(Math.random() * 10) + 5;
        const num2 = Math.floor(Math.random() * 10) + 5;
        window.correctAnswer = num1 + num2;
        return `<div id="parental-lock-modal"><div class="modal-content"><h3>For Parents Only</h3><p>Please answer to continue:</p><p class="math-question">${num1} + ${num2} = ?</p><input type="number" id="math-answer" placeholder="?"><br><button class="button-primary" onclick="checkParentalLock()">Unlock</button></div></div>`;
    },

    renderSettingsView() {
        const musicStatus = AudioManager.isMusicEnabled ? 'ON' : 'OFF';
        const sfxStatus = AudioManager.isSfxEnabled ? 'ON' : 'OFF';
        return `<div class="view"><div class="view-header"><a href="#/" class="back-button">‹</a><h1>Settings</h1></div><div class="view-content settings-view"><div class="settings-item"><span>Background Music</span><button class="settings-toggle" onclick="toggleMusic(this)">${musicStatus}</button></div><div class="settings-item"><span>Sound Effects & Voice</span><button class="settings-toggle" onclick="toggleSfx(this)">${sfxStatus}</button></div><div class="settings-item"><span>Reset All Progress</span><button class="button-danger" onclick="resetProgress()">Reset</button></div></div></div>`;
    }
};

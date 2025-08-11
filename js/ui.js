// In js/ui.js
// REPLACE your entire existing renderHome function with this one.

renderHome() {
    // This new version has cartoon SVG images embedded directly in the code.
    // They will load instantly and always work.
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
                    <a href="#/english" class="landscape-button" id="home-english">
                        <svg viewBox="0 0 128 128" xml:space="preserve"><g><path style="fill:#A67C52;" d="M60,128V92h8v36H60z"/><path style="fill:#73AF34;" d="M124,68c0,19.88-26.86,36-60,36S4,87.88,4,68S30.86,32,64,32S124,48.12,124,68z"/><circle style="fill:#E24D4D;" cx="24" cy="60" r="8"/><circle style="fill:#E24D4D;" cx="44" cy="80" r="8"/><circle style="fill:#E24D4D;" cx="64" cy="52" r="8"/><circle style="fill:#E24D4D;" cx="84" cy="80" r="8"/><circle style="fill:#E24D4D;" cx="104" cy="60" r="8"/></g></svg>
                        <span>English<br>Garden</span>
                    </a>

                    <a href="#/math" class="landscape-button" id="home-math">
                        <svg viewBox="0 0 64 64"><g><path fill="#C2C2C2" d="M52,60H12L32,20l20,40z"/><path fill="#E6E6E6" d="m32,20l-9.3,18.7c.6-.1,1.1-.2,1.7-.2c5.9,0,10.7,4.8,10.7,10.7c0,1.2-.2,2.4-.6,3.5L32,20z"/><path fill="#F2F2F2" d="M45.1,49.2c.4-1.1.6-2.3.6-3.5c0-5.9-4.8-10.7-10.7-10.7c-.6,0-1.1.1-1.7.2L45.1,49.2z"/></g></svg>
                        <span>Math<br>Mountain</span>
                    </a>

                    <a href="#/urdu" class="landscape-button" id="home-urdu">
                        <svg viewBox="0 0 64 64"><path fill="#FFD700" d="M56 24v32H8V24l24-16z"/><path fill="#F5B400" d="M32 8L8 24v-4l24-16 24 16v4z"/><path fill="#FFF" d="M20 32h8v24h-8zm16 0h8v24h-8z"/><path fill="#4D4D4D" d="M60 56H4v4h56z"/></svg>
                        <span>Urdu<br>Duniya</span>
                    </a>

                    <a href="#/poems" class="landscape-button" id="home-poems">
                        <svg viewBox="0 0 64 64"><path fill="#4A90E2" d="M52 8v48H22c-5.5 0-10-4.5-10-10V18c0-5.5 4.5-10 10-10h30z"/><path fill="#FFF" d="M20 8h2v48h-2z"/><path fill="#4A90E2" d="M22 8h30v2H22c-4.4 0-8 3.6-8 8v28c0 .7.1 1.4.3 2H22V8z"/></svg>
                        <span>Kids<br>Poems</span>
                    </a>
                    
                    <a href="#/arabic" class="landscape-button" id="home-arabic">
                        <svg viewBox="0 0 64 64"><path fill="#73AF34" d="M54 60H10V52c0-12.2 9.8-22 22-22s22 9.8 22 22v8z"/><path fill="#4D4D4D" d="M60 60H4v-4h56v4z"/><path fill="#FFD700" d="M32 4c-6.6 0-12 5.4-12 12v14h24V16c0-6.6-5.4-12-12-12z"/><circle fill="#4D4D4D" cx="32" cy="4" r="4"/></svg>
                        <span>Arabic<br>Safari</span>
                    </a>
                </div>
            </div>
        </div>
    `;
},

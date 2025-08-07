// js/ui.js

// Replace the existing renderHome function with this one
renderHome() {
    return `
        <div class="view home-view">
            <div class="home-header">
                <h1>LingoLeap</h1>
                <p>Let's start our adventure!</p>
            </div>
            <div class="landscape-container">
                <div class="sky">
                    <div class="sun"></div>
                    <div class="cloud cloud1"></div>
                    <div class="cloud cloud2"></div>
                </div>
                <div class="ground">
                    <a href="#/english" class="landscape-button" id="home-english">
                        <img src="https://www.svgrepo.com/show/443733/apple-tree.svg" alt="English Alphabet">
                        <span>English<br>Garden</span>
                    </a>

                    <a href="#/math" class="landscape-button" id="home-math">
                        <img src="https://www.svgrepo.com/show/424842/mountain-peak-rock.svg" alt="Math Mountain">
                        <span>Math<br>Mountain</span>
                    </a>

                    <a href="#/urdu" class="landscape-button" id="home-urdu">
                        <img src="https://www.svgrepo.com/show/457492/building.svg" alt="Urdu World">
                        <span>Urdu<br>Duniya</span>
                    </a>

                    <a href="#/poems" class="landscape-button" id="home-poems">
                        <img src="https://www.svgrepo.com/show/493399/book-closed.svg" alt="Kids Poems">
                        <span>Kids<br>Poems</span>
                    </a>
                </div>
            </div>
        </div>
    `;
},

// js/data.js

const LingoLeapData = {
    english: [
        // Add paths to your actual audio files here
        { letter: 'A', word: 'Apple', image: 'https://cdn.pixabay.com/photo/2014/12/21/23/39/apple-575773_1280.png', sound: 'assets/audio/en/apple.mp3' },
        { letter: 'B', word: 'Ball', image: 'https://cdn.pixabay.com/photo/2013/07/12/17/49/volleyball-152532_1280.png', sound: 'assets/audio/en/ball.mp3' },
        { letter: 'C', word: 'Cat', image: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.png', sound: 'assets/audio/en/cat.mp3' },
        // ... and so on for all letters
    ],
    poems: [
        {
            title: "Twinkle, Twinkle, Little Star",
            author: "Jane Taylor",
            text: `Twinkle, twinkle, little star,\nHow I wonder what you are!\nUp above the world so high,\nLike a diamond in the sky.`,
            filePath: 'assets/poems/twinkle_star.pdf' // Path for the download button
        },
        {
            title: "Baa, Baa, Black Sheep",
            author: "Public Domain",
            text: `Baa, baa, black sheep,\nHave you any wool?\nYes, sir, yes, sir,\nThree bags full.`,
            filePath: 'assets/poems/baa_baa_sheep.pdf'
        },
        // ... Add up to 20 poems here
    ],
    math: [] // We will populate this in the next section
};
// In js/data.js

function generateMathProblem(level) {
    if (level <= 10) { // Ages 3-5: Simple Addition up to 10
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        return { type: 'addition', question: `${num1} + ${num2}`, answer: num1 + num2 };
    } else if (level <= 20) { // Ages 6-8: Subtraction and slightly larger numbers
        const num1 = Math.floor(Math.random() * 20) + 5;
        const num2 = Math.floor(Math.random() * num1) + 1; // Ensure answer is not negative
        return { type: 'subtraction', question: `${num1} - ${num2}`, answer: num1 - num2 };
    } else { // Ages 9-12: More complex problems
        const num1 = Math.floor(Math.random() * 50) + 10;
        const num2 = Math.floor(Math.random() * 50) + 10;
        return { type: 'addition', question: `${num1} + ${num2}`, answer: num1 + num2 };
    }
}
// We don't need LingoLeapData.math anymore, as we generate problems on the fly.

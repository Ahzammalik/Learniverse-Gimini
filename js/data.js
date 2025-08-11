// js/data.js

// IMPORTANT: You must create these audio files and place them in your project's 'assets' folder.
const LingoLeapData = {
    english: [
        { letter: 'A', word: 'Apple', image: 'https://www.svgrepo.com/show/443733/apple-tree.svg', sound: 'assets/audio/en/A.mp3' },
        { letter: 'B', word: 'Ball', image: 'https://www.svgrepo.com/show/493489/ball.svg', sound: 'assets/audio/en/B.mp3' },
        { letter: 'C', word: 'Cat', image: 'https://www.svgrepo.com/show/485324/cat.svg', sound: 'assets/audio/en/C.mp3' },
        { letter: 'D', word: 'Duck', image: 'https://www.svgrepo.com/show/475659/duck.svg', sound: 'assets/audio/en/D.mp3' },
        { letter: 'E', word: 'Elephant', image: 'https://www.svgrepo.com/show/459267/elephant.svg', sound: 'assets/audio/en/E.mp3' },
        { letter: 'F', word: 'Frog', image: 'https://www.svgrepo.com/show/490409/frog.svg', sound: 'assets/audio/en/F.mp3' },
        { letter: 'G', word: 'Grapes', image: 'https://www.svgrepo.com/show/493822/grapes.svg', sound: 'assets/audio/en/G.mp3' },
        { letter: 'H', word: 'Hat', image: 'https://www.svgrepo.com/show/494027/hat.svg', sound: 'assets/audio/en/H.mp3' },
        { letter: 'I', word: 'Ice Cream', image: 'https://www.svgrepo.com/show/486242/ice-cream.svg', sound: 'assets/audio/en/I.mp3' },
        { letter: 'J', word: 'Jug', image: 'https://www.svgrepo.com/show/494301/jug.svg', sound: 'assets/audio/en/J.mp3' },
        { letter: 'K', word: 'Kite', image: 'https://www.svgrepo.com/show/494334/kite.svg', sound: 'assets/audio/en/K.mp3' },
        { letter: 'L', word: 'Lion', image: 'https://www.svgrepo.com/show/458872/lion.svg', sound: 'assets/audio/en/L.mp3' },
        { letter: 'M', word: 'Monkey', image: 'https://www.svgrepo.com/show/475438/monkey.svg', sound: 'assets/audio/en/M.mp3' },
        { letter: 'N', word: 'Nest', image: 'https://www.svgrepo.com/show/465133/nest.svg', sound: 'assets/audio/en/N.mp3' },
        { letter: 'O', word: 'Orange', image: 'https://www.svgrepo.com/show/494808/orange.svg', sound: 'assets/audio/en/O.mp3' },
        { letter: 'P', word: 'Pen', image: 'https://www.svgrepo.com/show/494910/pen.svg', sound: 'assets/audio/en/P.mp3' },
        { letter: 'Q', word: 'Queen', image: 'https://www.svgrepo.com/show/462477/queen.svg', sound: 'assets/audio/en/Q.mp3' },
        { letter: 'R', word: 'Rabbit', image: 'https://www.svgrepo.com/show/475446/rabbit.svg', sound: 'assets/audio/en/R.mp3' },
        { letter: 'S', word: 'Sun', image: 'https://www.svgrepo.com/show/495398/sun.svg', sound: 'assets/audio/en/S.mp3' },
        { letter: 'T', word: 'Tree', image: 'https://www.svgrepo.com/show/495574/tree.svg', sound: 'assets/audio/en/T.mp3' },
        { letter: 'U', word: 'Umbrella', image: 'https://www.svgrepo.com/show/495638/umbrella.svg', sound: 'assets/audio/en/U.mp3' },
        { letter: 'V', word: 'Van', image: 'https://www.svgrepo.com/show/495690/van.svg', sound: 'assets/audio/en/V.mp3' },
        { letter: 'W', word: 'Watch', image: 'https://www.svgrepo.com/show/495764/watch.svg', sound: 'assets/audio/en/W.mp3' },
        { letter: 'X', word: 'Xylophone', image: 'https://www.svgrepo.com/show/495837/xylophone.svg', sound: 'assets/audio/en/X.mp3' },
        { letter: 'Y', word: 'Yacht', image: 'https://www.svgrepo.com/show/495841/yacht.svg', sound: 'assets/audio/en/Y.mp3' },
        { letter: 'Z', word: 'Zebra', image: 'https://www.svgrepo.com/show/475478/zebra.svg', sound: 'assets/audio/en/Z.mp3' },
    ],
    urdu: [
        { letter: 'ا', name: 'Alif', sound: 'assets/audio/ur/alif.mp3' }, { letter: 'ب', name: 'Bay', sound: 'assets/audio/ur/bay.mp3' },
        { letter: 'پ', name: 'Pay', sound: 'assets/audio/ur/pay.mp3' }, { letter: 'ت', name: 'Tay', sound: 'assets/audio/ur/tay.mp3' },
        { letter: 'ٹ', name: 'Tey', sound: 'assets/audio/ur/ttey.mp3' }, { letter: 'ث', name: 'Say', sound: 'assets/audio/ur/say.mp3' },
        { letter: 'ج', name: 'Jeem', sound: 'assets/audio/ur/jeem.mp3' }, { letter: 'چ', name: 'Chay', sound: 'assets/audio/ur/chay.mp3' },
        { letter: 'ح', name: 'Hay', sound: 'assets/audio/ur/hay.mp3' }, { letter: 'خ', name: 'Khay', sound: 'assets/audio/ur/khay.mp3' },
        { letter: 'د', name: 'Daal', sound: 'assets/audio/ur/daal.mp3' }, { letter: 'ڈ', name: 'Ddaal', sound: 'assets/audio/ur/ddaal.mp3' },
        { letter: 'ذ', name: 'Zaal', sound: 'assets/audio/ur/zaal.mp3' }, { letter: 'ر', name: 'Ray', sound: 'assets/audio/ur/ray.mp3' },
        { letter: 'ڑ', name: 'Rray', sound: 'assets/audio/ur/rray.mp3' }, { letter: 'ز', name: 'Zay', sound: 'assets/audio/ur/zay.mp3' },
        { letter: 'ژ', name: 'Zhay', sound: 'assets/audio/ur/zhay.mp3' }, { letter: 'س', name: 'Seen', sound: 'assets/audio/ur/seen.mp3' },
        { letter: 'ش', name: 'Sheen', sound: 'assets/audio/ur/sheen.mp3' }, { letter: 'ص', name: 'Suaad', sound: 'assets/audio/ur/suaad.mp3' },
        { letter: 'ض', name: 'Zuaad', sound: 'assets/audio/ur/zuaad.mp3' }, { letter: 'ط', name: 'Toay', sound: 'assets/audio/ur/toay.mp3' },
        { letter: 'ظ', name: 'Zoay', sound: 'assets/audio/ur/zoay.mp3' }, { letter: 'ع', name: 'Ain', sound: 'assets/audio/ur/ain.mp3' },
        { letter: 'غ', name: 'Ghain', sound: 'assets/audio/ur/ghain.mp3' }, { letter: 'ف', name: 'Fay', sound: 'assets/audio/ur/fay.mp3' },
        { letter: 'ق', name: 'Qaaf', sound: 'assets/audio/ur/qaaf.mp3' }, { letter: 'ک', name: 'Kaaf', sound: 'assets/audio/ur/kaaf.mp3' },
        { letter: 'گ', name: 'Gaaf', sound: 'assets/audio/ur/gaaf.mp3' }, { letter: 'ل', name: 'Laam', sound: 'assets/audio/ur/laam.mp3' },
        { letter: 'م', name: 'Meem', sound: 'assets/audio/ur/meem.mp3' }, { letter: 'ن', name: 'Noon', sound: 'assets/audio/ur/noon.mp3' },
        { letter: 'و', name: 'Wao', sound: 'assets/audio/ur/wao.mp3' }, { letter: 'ہ', name: 'Gol Hay', sound: 'assets/audio/ur/gol-hay.mp3' },
        { letter: 'ی', name: 'Yay', sound: 'assets/audio/ur/yay.mp3' }, { letter: 'ے', name: 'Bari Yay', sound: 'assets/audio/ur/bari-yay.mp3' },
    ],
    arabic: [
        { letter: 'ا', name: 'Alif', sound: 'assets/audio/ar/alif.mp3' }, { letter: 'ب', name: 'Ba', sound: 'assets/audio/ar/ba.mp3' },
        { letter: 'ت', name: 'Ta', sound: 'assets/audio/ar/ta.mp3' }, { letter: 'ث', name: 'Tha', sound: 'assets/audio/ar/tha.mp3' },
        { letter: 'ج', name: 'Jim', sound: 'assets/audio/ar/jim.mp3' }, { letter: 'ح', name: 'Ha', sound: 'assets/audio/ar/ha.mp3' },
        { letter: 'خ', name: 'Kha', sound: 'assets/audio/ar/kha.mp3' }, { letter: 'د', name: 'Dal', sound: 'assets/audio/ar/dal.mp3' },
        { letter: 'ذ', name: 'Dhal', sound: 'assets/audio/ar/dhal.mp3' }, { letter: 'ر', name: 'Ra', sound: 'assets/audio/ar/ra.mp3' },
        { letter: 'ز', name: 'Zayn', sound: 'assets/audio/ar/zayn.mp3' }, { letter: 'س', name: 'Sin', sound: 'assets/audio/ar/sin.mp3' },
        { letter: 'ش', name: 'Shin', sound: 'assets/audio/ar/shin.mp3' }, { letter: 'ص', name: 'Sad', sound: 'assets/audio/ar/sad.mp3' },
        { letter: 'ض', name: 'Dad', sound: 'assets/audio/ar/dad.mp3' }, { letter: 'ط', name: 'Ta', sound: 'assets/audio/ar/tta.mp3' },
        { letter: 'ظ', name: 'Dha', sound: 'assets/audio/ar/dha.mp3' }, { letter: 'ع', name: 'Ayn', sound: 'assets/audio/ar/ayn.mp3' },
        { letter: 'غ', name: 'Ghayn', sound: 'assets/audio/ar/ghayn.mp3' }, { letter: 'ف', name: 'Fa', sound: 'assets/audio/ar/fa.mp3' },
        { letter: 'ق', name: 'Qaf', sound: 'assets/audio/ar/qaf.mp3' }, { letter: 'ك', name: 'Kaf', sound: 'assets/audio/ar/kaf.mp3' },
        { letter: 'ل', name: 'Lam', sound: 'assets/audio/ar/lam.mp3' }, { letter: 'م', name: 'Mim', sound: 'assets/audio/ar/mim.mp3' },
        { letter: 'ن', name: 'Nun', sound: 'assets/audio/ar/nun.mp3' }, { letter: 'ه', name: 'Ha', sound: 'assets/audio/ar/hha.mp3' },
        { letter: 'و', name: 'Waw', sound: 'assets/audio/ar/waw.mp3' }, { letter: 'ي', name: 'Ya', sound: 'assets/audio/ar/ya.mp3' },
    ],
    poems: [
        { title: "Twinkle, Twinkle, Little Star", author: "Jane Taylor", text: `Twinkle, twinkle, little star,\nHow I wonder what you are!` },
        { title: "Baa, Baa, Black Sheep", author: "Public Domain", text: `Baa, baa, black sheep,\nHave you any wool?` },
        { title: "Humpty Dumpty", author: "Public Domain", text: `Humpty Dumpty sat on a wall,\nHumpty Dumpty had a great fall.` },
        { title: "Jack and Jill", author: "Public Domain", text: `Jack and Jill went up the hill\nTo fetch a pail of water.` },
        { title: "Little Miss Muffet", author: "Public Domain", text: `Little Miss Muffet\nSat on a tuffet,\nEating her curds and whey.` },
        { title: "Mary Had a Little Lamb", author: "Sarah Josepha Hale", text: `Mary had a little lamb,\nIts fleece was white as snow.` },
        { title: "Row, Row, Row Your Boat", author: "Public Domain", text: `Row, row, row your boat,\nGently down the stream.` },
        { title: "The Itsy Bitsy Spider", author: "Public Domain", text: `The itsy bitsy spider\nClimbed up the waterspout.` },
        { title: "Hey Diddle Diddle", author: "Public Domain", text: `Hey diddle diddle,\nThe cat and the fiddle.` },
        { title: "Old MacDonald Had a Farm", author: "Public Domain", text: `Old MacDonald had a farm,\nE-I-E-I-O.` },
        { title: "Wheels on the Bus", author: "Verna Hills", text: `The wheels on the bus go\nround and round.` },
        { title: "Five Little Monkeys", author: "Eileen Christelow", text: `Five little monkeys\njumping on the bed.` },
        { title: " Hickory Dickory Dock", author: "Public Domain", text: `Hickory dickory dock,\nThe mouse ran up the clock.` },
        { title: "London Bridge Is Falling Down", author: "Public Domain", text: `London Bridge is falling down,\nFalling down, falling down.` },
        { title: "Pat-a-cake, Pat-a-cake", author: "Public Domain", text: `Pat-a-cake, pat-a-cake, baker's man,\nBake me a cake as fast as you can.` },
        { title: "Ring Around the Rosie", author: "Public Domain", text: `Ring-a-round the rosie,\nA pocket full of posies.` },
        { title: "This Little Piggy", author: "Public Domain", text: `This little piggy went to market,\nThis little piggy stayed home.` },
        { title: "One, Two, Buckle My Shoe", author: "Public Domain", text: `One, two,\nBuckle my shoe.` },
        { title: "A-Tisket, A-Tasket", author: "Public Domain", text: `A-tisket, a-tasket,\nA green and yellow basket.` },
        { title: "The Muffin Man", author: "Public Domain", text: `Oh, do you know the muffin man,\nThe muffin man, the muffin man?` }
    ]
};

function generateMathProblem(level) {
    if (level <= 10) { // Ages 3-5: Simple Addition up to 10
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        return { type: 'addition', question: `${num1} + ${num2}`, answer: num1 + num2 };
    } else if (level <= 20) { // Ages 6-8: Subtraction and slightly larger numbers
        const num1 = Math.floor(Math.random() * 20) + 5;
        const num2 = Math.floor(Math.random() * num1) + 1;
        return { type: 'subtraction', question: `${num1} - ${num2}`, answer: num1 - num2 };
    } else { // Ages 9-12: More complex problems
        const num1 = Math.floor(Math.random() * 50) + 10;
        const num2 = Math.floor(Math.random() * 50) + 10;
        return { type: 'addition', question: `${num1} + ${num2}`, answer: num1 + num2 };
    }
}

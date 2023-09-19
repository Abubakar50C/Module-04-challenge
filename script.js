const wordList=[
    { word: "javascript",
      hint: "Programming language"
    
    
    },
    { word: "air",
    hint: "Inhale... Exhale"
    
    },
    {
        word: "milkyway",
        hint: "galaxy"
    }
]

const inputs = document.querySelector('.inputs'),
resetBtn = document.querySelector('.reset-btn'),
hint = document.querySelector('.hint span');

function randomWord(){
    let randObj = wordList[Math.floor(Math.random() * wordList.length)];
    let word = randObj.word;
    console.log(word);

    hint.innertext = randObj.hint

    let html = ""
    for (let i=0; i < word.length;i++){
        html += '<input type="text" disabled>'

    }
    inputs.innerHTML = html;
}
randomWord()
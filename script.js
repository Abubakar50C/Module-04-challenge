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

function randomWord(){
    let randObj = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(randObj)
}
randomWord()

const textContainer = document.getElementById('name').textContent;
const words = textContainer.split(/\s+/).filter(word => word.length > 0);

let currentWordIndex = 0;
let currentLetterIndex = 0;
let intervalTime = 1500;

function displayWord(){
    const wordContainer = document.getElementById('name');
    const currentWord = words[currentWordIndex];
    wordContainer.textContent = currentWord.slice(0, currentLetterIndex + 1);
    if(currentLetterIndex < currentWord.length - 1) {
        currentLetterIndex++;
    }else{
        //Reset letter index and move to the next word
        currentLetterIndex = 0;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        if(intervalTime === 1500){
            intervalTime = 500;
        }else{
            intervalTime = 1500;
        }
        clearInterval(timer);
        timer = setInterval(displayWord, intervalTime)
    }
}
let timer = setInterval(displayWord, intervalTime)



function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
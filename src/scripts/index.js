const url ="https://api.adviceslip.com/advice";

const dice= document.getElementById('dice');
const adviceId= document.getElementById('advice-id');
const adviceMessage= document.getElementById('advice-text');

async function getRandomAdvice() {
    const response = await fetch(url);
    const data = await response.json()
    return data
}

function populateHTML(data){
    adviceId.innerText=`ADVICE #${data.slip.id}`
    adviceMessage.innerText=data.slip.advice
}

async function rollDice(){
    dice.classList.remove('rotate-scale-up')
    void dice.offsetWidth;
    dice.classList.add('rotate-scale-up')
    const data = await getRandomAdvice();
    populateHTML(data)
}

dice.addEventListener('click', rollDice)


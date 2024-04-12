// DEMO JOKE APP
import generateMathFact from './generateFact'
import './styles/main.scss'
import fact from './assets/fact.png'

const factImg = document.getElementById('factImg')
factImg.src = fact

const jokeBtn = document.getElementById('factBtn')
jokeBtn.addEventListener("click", generateMathFact);

generateMathFact();

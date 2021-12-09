const Score = document.querySelector('.score')

const One = document.querySelector('.one')
const ButtonOne1 = document.querySelector(".buttonOne1")
const ButtonOne2 = document.querySelector(".buttonOne2")
const ButtonOne3 = document.querySelector(".buttonOne3")
const ButtonOne4 = document.querySelector(".buttonOne4")
const ButtonOne5 = document.querySelector(".buttonOne5")

const Two = document.querySelector('.two')
const ButtonTwo1 = document.querySelector(".buttonTwo1")
const ButtonTwo2 = document.querySelector(".buttonTwo2")
const ButtonTwo3 = document.querySelector(".buttonTwo3")
const ButtonTwo4 = document.querySelector(".buttonTwo4")
const ButtonTwo5 = document.querySelector(".buttonTwo5")


const Four = document.querySelector('.four')
const ButtonFour1 = document.querySelector(".buttonFour1")
const ButtonFour2 = document.querySelector(".buttonFour2")
const ButtonFour3 = document.querySelector(".buttonFour3")
const ButtonFour4 = document.querySelector(".buttonFour4")
const ButtonFour5 = document.querySelector(".buttonFour5")


const Six = document.querySelector('.six')
const ButtonSix1 = document.querySelector(".buttonSix1")
const ButtonSix2 = document.querySelector(".buttonSix2")
const ButtonSix3 = document.querySelector(".buttonSix3")
const ButtonSix4 = document.querySelector(".buttonSix4")
const ButtonSix5 = document.querySelector(".buttonSix5")


const Eight = document.querySelector('.eight')
const ButtonEight1 = document.querySelector(".buttonEight1")
const ButtonEight2 = document.querySelector(".buttonEight2")
const ButtonEight3 = document.querySelector(".buttonEight3")
const ButtonEight4 = document.querySelector(".buttonEight4")
const ButtonEight5 = document.querySelector(".buttonEight5")

const Question = document.querySelector('.Question')

const Answer = document.querySelector('#Answer')

const Submit = document.querySelector('.Submit')

let score = 0

let RandomQuestion





async function mainOne() {

    const httpResponse = await fetch('jeopardy.json')
    const Data = await httpResponse.json()
    console.log(Data)
    console.log('hello')
    //random number to get random quetion
    max = 49377
    min = 1
    let RandomNum = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(RandomNum)
    let i = RandomNum
    RandomQuestion = Data[i]
    console.log(RandomQuestion)

    Question.innerHTML = RandomQuestion.question

    console.log(RandomQuestion.question)


}

function pointsOne() {
    if (Answer.value === RandomQuestion.answer) {
        score = RandomQuestion.value
        console.log(score)
        Score.innerHTML = score

    }
    else alert('wrong')
}
One.addEventListener('click', mainOne)
Submit.addEventListener('click', pointsOne)



async function mainTwo() {

    const httpResponse = await fetch('jeopardy.json')
    const Data = await httpResponse.json()
    console.log(Data)
    console.log('hello')
    //random number to get random quetion
    max = 49377
    min = 1
    let RandomNum = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(RandomNum)
    let i = RandomNum
    let RandomQuestion = Data[i]
    console.log(RandomQuestion)

    Question.innerHTML = RandomQuestion.question

    console.log(RandomQuestion.question)



}


Two.addEventListener('click', mainTwo)


async function mainFour() {

    const httpResponse = await fetch('jeopardy.json')
    const Data = await httpResponse.json()
    console.log(Data)
    console.log('hello')
    //random number to get random quetion
    max = 49377
    min = 1
    let RandomNum = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(RandomNum)
    let i = RandomNum
    let RandomQuestion = Data[i]
    console.log(RandomQuestion)

    Question.innerHTML = RandomQuestion.question

    console.log(RandomQuestion.question)


}


Four.addEventListener('click', mainFour)


async function mainSix() {

    const httpResponse = await fetch('jeopardy.json')
    const Data = await httpResponse.json()
    console.log(Data)
    console.log('hello')
    //random number to get random quetion
    max = 49377
    min = 1
    let RandomNum = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(RandomNum)
    let i = RandomNum
    let RandomQuestion = Data[i]
    console.log(RandomQuestion)

    Question.innerHTML = RandomQuestion.question

    console.log(RandomQuestion.question)



}

Six.addEventListener('click', mainSix)


async function mainEight() {

    const httpResponse = await fetch('jeopardy.json')
    const Data = await httpResponse.json()
    console.log(Data)
    console.log('hello')
    //random number to get random quetion
    max = 49377
    min = 1
    let RandomNum = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(RandomNum)
    let i = RandomNum
    let RandomQuestion = Data[i]
    console.log(RandomQuestion)

    Question.innerHTML = RandomQuestion.question

    console.log(RandomQuestion.question)



}
Eight.addEventListener('click', mainEight)







const adviceIdElement = document.querySelector('.advice__id')
const quoteContentElement = document.querySelector('.advice__content')
const rerollButton = document.querySelector('.advice__reroll-button')

const fetchApi = () => {
    fetch('https://api.adviceslip.com/advice')
    .then(res=>res.json())
    .then(data=>{
        adviceIdElement.textContent = `Advice #${data.slip.id}`
        quoteContentElement.textContent = `${data.slip.advice}`
    })
    .catch(err=>console.err(err))
}

window.addEventListener('DOMContentLoaded', fetchApi)
rerollButton.addEventListener('click', fetchApi)



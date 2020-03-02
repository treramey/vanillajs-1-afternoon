const cardId = document.getElementById('cardId');
const colorInput = document.getElementById('cardColor')

function setCard() {
    const card = document.getElementById(cardId.value)
    card.style.color = colorInput.value;
}

function reset() {
    return window.location.reload();
}
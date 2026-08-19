function open_cards_confirm() {
    const cards = document.querySelectorAll('.card');
    console.log(cards);
    cards.forEach((card) => {
        card.addEventListener('click', (e) => {
            console.log('clicked');
            card.classList.add('opened');
        })
    })
}

export default open_cards_confirm;
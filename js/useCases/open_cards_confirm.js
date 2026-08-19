function open_cards_confirm() {
    const cards = document.querySelectorAll('.card');
    console.log(cards);
    cards.forEach((card) => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.card-main-confirm')) return;
            console.log('clicked');
            card.classList.add('opened');
        })
    })
}

export default open_cards_confirm;
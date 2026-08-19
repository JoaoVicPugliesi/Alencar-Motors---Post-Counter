function close_cards_confirm () {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        card.addEventListener('click', (e) => {
            if(e.target.closest('.card-main-confirm-close')) {
                console.log('clicked');
                card.classList.remove('opened');
            }
        })
    })
}

export default close_cards_confirm;
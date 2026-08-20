import employees_component from "../helpers/employees_component.js";

const cards_slider = document.querySelector('.cards-main-slider');

function display_employees_cards (employees) {
    if(!employees) return;
    cards_slider.innerHTML = '';
    const employees_len = employees.length;
    const sorted_employees = [...employees].sort(() => Math.random() - 0.5);
    for(let i = 0; i < employees_len; i++) {
        const current = sorted_employees[i];
        const { id, name, image, daily_counter } = current;
        cards_slider.innerHTML += employees_component(id, name, image, daily_counter);
    }

}

export default display_employees_cards;
import find_employee from "../helpers/find_employee.js";

function add_post_count(employees) {
    const card_main_confirm = document.querySelectorAll('.card-main-confirm');
    card_main_confirm.forEach((confirm) => {
        confirm.addEventListener('click', (e) => {
            console.log(confirm);
            const button = e.target.closest('.card-main-confirm-btn');
            if (!button) return;
            const id = button.getAttribute('data-id');
            const employee = find_employee(id, employees);
            if (!employee) return;
            const { password } = employee;
            const input = confirm.querySelector('.card-main-confirm-input input');
            const card = confirm.closest('.card');
            const counter = card.querySelector('.card-counter-number h3');
            const input_value = Number(input.value);
            console.log(input_value);
            if(Number(password) !== Number(input.value)) return;
            counter.textContent++;        
        });
    });
}

export default add_post_count;
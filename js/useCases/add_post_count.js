import find_employee from "../helpers/find_employee.js";

function add_post_count(employees, db) {

    const card_main_confirm = document.querySelectorAll('.card-main-confirm');

    card_main_confirm.forEach((confirm) => {

        confirm.addEventListener('click', async (e) => {

            const button = e.target.closest('.card-main-confirm-btn');
            if (!button) return;

            const id = button.getAttribute('data-id');

            const employee = find_employee(id, employees);
            if (!employee) return;

            const { password, daily_counter } = employee;

            const input = confirm.querySelector(
                '.card-main-confirm-input input'
            );

            const card = confirm.closest('.card');
            const counter = card.querySelector('.card-counter-number h3');

            if (Number(password) !== Number(input.value)) return;

            const new_counter = Number(daily_counter) + 1;

            const { data, error } = await db
                .from('employees')
                .update({
                    daily_counter: new_counter
                })
                .eq('id', id)
                .select()
                .single();

            if (error) {
                console.error('Error updating counter:', error);
                return;
            }
            counter.textContent = data.daily_counter;
            input.value = '';
            confirm.closest('.card').classList.remove('opened');
            employee.daily_counter = data.daily_counter;
        });

    })
}

export default add_post_count;
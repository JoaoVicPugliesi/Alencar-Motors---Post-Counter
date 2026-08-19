import display_employees_cards from "./useCases/display_employees_cards.js";
import fetch_employees_data from "./useCases/fetch_employees_data.js"

document.addEventListener('DOMContentLoaded', async () => {
    const employees = await fetch_employees_data();
    display_employees_cards(employees);
})
import add_post_count from "./useCases/add_post_count.js";
import close_cards_confirm from "./useCases/close_cards_confirm.js";
import display_employees_cards from "./useCases/display_employees_cards.js";
import fetch_employees_data from "./useCases/fetch_employees_data.js"
import open_cards_confirm from "./useCases/open_cards_confirm.js";

document.addEventListener('DOMContentLoaded', async () => {
    const employees = await fetch_employees_data();
    display_employees_cards(employees);
    open_cards_confirm();
    close_cards_confirm();
    add_post_count(employees);
})
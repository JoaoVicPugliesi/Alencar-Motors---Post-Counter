import drag_slider from "./js/helpers/drag_slider.js";
import toggle_input_visibility from "./js/helpers/toggle_input_visibilty.js";
import add_post_count from "./js/useCases/add_post_count.js";
import close_cards_confirm from "./js/useCases/close_cards_confirm.js";
import display_employees_cards from "./js/useCases/display_employees_cards.js";
import fetch_employees_data from "./js/useCases/fetch_employees_data.js"
import open_cards_confirm from "./js/useCases/open_cards_confirm.js";

const supabase_url = 'https://lntwexedkbcrmayltrwo.supabase.co';
const supabase_key = 'sb_publishable_tvJ9_vYavIo_-6sk_ncudQ_AhDelOGY';

const db = window.supabase.createClient(supabase_url, supabase_key);

document.addEventListener('DOMContentLoaded', async () => {
    const employees = await fetch_employees_data(db);
    display_employees_cards(employees);
    open_cards_confirm();
    close_cards_confirm();
    add_post_count(employees, db);
    toggle_input_visibility();
    drag_slider();
})
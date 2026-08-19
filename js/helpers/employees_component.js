function employees_component(name, image) {
    return `
        <div class="card">
            <div class="card-main-confirm">
                <div class="card-main-confirm-message">
                    <div class="card-main-confirm-close">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                    <div>
                        <h3>Olá, ${name}</h3>
                    </div>
                    <div>
                        <p>Confirme sua identidade</p>
                    </div>
                </div>
                <div class="card-main-confirm-input">
                    <input type="text" maxlength="255" placeholder="Sua Senha Aqui">
                </div>
                <div class="card-main-confirm-btn">
                     <button>Confirmar</button>
                </div>
                </div>
            <div class="card-img">
                <img src="images/employees/${image}.jpg" alt="" draggable="false">
            </div>
            <div class="card-name">
                <h3>${name}</h3>
            </div>
            <div class="card-counter">
                <div class="card-counter-number">0</div>
                <div class="card-counter-add"><i class="fa-solid fa-plus"></i></div>
            </div>
        </div>
    `
}

export default employees_component;
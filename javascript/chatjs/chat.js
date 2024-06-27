const btn_abrir = document.getElementById("abrir");
const div_Adicionar = document.getElementById("adicionar");
const btn = document.querySelector(".btnMais");

// variável auxilidora;
let divAberta = false;

//funcão para remover o ícone de + para o x;
function iconeMais() {
    div_Adicionar.classList.add("add_enter_active");
    btn.querySelector(".bi").classList.remove("bi-plus-lg");
    btn.querySelector(".bi").classList.add("bi-x-lg");
    divAberta = true;
}

// função para remover o x e adicionar o +.
function iconeX() {
    div_Adicionar.classList.remove("add_enter_active");
    btn.querySelector(".bi").classList.remove("bi-x-lg");
    btn.querySelector(".bi").classList.add("bi-plus-lg");
    divAberta = false;
}

// Se a div estiver fechada, abra-o , caso contrário feche-o.
function maisORx() {
    if (divAberta === false) {
        iconeMais();
    } else {
        iconeX();
    }
}

btn_abrir.addEventListener("click", maisORx);
const btn_menu = document.getElementById("menu");
const div_menu = document.getElementById("div-menu");
const btn_search = document.getElementById("search")
const div_search = document.querySelector(".section-search");

const btnPerfil = document.getElementById("btnPERFIL");
const divPerfil = document.getElementById("perfil");

const main = document.getElementById("main");


const btn_chat = document.getElementById("chatBTN");
const div_chat = document.getElementById("chats");

btn_menu.addEventListener("click", () => {
    div_menu.classList.toggle("menuActive");
});

function fecharPesquisa() {
    const divsPesquisa = document.getElementsByClassName("section-search");
    for (let i = 0; i < divsPesquisa.length; i++) {
        const elementosPesquisa = divsPesquisa[i];
        if (elementosPesquisa.classList.contains("searchActive")) {
            if (!elementosPesquisa.contains(event.target)) {
                elementosPesquisa.classList.remove("searchActive");
            }
        }
    }
};


btn_search.addEventListener("click", () => {
    div_search.classList.toggle("searchActive");
});


function fecharMenu() {
    const divsMenu = document.getElementsByClassName("div-menu");
    for (let i = 0; i < divsMenu.length; i++) {
        const elementosMenu = divsMenu[i];
        if (elementosMenu.classList.contains("menuActive")) {
            if (!elementosMenu.contains(event.target)) {
                elementosMenu.classList.remove("menuActive");
            }
        }
    }
};


// Ativando a Perfil de usuário quando o botão perfil é clicado;

btnPerfil.addEventListener("click", () => {
    divPerfil.classList.toggle("perfilDivAtivar");
    // main.style.opacity = "0.6";
})

// implementar a lógica de quando a área do usuário estiver aberto o contéudo principal fique com um opacidade de 0.7. Quando a área do usuário for fechada, remova a opacidade do contéudo principal.


// Fechar div área do usuário assim que clicar num lugar que não seja dentro da área do usuário.

function fechar_Area_Usuario() {
    const divsPerfil = document.getElementsByClassName("perfilDiv");
    for (let i = 0; i < divsPerfil.length; i++) {
        const elementosPerfil = divsPerfil[i];
        if (elementosPerfil.classList.contains("perfilDivAtivar")) {
            if (!elementosPerfil.contains(event.target)) {
                elementosPerfil.classList.remove("perfilDivAtivar");
            }
        }
    }
}


// Função para ativar a div chat 

btn_chat.addEventListener("click", () => {
    divAberta = true;
    div_chat.classList.toggle("chatAtivar");
})


// Implementando a lógica fechar chat, quando clicar fora da div.

function fechar_Chat() {
    const divsChat = document.getElementsByClassName("chats");
    for (let i = 0; i < divsChat.length; i++) {
        const elementos_chats = divsChat[i];
        if (elementos_chats.classList.contains("chatAtivar")) {
            if(!elementos_chats.contains(event.target)) {
                elementos_chats.classList.remove("chatAtivar");
            }
        }
    }
}

window.onclick = function(event) {
    if (!event.target.matches(".btn-pesquisa")) {
        fecharPesquisa();
    }
    if (!event.target.matches(".menu")) {
        fecharMenu();
    }
    if (!event.target.matches(".perfil")) {
        fechar_Area_Usuario();
    }
    if (!event.target.matches(".btnChat")) {
        fechar_Chat();
    }
};


// Elemento main ficar com uma opacidade de 0.6 quando as divs chat e perfil estiverem abertas. Caso fechado a opacidade fica em 1;

// variável auxiliadora 
let divAberta = false;

if (divAberta === true) {
    main.style.opacity = "0.6";
} else {
    main.style.opacity = "1";
}
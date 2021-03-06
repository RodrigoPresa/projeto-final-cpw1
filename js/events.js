
//evento para trocar a pagina
let paginationBtnsMenu = document.querySelectorAll('#paginationMenu a');
let paginationBtnsMaisVendidos = document.querySelectorAll('#paginationMaisVendidos a');
let paginationBtnsPromo = document.querySelectorAll('#paginationPromocoes a');

let sectionsBlocksMenu = document.querySelectorAll('#innerContainer .product-section');
let sectionsBlocksMaisVendidos = document.querySelectorAll('#top-selled .promo-content');
let sectionsBlocksPromocoes = document.querySelectorAll('#sale .promo-content');

let xBtnCloseModal = document.querySelectorAll('#innerContainer .close-x-recipes-modal');
let recipesModals = document.querySelectorAll('#innerContainer .recipes');
let openModalVejaMais = document.querySelectorAll('#innerContainer a');
let rightInnerItem = document.querySelectorAll('#innerContainer .inner-right-item');

//permite compartilhar o evento entre os <a> da paginação no cardápio
for (let i= 0, x = 0, y = 0; i < paginationBtnsMenu.length; i++) {
    paginationBtnsMenu[i].addEventListener('click', () => {
        if(i == 0){
            x = 1;
            y = 2;
        }else if(i == 1){
            x = 0;
            y = 2;
        }else if(i == 2){
            x = 0;
            y = 1;
        };
        sectionsBlocksMenu[i].classList.remove('hidden');
        paginationBtnsMenu[i].classList.add('selected-pagination');
        sectionsBlocksMenu[x].classList.add('hidden');
        paginationBtnsMenu[x].classList.remove('selected-pagination');
        sectionsBlocksMenu[y].classList.add('hidden');
        paginationBtnsMenu[y].classList.remove('selected-pagination');
    });
};

//permite compartilhar o evento entre os <a> da paginação no mais vendidos
for (let i= 0, x = 0, y = 0; i < paginationBtnsMaisVendidos.length; i++) {
    paginationBtnsMaisVendidos[i].addEventListener('click', () => {
        if(i == 0){
            x = 1;
            y = 2;
        }else if(i == 1){
            x = 0;
            y = 2;
        }else if(i == 2){
            x = 0;
            y = 1;
        };
        sectionsBlocksMaisVendidos[i].classList.remove('hidden');
        paginationBtnsMaisVendidos[i].classList.add('selected-pagination');
        sectionsBlocksMaisVendidos[x].classList.add('hidden');
        paginationBtnsMaisVendidos[x].classList.remove('selected-pagination');
        sectionsBlocksMaisVendidos[y].classList.add('hidden');
        paginationBtnsMaisVendidos[y].classList.remove('selected-pagination');
    });
};

//permite compartilhar o evento entre os <a> da paginação no promocoes
for (let i= 0, x = 0, y = 0; i < paginationBtnsPromo.length; i++) {
    paginationBtnsPromo[i].addEventListener('click', () => {
        if(i == 0){
            x = 1;
            y = 2;
        }else if(i == 1){
            x = 0;
            y = 2;
        }else if(i == 2){
            x = 0;
            y = 1;
        };
        sectionsBlocksPromocoes[i].classList.remove('hidden');
        paginationBtnsPromo[i].classList.add('selected-pagination');
        sectionsBlocksPromocoes[x].classList.add('hidden');
        paginationBtnsPromo[x].classList.remove('selected-pagination');
        sectionsBlocksPromocoes[y].classList.add('hidden');
        paginationBtnsPromo[y].classList.remove('selected-pagination');
    });
};

//evento que abre o modal de infos da receitas
for(let i = 0; i < openModalVejaMais.length; i++){
    openModalVejaMais[i].addEventListener('click', () => {
        recipesModals[i].classList.remove('hidden');
        rightInnerItem[i].classList.add('hidden');
    });
};

//evento que fecha o modal de infos de receitas
for(let i = 0; i < xBtnCloseModal.length; i++){
    xBtnCloseModal[i].addEventListener('click', () => {
        recipesModals[i].classList.add('hidden');
        rightInnerItem[i].classList.remove('hidden');
    });
};

//menu toggle (para dispositivos de tela menor do que 810px)

window.onload = function(){
    const menu = document.querySelector(".menu-toggle");
    const header = document.querySelector(".nav-container");
    const nav = document.querySelector(".nav-list");

    menu.onclick = (e) => {
        header.classList.toggle("on");
        nav.classList.toggle("on");
    }
}

//botão voltar ao topo

let btn = document.getElementById("backToTop");
window.onscroll = ()=> {scroll();}
this.toScroll();

function scroll(){    
    if(document.documentElement.scrollTop > 100){
        btn.style.display = "block";
    }else {
        btn.style.display = "none";
    }
}

function toScroll(){
    btn.addEventListener("click", ()=>{
        document.documentElement.scrollTop = 0;
    });    
}
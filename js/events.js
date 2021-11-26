
//evento para trocar a pagina
let paginationBtns = document.querySelectorAll('#pagination a');
let sectionsBlocks = document.querySelectorAll('#innerContainer .product-section');
let xBtnCloseModal = document.querySelectorAll('#innerContainer .close-x-recipes-modal');
let recipesModals = document.querySelectorAll('#innerContainer .recipes');
let openModalVejaMais = document.querySelectorAll('#innerContainer a');
let rightInnerItem = document.querySelectorAll('#innerContainer .inner-right-item');
//permite compartilhar o evento entre os <a> da paginação
for (let i= 0, x = 0, y = 0; i < paginationBtns.length; i++) {
    paginationBtns[i].addEventListener('click', () => {
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
        sectionsBlocks[i].classList.remove('hidden');
        paginationBtns[i].classList.add('selected-pagination');
        sectionsBlocks[x].classList.add('hidden');
        paginationBtns[x].classList.remove('selected-pagination');
        sectionsBlocks[y].classList.add('hidden');
        paginationBtns[y].classList.remove('selected-pagination');
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
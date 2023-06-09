
const wrapObj = document.querySelector('.submenu__list');

// matching nav header with div class to show in an object
buttonToDiv = {
    'Вход и регистрация': 'registration',
    'Поиск запчасти': 'search',
    'Как оформить заказ': 'order',
    'Способы оплаты': 'payment',
    'Доставка и самовывоз': 'delivery',
    'Гарантия и возврат': 'warranty',
    'Для юрлиц':'companies',
};

wrapObj.onclick = function(e){
    e.preventDefault();

    // this loop will help to make nav button underlined if clicked
    for(let i = 0;i<wrapObj.children.length;i++){
        const submenu_item = wrapObj.children[i];
        
        for (let i = 0; i < submenu_item.children.length;i++) {
            const link = submenu_item.children[i];
            if (link.classList.contains('nav_active')){
                link.classList.remove('nav_active');
            }
        }

    }
    e.target.classList.add('nav_active');

    // this loop will match previously clicked nav button with corresponding div using buttonToDiv object

    const classToFind = e.target.textContent;
    const classToToggle = buttonToDiv[classToFind];

    const container = document.querySelector('.body_container');

    for (let i = 0; i<container.children.length;i++) {
        if(container.children[i].classList.contains(classToToggle)){
            container.children[i].classList.remove('invisible')
        } else {
            container.children[i].classList.add('invisible')
        }
    }
    
}



const wrapObj = document.querySelector('.submenu__list');
wrapObj.onclick=function(e){
    e.preventDefault();
    for(let i = 0;i<wrapObj.children.length;i++){
        // wrapObj.children[i].classList.remove('nav_active');
        const submenu_item = wrapObj.children[i];
        
        for (let i = 0; i < submenu_item.children.length;i++) {
            const link = submenu_item.children[i];
            if (link.classList.contains('nav_active')){
                link.classList.remove('nav_active');
            }
        }

    }
    e.target.classList.add('nav_active');
  
}

  


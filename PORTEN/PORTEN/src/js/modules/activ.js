const element = document.querySelector(`.logo-menu__menu-link`);

if (element.classList.contains('.activ')){
   element.classList.remove('.activ');
}else{
   element.classList.add('.activ');
}
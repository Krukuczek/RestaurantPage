import './style.css';
import homeContent from './home';
import menuContent from './menu';
import contactContent from './contact';


function navContainer(){
    const element =  document.createElement('div');
    element.id="navbar";
    const btnHome=document.createElement('button');
    btnHome.classList="navBtn";
    btnHome.id="btnHome";
    btnHome.innerText="Home";
    const btnMenu=document.createElement('button');
    btnMenu.classList="navBtn";
    btnMenu.id="btnMenu";
    btnMenu.innerText="Menu";
    const btnContact=document.createElement('button');
    btnContact.classList="navBtn";
    btnContact.id="btnContact";
    btnContact.innerText="Contact";
    element.appendChild(btnHome);
    element.appendChild(btnMenu);
    element.appendChild(btnContact);
    return element;
}
function cleanDom(element){
    while(element.lastElementChild!==document.getElementById("navbar")){
        element.lastElementChild.remove();
    }
}

const contentContainer = document.getElementById("content");
contentContainer.appendChild(navContainer());
contentContainer.appendChild(homeContent());

const homeButton=document.getElementById("btnHome");
const menuButton=document.getElementById("btnMenu");
const contactButton=document.getElementById("btnContact");

homeButton.classList="navBtn active";

homeButton.addEventListener('click', () =>{
    cleanDom(contentContainer);
    homeButton.classList="navBtn active";
    menuButton.classList="navBtn";
    contactButton.classList="navBtn";
    contentContainer.appendChild(homeContent());
});

menuButton.addEventListener('click', () =>{
    cleanDom(contentContainer);
    homeButton.classList="navBtn";
    menuButton.classList="navBtn active";
    contactButton.classList="navBtn";
    contentContainer.appendChild(menuContent());
});

contactButton.addEventListener('click', () =>{
    cleanDom(contentContainer);
    homeButton.classList="navBtn ";
    menuButton.classList="navBtn";
    contactButton.classList="navBtn active";
    contentContainer.appendChild(contactContent());
});

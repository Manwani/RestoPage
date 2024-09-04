import "./styles.css";
import {homeLoad, homeBody} from './homeContent';
import menuBody from './menuContent';
import contactBody from './contactContent';

//load homepage
homeLoad();

let content = document.querySelector("#content");
let head = document.querySelector('#head');
let homeButton = document.querySelector("#homeButton");
let menuButton = document.querySelector("#menuButton");
let contactButton = document.querySelector("#contactButton");


homeButton.addEventListener("click", loadHome);
menuButton.addEventListener("click", loadMenu);
contactButton.addEventListener("click", loadContact);


function loadHome(){
    clear();
    homeButton.style.color = 'red'; 
    homeBody();
    
}

function loadMenu(){
    clear();
    menuButton.style.color = 'red';
    menuBody();
}

function loadContact(){
    clear();
    contactButton.style.color = 'red';
    contactBody();

}

function clear(){
    //clear highlight from nav bar buttons
    for(let i = 1; i < head.childNodes.length; i++){
        head.childNodes[i].style.color = "white";
    }

    let body = content.childNodes[1];
    content.removeChild(body);
}

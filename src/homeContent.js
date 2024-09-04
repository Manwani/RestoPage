import chickenBros from "./imgs/chickenBros.png";
import frontImage from "./imgs/frontstore.png";

function homeLoad(){
    let content = document.querySelector('#content');    
    content.appendChild(createHeader());
    content.appendChild(createBody());
    content.appendChild(createFooter());
}

function createHeader(){
    let head = document.createElement('div');
    head.id = 'head';

    let mainImage = document.createElement('img');
    mainImage.src = chickenBros;
    head.appendChild(mainImage);
    
    head.appendChild(createButton("homeButton", "Home", "red"));
    head.appendChild(createButton("menuButton", "Menu"));
    head.appendChild(createButton("contactButton", "Contact"));

    return head;
}

function createButton(id, text, color){
    let button = document.createElement("button");
    button.id = id;
    button.innerText = text;
    button.style.color = color || "white";

    return button;
}

function createBody(){
    let body = document.createElement('div');
    body.id = 'body';

    let imageContainer = document.createElement('div');
    imageContainer.className = 'imageContainer';
    body.appendChild(imageContainer);

    let bodyContentImage = document.createElement('img');
    bodyContentImage.src = frontImage;
    bodyContentImage.className = 'frontImage';
    imageContainer.appendChild(bodyContentImage);

    let overlay = document.createElement('div');
    overlay.className = 'overlay';
    
    let textOverlay = document.createElement('p');
    textOverlay.className = 'textOverlay';
    textOverlay.innerText = "Our Main Location in Albuquerque, New Mexico";
    overlay.appendChild(textOverlay);

    imageContainer.appendChild(overlay);

    return body;
}

function createFooter(){
    let bottom = document.createElement('div');
    bottom.className = 'bottom';

    let bottomContent = document.createElement('p');
    bottomContent.innerText = "\"Los Pollos Hermanos, where something delicious is always cooking\"";
    bottom.appendChild(bottomContent);

    return bottom;
}

function homeBody(){
    let body = createBody();
    insertBody(body);
}


function insertBody(body){
    let content = document.querySelector('#content');
    let bottom = document.querySelector(".bottom");

    content.insertBefore(body, bottom);
}

export {homeLoad, homeBody}
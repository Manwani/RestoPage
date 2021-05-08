function homeLoad(){
    let content = document.querySelector('#content');

    //Create header
    let head = document.createElement('div');
    head.id = 'head';


    let mainImage = document.createElement('img');
    mainImage.src = "imgs/chickenBros.png"
    head.appendChild(mainImage);
    
    let home = document.createElement('button');
    home.id = "homeButton";
    home.style.color = 'red';
    home.innerText = "Home";
    head.appendChild(home);

    let menu = document.createElement('button');
    menu.id = "menuButton";
    menu.innerText = "Menu";
    head.appendChild(menu);


    let contact = document.createElement('button');
    contact.id = "contactButton";
    contact.innerText = "Contact";
    head.appendChild(contact);

    content.appendChild(head);

    //Create Body
    let body = document.createElement('div');
    body.id = 'body';

    let imageContainer = document.createElement('div');
    imageContainer.className = 'imageContainer';
    body.appendChild(imageContainer);


    let bodyContentImage = document.createElement('img');
    bodyContentImage.src = "imgs/frontstore.jpg";
    bodyContentImage.className = 'frontImage';
    imageContainer.appendChild(bodyContentImage);

    let overlay = document.createElement('div');
    overlay.className = 'overlay';
    

    let textOverlay = document.createElement('p');
    textOverlay.className = 'textOverlay';
    textOverlay.innerText = "Our Main Location in Albuquerque, New Mexico";
    overlay.appendChild(textOverlay);
    
    imageContainer.appendChild(overlay);

    content.appendChild(body);

    //Create Footer
    let bottom = document.createElement('div');
    bottom.className = 'bottom';

    let bottomContent = document.createElement('p');
    bottomContent.innerText = "\"Los Pollos Hermanos, where something delicious is always cooking\"";
    bottom.appendChild(bottomContent);

    content.appendChild(bottom);


}

function homeBody(){
    let content = document.querySelector('#content');
    let bottom = document.querySelector(".bottom");

    //create body
    let body = document.createElement('div');
    body.id = 'body';

    //content for body
    let imageContainer = document.createElement('div');
    imageContainer.className = 'imageContainer';
    body.appendChild(imageContainer);


    let bodyContentImage = document.createElement('img');
    bodyContentImage.src = "imgs/frontstore.jpg";
    bodyContentImage.className = 'frontImage';
    imageContainer.appendChild(bodyContentImage);

    let overlay = document.createElement('div');
    overlay.className = 'overlay';
    

    let textOverlay = document.createElement('p');
    textOverlay.className = 'textOverlay';
    textOverlay.innerText = "Our Main Location in Albuquerque, New Mexico";
    overlay.appendChild(textOverlay);
    
    imageContainer.appendChild(overlay);

    //insert body before footer
    content.insertBefore(body, bottom);

}

export {homeLoad, homeBody}
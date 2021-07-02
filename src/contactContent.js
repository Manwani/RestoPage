function contactBody(){
    
    //create body
    let body = document.createElement('div');
    body.id = 'body';

    //content for body
    let contactImageContainer = document.createElement('div');
    contactImageContainer.className = 'contactImageContainer';
    body.appendChild(contactImageContainer);

    let bodyContentImage = document.createElement('img');
    bodyContentImage.src = "imgs/gus.png";
    bodyContentImage.className = 'frontImage';
    contactImageContainer.appendChild(bodyContentImage);

    let overlay = document.createElement('div');
    overlay.className = 'overlay';
    

    let textOverlay = document.createElement('p');
    textOverlay.className = 'textOverlay';
    textOverlay.innerText = "The Chicken Man himself Gustavo Fring";
    overlay.appendChild(textOverlay);
    
    contactImageContainer.appendChild(overlay);



    insertBody(body);

}

function insertBody(body){

    let content = document.querySelector('#content');
    let bottom = document.querySelector(".bottom");

    content.insertBefore(body, bottom);

}

export default contactBody
function menuBody(){

    let body = document.createElement('div');
    body.id = 'bodyMenuImages';
  
    body.appendChild(createMenuItem("chicken1", "Some Fried Chicken"));
    body.appendChild(createMenuItem("chicken2", "Some More Fried Chicken"));
    body.appendChild(createMenuItem("chicken3", "Even More Fried Chicken"));
    body.appendChild(createMenuItem("chicken4", "Can't Stop the Fried Chicken"));
    body.appendChild(createMenuItem("Bluemeth","Secret Menu"));
    body.appendChild(createMenuItem("tuco", "TIGHT TIGHT TIGHT"));

    insertBody(body);
}

function createMenuItem(name, description){
    let menuImageContainer = document.createElement('div');
    menuImageContainer.className = "menuImageContainer";
 
    let image = document.createElement('img');
    image.src = `imgs/${name}.png`;
    image.className = "menuImages";
 
    let overlay = document.createElement('div');
    overlay.className = 'overlay';
 
    let textOverlay = document.createElement('p');
    textOverlay.className = 'textOverlay';
    textOverlay.innerText = description;
    
    menuImageContainer.appendChild(image);
    overlay.appendChild(textOverlay);
    menuImageContainer.appendChild(overlay); 

    return menuImageContainer;

}

function insertBody(body){

    let content = document.querySelector('#content');
    let bottom = document.querySelector(".bottom");

    content.insertBefore(body, bottom);

}

export default menuBody
function menuBody(){
    let content = document.querySelector('#content');
    let bottom = document.querySelector(".bottom");

    //create body
    let body = document.createElement('div');
    body.id = 'bodyMenuImages';

    //create image container class for menu
    let menuImageContainer1 = document.createElement('div');
    menuImageContainer1.className = "menuImageContainer";

    //image content for image container
    let image1 = document.createElement('img');
    image1.src = "imgs/chicken1.jpg";
    image1.className = "menuImages";
    menuImageContainer1.appendChild(image1);

    //create the white overlay hidden
    let overlay1 = document.createElement('div');
    overlay1.className = 'overlay';


    //create text on top of overlay
    let textOverlay1 = document.createElement('p');
    textOverlay1.className = 'textOverlay';
    textOverlay1.innerText = "Some Fried Chicken";
    overlay1.appendChild(textOverlay1);

    //add overlay to image container
    menuImageContainer1.appendChild(overlay1);

    //add the image container to body
    body.appendChild(menuImageContainer1);

    //second time
    let menuImageContainer2 = document.createElement('div');
    menuImageContainer2.className = "menuImageContainer";

    
    let image2 = document.createElement('img');
    image2.src = "imgs/chicken2.jpg";
    image2.className = "menuImages";
    menuImageContainer2.appendChild(image2);

    let overlay2 = document.createElement('div');
    overlay2.className = 'overlay';

    let textOverlay2 = document.createElement('p');
    textOverlay2.className = 'textOverlay';
    textOverlay2.innerText = "Some more Fried Chicken";
    overlay2.appendChild(textOverlay2);

    menuImageContainer2.appendChild(overlay2); 

    body.appendChild(menuImageContainer2);

    //third time
    let menuImageContainer3 = document.createElement('div');
    menuImageContainer3.className = "menuImageContainer";

    let image3 = document.createElement('img');
    image3.src = "imgs/chicken3.jpg";
    image3.className = "menuImages";
    menuImageContainer3.appendChild(image3);

    let overlay3 = document.createElement('div');
    overlay3.className = 'overlay';

    let textOverlay3 = document.createElement('p');
    textOverlay3.className = 'textOverlay';
    textOverlay3.innerText = "Even More Fried Chicken";
    overlay3.appendChild(textOverlay3);

    menuImageContainer3.appendChild(overlay3); 

    body.appendChild(menuImageContainer3);

    //fourth time
    let menuImageContainer4 = document.createElement('div');
    menuImageContainer4.className = "menuImageContainer";

    let image4 = document.createElement('img');
    image4.src = "imgs/chicken4.jpg";
    image4.className = "menuImages";
    menuImageContainer4.appendChild(image4);

    let overlay4 = document.createElement('div');
    overlay4.className = 'overlay';

    let textOverlay4 = document.createElement('p');
    textOverlay4.className = 'textOverlay';
    textOverlay4.innerText = "Can't Stop the Fried Chicken";
    overlay4.appendChild(textOverlay4);

    menuImageContainer4.appendChild(overlay4); 

    body.appendChild(menuImageContainer4);

    //fifth time
    let menuImageContainer5 = document.createElement('div');
    menuImageContainer5.className = "menuImageContainer";
 
    let image5 = document.createElement('img');
    image5.src = "imgs/Bluemeth.png";
    image5.className = "menuImages";
    menuImageContainer5.appendChild(image5);
 
    let overlay5 = document.createElement('div');
    overlay5.className = 'overlay';
 
    let textOverlay5 = document.createElement('p');
    textOverlay5.className = 'textOverlay';
    textOverlay5.innerText = "Secret Menu";
    overlay5.appendChild(textOverlay5);
 
    menuImageContainer5.appendChild(overlay5); 
 
    body.appendChild(menuImageContainer5);

    //sixth time
    let menuImageContainer6 = document.createElement('div');
    menuImageContainer6.className = "menuImageContainer";
 
    let image6 = document.createElement('img');
    image6.src = "imgs/tuco.png";
    image6.className = "menuImages";
    menuImageContainer6.appendChild(image6);
 
    let overlay6 = document.createElement('div');
    overlay6.className = 'overlay';
 
    let textOverlay6 = document.createElement('p');
    textOverlay6.className = 'textOverlay';
    textOverlay6.innerText = "TIGHT TIGHT TIGHT!!";
    overlay6.appendChild(textOverlay6);
 
    menuImageContainer6.appendChild(overlay6); 
 
    body.appendChild(menuImageContainer6);
 
 
    

    //insert body before footer
    content.insertBefore(body, bottom);

}

export default menuBody
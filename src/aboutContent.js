function aboutBody(){
    let content = document.querySelector('#content');
    let bottom = document.querySelector(".bottom");

    //create body
    let body = document.createElement('div');
    body.id = 'body';

    //content for body
    let bodyContent = document.createElement('p');
    bodyContent.innerText = "Some Shit";
    body.appendChild(bodyContent);

    //insert body before footer
    content.insertBefore(body, bottom);

}
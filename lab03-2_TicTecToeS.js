var board=["","","","","","","","",""]
function mepick(){
    this.src='x.jpg';
    this.id ='x';
    this.removeEventListener('click',mepick)
}
const image = document.querySelectorAll('img');
for (var i = 0; i < image.length; i++) {
    image[i].addEventListener('click', mepick);
    removeEventListener
}

function compic(){
    rand=Math.floor(Math.random() * 10);
    if(image[rand].id=='x'||image[rand].id=='o'){
        rand=Math.floor(Math.random() * 10);
    }
    else(image[rand].id!='x'&&image[rand].id!='o'){
        image[rand].src
    }
}
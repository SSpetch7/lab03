var board=["","","","","","","","",""]
function mepick(){
    this.src='x.jpg';
    document.getElementsByClassName("block").classname="x"
    this.removeEventListener('click',mepick)
}
const image = document.querySelectorAll('img');
for (var i = 0; i < image.length; i++) {
    image[i].addEventListener('click', mepick);
    removeEventListener
}

function compic(){
    var rand=Math.floor(Math.random() * 10);
    if(image[rand].id=='x'||image[rand].id=='o'){
        rand=Math.floor(Math.random() * 10);
    }
    else(image[rand].id!='x'&&image[rand].id!='o'){
        image[rand].src='o.jpg'
        image[rand].document.getElementsByClassName("block").classname='o';
    }
}
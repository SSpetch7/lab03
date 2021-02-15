function pick(){
    this.src='x.jpg';
    
}
const image = document.querySelectorAll('img');
for (var i = 0; i < image.length; i++) {
    image[i].addEventListener('click', pick);
    
}
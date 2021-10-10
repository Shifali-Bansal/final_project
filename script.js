// image changing of header
var slideImg=document.getElementById("slideImg");
var images=new Array(
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg"
);
var  len=images.length;
var i=0;
function slider(){
    if(i>len-1)
    {
        i=0;
    }
    slideImg.src=images[i];
    i++;
    setTimeout('slider()',3000);
    
}
//end


//script for signin page
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
//end
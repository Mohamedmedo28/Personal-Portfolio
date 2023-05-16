let menubars =document.getElementById('menu-bars')
let header =document.querySelector('header')



menubars.addEventListener('click',function(){
    menubars.classList.toggle('fa-times')
    header.classList.toggle('active')
})

// menubars.onclick = () =>{
//     menubars.classList.toggle('fa-times');
//     header.classList.toggle('active');
// }
window.onscroll =()=>{
    menubars.classList.remove('fa-times')
    header.classList.remove('active')
};
////typed
var typed= new Typed('#typing-text',{
    strings : ['front end developer', 'web designer', 'graphic designer', 'web developer'],
    loop : true,
    typeSpeed : 150
});

// 
// VanillTilt.init(document.querySelector('.tilt'),{
//     max :25
// });


VanillaTilt.init(document.querySelector(".tilt"), {
    max: 25,
    speed: 400
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".tilt"));
let classList = '.main-link'
let menu = document.querySelector(".fixed-menu");    


menu.addEventListener('click',function(event){
    let clickTarget = event.target
    let activeBtn = document.querySelector('.active')

    if (clickTarget.classList.contains('nav-link')){
        activeBtn.classList.remove('active');
        clickTarget.classList.add('active');
    }
});

window.onscroll = function() {
    let h = document.documentElement.clientHeight   
    if (window.scrollY >= h*4 ){
        classLink = '.comments-link';
    }
    else if (window.scrollY >= h*3){
        classLink = '.works-link';
    }
    else if (window.scrollY >= h*2){
        classLink = '.skills-link';
    }
    else if (window.scrollY >= h){
        classLink = '.about-link';
    }
    else{
        classLink = '.main-link';
    }

    
    let activeBtn = document.querySelector('.active');
    let NewActiveBtn = document.querySelector(classLink);
    if (!NewActiveBtn.classList.contains('active')){
        NewActiveBtn.classList.add('active');
        activeBtn.classList.remove('active')
    }
};

    let change = document.querySelector('.nav-links')
    function qwe() {   

    if (change.style.transform === 'rotate(180deg)') {
        change.style.transform = 'rotate(0deg)';
      } 
    else {
        change.style.transform = 'rotate(180deg)';
      }
    };

    change.onclick = qwe;


let hide = document.querySelector('.mobile-button')
hide.addEventListener("click", function(event){
    document.querySelector('.mobile-menu').classList.toggle("hide");
})

 

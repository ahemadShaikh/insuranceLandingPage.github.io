// toggle menu 
let hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click',()=>{
    document.querySelector('.open').classList.toggle('open-icon');
    document.querySelector('.close').classList.toggle('close-icon');
    let target = document.querySelector('.menu');
    target.classList.toggle('menuShow')
})


// dark mode
let changeMode = document.querySelector('.changeMode');
changeMode.addEventListener('click',()=>{
      document.querySelector('.moon').classList.toggle('hide')
      document.querySelector('.sun').classList.toggle('show')
      document.documentElement.classList.toggle('dark_mode')
})



let customscroll=document.querySelector('#scroll')
window.addEventListener('scroll',function(){
   let scrollTop = window.scrollY
   let documentHeight = document.body.clientHeight
   let windowHeight = window.innerHeight
 
   let scrollPercen = scrollTop / (documentHeight - windowHeight)
   let scrollPercenRounded = Math.round(scrollPercen * 100)

   customscroll.style.width  = scrollPercenRounded + '%'
})
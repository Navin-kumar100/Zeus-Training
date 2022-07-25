const firstS=document.querySelector('.first-slider');
const secS=document.querySelector('.sec-slider');
const annoancement=document.querySelector('.annoancement');
const announcementImg=document.querySelector('.announcement-img');
const badge2=document.querySelector('.badge2');

const notification=document.querySelector('.notification');
const notificationImg=document.querySelector('.notification-img');
const badge1=document.querySelector('.badge1');

annoancement.style.display="none"
notification.style.display="none"

// 

notificationImg.addEventListener("mouseover",()=>{
  notification.style.display="block"
 annoancement.style.display="none"
  badge1.style.display="none"
  badge2.style.display="block"

})

notification.addEventListener("mouseover",()=>{
  notification.style.display="block"
annoancement.style.display="none"
  badge1.style.display="none"
});

notification.addEventListener("mouseout",()=>{
  notification.style.display="none"
  badge1.style.display="block"
  badge1.style.justifyContent="center"
})

// 

announcementImg.addEventListener("mouseover",()=>{
  annoancement.style.display="block"
notification.style.display="none"
badge2.style.display="none"
badge1.style.display="block"
})

annoancement.addEventListener("mouseover",()=>{
  annoancement.style.display="block"
  badge2.style.display="none"
})
annoancement.addEventListener("mouseout",()=>{
  annoancement.style.display="none"
  badge2.style.display="block"
  badge2.style.justifyContent="center"
})


firstS.addEventListener("click",()=>{
  firstS.style.borderBottom= '4px solid black';
  secS.style.borderBottom= 'none';
})
window.addEventListener("load",()=>{
  firstS.style.borderBottom= '4px solid black';
  secS.style.borderBottom= 'none';
})
secS.addEventListener("click",()=>{
  secS.style.borderBottom= '4px solid black';
  firstS.style.borderBottom= 'none';
})







// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

//         const navLink = document.querySelectorAll(".nav-link");
//         navLink.forEach(n => n.addEventListener("click", closeMenu));

//         function closeMenu() {
//             hamburger.classList.remove("active");
//             navMenu.classList.remove("active");
//         }

//         const hamburger = document.querySelector(".hamburger");
//         const navMenu = document.querySelector(".nav-menu");

//         hamburger.addEventListener("click", mobileMenu);

//         function mobileMenu() {
//             hamburger.classList.toggle("active");
//             navMenu.classList.toggle("active");
//         }

    
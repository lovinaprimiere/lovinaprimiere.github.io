/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
  contactMessage = document.getElementById('contact-message')

 const sendEmail = (e) => {
   e.preventDefault()
   
   // serviceID - templateID - #form - publicKey
   emailjs.sendForm('service_qdw7ybg','template_0u0i1t8','#contact-form','h839yYYW9KYbcvNP0')
   .then(() => {
        // Show sent message
          Swal.fire({
    title: "Anda Yakin?",
    text: "Apakah informasi Keluhan anda sudah benar Semua sebelum mengirim?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya! Sudah Benar"
    
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Terkirim!",
      text: "Pesan Keluhan Anda Berhasil Terkirim.",
      icon: "success"
    });
  }
});
        
           // Remove message after five seconds
           setTimeout(() =>{
             contactMessage.textContent = ''
           }, 5000);
           
           // Clear input fields
            contactForm.reset()
        }, () => {
             // Show error message
                     Swal.fire({
          title: "Gagal Terkirim!",
          text: "Terjadi Kesalahan Pada Sistem!",
          icon: "error"
          
});
        })
   }
 
 contactForm.addEventListener('submit', sendEmail)
 
/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
/*=============== SCROLL REVEAL ANIMATION ===============*/

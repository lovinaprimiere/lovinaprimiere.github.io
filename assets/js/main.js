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
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal ({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true // Reset Animation
})

sr.reveal(`.home__data, .community, .contact__container`)
sr.reveal(`.home__img`, {delay: 600})
sr.reveal(`.home__scroll`, {delay: 1000})
sr.reveal(`.work__card, .service__card`, {interval: 100})
sr.reveal(`.website__content`, {origin: 'right'})
sr.reveal(`.about__img`, {origin: 'left'})

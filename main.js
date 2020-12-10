// Selectors
// Nav Link Buttons & event listeners
document.getElementById('aboutMeButton').addEventListener('click', function() {smoothScroll(aboutMe, 1500)});
const aboutMe = document.getElementById('aMHeader');
document.getElementById('projectsButton').addEventListener('click', function() {smoothScroll(projects, 1500)});
const projects = document.getElementById('projectsHeader');
document.getElementById('experienceButton').addEventListener('click', function() {smoothScroll(experience, 1500)});
const experience = document.getElementById('experienceHeader');
document.getElementById('skillsButton').addEventListener('click', function() {smoothScroll(skills, 1500)});
const skills = document.getElementById('skillsHeader');
document.getElementById('educationButton').addEventListener('click', function() {smoothScroll(education, 1500)});
const education = document.getElementById('educationHeader');
document.getElementById('resumeButton').addEventListener('click', function() {smoothScroll(resume, 1500)});
const resume = document.getElementById('resumeHeader');
document.getElementById('hobbiesButton').addEventListener('click', function() {smoothScroll(hobbies, 1500)});
const hobbies = document.getElementById('hobbiesHeader');
document.getElementById('contactButton').addEventListener('click', function() {smoothScroll(contact, 1500)});
const contact = document.getElementById('contactHeader');
document.getElementById('menuIcon').addEventListener('click', navSlide);
const navLinks = document.getElementById('navLinks');

// Contact Modal Elements
document.getElementById('recruitMe').addEventListener('click', openModal);
document.getElementById('contactMe').addEventListener('click', openModal);
const contactModal = document.getElementById('modalBG');
// document.getElementById('modalButton').addEventListener('click', function(){contactSubmit(event)});
document.getElementById('closeModal').addEventListener('click', closeModal);
const modalName = document.getElementById('modalName');
const modalEmail = document.getElementById('modalEmail');
const modalMessage = document.getElementById('modalMessage');

// Gradient effect while sidebar at top of page
const main = document.getElementById('main');
const showcase = document.getElementById('showcase');
const gradientBG = document.getElementById('gradientBG');

// Event Listeners
window.addEventListener('scroll', gradient);

// Check media query status for tablet & mobile screen sizes
let tablet = window.matchMedia("(min-width: 660px) and (max-width: 1024px)");
let mobile = window.matchMedia("(max-width: 659px)");
window.addEventListener('resize', checkScreen);

// Functions
function smoothScroll(target, duration) {
    let targetPosition = '';
    x = target.getBoundingClientRect().top;
    checkMedia(x);
    let startPosition = window.pageYOffset;
    let startTime = null;
    checkNavActive();

    function checkMedia(position) {
        // Adding offset for responsiveness queries (sidebar is 150px tall in tablet, 100px tall in mobile)
        if (mobile.matches) {
                targetPosition = position - 99;
            } else if (tablet.matches) {
                targetPosition = position - 149;
            } else {
                targetPosition = position;
            }
        }


    function animation(currentTime) {
        if(startTime === null) 
            startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) 
            requestAnimationFrame(animation);
    }

    function ease (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

function checkScreen() {
    
    if (!mobile.matches) {
    // remove effects from navLinks so they work in other view modes
        navLinks.classList.remove('navActive');
        navLinks.style.removeProperty('transition');
    }
}

function navSlide() {
    // show navLinks menu
    if (!navLinks.classList.contains('navActive')) {
        navLinks.classList.add('navActive');
    // hide navLinks menu
    } else {
        navLinks.classList.remove('navActive');
    }
}

function checkNavActive () {
    setTimeout(function(){cNA()}, 1250)};
    function cNA() {
        if (navLinks.classList.contains('navActive')) {
            navLinks.classList.remove('navActive');
    }
}

// Contact Modal Functions

function openModal() {
    contactModal.classList.remove('hideModal');
    contactModal.classList.add('showModal');   
}

function closeModal() {
    contactModal.classList.remove('showModal');
    contactModal.classList.add('hideModal'); 
}

// Gradient function for tablet & mobile screen layouts
function gradient() {
    let gPosition = document.documentElement.scrollTop;
    if (mobile.matches || tablet.matches) {
        gradientBG.style.top = (-gPosition + "px");
    }
}

// Contact form validation and submission

// function contactSubmit(event) {
//    if (!modalEmail.value.contains('@') || !modalEmail.value.contains('.') || modalEmail.value.length < 5) {
//        event.preventDefault();
//        alert('Please enter a valid email address and try again');
//    } else if (modalName.value.length < 2 || modalMessage.value.length < 3) {
//        event.preventDefault();
//        alert('Please enter a valid name and message');
//    }
// }



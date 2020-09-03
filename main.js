// Selectors
// Nav Link Buttons
const aboutMeBtn = document.getElementById('aboutMeButton');
const aboutMe = document.getElementById('aMHeader');
const projectsBtn = document.getElementById('projectsButton');
const projects = document.getElementById('projectsHeader');
const experienceBtn = document.getElementById('experienceButton');
const experience = document.getElementById('experienceHeader');
const skillsBtn = document.getElementById('skillsButton');
const skills = document.getElementById('skillsHeader');
const educationBtn = document.getElementById('educationButton');
const education = document.getElementById('educationHeader');
const resumeBtn = document.getElementById('resumeButton');
const resume = document.getElementById('resumeHeader');
const hobbiesBtn = document.getElementById('hobbiesButton');
const hobbies = document.getElementById('hobbiesHeader');
const contactBtn = document.getElementById('contactButton');
const contact = document.getElementById('contactHeader');
const menuBtn = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');

// Contact Modal Elements
const recruitMe = document.getElementById('recruitMe');
const contactMe = document.getElementById('contactMe');
const contactModal = document.getElementById('modalBG');
const modalButton = document.getElementById('modalButton');
const closeModalButton = document.getElementById('closeModal');

// Gradient effect while sidebar at top of page (not working)
const windowDiv = document.querySelector('window');
const gradientBG = document.getElementById('gradientBG');

// Event Listeners
aboutMeBtn.addEventListener('click', function() {smoothScroll(aboutMe, 1500)});
projectsBtn.addEventListener('click', function() {smoothScroll(projects, 1500)});
experienceBtn.addEventListener('click', function() {smoothScroll(experience, 1500)});
skillsBtn.addEventListener('click', function() {smoothScroll(skills, 1500)});
educationBtn.addEventListener('click', function() {smoothScroll(education, 1500)});
resumeBtn.addEventListener('click', function() {smoothScroll(resume, 1500)});
hobbiesBtn.addEventListener('click', function() {smoothScroll(hobbies, 1500)});
contactBtn.addEventListener('click', function() {smoothScroll(contact, 1500)});
menuBtn.addEventListener('click', function () {navSlide()});
recruitMe.addEventListener('click', function(){openModal()});
contactMe.addEventListener('click', function(){openModal()});
closeModalButton.addEventListener('click', function(){closeModal()});

window.addEventListener('scroll', function(){gradient()});

// Check media query status for tablet & mobile screen sizes
let tablet = window.matchMedia("(min-width: 660px) and (max-width: 1024px)");
let mobile = window.matchMedia("(max-width: 659px)");
window.addEventListener('resize', function(){checkScreen()});

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
            startTime  = currentTime;
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

function openModal() {
    contactModal.style.visibility = 'visible';
    contactModal.style.opacity = 1;    
}

function closeModal() {
    contactModal.style.visibility = 'hidden';
    contactModal.style.opacity = 0;   
}

function gradient() {
    console.log(windowDiv.scrollTop);
}


// Initializing EmailJS
const emailInit = () => {
    emailjs.init("user_sIikw4BaNfXxSav15elPW")
  }

window.addEventListener('load', (event) => {
    emailInit()
})

//Getting query selectors of main buttons and elements
const exp = document.querySelector('#exp')
const proj = document.querySelector('#proj')
const res = document.querySelector('#resume')
const cont = document.querySelector('#contact')
const github = document.querySelector('#github')
const email = document.querySelector('#email')
const linkedIn = document.querySelector('#linkedIn')
const subBtn = document.querySelector('#contactSubmit')
const exploreBtn = document.querySelector('#exploreBtn')
const getInTouchBtn = document.querySelector('#getInTouchBtn')
const crowd = document.querySelector('#proj1')
const universal = document.querySelector('#proj2')
const form = document.querySelector('#contactForm')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#emailInput')
const subjInput = document.querySelector('#subject')
const msgInput = document.querySelector('#msg')
const namePic = document.querySelector('#namePic')
const emailPic = document.querySelector('#emailPic')
const subjPic = document.querySelector('#subjPic')
const sentCheck = document.querySelector('#sentCheck')


// Adding click event listeners for buttons on nav bar
exp.addEventListener('click', function(event){
    var scrollDiv = document.getElementById("workExpText").offsetTop;
    window.scrollTo({ top: scrollDiv-40, behavior: 'smooth'});
})

proj.addEventListener('click', function(event){
    var scrollDiv = document.getElementById("projHead").offsetTop;
    window.scrollTo({ top: scrollDiv-40, behavior: 'smooth'});
})

res.addEventListener('click', function(event){
    window.open('https://harshithl.me/assets/resume.pdf')
})

cont.addEventListener('click', function(event){
    var scrollDiv = document.getElementById("contactHead").offsetTop;
    window.scrollTo({ top: scrollDiv-40, behavior: 'smooth'});
})

// Adding click event listeners for social media buttons on navbar
github.addEventListener('click', function(event) {
    window.open('https://github.com/harshithl1777')
})

email.addEventListener('click', function(event) {
    window.open('mailto:harshithl1777@gmail.com')
})

linkedIn.addEventListener('click', function(event) {
    window.open('https://www.linkedin.com/in/harshith-latchupatula-b9b86a18b/')
})

// Adding click event listeners to CTA Buttons
exploreBtn.addEventListener('click', function(event){
    var scrollDiv = document.getElementById("workExpText").offsetTop;
    window.scrollTo({ top: scrollDiv-40, behavior: 'smooth'});
})

getInTouchBtn.addEventListener('click', function(event){
    var scrollDiv = document.getElementById("contactHead").offsetTop;
    window.scrollTo({ top: scrollDiv-40, behavior: 'smooth'});
})

// Adding click event listeners for projects
proj1.addEventListener('click', function(event) {
    window.open('https://github.com/harshithl1777/CrowdSupply')
})

proj2.addEventListener('click', function(event) {
    window.open('https://devpost.com/software/universal-a-secure-and-powerful-data-transfer-repository?ref_content=user-portfolio&ref_feature=in_progress')
})

// Adding style to contact form inputs when clicked
nameInput.addEventListener('click', function(event) {
    namePic.src = 'assets/fullNameBlue.svg'
})

emailInput.addEventListener('click', function(event) {
    emailPic.src = 'assets/emailBlue.svg'
})

subjInput.addEventListener('click', function(event) {
    subjPic.src = 'assets/subjectBlue.svg'
})

form.addEventListener('submit', function(event) {
    event.preventDefault()
    emailjs.sendForm('gmail', 'template_UAYblgBk', '#contactForm')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       subBtn.style.background = '#07C8A5'
       sentCheck.style.display = 'block'
       subBtn.value = ''
       emailInput.value = ''
       subjInput.value = ''
       nameInput.value = ''
       msgInput.value = ''
    }, function(error) {
       alert('Message failed to send:', error);
    });
})


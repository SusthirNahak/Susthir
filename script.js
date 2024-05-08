const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');
menubar.onclick=()=>{
    menubar.classList.toggle('bx-x');
    Navbar.classList.toggle('active')
}
const section=document.querySelectorAll('section');
const navlink = document.querySelectorAll('header nav a')
window.onscroll = ()=>{
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if(top>offset && top < offset + height){
            sec.classList.add('start-animation');
            navlink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
              
            })
        }
    })
    var header = document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>100)
    menubar.classList.remove('bx-x');
    Navbar.classList.remove('active')
}

document.addEventListener("DOMContentLoaded", function() {
    const tabButtons = document.querySelectorAll(".tab-button");
    const imageBoxes = document.querySelectorAll(".image-box");

    tabButtons.forEach(button => {
        button.addEventListener("click", function() {
            const filter = this.getAttribute("data-filter");
            tabButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            filterImages(filter);
        });
    });

    function filterImages(filter) {
        imageBoxes.forEach(box => {
            if (filter === "all" || box.classList.contains(filter)) {
                box.style.display = "block";
            } else {
                box.style.display = "none";
            }
        });
    }
});
  

// call mebutton facility
document.getElementById('callMeBtn').addEventListener('click', function() {
    // Replace 'your-phone-number' with your actual phone number
    window.open('tel:+917978112889', '_blank');
  });



  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    // Perform form validation
    var fullName = document.getElementById('fullName').value.trim();
    var email = document.getElementById('email').value.trim();
    var mobileNumber = document.getElementById('mobileNumber').value.trim();
    var subject = document.getElementById('subject').value.trim();
    var message = document.getElementById('message').value.trim();
    
    if (fullName === '' || email === '' || mobileNumber === '' || subject === '' || message === '') {
      alert('Please fill in all fields.');
      return;
    }
    
    // Simulate form submission (replace this with your actual form submission logic)
    // Here, we'll just display a confirmation message
    document.getElementById('confirmationMessage').style.display = 'block';
    
    // Clear form fields
    document.getElementById('contactForm').reset();
    
    
  });

  //download cv

  document.getElementById('downloadCvBtn').addEventListener('click', function() {
    document.getElementById('cvDownloadLink').click();
  });


  
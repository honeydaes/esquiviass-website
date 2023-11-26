let menu = document.querySelector ('#menu-icon');
let navbar = document.querySelector ('.navbar');

menu.onclick = () => {
    menu.classList.toggle ('bx-x');
    navbar.classList.toggle ('open');  
}

const header = document.querySelector ("header");

window.addEventListener("scroll", function (){ header.classList.toggle ("sticky", window.scrollY > 60)
});

function sendEmail (){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "honeydaees@gmail.com",
        Password : "aslanjade",
        To : 'aesteqhanie@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact From Request",
        Body : "And this is the body"
    }).then(
    message => alert(message)
    );
}
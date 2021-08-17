
// $("#footer").load("footer.html");

function LoggedIn() {
    console.log("LoggedIn method ");
    let login = JSON.parse(localStorage.getItem("LoggedIn"));


    if (login == null || login == undefined)
     {
        login = false;
    }
    let content = "";
    if (login) {
        content = `
        <a class="navbar" onClick="logout()">logout</a>
        `;
    }
    else {
        content = `
        <a class="navbar" href="login.html">login</a>
         <span> | </sapn>
        <a class="navbar" href="Register.html">Register</a>
        `;
        localStorage.setItem("LoggedIn",JSON.stringify(false));
    }
    let navReg = document.querySelector(".navreg");
    if (navReg) {

        navReg.innerHTML = content;
    }
    else {
        console.log("No navReg", navReg);
    }
}

function logout() {
    localStorage.setItem("LoggedIn", JSON.stringify(false));
    localStorage.removeItem("cartElements");
    localStorage.removeItem("totalAmount");
    window.location.href = "index.html";
}


function loginCheck() {

    if (JSON.parse(localStorage.getItem("LoggedIn"))==false) {
        alert("need to login first");
        window.location.href = "login.html";
        return false;
    }
}
LoggedIn();